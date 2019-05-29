import React from 'react';

class CommandsList extends React.Component {

    render() {
        return (
            <div className="commands">
                {this.props.items.map(item => (
                    <div className="item" key={item.id}>{item.command}</div>
                ))}
            </div>
        );
    }
}

export default CommandsList;