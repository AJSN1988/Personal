import React from 'react';
import About from '../components/about';
import EmptyLine from '../components/emptyLine';
import ErrorMessage from '../components/error';
import Help from '../components/help';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Contact from '../components/contact';
import { MailSender, MailSuccess } from '../components/mailSender';
// Themes
import Themes from '../data/themes';

// Object desbribe all commands

let commands = {
    '': {
        showPrevCommand: false,
        component: () => {
            return <EmptyLine />;
        }
    },
    locale: {
        showPrevCommand: true,
        useState: true,
        stateName: 'locale',
        arguments: {
            ru: 'ru',
            en: 'en'
        }
    },
    theme: {
        showPrevCommand: true,
        arguments: {
            default: Themes.default,
            blue: Themes.blue,
            sky: Themes.sky
        }
    },
    about: {
        showPrevCommand: true,
        component: (argument, handleClick) => {
            return <About
                argument={argument}
                handleClick={handleClick} />;
        }
    },
    help: {
        showPrevCommand: true,
        arguments: {
            '': '',
            help: 'help',
            about: 'about',
            locale: 'locale',
            theme: 'theme',
            skills: 'skills',
            projects: 'projects',
            mail: 'mail',
            clear: 'clear',
            gui: 'gui',
            contact: 'contact'
        },
        component: (arg, handleClick) => {
            return <Help
                arg={arg}
                handleClick={handleClick}
            />;
        }
    },
    skills: {
        showPrevCommand: true,
        arguments: {
            '': '',
            web: 'web',
            js: 'js',
            common: 'common',
            python: 'python'
        },
        component: (arg, handleClick) => {
            return <Skills
                argument={arg}
                handleClick={handleClick}
            />
        }
    },
    projects: {
        showPrevCommand: true,
        arguments: {
            '': '',
            ronline: 'ronline',
            qservice: 'qservice',
            galaxian: 'galaxian',
            personal: 'personal',
            dgenerator: 'dgenerator'
        },
        component: (arg, handleClick) => {
            return <Projects
                argument={arg}
                handleClick={handleClick}
            />
        }
    },
    contact: {
        showPrevCommand: true,
        component: (argument, handleClick) => {
            return <Contact
                argument={argument}
                handleClick={handleClick} />;
        }
    },
    gui: {
    },
    mail: {
        isWizard: true,
        showPrevCommand: true,
        steps: 3,
        step: 1,
        arguments: {
            '': '',
            youapp: 'youapp'
        },
        errors: {
            validEmail: false,
            emptyField: false
        },
        component: (arg, steps, step, changeHandler, submithandler, validEmail, emptyField) => {
            return <MailSender
                arg={arg}
                steps={steps}
                step={step}
                handleMailWizardChange={changeHandler}
                handleMailWizardSubmit={submithandler}
                emailValidError={validEmail}
                emptyFieldError={emptyField}
            />
        },
        success: (theme, locale, handleClick) => {
            return <MailSuccess
                theme={theme}
                locale={locale}
                handleClick={handleClick}
            />
        }
    },
    error: {
        showPrevCommand: true,
        component: (cmd, args, clickHandler) => {
            return <ErrorMessage
                command={cmd}
                args={args}
                handleClickCommand={clickHandler}
            />
        }
    },
    clear: {
        showPrevCommand: false,
        component: () => {
            return [];
        }
    },
}

export default commands;