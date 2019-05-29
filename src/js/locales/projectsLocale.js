const Locale = {
    ru: {
        header: 'Мои проекты',
        annotation: [
            'В данном разделе Вы можете ознакомится с проектами, выполненными мною за последний год',
            'Обратите внимание, что данные проекты не являются коммерческими и писались сугубо ради обучения (за одним исключением)',
            'Скажу честно, мне стыдно за этот код. Он может в некторых моментах в чем то неплох, но в общем и целом - типичный хаос джуниора :) '
        ],
        args: {
            noargs: {
                tipLabel: 'Совет : ',
                tip: 'Для более подробной информации вызовите "projects" и передайте имя проекта в качестве аргумента (либо кликните по нему)',
                projects: {
                    ronline: {
                        name: 'Roshal Online',
                        link: 'ronline',
                        description: 'Макет сайта оператора связи',
                        stack: 'JQuery, Bootstrap4'
                    },
                    qservice: {
                        name: 'QService',
                        link: 'qservice',
                        description: 'Макет компании по ремонту носимых гаджетов',
                        stack: 'JQuery, Bootstrap4, SCSS, Webpack'
                    },
                    galaxian: {
                        name: 'Galaxian',
                        link: 'galaxian',
                        description: 'Моя вариация на тему легендарной Galaxian с NES. Любимый проект :)',
                        stack: 'ES6, Webpack, HTML Canvas'
                    },
                    personal: {
                        name: 'My personal webpage',
                        link: 'personal',
                        description: 'Проект личного сайта с CLI-like интерфесом. Дичь вышла знатная :)',
                        stack: 'ES6, React, Webpack'
                    },
                    dgenerator: {
                        name: 'DGenerator',
                        link: 'dgenerator',
                        description: 'Приложение для выставления счетов клиентам телефонной компании',
                        stack: 'Python, MySQL'
                    }
                }
            },
            ronline: {
                name: 'Roshal Online',
                description: [
                    'Макет сайта оператора связи. Использовался далеко не самый акутальный на 2019 год стек технологий',
                    'Огромное количество плохого кода и антипаттернов. Огромные манускрипты стилей и криптов',
                    'Дизайн... ОК, дизайна нет. Я старался как мог, но это лучшее на что я способен как дизайнер. Поддерживается все, вплоть до IE11 и мобильных барузеров',
                    'Самый первый проект во front-end. Было больно, но прикольно :)'
                ],
                stack: 'JQuery, Bootstrap4',
                githubLabel: 'Ссылка на репозитрой',
                github: 'https://github.com/Fiendflug',
            },
            qservice: {
                name: 'QService',
                description: [
                    'Макет сайта компании по ремонту носимых гаджетов. На этом проекте открыл для себя правильную сторону 4 версии Bootstrap и систему сборки Webpack',
                    'За дизайн спасибо Охову Евгению. Проект делался для ThemeForest, но выложить руки так и недошли'
                ],
                stack: 'JQuery, Bootstrap4',
                githubLabel: 'Ссылка на репозитрой',
                github: 'https://github.com/Fiendflug',
            },
            galaxian: {
                name: 'Galaxian',
                description: [
                    'Моя первая рабочая "игра". До этого были попытки написать что-то адекватное на Unity, но всегда бросал',
                    'Но в этот раз все получилось. Довольно плохой код, признаю. Алгоритмический ад. Но есть и парочку моментов, где все довольно неплохо',
                    'На этом проекте, я прочувствовал некоторые важные, как мне кажется, аспекты ES6'
                ],
                stack: 'ES6, Webpack, HTML Canvas',
                githubLabel: 'Ссылка на репозитрой',
                github: 'https://github.com/Fiendflug',
            },
            personal: {
                name: 'Personal wwebpage',
                description: [
                    'Проект моего персонального сайта. Стиль крайне индивидуален, согласен. Не каждому нравится такая организация информации',
                    'Проект начал ради практики React.js На большее данный проект и не претендует :)'
                ],
                stack: 'ES6, React, Webpack',
                githubLabel: 'Ссылка на репозитрой',
                github: 'https://github.com/Fiendflug',
            },
            dgenerator: {
                name: 'DGenerator',
                description: [
                    'Консольное (да, да, я не фанат GUI) приложение для выставление счетов клиентам телефонной компании',
                    'Слегка иная версия успешно трудится на "продашене" :) Честное слово. Первое мое приложение на Python',
                    'Код ужасен, но скоро выйдет новая версия приложения'
                ],
                stack: 'Python, MySQL',
                githubLabel: 'Ссылка на репозитрой',
                github: 'https://github.com/Fiendflug',
            }
        }
    },
    en: {
        header: 'My projects',
        annotation: [
            'In this section you can get acquainted with the projects I have completed in the last year',
            'Please note that these projects are not commercial and were written solely for the sake of training (with one exception)',
            'To be honest, I’m ashamed of this code. He may in some moments be good at something, but in general he is a typical junior chaos :)'
        ],
        args: {
            noargs: {
                tipLabel: 'Tip : ',
                tip: 'For more information, call "projects" and pass the project name as an argument (or click on it)',
                projects: {
                    ronline: {
                        name: 'Roshal Online',
                        link: 'ronline',
                        description: 'ISP company site template',
                        stack: 'JQuery, Bootstrap4'
                    },
                    qservice: {
                        name: 'QService',
                        link: 'qservice',
                        description: 'Wearable gadget repair company template',
                        stack: 'JQuery, Bootstrap4, SCSS, Webpack'
                    },
                    galaxian: {
                        name: 'Galaxian',
                        link: 'galaxian',
                        description: 'My variation on the legendary Galaxian with NES. Favorite project :)',
                        stack: 'ES6, Webpack, HTML Canvas'
                    },
                    personal: {
                        name: 'My personal webpage',
                        link: 'personal',
                        description: 'Personal site project with CLI-like interface. The game came out noble :)',
                        stack: 'ES6, React, Webpack'
                    },
                    dgenerator: {
                        name: 'DGenerator',
                        link: 'dgenerator',
                        description: 'Сompany telephone company billing application',
                        stack: 'Python, MySQL'
                    }
                }
            },
            ronline: {
                name: 'Roshal Online',
                description: [
                    'WEB template of the ISP company. Far from being the most up-to-date technology stack for 2019',
                    'A huge amount of bad code and anti-patterns. Huge manuscripts of styles and crypts',
                    'Design ... OK, no design. I tried as best I could, but this is the best I can do as a designer. Everything is supported up to IE11 and mobile browsers',
                    'The very first project in the front-end. It was painful, but fun :)'
                ],
                stack: 'JQuery, Bootstrap4',
                githubLabel: 'Github link',
                github: 'https://github.com/Fiendflug',
            },
            qservice: {
                name: 'QService',
                description: [
                    'Layout of a wearable gadget repair company website. On this project, I discovered the correct side for Bootstrap version 4 and the Webpack build system',
                    'Thanks for the design Ohhov Eugene. The project was done for ThemeForest, but lay out their hands and did not reach'
                ],
                stack: 'JQuery, Bootstrap4',
                githubLabel: 'Github link',
                github: 'https://github.com/Fiendflug',
            },
            galaxian: {
                name: 'Galaxian',
                description: [
                    'My first working "game". Before that, there were attempts to write something adequate on Unity, but always threw',
                    'But this time everything worked out. Pretty bad code, I admit. Algorithmic hell. But there are a couple of moments where everything is pretty good',
                    'On this project, I felt some important, I think, aspects of ES6'
                ],
                stack: 'ES6, Webpack, HTML Canvas',
                githubLabel: 'Github link',
                github: 'https://github.com/Fiendflug',
            },
            personal: {
                name: 'Personal wwebpage',
                description: [
                    'Project of my personal site. The style is extremely individual, I agree. Not everyone likes such an organization of information',
                    'The project started for the sake of the practice of React.js. This project doesn’t pretend to be more :)'
                ],
                stack: 'ES6, React, Webpack',
                githubLabel: 'Github link',
                github: 'https://github.com/Fiendflug',
            },
            dgenerator: {
                name: 'DGenerator',
                description: [
                    'Console (yes, yes, I’m not a fan of the GUI) billing application for telephone company customers',
                    'Slightly different version successfully works on "sales" :) Honestly. My first Python application',
                    'The code is terrible, but a new version of the application will be released soon'
                ],
                stack: 'Python, MySQL',
                githubLabel: 'Github link',
                github: 'https://github.com/Fiendflug',
            }
        }
    }
}

export default Locale;