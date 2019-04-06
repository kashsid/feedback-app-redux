import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export class ReviewFeedback extends Component {

    showSubmitButton = () => {
        let feedback = this.props.reduxState.feedbackReducer;
        // conditionally render button based on whether feedback is completed
        if (feedback.comments !== '') {
            return <button onClick={this.handleSubmit}>Submit Feedback</button>;
        } else {
            return <button>Incomplete</button>;
        }
    } 

    
    render() {
        return (
            <div>
                <h2>Review Your Feedback</h2>

                <p>Feeling: {this.props.reduxState.feedbackReducer.feeling}</p>
                <p>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
                <p>Support: {this.props.reduxState.feedbackReducer.support}</p>
                <p>Comments: {this.props.reduxState.feedbackReducer.comments}</p>
                {this.showSubmitButton()};
                

            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(withRouter(ReviewFeedback));
