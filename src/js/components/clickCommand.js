import React from 'react';
import ThemeContext from '../data/themeContext';

class ClicableCommand extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <span className={`clickable-command ${theme.link.color} ${theme.link.hover}`} onClick={this.props.handleClick}>
                        {this.props.text}
                    </span >
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default ClicableCommand;