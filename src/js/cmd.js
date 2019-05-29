import React from 'react';
// Commands
import Commands from './data/commands';
// Components
import About from './components/about';
import CommandsList from './components/commandList';
import PrevCommand from './components/prevCommand';
// Contexts
import LocaleContext from './data/localeContext';
import ThememContext from './data/themeContext';
// Themes
import Themes from './data/themes';

class Cmd extends React.Component {
    constructor(props) {
        super(props);
        this.commands = Commands;
        this.wizardValue = '';
        this.email = {
            from: '',
            subject: '',
            text: ''
        };
        this.mailErrors = {
            none: 0,
            ok: 1,
            error: -1
        };
        this.history = {
            commands: [],
            index: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleClickCommand = this.handleClickCommand.bind(this);
        this.handleMailWizardSubmit = this.handleMailWizardSubmit.bind(this);
        this.handleMailWizardChange = this.handleMailWizardChange.bind(this);
        this.state = {
            items: [],
            command: '',
            init: true,
            redirect: false,
            theme: Themes.default,
            locale: (navigator.language || navigator.userLanguage) == 'ru-RU' ? 'ru' : 'en',
            wizard: false,
            wizStep: 1,
            sendingMail: false,
            sendMailStatus: this.mailErrors.none,
            commandStatus: 'none',
            argumentsStatus: 'none'
        };
        this.cloneItems = [];
    }

    componentDidMount() {
        // Set init state
        if (this.state.init) {
            let item = {
                command: < About handleClick={this.handleClickCommand} />,
                id: Date.now()
            }
            this.setState({
                init: false,
                items: this.state.items.concat(item),
                command: ''
            })
        }
    }

    componentDidUpdate() {
        // Scroll to bottom
        if (!this.state.wizard && !this.state.sendingMail && !this.state.redirect) {
            let input = document.getElementById('commandInput');
            input.scrollIntoView(true);
        }
    }

    // Handlers

    handleMailWizardSubmit(e) {
        // Set wizard status state in false if form need submit. And add steps
        e.preventDefault();
        // If we complited all wizard steps
        if (this.commands['mail'].step > this.commands['mail'].steps) {
            this.setState({
                wizard: false,
                command: ''
            });
            this.commands['mail'].step = 1;
            return;
        }
        // Validate and save email fields
        if (this.commands['mail'].step == 1) {
            // Your email
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let valid = re.test(this.wizardValue.toLowerCase());
            if (!valid) {
                this.commands['mail'].errors.validEmail = true;
                this.setWizardState('mail', true);
                return;
            }
            this.commands['mail'].errors.validEmail = false;
            this.email.from = this.wizardValue;
        } else if (this.commands['mail'].step == 2 || this.commands['mail'].step == 3) {
            // Subject and message body
            if (!this.wizardValue) {
                this.commands['mail'].errors.emptyField = true;
                this.setWizardState('mail', true);
                return;
            }
            this.commands['mail'].errors.emptyField = false;
            if (this.commands['mail'].step == 2) {
                this.email.subject = this.wizardValue;
            } else {
                this.email.text = this.wizardValue;
                // Send mail
                this.sendMail();
            }
        }

        this.commands['mail'].step++;
        this.setWizardState('mail', false);
    }

    handleMailWizardChange(e) {
        this.wizardValue = e.target.value;
    }

    handleChange(e) {
        // Set state equal input command
        this.setState({ command: e.target.value });
        // Add correct commmand and args in status bar
        let commandStatus = 'none';
        let argsStatus = 'none';
        let value = e.target.value;

        if (value) {
            let splited = value.trim().split(' ');
            if (splited.length >= 1) {
                if (Object.keys(this.commands).indexOf(splited[0]) != -1 && splited[0].match("^[a-zA-Z\(\)]+$")) {
                    commandStatus = splited[0];
                    if (this.commands[splited[0]].hasOwnProperty('arguments')) {
                        argsStatus = '';
                        Object.keys(this.commands[splited[0]].arguments).map(el => {
                            argsStatus += el ? `${el} ` : '';
                        });
                    }
                } else {
                    commandStatus = 'not found';
                }
            }
        }
        this.setState({
            commandStatus: commandStatus,
            argumentsStatus: argsStatus
        });
    }

    handleClickCommand(e, fakeContent) {
        // Set target command value from component or from fake data
        if (fakeContent) this.setCommandState(fakeContent);
        else this.setCommandState(e.target.textContent);
    }

    handleKeyPress(e) {
        // Add commands history behavior
        if (e.keyCode == '38') {
            e.preventDefault();

            if (!this.history.commands.length) return;

            if (!this.history.index) return;

            this.history.index--;
            this.setState({
                command: this.history.commands[this.history.index]
            });
        } else if (e.keyCode == '40') {
            e.preventDefault();
            if (!this.history.commands.length || this.history.index == this.history.commands.length) return;

            if (this.history.index == this.history.commands.length - 1) {
                this.setState({
                    command: ''
                })
                this.history.index++;
                return;
            }

            this.history.index++;
            this.setState({
                command: this.history.commands[this.history.index]
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setCommandState(this.state.command);
        // Reset status bar
        this.setState({
            commandStatus: 'none',
            argumentsStatus: 'none'
        })
    }

    // Common methods

    redirectToGUI() {
        // Redirect to gui page
        this.setState({
            redirect: true
        });

        let redirect = new Promise((recieve, reject) => {
            setTimeout(() => {
                let status = 'OK';
                recieve(status);
            }, 2000);
        });

        redirect
            .then(() => {
                window.location.href = 'https://google.com';
            });
    }

    sendMail() {
        // Sending mail. Detect seindind errors and render properly output
        // TODO This is temp function. Refactor is after adding back-end logic
        this.setState({
            sendingMail: true
        });

        let sender = new Promise((recieve, reject) => {
            setTimeout(() => {
                let fakeStatus = 'OK'
                recieve(fakeStatus);
            }, 3000);
        });

        sender
            .then((status) => {
                console.info(status);
                this.setState({
                    sendingMail: false,
                    sendMailStatus: this.mailErrors.none
                });
                let newItem = {
                    command: this.commands['mail'].success(
                        this.state.theme,
                        this.state.locale
                    ),
                    id: Date.now()
                }
                // Add "prev command" into items state
                let mailCommand = this.getPrevCommand('mail');
                // Clear mail wizard items
                this.setState({
                    items: this.cloneItems.concat(mailCommand, newItem),
                    command: ''
                });
                // Clear clone items array
                this.cloneItems = [];
            });
    }

    getPrevCommand(prevCmd) {
        return {
            command: <PrevCommand prevCommand={prevCmd} />,
            id: Date.now() + 10
        }
    }

    addToHistory(command) {
        // Add user command into history array
        this.history.commands.push(command);
        this.history.index = this.history.commands.length;
    }

    setWizardState(command, error) {
        // Set and control wizards state
        if (this.commands[command].step > this.commands[command].steps) {
            // End work wizard
            this.setState({
                wizard: false
            });
            // Reset steps
            this.commands[command].step = 1;
            return;
        }

        let prevCommand = this.getPrevCommand(command);

        let newItem = {
            command: this.commands[command].component(
                '', this.commands[command].steps, this.commands[command].step,
                this.handleMailWizardChange, this.handleMailWizardSubmit, this.commands[command].errors.validEmail,
                this.commands[command].errors.emptyField),
            id: Date.now()
        }

        if (this.commands[command].step == 1 && !error) {
            // Clone prev command items after first step or we have an error
            this.cloneItems = this.state.items;
            this.setState(state => ({
                items: state.items.concat(prevCommand, newItem),
                command: '',

            }));
        } else {
            this.setState(state => ({
                items: state.items.concat(newItem),
                command: ''
            }));
        }
        this.wizardValue = '';
    }

    getItemFromCommandObject(command, argument) {
        // Return item from commands object
        if (argument) {
            return {
                command: this.commands[command].component(argument, this.handleClickCommand),
                id: Date.now()
            }
        }
        return {
            command: this.commands[command].component(undefined, this.handleClickCommand),
            id: Date.now()
        }
    }

    getErrorItem(command, argument) {
        return {
            command: this.commands['error'].component(
                command,
                argument,
                this.handleClickCommand
            ),
            id: Date.now()
        };
    }

    setCommandState(cmd) {
        // Set command state using user input
        let prevCommand = null;
        let arg = '';
        let newItem = null;
        // Check argumnets ftom user inputs
        let fullCommand = cmd.trim().split(' ');
        let command = cmd.trim();

        if (fullCommand.length == 1) {
            // No arguments
            arg = '';
        } else if (fullCommand.length == 2) {
            // 1 argument - is correct way
            arg = fullCommand[1];
            command = fullCommand[0];
        } else {
            // incorrect arguments
            arg = 'error arg';
        }

        if (Object.keys(this.commands).indexOf(command) != -1 && command != 'error') {
            if (command == 'clear' && !arg.length) {
                // Clear cli via setTime
                this.setState({
                    items: this.commands[command].component(),
                    command: ''
                });
                this.addToHistory(cmd);
                return;
            } else if (command == 'theme' || command == 'locale') {
                // Theme or locale setup 
                prevCommand = this.getPrevCommand(cmd);
                if (arg && Object.keys(this.commands[command].arguments).indexOf(arg) != -1) {
                    // Correct argument. Clone and colored prev items
                    prevCommand = this.getPrevCommand(cmd);
                    // Clone items and set new theme props
                    let clones = [];
                    this.state.items.forEach(item => {
                        let cloneProps = Object.assign({}, item.command.props);
                        for (const key in cloneProps) {
                            if (key == 'theme' && command == 'theme') cloneProps[key] = this.commands['theme'].arguments[arg];
                            if (key == 'locale' && command == 'locale') cloneProps[key] = this.commands['locale'].arguments[arg];
                        }

                        let clone = React.cloneElement(
                            item.command,
                            cloneProps
                        )
                        clones.push({
                            command: clone,
                            id: item.id
                        });
                    });
                    clones.push(prevCommand);

                    if (command == 'theme') {
                        this.setState({
                            theme: this.commands['theme'].arguments[arg],
                            items: clones,
                            command: ''
                        });
                    } else {
                        this.setState({
                            locale: this.commands['locale'].arguments[arg],
                            items: clones,
                            command: ''
                        });
                    }
                    this.addToHistory(cmd);

                    return;
                } else {
                    // Incorrect argument
                    if (!arg) {
                        newItem = this.getErrorItem(command, 'no args');
                    } else {
                        newItem = this.getErrorItem(command, arg);
                    }
                }
            } else {
                if (this.commands[command].isWizard) {
                    if (arg) {
                        if (Object.keys(this.commands[command].arguments).indexOf(arg) != -1) {
                            // Run command without wizard interface
                            if (this.commands[command].showPrevCommand) prevCommand = this.getPrevCommand(`${command} ${arg}`);
                            newItem = this.getItemFromCommandObject(command, arg);
                        } else {
                            prevCommand = this.getPrevCommand(cmd);
                            newItem = this.getErrorItem(command, arg);
                        }
                    } else {
                        // This command have wizard interface
                        if (this.commands[command].showPrevCommand) prevCommand = this.getPrevCommand(`${command} ${arg}`);
                        this.setState({
                            wizard: true
                        })

                        this.setWizardState(command);
                        this.addToHistory(cmd);
                        return;
                    }
                } else if (this.commands[command].arguments) {
                    if (this.commands[command].showPrevCommand) prevCommand = this.getPrevCommand(`${command} ${arg}`);
                    // Argument from user input     
                    if (Object.keys(this.commands[command].arguments).indexOf(arg) != -1) {
                        newItem = this.getItemFromCommandObject(command, arg);
                    } else {
                        prevCommand = this.getPrevCommand(cmd);
                        newItem = this.getErrorItem(command, arg);
                    }
                } else if (!this.commands[command].arguments && arg.length) {
                    // Call argument error because this command have not arguments
                    prevCommand = this.getPrevCommand(cmd);
                    newItem = this.getErrorItem(command, arg);
                } else {
                    if (this.commands[command].showPrevCommand) prevCommand = this.getPrevCommand(command);
                    newItem = this.getItemFromCommandObject(command);
                }
            }
        } else if (command == 'gui' && !arg.length) {
            // Redirect on gui webpage
            this.redirectToGUI();
            return;
        } else {
            // Call error command
            if (this.commands['error'].showPrevCommand) prevCommand = this.getPrevCommand(command);
            newItem = this.getErrorItem(command);
        }
        if (command != '') {
            this.addToHistory(cmd);
        }
        // Add prev command into rendering items if need
        if (prevCommand) {
            this.setState(state => ({
                items: state.items.concat(prevCommand, newItem),
                command: ''
            }));
        } else {
            this.setState(state => ({
                items: state.items.concat(newItem),
                command: ''
            }));
        }
    }

    // Rendering

    render() {
        const theme = this.state.theme;
        if (this.state.wizard) {
            // Wizards rendering
            return (
                <LocaleContext.Provider value={this.state.locale}>
                    <ThememContext.Provider value={this.state.theme}>
                        <div className={`app-wrapper ${theme.background.image}`}>
                            <div className="content">
                                <CommandsList items={this.state.items} />
                            </div>
                        </div>
                    </ThememContext.Provider>
                </LocaleContext.Provider>
            );
        } else {
            if (this.state.sendingMail) {
                // Mail sending operation label
                const message = this.state.locale == 'ru' ?
                    'Отправка электронного сообщения. Пожалуйста подождите' :
                    'Send an email. Please wait';
                return (
                    <LocaleContext.Provider value={this.state.locale}>
                        <ThememContext.Provider value={this.state.theme}>
                            <div className={`app-wrapper ${theme.background.image}`} id="appWrapper">
                                <div className="content">
                                    <CommandsList items={this.state.items} />
                                    <p className={`item ${theme.info.color}`}>
                                        {message}
                                    </p>
                                </div>
                            </div>
                        </ThememContext.Provider>
                    </LocaleContext.Provider>
                );
            } else if (this.state.redirect) {
                // Show redirect message and go into gui page
                const message = this.state.locale == 'ru' ?
                    'Переход на графическую версию приложения. Пожалуйста, подождите' :
                    'Redirection to the graphic version of the application. Please wait';
                return (
                    <LocaleContext.Provider value={this.state.locale}>
                        <ThememContext.Provider value={this.state.theme}>
                            <div className={`app-wrapper ${theme.background.image}`} id="appWrapper">
                                <div className="content">
                                    <CommandsList items={this.state.items} />
                                    <p className={`item ${theme.info.color}`}>
                                        {message}
                                    </p>
                                </div>
                            </div>
                        </ThememContext.Provider>
                    </LocaleContext.Provider>
                );
            }
            return (
                <LocaleContext.Provider value={this.state.locale}>
                    <ThememContext.Provider value={this.state.theme}>
                        <div className={`app-wrapper ${theme.background.image}`} id="appWrapper">
                            <div className="content">
                                <CommandsList items={this.state.items} />
                                <form onSubmit={this.handleSubmit} className={`cli-wrapper ${theme.input.text}`}>
                                    <label htmlFor="command-input" className={`cli-label ${theme.inputLabel.color}`}>
                                        <span className={`user-cli-label ${theme.inputLabel.span}`}>Guest</span>@kineev.com :
                                    </label>
                                    <input
                                        id="commandInput"
                                        type="text"
                                        className={`cli-input ${theme.input.background} ${theme.input.text} ${theme.input.cursor}`}
                                        onChange={this.handleChange}
                                        onKeyDown={this.handleKeyPress}
                                        value={this.state.command}
                                        autoFocus
                                        autoComplete="off"
                                    />
                                </form>
                                <div className={`status-bar ${theme.info.important}`}>
                                    <div className="locale-status">
                                        <span className={theme.info.color}>Theme</span>
                                        {this.state.theme.name}
                                    </div>
                                    <div className="command-status">
                                        <span className={theme.info.color}>Command</span>
                                        {this.state.commandStatus}
                                    </div>
                                    <div className="arg-status">
                                        <span className={theme.info.color}>Arguments</span>
                                        {this.state.argumentsStatus}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ThememContext.Provider>
                </LocaleContext.Provider>
            );
        }
    }
}

export default Cmd;