import React, { Fragment } from 'react';
import ClicableCommand from './clickCommand';
import LocaleContext from '../data/localeContext';
import ThemeContext from '../data/themeContext';
import Locale from '../locales/errorLocale';

class ErrorMessage extends React.Component {

    render() {
        const text = this.props.args ?
            <LocaleContext.Consumer>
                {lang => (
                    <Fragment>
                        {`${Locale[lang].withArgs.error.start} "${this.props.command}" ${Locale[lang].withArgs.error.tail}`}
                    </Fragment>
                )}
            </LocaleContext.Consumer> :
            <LocaleContext.Consumer>
                {lang => (
                    <Fragment>
                        {`${Locale[lang].noArgs.error.start} "${this.props.command}" ${Locale[lang].noArgs.error.tail}`}
                    </Fragment>
                )}
            </LocaleContext.Consumer>
        const helpText = this.props.args ? `help ${this.props.command}` : 'help';


        return (
            <LocaleContext.Consumer>
                {lang => (
                    <ThemeContext.Consumer>
                        {theme => (
                            <div className="error">
                                <p className={theme.error.color}>
                                    <span className={theme.info.color}>
                                        {Locale[lang].label}
                                    </span>
                                    {text}
                                </p>
                                <p className={theme.info.tip}>
                                    <span className={theme.info.color}>
                                        {Locale[lang].tipLabel}
                                    </span>
                                    {Locale[lang].tip.start}
                                    <ClicableCommand handleClick={this.props.handleClickCommand} text={helpText} />
                                    {Locale[lang].tip.tail}
                                </p>
                            </div>
                        )}
                    </ThemeContext.Consumer>
                )}
            </LocaleContext.Consumer>

        );
    }
}

export default ErrorMessage;