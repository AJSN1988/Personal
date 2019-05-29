import React, { Fragment } from 'react';
import LocaleContext from '../data/localeContext';
import ThemeContext from '../data/themeContext';
import Locale from '../locales/projectsLocale';
import ClickCommand from './clickCommand';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // Add fake command data because nned showing in args section only srgument
        let fake = `projects ${e.target.textContent}`;
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
                            <div className="project">
                                <p className={theme.info.italicHeader}>
                                    {Locale[lang].args[argument].name}
                                </p>
                                <div className={`project-description ${theme.info.color}`}>
                                    {Locale[lang].args[argument].description.map((line, index) => {
                                        return <p key={index}>
                                            {line}
                                        </p>
                                    })}
                                </div>
                                <p className={`project-stack ${theme.info.tip}`}>
                                    {Locale[lang].args[argument].stack}
                                </p>
                                <a className="link" href={Locale[lang].args[argument].github}>
                                    {Locale[lang].args[argument].githubLabel}
                                </a>
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
                                <div className="all-projects">
                                    {Object.keys(Locale[lang].args['noargs'].projects).map((project, index) => {
                                        return <Fragment key={index}>
                                            <p className="project">
                                                <ClickCommand
                                                    text={Locale[lang].args['noargs'].projects[project].link}
                                                    handleClick={this.handleClick}
                                                />
                                                <span className={`project-name ${theme.info.color}`}>
                                                    {Locale[lang].args['noargs'].projects[project].name}
                                                </span>
                                            </p>
                                            <p className={`project-annotation ${theme.info.color}`}>
                                                {Locale[lang].args['noargs'].projects[project].description}
                                            </p>
                                            <p className={`project-stack ${theme.info.tip}`}>
                                                {Locale[lang].args['noargs'].projects[project].stack}
                                            </p>
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
                            <div className={`projects ${theme.info.color}`}>
                                <p className="projects-header">
                                    {Locale[lang].header}
                                </p>
                                <div className="annotation">
                                    {Locale[lang].annotation.map((line, index) => {
                                        return <p key={index}>
                                            {line}
                                        </p>
                                    })}
                                </div>
                                <div className="projects-wrapper">
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

export default Projects;