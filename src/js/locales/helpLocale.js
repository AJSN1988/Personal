const Locale = {
    ru: {
        help: {
            name: {
                header: 'help',
                description: 'Краткая справочная информация по использованию приложения'
            },
            arguments: {
                header: 'Доступные аргументы',
                syntax: 'help *[page]',
                tip: '* - аргумент является необязательным'
            },
            text: {
                header: 'Описание',
                block: {
                    line1: 'При помощи команды "help" вы можете получиться справочную информацию о каждой команде, доступной для выполения в рамках данного приложения',
                    line2: 'В зависимости от ситуации, Вам может понадобится передать команде "help" один параметр - "page"',
                    line3: 'Данный параметр указывает приложению информацию о какой зарегистрированной команде Вы хотите прочесть',
                    th1: 'Аргумент',
                    th2: 'Описание',
                    args: {
                        help: {
                            name: 'help',
                            description: 'Возвращает общую справочную информацию. Аналогично вызову "help" без аргументов'
                        },
                        about: {
                            name: 'about',
                            description: 'Возвращает справочную информацию о команде "about"'
                        },
                        locale: {
                            name: 'locale',
                            description: 'Возвращает справочную информацию о команде "locale"'
                        },
                        theme: {
                            name: 'theme',
                            description: 'Возвращает справочную информацию о команде "theme"'
                        },
                        skills: {
                            name: 'skills',
                            description: 'Возвращает справочную информацию о команде "skills"'
                        },
                        projects: {
                            name: 'projects',
                            description: 'Возвращает справочную информацию о команде "projects"'
                        },
                        mail: {
                            name: 'mail',
                            description: 'Возвращает справочную информацию о команде "mail"'
                        },
                        clear: {
                            name: 'clear',
                            description: 'Возвращает справочную информацию о команде "clear"'
                        },
                        gui: {
                            name: 'gui',
                            description: 'Возвращает справочную информацию о команде "gui"'
                        },
                        contact: {
                            name: 'contact',
                            description: 'Возвращает справочную информацию о команде "contact"'
                        }
                    }
                }
            }
        },
        about: {
            name: {
                header: 'about',
                description: 'Основная информация о разделах данного приложения'
            },
            arguments: {
                header: 'Доступные аргументы',
                syntax: 'about [...]',
                tip: 'У данной команды аргументы отсутсвуют'
            },
            text: {
                header: 'Описание',
                block: {
                    line1: 'Команда "about" возвращает краткую информацию о содержании и навигации в приложении',
                    line2: 'Вам будет доступна возможность навигации по основным разделам и вызывать доступные утилиты (в том числе при помощи мыши)',
                    line3: 'Также следую инструкциям соответсвующего раздела "about" вы сможете перейти на графическую версию приложения',
                }
            }
        },
        locale: {
            name: {
                header: 'locale',
                description: 'Позволяет изменить язык приложения'
            },
            arguments: {
                header: 'Доступные аргументы',
                syntax: 'locale ![language]',
                tip: '! - аргумент "language" является обязательным'
            },
            text: {
                header: 'Описание',
                block: {
                    line1: 'Команда "locale" изменит язык приложения на переданный в аргумента',
                    line2: 'Вызов команды "locale" без аргумента приведет к ошибке',
                    line3: 'Перевод на языки, отличные от русского (ru), осуществлен с помощью сервисов-переводчиков, поэтому заренее приношуизвинения за возможные неточности перевода',
                    th1: 'Аргумент',
                    th2: 'Описание',
                    args: {
                        ru: {
                            name: 'ru',
                            description: 'Изменить язык приложения на русский (ru-RU)'
                        },
                        en: {
                            name: 'en',
                            description: 'Изменить язык приложения на русский (en-EN)'
                        }
                    }
                }
            }
        },
        theme: {
            name: {
                header: 'theme',
                description: 'Позволяет изменить стиль оформления приложения'
            },
            arguments: {
                header: 'Доступные аргументы',
                syntax: 'theme ![name]',
                tip: '! - аргумент "name" является обязательным'
            },
            text: {
                header: 'Описание',
                block: {
                    line1: 'Команда "theme" изменит оформление приложения, исходя из переданного аргумента',
                    line2: 'Вызов команды "theme" без аргумента приведет к ошибке',
                    line3: ' Статус строка ниже строки ввода команды отображает текущую тему оформления',
                    th1: 'Аргумент',
                    th2: 'Описание',
                    args: {
                        default: {
                            name: 'default',
                            description: 'Изменить стиль приложения на стиль по умолчанию'
                        },
                        blue: {
                            name: 'blue',
                            description: 'Изменить стиль приложения на стиль, похожий на интерфейс Atari'
                        },
                        sky: {
                            name: 'sky',
                            description: 'Изменить стиль приложения на Sky стиль'
                        }
                    }
                }
            }
        },
        skills: {
            name: {
                header: 'skills',
                description: ' Информация о моих навыках :)'
            },
            arguments: {
                header: 'Доступные аргументы',
                syntax: 'skills *[name]',
                tip: '* - аргумент "name" является необязательным'
            },
            text: {
                header: 'Описание',
                block: {
                    line1: 'Команда "skills" возвращает блок с информацией о моих профессиональных навыках',
                    line2: 'Вызов команды "theme" без аргумента предоставит Вам общую информацию',
                    line3: 'Для более конкретной информации вызовите "skills" с необходимым параметром',
                    th1: 'Аргумент',
                    th2: 'Описание',
                    args: {
                        web: {
                            name: 'web',
                            description: 'Показать общие навыки в WEB'
                        },
                        js: {
                            name: 'js',
                            description: 'Показать общие навыки использования JS'
                        },
                        common: {
                            name: 'common',
                            description: 'Показать общие знания computer science'
                        },
                        backend: {
                            name: 'backend',
                            description: 'Показать все что я знаю о темной сторо... о Backend разработке'
                        }
                    }
                }
            }
        },
        projects: {
            name: {
                header: 'projects',
                description: 'Информация о выполненных проектах'
            },
            arguments: {
                header: 'Доступные аргументы',
                syntax: 'projects *[name]',
                tip: '* - аргумент "name" является необязательным'
            },
            text: {
                header: 'Описание',
                block: {
                    line1: 'Команда "projects" возвращает блок с информацией о выполненных мною проектах',
                    line2: 'Вызов команды "projects" без аргумента предоставит Вам обощенную информацию по всем проектам',
                    line3: 'Для более конкретной информации вызовите "projects" с необходимым параметром.',
                    th1: 'Аргумент',
                    th2: 'Описание',
                    args: {
                        ronline: {
                            name: 'ronline',
                            description: 'Показать проект сайта телеком компании'
                        },
                        qservice: {
                            name: 'qservice',
                            description: 'Показать проект сайта компании по ремонту гаджетов'
                        },
                        galaxian: {
                            name: 'galaxian',
                            description: 'Показать мою реализацию клона легендарной игры на NES'
                        },
                        dgenerator: {
                            name: 'dgenerator',
                            description: 'Показать проект приложения для взаиморасчетов с клиентами телефонной компании'
                        }
                    }
                }
            }
        },
        mail: {
            name: {
                header: 'mail',
                description: 'Утилита для отправки электронной почты'
            },
            arguments: {
                header: 'Доступные аргументы',
                syntax: 'mail *[applicaction]',
                tip: '* - аргумент "applicaction" является необязательным'
            },
            text: {
                header: 'Описание',
                block: {
                    line1: 'С помощью утилиты "mail" можно оправить мне электронное сообщение, используя CLI или внешнее приложение',
                    line2: 'Используя аргумент "youapp", возможно отправить электронное сообщение, используя Ваше приложение элеткронной почты по умолчанию',
                    line3: 'Используя утилиту "mail" без аргументов Вы попадете в пошаговый интерфейс отправки сообщения',
                    th1: 'Аргумент',
                    th2: 'Описание',
                    args: {
                        youapp: {
                            name: 'youapp',
                            description: 'Отрыть приложение для электронной почты по умолчанию'
                        }
                    }
                }
            }
        },
        clear: {
            name: {
                header: 'clear',
                description: 'Очистить экран'
            },
            arguments: {
                header: 'Доступные аргументы',
                syntax: 'clear [...]',
                tip: 'У данной утилиты аргументы отсутсвуют'
            },
            text: {
                header: 'Описание',
                block: {
                    line1: 'Утилита "clear" поможет Вам очистить экран от накопившейся информации',
                    line2: '"clear" не принимает никаких аргументов. Вызов с аргументом приведет к сообщению об ошибке',
                    line3: null,
                }
            }
        },
        gui: {
            name: {
                header: 'gui',
                description: 'Переход к графической версии'
            },
            arguments: {
                header: 'Доступные аргументы',
                syntax: 'gui [...]',
                tip: 'У данной утилиты аргументы отсутсвуют'
            },
            text: {
                header: 'Описание',
                block: {
                    line1: 'Позволяет Вам перейти к более привычной многим "графической" версии приложения',
                    line2: 'Да да, я вполне отдаю себе отчет в том, что CLI-like версия не самое рациональное решение :)',
                    line3: null,
                }
            }
        },
        contact: {
            name: {
                header: 'contact',
                description: 'Показать контактную информацию'
            },
            arguments: {
                header: 'Доступные аргументы',
                syntax: 'contact [...]',
                tip: 'У данной команды аргументы отсутсвуют'
            },
            text: {
                header: 'Описание',
                block: {
                    line1: 'Возвращает блок с моей контактной информацией',
                    line2: 'Данная команда не принимает никаких аргументов. Вызов с аргументом приведет к сообщению об ошибке',
                    line3: null,
                }
            }
        }
    },
    en: {
        help: {
            name: {
                header: 'help',
                description: 'Brief background information on the use of the application'
            },
            arguments: {
                header: 'Arguments',
                syntax: 'help *[page]',
                tip: '* - argument is optional'
            },
            text: {
                header: 'Deascription',
                block: {
                    line1: 'With the "help" command you can get reference information about each command available for execution within this application',
                    line2: 'Depending on the situation, you may need to pass one parameter to the command "help" - "page"',
                    line3: 'This parameter tells the application about which registered team you want to read',
                    th1: 'Argument',
                    th2: 'Description',
                    args: {
                        help: {
                            name: 'help',
                            description: 'Returns general reference information. Same as calling "help" with no arguments'
                        },
                        about: {
                            name: 'about',
                            description: 'Returns background information about the "about" command'
                        },
                        locale: {
                            name: 'locale',
                            description: 'Returns background information about the "locale" command'
                        },
                        theme: {
                            name: 'theme',
                            description: 'Returns background information about the "theme" command'
                        },
                        skills: {
                            name: 'skills',
                            description: 'Returns background information about the "skills" command'
                        },
                        projects: {
                            name: 'projects',
                            description: 'Returns background information about the "projects" command'
                        },
                        mail: {
                            name: 'mail',
                            description: 'Returns background information about the "mail" command'
                        },
                        clear: {
                            name: 'clear',
                            description: 'Returns background information about the "clear" command'
                        },
                        gui: {
                            name: 'gui',
                            description: 'Returns background information about the "gui" command'
                        },
                        contact: {
                            name: 'contact',
                            description: 'Returns background information about the "contact" command'
                        }
                    }
                }
            }
        },
        about: {
            name: {
                header: 'about',
                description: 'Basic information about the sections of this application'
            },
            arguments: {
                header: 'Arguments',
                syntax: 'about [...]',
                tip: 'This command has no arguments'
            },
            text: {
                header: 'Description',
                block: {
                    line1: 'The "about" command returns a summary of the content and navigation in the application',
                    line2: 'You will be able to navigate through the main sections and call available utilities (including using the mouse)',
                    line3: 'Also follow the instructions of the corresponding section "about" you can go to the graphic version of the application',
                }
            }
        },
        locale: {
            name: {
                header: 'locale',
                description: 'Allows you to change the language of the application'
            },
            arguments: {
                header: 'Arguments',
                syntax: 'locale ![language]',
                tip: '! - The "language" argument is required'
            },
            text: {
                header: 'Description',
                block: {
                    line1: 'The "locale" command will change the language of the application to the one passed in the argument',
                    line2: 'Calling the "locale" command without an argument will result in an error',
                    line3: 'Translation into languages other than Russian (ru) was made with the help of service translators, therefore, I bring an apology in advance for possible inaccuracies in translation',
                    th1: 'Argument',
                    th2: 'Description',
                    args: {
                        ru: {
                            name: 'ru',
                            description: 'Change application language to Russian (ru-RU)'
                        },
                        en: {
                            name: 'en',
                            description: 'Change application language to English (en-EN)'
                        }
                    }
                }
            }
        },
        theme: {
            name: {
                header: 'theme',
                description: 'Allows you to change the style of the application'
            },
            arguments: {
                header: 'Arguments',
                syntax: 'theme ![name]',
                tip: '! - The "name" argument is required'
            },
            text: {
                header: 'Description',
                block: {
                    line1: 'The "theme" command will change the design of the application, based on the argument passed',
                    line2: 'Calling the "theme" command without an argument will result in an error',
                    line3: 'The status bar below the command line displays the current skin',
                    th1: 'Argument',
                    th2: 'Description',
                    args: {
                        default: {
                            name: 'default',
                            description: 'Change application style to default style'
                        },
                        blue: {
                            name: 'blue',
                            description: 'Change application style to a style similar to the Atari interface'
                        },
                        sky: {
                            name: 'sky',
                            description: 'Change application style to a sky style'
                        }
                    }
                }
            }
        },
        skills: {
            name: {
                header: 'skills',
                description: 'Information about my skills :)'
            },
            arguments: {
                header: 'Arguments',
                syntax: 'skills *[name]',
                tip: '* - The "name" argument is required'
            },
            text: {
                header: 'Description',
                block: {
                    line1: 'Team "skills" returns a block with information about my professional skills',
                    line2: 'Calling the "theme" command without an argument will provide you with general information',
                    line3: 'For more specific information, call "skills" with the required parameter',
                    th1: 'Argument',
                    th2: 'Description',
                    args: {
                        web: {
                            name: 'web',
                            description: 'Show skills in WEB'
                        },
                        js: {
                            name: 'js',
                            description: 'Show skills in JS'
                        },
                        common: {
                            name: 'common',
                            description: 'Show skills in computer science'
                        },
                        backend: {
                            name: 'backend',
                            description: 'Show all I know about black magi... Backend development'
                        }
                    }
                }
            }
        },
        projects: {
            name: {
                header: 'projects',
                description: 'Information on completed projects'
            },
            arguments: {
                header: 'Arguments',
                syntax: 'projects *[name]',
                tip: '* - The "name" argument is required'
            },
            text: {
                header: 'Description',
                block: {
                    line1: 'The "projects" command returns a block with information about the projects I have completed',
                    line2: 'Calling the "projects" command without an argument will provide you with generalized information on all projects',
                    line3: 'For more specific information, call "projects" with the required parameter.',
                    th1: 'Argument',
                    th2: 'Description',
                    args: {
                        ronline: {
                            name: 'ronline',
                            description: 'Show project site telecom company'
                        },
                        qservice: {
                            name: 'qservice',
                            description: 'Show gadget repair company website project'
                        },
                        galaxian: {
                            name: 'galaxian',
                            description: 'Show my implementation of the legendary game clone on NES'
                        },
                        dgenerator: {
                            name: 'dgenerator',
                            description: 'Show a draft application for settlements with telephone company customers'
                        }
                    }
                }
            }
        },
        mail: {
            name: {
                header: 'mail',
                description: 'Utility for sending e-mail'
            },
            arguments: {
                header: 'Arguments',
                syntax: 'mail *[applicaction]',
                tip: '* - The "applicaction" argument is required'
            },
            text: {
                header: 'Description',
                block: {
                    line1: 'Using the mail utility, you can send me an email using the CLI or an external application',
                    line2: 'Using the "youapp" argument, it is possible to send an email using your default email app',
                    line3: 'Using the "mail" utility with no arguments will take you to the step-by-step interface for sending a message',
                    th1: 'Argument',
                    th2: 'Description',
                    args: {
                        youapp: {
                            name: 'youapp',
                            description: 'Open default email application'
                        }
                    }
                }
            }
        },
        clear: {
            name: {
                header: 'clear',
                description: 'Clear screen'
            },
            arguments: {
                header: 'Arguments',
                syntax: 'clear [...]',
                tip: 'This utility has no arguments'
            },
            text: {
                header: 'Description',
                block: {
                    line1: 'The utility "clear" will help you clear the screen of the accumulated information',
                    line2: '"clear" takes no arguments. A call with an argument will result in an error message',
                    line3: null,
                }
            }
        },
        gui: {
            name: {
                header: 'gui',
                description: 'Go to the graphic version'
            },
            arguments: {
                header: 'Arguments',
                syntax: 'gui [...]',
                tip: 'This utility has no arguments'
            },
            text: {
                header: 'Description',
                block: {
                    line1: 'Allows you to go to a more familiar to many "graphical" version of the application',
                    line2: 'Yes, yes, I am fully aware that the CLI-like version is not the most rational solution :)',
                    line3: null,
                }
            }
        },
        contact: {
            name: {
                header: 'contact',
                description: 'Show contact information'
            },
            arguments: {
                header: 'Arguments',
                syntax: 'contact [...]',
                tip: 'This utility has no arguments'
            },
            text: {
                header: 'Description',
                block: {
                    line1: 'Returns a block with my contact information',
                    line2: 'This command takes no arguments. A call with an argument will result in an error message',
                    line3: null,
                }
            }
        }
    }
}

export default Locale;