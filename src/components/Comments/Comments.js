import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import TextField from "material-ui/TextField";
import Button from "@material-ui/core/Button";


export class Comments extends Component {

    state = {
        comments: ''
    }

    handleChange = (event) => {
        console.log(`in handleChange...`, event.target.value);

        this.setState({
            ...this.state,
            comments: event.target.value,
        });
    }
    handleSubmit = () => {
        console.log(`in handleSubmit...`);

        const action = {
          type: "SET_FEEDBACK_COMMENTS",
          payload: this.state.comments
        };
        this.props.dispatch(action);

        this.props.history.push('/review');
    }

    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>

                <form onSubmit={this.handleSubmit}>
                    {/* <input type="text"
                        onChange={this.handleChange} /> */}
                    <TextField
                        hintText="Enter Your Comments"
                        floatingLabelText="Comments"
                        onChange={this.handleChange}
                        
                    />
                    {/* <button type="submit">Submit Comments</button> */}
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
                </form>

                <br />
                <ReviewFeedback />
            </div>
        );
    }
}

export default connect()(Comments);
