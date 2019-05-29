import React from 'react';
import LocaleContext from '../data/localeContext';
import ThemeContext from '../data/themeContext';
import Locale from '../locales/contactLocale';

class Contact extends React.Component {
    render() {
        return (
            <LocaleContext.Consumer>
                {lang => (
                    <ThemeContext.Consumer>
                        {theme => (
                            <div className={`contacts ${theme.info.color}`}>
                                <p className="section-header">
                                    {Locale[lang].header}
                                </p>
                                <div className="contact-links">
                                    <table className="table no-border">
                                        <tbody>
                                            <tr>
                                                <td scope="row">
                                                    {Locale[lang].emailLabel}
                                                </td>
                                                <td>
                                                    <a className="link" href={`mailto:${Locale[lang].email}`}>
                                                        {Locale[lang].email}
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    {Locale[lang].phoneLabel}
                                                </td>
                                                <td>
                                                    <a className="link" href={`tel:${Locale[lang].phone}`}>
                                                        {Locale[lang].phone}
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    {Locale[lang].facebookLabel}
                                                </td>
                                                <td>
                                                    <a className="link" href={Locale[lang].facebookLink}>
                                                        {Locale[lang].facebook}
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    {Locale[lang].cvLabel}
                                                </td>
                                                <td>
                                                    <a className="link" href={Locale[lang].cvLink}>
                                                        {Locale[lang].cv}
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </ThemeContext.Consumer>
                )}
            </LocaleContext.Consumer>
        );
    }
}

export default Contact;