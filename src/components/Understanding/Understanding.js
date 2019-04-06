import React, { Component } from 'react'
import { connect } from "react-redux";
import ReviewFeedback from "../ReviewFeedback/ReviewFeedback";

export class Understanding extends Component {
    state = {
        understanding: 0
    };

    handleChange = (event) => {
        console.log(`in handleChange...`, this.state);

        this.setState({
            ...this.state,
            feeling: event.target.value,
        })
    }

    handleSubmit = () => {
        console.log(`in handleSubmit...`);


        if (this.state.feeling !== '') {
            const action = {
                type: "SET_FEEDBACK_UNDERSTANDING",
                payload: this.state.feeling
            };
            this.props.dispatch(action);

            this.props.history.push('/support');
        } else {
            alert(`Please select a number between 1 and 5.`);
        }
    }
  render() {
    return (
      <div>
            <h2> How well are you understanding the content?</h2>
                <form onSubmit={this.handleSubmit} >
                    <input type="number" name="support"
                        min="1" max="5"
                        onChange={this.handleChange} />

                    <button type="submit">Next</button>
                </form>

                <br />
                <ReviewFeedback />
            </div>
        );
    }
}

export default connect()(Understanding);

