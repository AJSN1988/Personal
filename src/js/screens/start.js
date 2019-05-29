import React from 'react';
import Line from '../components/line';
import Divider from '../components/divider';

class StartScreen extends React.Component {
    constructor(props) {
        super(props);
        this.offset = this.props.delay;
        this.visible = false;
    }

    getDelay() {
        this.offset = this.offset * 1.15;
        return this.offset;
    }

    renderLine(text, color, delay) {
        return (
            <Line
                text={text}
                colorClass={color}
                delay={delay}
            />
        );
    }

    renderDivider(delay) {
        return (
            <Divider
                delay={delay}
            />
        );
    }

    UNSAFE_componentWillUpdate() {
        console.log('dis');
        if (this.visible) {

            return false;
        }
    }

    componentDidMount() {
        this.visible = true;
    }

    render() {
        return (
            <div className="start-screen">
                <div className="logo">
                    {this.renderLine(
                        '\u00A0\u00A0\u00A0\u00A0__ __ _____\u00A0\u00A0\u00A0_______________\u00A0\u00A0\u00A0\u00A0__',
                        this.props.colorClasses.white,
                        this.getDelay()
                    )}
                    {this.renderLine(
                        '\u00A0\u00A0\u00A0/ //_//\u00A0\u00A0_/ | / / ____/ ____| |\u00A0\u00A0/ /_________\u00A0\u00A0____ ___',
                        this.props.colorClasses.white,
                        this.getDelay()
                    )}
                    {this.renderLine(
                        '\u00A0\u00A0/ ,<\u00A0\u00A0\u00A0/ //\u00A0\u00A0|/ / __/ / __/\u00A0\u00A0| | / // ___/ __ \\/ __ \`__ \\',
                        this.props.colorClasses.white,
                        this.getDelay()
                    )}
                    {this.renderLine(
                        '\u00A0/ /| |_/ // /|\u00A0\u00A0/ /___/ /___\u00A0\u00A0| |/ _/ /__/ /_/ / / / / / /',
                        this.props.colorClasses.white,
                        this.getDelay()
                    )}
                    {this.renderLine(
                        '/_/ |_/___/_/ |_/_____/_____/\u00A0\u00A0|___(_\\___/\\____/_/ /_/ /_/ ',
                        this.props.colorClasses.white,
                        this.getDelay()
                    )}
                </div>
                {this.renderDivider(this.getDelay())}
                {this.renderLine(
                    'Привет, меня зовут Кинеев Алексей и я начинающий frontend разработчик. Добро пожаловать на мой персональный сайт.',
                    this.props.colorClasses.green,
                    this.getDelay()
                )}
                {
                    this.renderLine(
                        'Цель данного ресурса - ознакомить потенциальных партнеров и работодателей с моими навыками и выполенными проектами.',
                        this.props.colorClasses.green,
                        this.getDelay()
                    )
                }
                {this.renderDivider(this.getDelay())}
            </div>
        );
    }
}

export default StartScreen;