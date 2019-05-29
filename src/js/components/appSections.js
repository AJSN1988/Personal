import React, { Fragment } from 'react';
import Locale from '../locales/appSectionsLocale';
import LocaleContext from '../data/localeContext';
import ThemeContext from '../data/themeContext';
import ClickCommand from './clickCommand';

class AppSections extends React.Component {
    render() {
        return (
            <LocaleContext.Consumer>
                {lang => (
                    <ThemeContext.Consumer>
                        {theme => (
                            <Fragment>
                                <p className={`section-header ${theme.info.header}`}>{Locale[lang].header}</p>
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
                                                    {Locale[lang].sections.help.name}
                                                </td>
                                                <td className={theme.table.border}>
                                                    {Locale[lang].sections.help.description}
                                                </td>
                                                <td className={theme.table.border}>
                                                    {Locale[lang].sections.help.goto.start}
                                                    <ClickCommand
                                                        text={Locale[lang].sections.help.goto.link}
                                                        handleClick={this.props.handleClick}
                                                    />
                                                    {Locale[lang].sections.help.goto.tail}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={theme.table.border} scope="row">
                                                    {Locale[lang].sections.about.name}
                                                </td>
                                                <td className={theme.table.border}>
                                                    {Locale[lang].sections.about.description}
                                                </td>
                                                <td className={theme.table.border}>
                                                    {Locale[lang].sections.about.goto.start}
                                                    <ClickCommand
                                                        text={Locale[lang].sections.about.goto.link}
                                                        handleClick={this.props.handleClick}
                                                    />
                                                    {Locale[lang].sections.about.goto.tail}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={theme.table.border} scope="row">
                                                    {Locale[lang].sections.skills.name}
                                                </td>
                                                <td className={theme.table.border}>
                                                    {Locale[lang].sections.skills.description}
                                                </td>
                                                <td className={theme.table.border}>
                                                    {Locale[lang].sections.skills.goto.start}
                                                    <ClickCommand
                                                        text={Locale[lang].sections.skills.goto.link}
                                                        handleClick={this.props.handleClick}
                                                    />
                                                    {Locale[lang].sections.skills.goto.tail}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={theme.table.border} scope="row">
                                                    {Locale[lang].sections.projects.name}
                                                </td>
                                                <td className={theme.table.border}>
                                                    {Locale[lang].sections.projects.description}
                                                </td>
                                                <td className={theme.table.border}>
                                                    {Locale[lang].sections.projects.goto.start}
                                                    <ClickCommand
                                                        text={Locale[lang].sections.projects.goto.link}
                                                        handleClick={this.props.handleClick}
                                                    />
                                                    {Locale[lang].sections.projects.goto.tail}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={theme.table.border} scope="row">
                                                    {Locale[lang].sections.contact.name}
                                                </td>
                                                <td className={theme.table.border}>
                                                    {Locale[lang].sections.contact.description}
                                                </td>
                                                <td className={theme.table.border}>
                                                    {Locale[lang].sections.contact.goto.start}
                                                    <ClickCommand
                                                        text={Locale[lang].sections.contact.goto.link}
                                                        handleClick={this.props.handleClick}
                                                    />
                                                    {Locale[lang].sections.contact.goto.tail}
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

export default AppSections;