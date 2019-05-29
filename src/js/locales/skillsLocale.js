const Locale = {
    ru: {
        header: 'Мои навыки',
        annotation: {
            lines: [
                'Данный раздел призван ознакомить потенциального работодателя с моими, пока еще небоатыми, навыками web-разработчика',
                'Дополнительно отмечу высшее образование в смежной области (сетевые технологии) и тот факт, что постигать искусство программирования',
                'я начал не так уж и давно (чуть более года назад). И на сегодняшний момент у меня накопился некоторый багаж знаний и навыков владения',
                'сопутствующим инструментарием, которые вполне могут помочь войти мне в мир профессиональной web разработки'
            ]
        },
        args: {
            noargs: {
                tipLabel: 'Совет : ',
                tip: 'Для более подробной информации вызовите "skills" и передайте интересующий раздел навыков в качестве аргумента (либо кликните по нему)',
                skills: {
                    common: {
                        header: 'common',
                        description: 'Общее понимание Computer Science. Алгоритмы и структуры данных, шаблоны проектирования, ООП',
                        status: 'Начальные знания',
                        bar1: '= = = ',
                        bar2: '= = = = = = ='
                    },
                    web: {
                        header: 'web',
                        description: 'Кросс-браузерная верстка. HTML разметка, CSS и препроцессоры (SCSS)',
                        status: 'Базовые навыки',
                        bar1: '= = = = ',
                        bar2: '= = = = = ='
                    },
                    js: {
                        header: 'js',
                        description: 'Основы языка (ES5/6), front-end фреймворвки (React, Bootstrap), системы сборки (Webpack), GIT',
                        status: 'Базовые навыки',
                        bar1: '= = = = = ',
                        bar2: '= = = = ='
                    },
                    python: {
                        header: 'python',
                        description: 'Основы языка и экосистемы Python, back-end фреймворк Django, базы данных',
                        status: 'Базовые навыки',
                        bar1: '= = = = ',
                        bar2: '= = = = = ='
                    }
                }

            },
            common: {
                header: 'Основы Computer Science',
                description: [
                    'Довольно общие представления о работе языков программирования. Алгоритмы и структуры данных в объеме общих понятий, ',
                    'достаточных для ковыряния тематических ресурсов в случае необходимости. Некоторые познания об ООП на уровне базовых коцепций',
                    'В общем и целом, отсутсвие крепкого академического образования довольно сильно сказывается на, скажем так, когнитивных навыках',
                    'Но я ежедневно старательно сокращаю пробелы образования, честно-честно :)',
                ],
                skills: {
                    base: {
                        description: 'Алгоритмы и структуры данных',
                        status: 'Начальные навыки',
                        bar1: '= = ',
                        bar2: '= = = = = = = ='
                    },
                    oop: {
                        description: 'ООП',
                        status: 'Базовые знания',
                        bar1: '= = = ',
                        bar2: '= = = = = = ='
                    },
                    patterns: {
                        description: 'Шаблоны проектирования',
                        status: 'Начальные навыки',
                        bar1: '= = = ',
                        bar2: '= = = = = = ='
                    }
                }
            },
            web: {
                header: 'Верстка и общее пресдавление об HTTP',
                description: [
                    'Довольно крепкие навыки верстки HTML макетов. Адекватное понимание HTTP, достаточное для понимания происходящего взаимодействия',
                    'Практическое использование CSS и препроцессора SCSS. Что удивительно, устойчивая приязнь к верствке как к процессу',
                    'Использование графических пакетов для подготовки графики и работе с макетами'
                ],
                skills: {
                    html: {
                        description: ' HTML',
                        status: 'Базовые навыки',
                        bar1: '= = = = = ',
                        bar2: '= = = = ='
                    },
                    css: {
                        description: 'CSS3',
                        status: 'Базовые навыки',
                        bar1: '= = = = ',
                        bar2: '= = = = = ='
                    },
                    photoshop: {
                        description: 'Photoshop',
                        status: 'Начальные навыки',
                        bar1: '= = = ',
                        bar2: '= = = = = = ='
                    }
                }
            },
            js: {
                header: 'Front-end разработка',
                description: [
                    'Обычные для junior-а самоучки знания JS (ES5/6). Базовые концепции, совеременный синтаксис, ООП, Canvas',
                    'Отмечу большой интерес к современной front-end разработке. Базовое владение некоторым legacy инструментарием - JQuery, Boostrap',
                    'Так же и к современным подходам к рзработке - базовое владение React и Vue. Нелюбовь к тестам пока не могу перебороть'
                ],
                skills: {
                    js: {
                        description: 'JavaScript',
                        status: 'Базовые навыки',
                        bar1: '= = = ',
                        bar2: '= = = = = = ='
                    },
                    jquery: {
                        description: 'JQuery',
                        status: 'Базовые навыки',
                        bar1: '= = = = ',
                        bar2: '= = = = = ='
                    },
                    boostrap: {
                        description: 'Bootstrap',
                        status: 'Базовые навыки',
                        bar1: '= = = = ',
                        bar2: '= = = = = ='
                    },
                    react: {
                        description: 'React',
                        status: 'Начальные навыки',
                        bar1: '= = = ',
                        bar2: '= = = = = = ='
                    },
                    vue: {
                        description: 'Vue',
                        status: 'Начальные навыки',
                        bar1: '= = ',
                        bar2: '= = = = = = = ='
                    }
                }
            },
            python: {
                header: 'Back-end разработка',
                description: [
                    'Некоторый опыт использования Python в роли платформы для Back-end, а также (как основная деятельность) в написании скриптов для Linux/BSD и создании отчетов',
                    'Парочка тестовых проектов на Django. Любовь к языку и его экосистеме. Базовые навыки в SQL (простые запросы и прочее в том же духе)'
                ],
                skills: {
                    python: {
                        description: 'Python',
                        status: 'Базовые навыки',
                        bar1: '= = = = ',
                        bar2: '= = = = = ='
                    },
                    django: {
                        description: 'Django',
                        status: 'Базовые навыки',
                        bar1: '= = = ',
                        bar2: '= = = = = = ='
                    },
                    db: {
                        description: 'Базы данных',
                        status: 'Базовые навыки',
                        bar1: '= = = ',
                        bar2: '= = = = = = ='
                    }
                }
            }
        }
    },
    en: {
        header: 'My skills',
        annotation: {
            lines: [
                'This section is intended to familiarize a potential employer with my, still nebatymi, web developer skills',
                'Additionally, I would like to mention higher education in the related field (network technologies) and the fact that comprehend the art of programming',
                'I started not so long ago (a little over a year ago). And at the moment I have accumulated some baggage of knowledge and skills of possession',
                'elated tools that may well help me enter the world of professional web development'
            ]
        },
        args: {
            noargs: {
                tipLabel: 'Tip : ',
                tip: 'For more information, call "skills" and pass the interesting section of skills as an argument (or click on it)',
                skills: {
                    common: {
                        header: 'common',
                        description: 'General understanding of Computer Science. Algorithms and data structures, design patterns, OOP',
                        status: 'Entry level',
                        bar1: '= = = ',
                        bar2: '= = = = = = ='
                    },
                    web: {
                        header: 'web',
                        description: 'Cross-browser layout. HTML markup, CSS and preprocessors (SCSS)',
                        status: 'Basic level',
                        bar1: '= = = = ',
                        bar2: '= = = = = ='
                    },
                    js: {
                        header: 'js',
                        description: 'Basics of the language (ES5 / 6), front-end frameworks (React, Bootstrap), build systems (Webpack), GIT',
                        status: 'Basic level',
                        bar1: '= = = = = ',
                        bar2: '= = = = ='
                    },
                    python: {
                        header: 'python',
                        description: 'Python language and ecosystem basics, Django back-end framework, database',
                        status: 'Basic level',
                        bar1: '= = = = ',
                        bar2: '= = = = = ='
                    }
                }

            },
            common: {
                header: 'Computer Science',
                description: [
                    'Quite a general idea of how programming languages work. Algorithms and data structures in the scope of general concepts, ',
                    'sufficient to pick thematic resources, if necessary. Some knowledge of OOP at the level of basic conceptions',
                    'In general, the lack of a strong academic education rather strongly affects, let\'s say, cognitive skills',
                    'But I diligently reduce the education gaps every day, honestly :)',
                ],
                skills: {
                    base: {
                        description: 'Algorithms and data structures',
                        status: 'Entry level',
                        bar1: '= = ',
                        bar2: '= = = = = = = ='
                    },
                    oop: {
                        description: 'OOP',
                        status: 'Basic level',
                        bar1: '= = = ',
                        bar2: '= = = = = = ='
                    },
                    patterns: {
                        description: 'Design Patterns',
                        status: 'Entry level',
                        bar1: '= = = ',
                        bar2: '= = = = = = ='
                    }
                }
            },
            web: {
                header: 'HTTP Layout and General Presentation',
                description: [
                    'Fairly strong HTML layout skills. Adequate understanding of HTTP, sufficient to understand what is happening interaction',
                    'Practical use of CSS and the preprocessor SCSS. Surprisingly, sustaining an attachment to the speeding as a process',
                    'Using graphics packages for preparing graphics and working with layouts'
                ],
                skills: {
                    html: {
                        description: ' HTML',
                        status: 'Basic level',
                        bar1: '= = = = = ',
                        bar2: '= = = = ='
                    },
                    css: {
                        description: 'CSS3',
                        status: 'Basic level',
                        bar1: '= = = = ',
                        bar2: '= = = = = ='
                    },
                    photoshop: {
                        description: 'Photoshop',
                        status: 'Entry level',
                        bar1: '= = = ',
                        bar2: '= = = = = = ='
                    }
                }
            },
            js: {
                header: 'Front-end development',
                description: [
                    'The usual for junior self-taught knowledge of JS (ES5 / 6). Basic Concepts, Modern Syntax, OOP, Canvas',
                    'I note a great interest in modern front-end development. Basic knowledge of some legacy tools - jQuery, Boostrap',
                    'Similarly, to modern approaches to development is a basic possession of React and Vue. Dislike of the tests until I can not overcome'
                ],
                skills: {
                    js: {
                        description: 'JavaScript',
                        status: 'Basic level',
                        bar1: '= = = ',
                        bar2: '= = = = = = ='
                    },
                    jquery: {
                        description: 'JQuery',
                        status: 'Basic level',
                        bar1: '= = = = ',
                        bar2: '= = = = = ='
                    },
                    boostrap: {
                        description: 'Bootstrap',
                        status: 'Basic level',
                        bar1: '= = = = ',
                        bar2: '= = = = = ='
                    },
                    react: {
                        description: 'React',
                        status: 'Basic level',
                        bar1: '= = = ',
                        bar2: '= = = = = = ='
                    },
                    vue: {
                        description: 'Vue',
                        status: 'Entry level',
                        bar1: '= = ',
                        bar2: '= = = = = = = ='
                    }
                }
            },
            python: {
                header: 'Back-end development',
                description: [
                    'Some experience using Python as a back-end platform, as well as (as the main activity) in writing scripts for Linux / BSD and creating reports',
                    'A couple of test projects on Django. Love for language and its ecosystem. Basic SQL skills (simple queries and so on) '
                ],
                skills: {
                    python: {
                        description: 'Python',
                        status: 'Basic level',
                        bar1: '= = = = ',
                        bar2: '= = = = = ='
                    },
                    django: {
                        description: 'Django',
                        status: 'Basic level',
                        bar1: '= = = ',
                        bar2: '= = = = = = ='
                    },
                    db: {
                        description: 'Базы данных',
                        status: 'Basic level',
                        bar1: '= = = ',
                        bar2: '= = = = = = ='
                    }
                }
            }
        }
    }
}

export default Locale;