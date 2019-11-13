import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <h3>
                <span className="badge amber darken-2 all-message">
                    { this.props.message }
                </span>
            </h3>
        );
    }
}

export default Message;
