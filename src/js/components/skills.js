import React, { Fragment } from 'react';
import LocaleContext from '../data/localeContext';
import ThemeContext from '../data/themeContext';
import Locale from '../locales/skillsLocale';
import ClickCommand from './clickCommand';

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // Add fake command data because nned showing in args section only srgument
        let fake = `skills ${e.target.textContent}`;
        this.props.handleClick(e, fake);
    }

    render() {
        const argument = this.props.argument;
        let page = null;
        if (argument) {
            page = <LocaleContext.Consumer>
                {lang => (
                    <ThemeContext.Consumer>
                        {theme => (
                            <div>
                                <p className={theme.info.tip}>
                                    <span className={theme.info.color}>
                                        {Locale[lang].args[argument].tipLabel}
                                    </span>
                                    {Locale[lang].args[argument].tip}
                                </p>
                                <div className="all-skills">
                                    {Object.keys(Locale[lang].args[argument].skills).map((skill, index) => {
                                        return <Fragment key={index}>
                                            <p className={theme.info.tip}>
                                                {Locale[lang].args[argument].skills[skill].description}
                                            </p>
                                            <table className="table no-border">
                                                <tbody>
                                                    <tr>
                                                        <td scope="row">
                                                            {Locale[lang].args[argument].skills[skill].status}
                                                        </td>
                                                        <td className={theme.info.color}>
                                                            {`[ ${Locale[lang].args[argument].skills[skill].bar1}`}
                                                            <span className={theme.info.hide}>
                                                                {Locale[lang].args[argument].skills[skill].bar2}
                                                            </span>
                                                            {' ]'}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Fragment>
                                    })}
                                </div>
                            </div>
                        )}
                    </ThemeContext.Consumer>
                )}
            </LocaleContext.Consumer>
        } else {
            page = <LocaleContext.Consumer>
                {lang => (
                    <ThemeContext.Consumer>
                        {theme => (
                            <div>
                                <p className={theme.info.tip}>
                                    <span className={theme.info.color}>
                                        {Locale[lang].args['noargs'].tipLabel}
                                    </span>
                                    {Locale[lang].args['noargs'].tip}
                                </p>
                                <div className="all-skills">
                                    {Object.keys(Locale[lang].args['noargs'].skills).map((skill, index) => {
                                        return <Fragment key={index}>
                                            <p>
                                                <ClickCommand
                                                    text={Locale[lang].args['noargs'].skills[skill].header}
                                                    handleClick={this.handleClick}
                                                />
                                            </p>
                                            <p className={theme.info.tip}>
                                                {Locale[lang].args['noargs'].skills[skill].description}
                                            </p>
                                            <table className="table no-border">
                                                <tbody>
                                                    <tr>
                                                        <td scope="row">
                                                            {Locale[lang].args['noargs'].skills[skill].status}
                                                        </td>
                                                        <td className={theme.info.color}>
                                                            {`[ ${Locale[lang].args['noargs'].skills[skill].bar1}`}
                                                            <span className={theme.info.hide}>
                                                                {Locale[lang].args['noargs'].skills[skill].bar2}
                                                            </span>
                                                            {' ]'}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Fragment>
                                    })}
                                </div>
                            </div>
                        )}
                    </ThemeContext.Consumer>
                )}
            </LocaleContext.Consumer>
        }

        return (
            <LocaleContext.Consumer>
                {lang => (
                    <ThemeContext.Consumer>
                        {theme => (
                            <div className={`skills ${theme.info.color}`}>
                                <p className="skills-header">
                                    {Locale[lang].header}
                                </p>
                                <div className="annotation">
                                    {Locale[lang].annotation.lines.map((line, index) => {
                                        return <p key={index}>
                                            {line}
                                        </p>
                                    })}
                                </div>
                                <div className="skills-wrapper">
                                    {page}
                                </div>
                            </div>
                        )}
                    </ThemeContext.Consumer>
                )}
            </LocaleContext.Consumer>
        );
    }
}

export default Skills;