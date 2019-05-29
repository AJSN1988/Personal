import React, { Fragment } from 'react';
import Locale from '../locales/utilsLocale.js';
import ThemeContext from '../data/themeContext';
import LocaleContext from '../data/localeContext';
import ClickCommand from './clickCommand';

class Utils extends React.Component {
    render() {
        return (
            <LocaleContext.Consumer>
                {lang => (
                    <ThemeContext.Consumer>
                        {theme => (
                            <Fragment>
                                <p className={`section-header ${theme.info.header}`}>
                                    {Locale[lang].header}
                                </p>
                                <div className={theme.table.text}>
                                    <table className={`table ${theme.table.border}`}>
                                        <thead>
                                            <tr>
                                                <th className={theme.table.border}>{Locale[lang].thead.th1}</th>
                                                <th className={theme.table.border}>{Locale[lang].thead.th2}</th>
                                                <th className={theme.table.border}>{Locale[lang].thead.th3}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className={theme.table.border} scope="row">
                                                    {Locale[lang].utils.locale.name}
                                                </td>
                                                <td className={theme.table.border}>
                                                    {Locale[lang].utils.locale.description}
                                                </td>
                                                <td className={theme.table.border}>
                                                    {Locale[lang].utils.locale.help.start}
                                                    <ClickCommand
                                                        text={Locale[lang].utils.locale.help.link}
                                                        handleClick={this.props.handleClick}
                                                    />
                                                    {Locale[lang].utils.locale.help.tail}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={theme.table.border} scope="row">
                                                    {Locale[lang].utils.mail.name}
                                                </td>
                                                <td className={theme.table.border}>
                                                    {Locale[lang].utils.mail.description}
                                                </td>
                                                <td className={theme.table.border}>
                                                    {Locale[lang].utils.mail.help.start}
                                                    <ClickCommand
                                                        text={Locale[lang].utils.mail.help.link}
                                                        handleClick={this.props.handleClick}
                                                    />
                                                    {Locale[lang].utils.mail.help.tail}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={theme.table.border} scope="row">
                                                    {Locale[lang].utils.theme.name}
                                                </td>
                                                <td className={theme.table.border}>
                                                    {Locale[lang].utils.theme.description}
                                                </td>
                                                <td className={theme.table.border}>
                                                    {Locale[lang].utils.theme.help.start}
                                                    <ClickCommand
                                                        text={Locale[lang].utils.theme.help.link}
                                                        handleClick={this.props.handleClick}
                                                    />
                                                    {Locale[lang].utils.theme.help.tail}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Fragment>
                        )}
                    </ThemeContext.Consumer>
                )}
            </LocaleContext.Consumer>
        );
    }
}

export default Utils;