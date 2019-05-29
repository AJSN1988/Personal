import React from 'react';
import ThemeContext from '../data/themeContext';



class Logo extends React.Component {

    render() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <div className="logo">
                        <p className={theme.graphics.color}>{'\u00A0\u00A0\u00A0\u00A0__ __ _____\u00A0\u00A0\u00A0_______________\u00A0\u00A0\u00A0\u00A0__'}</p>
                        <p className={theme.graphics.color}>{'\u00A0\u00A0\u00A0/ //_//\u00A0\u00A0_/ | / / ____/ ____| |\u00A0\u00A0/ /_________\u00A0\u00A0____ ___'}</p>
                        <p className={theme.graphics.color}>{'\u00A0\u00A0/ ,<\u00A0\u00A0\u00A0/ //\u00A0\u00A0|/ / __/ / __/\u00A0\u00A0| | / // ___/ __ \\/ __ \`__ \\'}</p>
                        <p className={theme.graphics.color}>{'\u00A0/ /| |_/ // /|\u00A0\u00A0/ /___/ /___\u00A0\u00A0| |/ _/ /__/ /_/ / / / / / /'}</p>
                        <p className={theme.graphics.color}>{'/_/ |_/___/_/ |_/_____/_____/\u00A0\u00A0|___(_\\___/\\____/_/ /_/ /_/ '}</p>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
}

export default Logo;