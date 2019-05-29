import React from 'react';
import ThemeContext from '../data/themeContext';

class EmptyLine extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <div className="empty-line">
                        <p className={theme.info.color}>
                            <span className={`user-cli-label ${theme.inputLabel.span}`}>Guest</span>@kineev.com :
                        </p>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default EmptyLine;