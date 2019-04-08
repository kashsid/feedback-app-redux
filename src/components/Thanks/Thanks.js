import React, { Component } from "react";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

class Thanks extends Component {
  handleClick = () => {
    console.log(`in Thanks handleClick...`);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h2>Thank You!</h2>

        {/* <button onClick={this.handleClick}>Leave New Feedback</button> */}
        <RaisedButton
          label="Leave new feedback"
          primary={true}
          style={styles.button}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
const styles = {
  button: {
    margin: 15
  }
};
export default connect()(Thanks);
