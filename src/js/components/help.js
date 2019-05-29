import React from 'react';
import LocaleContext from '../data/localeContext';
import ThemeContext from '../data/themeContext';
import Locale from '../locales/helpLocale';
import ClickCommand from './clickCommand';

class Help extends React.Component {
    constructor(props) {
        super(props);
        this.handlerHelpClick = this.handlerHelpClick.bind(this);
        this.page = typeof this.props.arg != 'string' ? 'help' : this.props.arg;
    }

    handlerHelpClick(e) {
        // Add fake command data because nned showing in args section only srgument
        let fake = `${this.page} ${e.target.textContent}`;
        this.props.handleClick(e, fake);
    }

    render() {
        // const page = typeof this.props.arg != 'string' ? 'help' : this.props.arg;
        const page = this.page;
        const argsBlock = Locale['ru'][page].text.block.hasOwnProperty('args') ?
            <LocaleContext.Consumer>
                {lang => (
                    <ThemeContext.Consumer>
                        {theme => (
                            <table className={`table ${theme.table.text}`}>
                                <thead>
                                    <tr>
                                        <th>{Locale[lang][page].text.block.th1}</th>
                                        <th>{Locale[lang][page].text.block.th2}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(Locale[lang][page].text.block.args).map(
                                        (arg, index) => <tr obj={Locale[lang][page].text.block.args[arg]} key={index} >
                                            <td scope="row">
                                                <ClickCommand
                                                    text={Locale[lang][page].text.block.args[arg].name}
                                                    handleClick={this.handlerHelpClick}
                                                />
                                            </td>
                                            <td>
                                                {Locale[lang][page].text.block.args[arg].description}
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        )}
                    </ThemeContext.Consumer>
                )}
            </LocaleContext.Consumer> : null;
        return (
            <LocaleContext.Consumer>
                {lang => (
                    <ThemeContext.Consumer>
                        {theme => (
                            <div className={`help-page ${theme.info.color}`}>
                                <p className="help-header">
                                    {Locale[lang][page].name.header}
                                </p>
                                <div className="section-description">
                                    {Locale[lang][page].name.description}
                                </div>
                                <p className="help-header">
                                    {Locale[lang][page].arguments.header}
                                </p>
                                <div className="section-description">
                                    <p>{Locale[lang][page].arguments.syntax}</p>
                                    <p className={theme.info.tip}>{Locale[lang][page].arguments.tip}</p>
                                </div>
                                <p className="help-header">
                                    {Locale[lang][page].text.header}
                                </p>
                                <div className="section-description">
                                    <p>{Locale[lang][page].text.block.line1}</p>
                                    <p>{Locale[lang][page].text.block.line2}</p>
                                    <p>{Locale[lang][page].text.block.line3}</p>
                                    {argsBlock}
                                </div>
                            </div>
                        )}
                    </ThemeContext.Consumer>
                )}
            </LocaleContext.Consumer>
        );
    }
}

export default Help;