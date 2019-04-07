import React, { Component } from 'react';
import { connect } from "react-redux";

export class Thanks extends Component {

    handleClick = () => {
        console.log(`in handleClick...`);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h2>Thank You!</h2>

                <button onClick={this.handleClick}>Leave New Feedback</button>

            </div>
        );
    }
}

export default connect()(Thanks);;