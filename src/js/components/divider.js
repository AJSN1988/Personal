import React from 'react';
import ThemeContext from '../data/themeContext';

class Divider extends React.Component {
    generateStr() {
        let str = '';
        let width = document.documentElement.clientWidth;
        for (let i = 0; i < (width / 5); i++) {
            str += '-';
        }
        return str;
    }
    render() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <div className={`divider ${theme.graphics.color}`}>
                        {this.generateStr()}
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Divider;