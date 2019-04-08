import React, { Component } from "react";
import axios from "axios";
import "./App.css";
// import and destructure router components from react-redux
import { HashRouter as Router, Route,Switch } from "react-router-dom";
import { connect } from "react-redux";
// Import Route components:
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import ReviewFeedback from "../ReviewFeedback/ReviewFeedback";
import Thanks  from "../Thanks/Thanks";
import Admin from "../Admin/Admin";


import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar  from "material-ui/AppBar";

class App extends Component {
  submitFeedback = feedback => {
    console.log(`in submitFeedback...`, feedback);

    axios({
      method: "POST",
      url: "/feedback",
      data: feedback
    })
      .then(response => {
        console.log(`Adding feedback successful.`);
        // empty reducers
        const action = { type: "SET_FEEDBACK_EMPTY" };
        this.props.dispatch(action);
      })
      .catch(error => {
        console.log(`Error adding feedback.`, error);
        alert(`Could not submit feedback. Try again later.`);
      });
  };

  deleteFeedback = id => {
    console.log('in app delete');
    
    const returnValue = axios({
      method: "DELETE",
      url: `admin/delete/${id}`
    });

    return returnValue;
  };
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <React.Fragment>
            <div className="App">
              <header className="App-header">
                {/* <h1 className="App-title">Feedback!</h1> */}
                <AppBar title="Feedback" />
                <h4>
                  <i>Don't forget it!</i>
                </h4>
              </header>
              <br />
              <div>
                {/* routes will go here... */}
                {/* <Switch> */}
                <Route exact path="/" component={Feeling} />
                <Route
                  exact
                  path="/understanding"
                  component={Understanding}
                />
                <Route exact path="/support" component={Support} />
                <Route exact path="/comments" component={Comments} />
                <Route exact path="/thanks" component={Thanks} />
                <Route
                  exact
                  path="/review"
                  render={props => (
                    <ReviewFeedback
                      {...props}
                      submitFeedback={this.submitFeedback}
                    />
                  )}
                />
                <Route
                  exact
                  path="/admin"
                  render={props => (
                    <Admin
                      {...props}
                      deleteFeedback={this.deleteFeedback}
                    />
                  )}
                />
                {/* </Switch> */}
              </div>
            </div>
          </React.Fragment>
        </MuiThemeProvider>
      </Router>
    );
  }
}
export default connect()(App);
