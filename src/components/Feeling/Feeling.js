import React, { Component } from "react";
import { connect } from "react-redux";
import ReviewFeedback from "../ReviewFeedback/ReviewFeedback";
import "../App/App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
//import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import blue from "@material-ui/core/colors/blue";
import RadioGroup from "@material-ui/core/RadioGroup";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
// import Icon from "@material-ui/core/Icon";
// import classNames from "classnames";

export class Feeling extends Component {
  state = {
    feeling: 0
  };

  handleChange = event => {
    console.log(`in handleChange...`, this.state);

    this.setState({
      ...this.state,
      feeling: event.target.value
    });
  };

  handleSubmit = () => {
    console.log(`in handleSubmit...`);

    if (this.state.feeling !== "") {
      const action = {
        type: "SET_FEEDBACK_FEELING",
        payload: this.state.feeling
      };
      this.props.dispatch(action);

      this.props.history.push("/understanding");
    } else {
      alert(`Please select a number between 1 and 5.`);
    }
  };

  render() {
    const { classes } = this.props;

    return (
      //  <div>
      //    <h2>How are you feeling today?</h2>
      //    <form onSubmit={this.handleSubmit}>
      //      <input
      //        type="number"
      //        name="feeling"
      //        min="1"
      //        max="5"
      //        onChange={this.handleChange}
      //      />

      //      <button type="submit">Next</button>
      //    </form>

      //    <br />
      //    <ReviewFeedback />
      //  </div>
      <div>
        <MuiThemeProvider theme={theme}>
          <div className="question-div">
            <h1> How are you feeling today?</h1>
            <div className="radio-buttons">
              <RadioGroup
                style={{ display: "block" }}
                aria-label="position"
                name="position"
                value={this.state.value}
                onChange={this.handleChange}
                row
              >
                <i class="material-icons blue600 md-36">thumb_down_alt </i>
                <FormControlLabel
                  value="1"
                  control={<Radio color="primary" />}
                  label={
                    <Typography style={{ fontSize: "1.1rem", color: "8a8989" }}>
                      1
                    </Typography>
                  }
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio color="primary" />}
                  label={
                    <Typography style={{ fontSize: "1.1rem", color: "8a8989" }}>
                      2
                    </Typography>
                  }
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio color="primary" />}
                  label={
                    <Typography style={{ fontSize: "1.1rem", color: "8a8989" }}>
                      3
                    </Typography>
                  }
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="4"
                  control={<Radio color="primary" />}
                  label={
                    <Typography style={{ fontSize: "1.1rem", color: "8a8989" }}>
                      4
                    </Typography>
                  }
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="5"
                  control={<Radio color="primary" />}
                  label={
                    <Typography style={{ fontSize: "1.1rem", color: "8a8989" }}>
                      5
                    </Typography>
                  }
                  labelPlacement="bottom"
                />
                <i class="material-icons blue600 md-36">thumb_up_alt </i>
              </RadioGroup>
              <div className="button-div">
                <Button
                  onClick={this.handleSubmit}
                  type="submit"
                  value="submit"
                  style={{ fontSize: "14px", marginTop: "30px" }}
                  size="medium"
                  variant="contained"
                  color="primary"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
          <br />
          <ReviewFeedback />
        </MuiThemeProvider>
      </div>
    );
  }
}
const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  cssRoot: {
    backgroundColor: blue[500]
  },
  FormControl: {
    margin: theme.spacing.unit,
    width: 600,
    height: 50
  }
});
const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] }
  },
  typography: {
    // In Japanese the characters are usually larger.
    useNextVariants: true
  }
});

export default withStyles(styles)(connect()(Feeling));
