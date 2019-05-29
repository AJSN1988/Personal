import React from 'react';
import Locale from '../locales/mailSenderLocale'
import LocaleContext from '../data/localeContext';
import ThemeContext from '../data/themeContext';

function MailSuccess() {
    const output =
        <LocaleContext.Consumer>
            {lang => (
                <ThemeContext.Consumer>
                    {theme => (
                        <div>
                            <p className={theme.info.color}>{Locale[lang].success.text}</p>
                        </div>
                    )}
                </ThemeContext.Consumer>
            )}
        </LocaleContext.Consumer>;
    return output;
}

class MailSender extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.complite = false;
    }

    handleSubmit(e) {
        e.preventDefault();
        // Disabled input
        this.input.current.disabled = true;
        // Call master wizard submit function
        this.props.handleMailWizardSubmit(e);
    }

    componentWillMount() {
        if (this.props.arg == 'youapp') {
            window.location.href = 'mailto:atnr@bk.ru';
        }
    }

    render() {
        if (this.props.arg == 'youapp') {
            return (
                <LocaleContext.Consumer>
                    {lang => (
                        <ThemeContext.Consumer>
                            {theme => (
                                <div className="mail-wizard">
                                    <p className={theme.info.color}>
                                        {Locale[lang].app}
                                    </p>
                                </div>
                            )}
                        </ThemeContext.Consumer>
                    )}
                </LocaleContext.Consumer>
            );
        }
        if (this.props.emailValidError) {
            return (
                <LocaleContext.Consumer>
                    {lang => (
                        <ThemeContext.Consumer>
                            {theme => (
                                <div className="mail-wizard">
                                    <p className={theme.info.color}>
                                        {Locale[lang].emailError.errorSpan}
                                        <span className={theme.error.color}>
                                            {Locale[lang].emailError.error}
                                        </span>
                                    </p>
                                    <p className={theme.info.color}>
                                        {Locale[lang].emailError.tipLabel}
                                        <span className={theme.info.tip}>
                                            {Locale[lang].emailError.tip}
                                        </span>
                                    </p>
                                    <form onSubmit={this.handleSubmit} className="wizard-wrapper">
                                        <label htmlFor="command-input" className={theme.info.color}>
                                            {Locale[lang].emailError.input}
                                        </label>
                                        <input
                                            id="mailWizardEmailError"
                                            ref={this.input}
                                            type="text"
                                            className={`cli-input ${theme.input.background} ${theme.input.text} ${theme.input.cursor}`}
                                            onChange={this.props.handleMailWizardChange}
                                            autoFocus
                                            autoComplete="off"
                                        />
                                    </form>
                                </div>
                            )}
                        </ThemeContext.Consumer>
                    )}
                </LocaleContext.Consumer>
            );
        }
        if (this.props.emptyFieldError) {
            const step = this.props.step == 2 ? 'step2' : 'step3';

            return (
                <LocaleContext.Consumer>
                    {lang => (
                        <ThemeContext.Consumer>
                            {theme => (
                                <div className="mail-wizard">
                                    <p className={theme.info.color}>
                                        {Locale[lang].emptyLineError[step].errorSpan}
                                        <span className={theme.error.color}>
                                            {Locale[lang].emptyLineError[step].error}
                                        </span>
                                    </p>
                                    <p className={theme.info.color}>
                                        {Locale[lang].emptyLineError[step].tipLabel}
                                        <span className={theme.info.tip}>
                                            {Locale[lang].emptyLineError[step].tip}
                                        </span>
                                    </p>
                                    <form onSubmit={this.handleSubmit} className="wizard-wrapper green-text">
                                        <label htmlFor="command-input" className={theme.info.color}>
                                            {Locale[lang].emptyLineError[step].input}
                                        </label>
                                        <input
                                            ref={this.input}
                                            id="mailEmptyLineWizrdInput"
                                            type="text"
                                            className={`cli-input ${theme.input.background} ${theme.input.text} ${theme.input.cursor}`}
                                            onChange={this.props.handleMailWizardChange}
                                            autoFocus
                                            autoComplete="off"
                                        />
                                    </form>
                                </div>
                            )}
                        </ThemeContext.Consumer>
                    )}
                </LocaleContext.Consumer>
            );
        }
        const step = `step${this.props.step}`;
        return (
            <LocaleContext.Consumer>
                {lang => (
                    <ThemeContext.Consumer>
                        {theme => (
                            <div className="mail-wizard">
                                <p className={theme.info.color}>{Locale[lang].steps[step].label}</p>
                                <form onSubmit={this.handleSubmit} className="wizard-wrapper">
                                    <label htmlFor="command-input" className={theme.info.color}>
                                        <span className={`user-cli-label ${theme.inputLabel.span}`}>
                                            {Locale[lang].steps[step].inputLabel}
                                        </span>
                                        {Locale[lang].steps[step].input}
                                    </label>
                                    <input
                                        id="wizardInput"
                                        ref={this.input}
                                        type="text"
                                        className={`cli-input ${theme.input.background} ${theme.input.text} ${theme.input.cursor}`}
                                        onChange={this.props.handleMailWizardChange}
                                        autoFocus
                                        autoComplete="off"
                                    />
                                </form>
                            </div>
                        )}
                    </ThemeContext.Consumer>
                )}
            </LocaleContext.Consumer>
        );
    }
}

export { MailSender, MailSuccess };