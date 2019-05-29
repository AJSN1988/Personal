import React from 'react';
import ThemeContext from '../data/themeContext';

class PrevCommand extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <div className="prev-command">
                        <p className={theme.info.color}>
                            <span className={`user-cli-label ${theme.info.important}`}>Guest</span>@kineev.com : {this.props.prevCommand} &crarr;
                        </p>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default PrevCommand;