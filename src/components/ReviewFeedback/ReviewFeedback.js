import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class ReviewFeedback extends Component {
  showSubmitButton = () => {
    let feedback = this.props.reduxState.feedbackReducer;
    // conditionally render button based on whether feedback is completed
    if (feedback.comments !== "") {
      //   return <button onClick={this.handleSubmit}>Submit Feedback</button>;
      return (
        <RaisedButton
          label="Submit Feedback"
          primary={true}
          style={styles.button}
          onClick={this.handleSubmit}
        />
      );
    } else {
      return (
        <RaisedButton
          label="Incomplete"
          primary={false}
          style={styles.button}
        />
      );
    }
  };

  handleSubmit = () => {
    const feedback = this.props.reduxState.feedbackReducer;
    console.log("in reviewfeedback handel submit ");

    // sending data to POST  on App.js
    this.props.submitFeedback(feedback);
    //const history=this.props.history
    // Route to thank you page!
    this.props.history.push("/thanks");
    //history.push('/thanks')
  };

  render() {
    return (
      <div>
        <h2>Review Your Feedback</h2>
        {/* BASE Goal Code
                <p>Feeling: {this.props.reduxState.feedbackReducer.feeling}</p>
                <p>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
                <p>Support: {this.props.reduxState.feedbackReducer.support}</p>
                <p>Comments: {this.props.reduxState.feedbackReducer.comments}</p> */}
        <MuiThemeProvider>
          <React.Fragment>
            <List>
              <ListItem
                primaryText="Feeling"
                secondaryText={this.props.reduxState.feedbackReducer.feeling}
              />
              <ListItem
                primaryText="Understanding"
                secondaryText={
                  this.props.reduxState.feedbackReducer.understanding
                }
              />
              <ListItem
                primaryText="Support"
                secondaryText={this.props.reduxState.feedbackReducer.support}
              />
              <ListItem
                primaryText="Comments"
                secondaryText={this.props.reduxState.feedbackReducer.comments}
              />
            </List>
            <br />
          </React.Fragment>
        </MuiThemeProvider>
        {this.showSubmitButton()};
      </div>
    );
  }
}
const styles = {
  button: {
    margin: 15
  }
};
const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withRouter(ReviewFeedback));
