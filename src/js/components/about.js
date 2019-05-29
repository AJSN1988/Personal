import React from 'react';
import Logo from './logo';
import Locale from '../locales/aboutLocale';
import ClickCommand from './clickCommand';
import LocaleContext from '../data/localeContext';
import ThemeContext from '../data/themeContext';
import AppSection from './appSections';
import Utils from './utils';

class About extends React.Component {

    render() {
        return (
            <LocaleContext.Consumer>
                {lang => (
                    <ThemeContext.Consumer>
                        {theme => (
                            <div className="about info">
                                <Logo />
                                <div className={`hello ${theme.info.color}`}>
                                    <p>
                                        {Locale[lang].hello.line1}
                                    </p>
                                    <p>
                                        {Locale[lang].hello.line2}
                                    </p>
                                    <p>
                                        {Locale[lang].hello.line3.start}
                                        <span className={theme.info.important}>{Locale[lang].hello.line3.span}</span>
                                        {Locale[lang].hello.line3.tail}
                                    </p>
                                </div>
                                <div className="section-tips">
                                    <p className={theme.info.tip}>
                                        <span className={theme.info.color}>
                                            {Locale[lang].tip.tipLabel1}
                                        </span>
                                        {Locale[lang].tip.tip1Text.start}
                                        <ClickCommand
                                            text={Locale[lang].tip.tip1Text.link}
                                            handleClick={this.props.handleClick}
                                        />
                                        {Locale[lang].tip.tip1Text.tail}
                                    </p>
                                    <p className={theme.info.tip}>
                                        <span className={theme.info.color}>
                                            {Locale[lang].tip.tipLabel2}
                                        </span>
                                        {Locale[lang].tip.tip2Text.start}
                                        <ClickCommand
                                            text={Locale[lang].tip.tip2Text.link}
                                            handleClick={this.props.handleClick}
                                        />
                                        {Locale[lang].tip.tip2Text.tail}
                                    </p>
                                </div>
                                <AppSection handleClick={this.props.handleClick} />
                                <Utils handleClick={this.props.handleClick} />
                            </div>
                        )}
                    </ThemeContext.Consumer>
                )}
            </LocaleContext.Consumer>
        );
    }
}

export default About;