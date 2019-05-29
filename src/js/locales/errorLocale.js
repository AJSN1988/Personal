const Locale = {
    ru: {
        label: 'Ошибка :\u00A0',
        tipLabel: 'Совет\u00A0\u00A0:\u00A0',
        tip: {
            start: 'Воcпольуйтесь командой ',
            tail: ' (либо кликнете на ней мышью) для получения справки'
        },
        noArgs: {
            error: {
                start: 'Оу... Комманда',
                tail: 'не найдена'
            }
        },
        withArgs: {
            error: {
                start: 'Некорректные аргументы для команды',
                tail: ''
            }
        }
    },
    en: {
        label: 'Error :\u00A0',
        tipLabel: 'Tip\u00A0\u00A0\u00A0:\u00A0',
        tip: {
            start: 'Use the help command ',
            tail: ' (or click on it) for help'
        },
        noArgs: {
            error: {
                start: 'Ooops... This command',
                tail: 'not found'
            }
        },
        withArgs: {
            error: {
                start: 'Invalid arguments for the command',
                tail: ''
            }
        }
    }
}

export default Locale;