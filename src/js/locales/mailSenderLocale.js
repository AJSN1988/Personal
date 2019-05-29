const Locale = {
    ru: {
        app: 'Открывается приложение для электронной почты по умолчанию',
        emailError: {
            errorSpan: 'Ошибка\u00A0\u00A0\u00A0\u00A0:\u00A0',
            error: 'Указан некорректный адрес электронной почты',
            tipLabel: 'Подсказка\u00A0:\u00A0',
            tip: 'Укажите корректный электронный адрес и нажмите Enter',
            input: 'Укажите ваш e-mail :\u00A0'
        },
        emptyLineError: {
            step2: {
                errorSpan: 'Ошибка\u00A0\u00A0\u00A0\u00A0:\u00A0',
                error: 'Вы не указали тему сообщения. Недопустимо отправлять электронное письмо без темы',
                tipLabel: 'Подсказка\u00A0:\u00A0',
                tip: 'Укажите тему Вашего сообщения и нажмите Enter',
                input: 'Укажите тему сообщения\u00A0:\u00A0'
            },
            step3: {
                errorSpan: 'Ошибка\u00A0\u00A0\u00A0\u00A0:\u00A0',
                error: 'Вы не указали текст сообщения. Недопустимо отправлять пустое электронное письмо',
                tipLabel: 'Подсказка\u00A0:\u00A0',
                tip: 'Укажите текст Вашего сообщения и нажмите Enter',
                input: 'Укажите тело сообщения\u00A0:\u00A0'
            }
        },
        steps: {
            step1: {
                label: 'Отправка электронной почты. Шаг 1. Укажите ваш адрес электронной почты',
                inputLabel: 'Шаг 1\u00A0',
                input: 'Укажите ваш e-mail\u00A0:\u00A0'
            },
            step2: {
                label: 'Отправка электронной почты. Шаг 2. Укажите тему вашего сообщения',
                inputLabel: 'Шаг 2\u00A0',
                input: 'Укажите тему сообщения\u00A0:\u00A0'
            },
            step3: {
                label: 'Отправка электронной почты. Шаг 3. Напишите текст сообщения',
                inputLabel: 'Шаг 3\u00A0',
                input: 'Укажите текст сообщения\u00A0:\u00A0'
            }
        },
        success: {
            text: 'Электронное сообщение успешно отправлено. Спасибо за внимание'
        }
    },
    en: {
        app: 'Open the your default e-mail application',
        emailError: {
            errorSpan: 'Error\u00A0:\u00A0',
            error: 'Invalid email address specified',
            tipLabel: 'Tip\u00A0\u00A0\u00A0:\u00A0',
            tip: 'Please enter a valid email address and press Enter key',
            input: 'Input your e-mail :\u00A0'
        },
        emptyLineError: {
            step2: {
                errorSpan: 'Error\u00A0:\u00A0',
                error: 'You have not specified a subject. You cannot send an email without a subject',
                tipLabel: 'Tip\u00A0\u00A0\u00A0:\u00A0',
                tip: 'Specify the subject of your message and press Enter key',
                input: 'Input the mail subject :\u00A0'
            },
            step3: {
                errorSpan: 'Error\u00A0:\u00A0',
                error: 'You did not enter the text of the message. You cannot send an empty email',
                tipLabel: 'Tip\u00A0\u00A0\u00A0:\u00A0',
                tip: 'Enter the text of Your message and press Enter key',
                input: 'Input the mail body :\u00A0'
            }
        },
        steps: {
            step1: {
                label: 'Send email. Step 1. Enter your email address',
                inputLabel: 'Step 1\u00A0',
                input: 'Input your e-mail :\u00A0'
            },
            step2: {
                label: 'Send email. Step 2. Specify the subject of your message',
                inputLabel: 'Step 2\u00A0',
                input: 'Input the mail subject :\u00A0'
            },
            step3: {
                label: 'Send email. Step 3. Write your message',
                inputLabel: 'Step 3\u00A0',
                input: 'Input the mail body :\u00A0'
            }
        },
        success: {
            text: 'The email was sent successfully. Thank you for listening'
        }
    }
}

export default Locale;