import React, { Component } from 'react';
import axios from 'axios';
import "./bootstrap.min.css";
import swal from "sweetalert";
import { connect } from "react-redux";







class Admin extends Component {
 
    state = {
        feedbacks: []
    }

    componentDidMount() {
        this.getFeedbacks();
    }

    getFeedbacks = () => {
        console.log(`getting feedbacks....`);

        axios({
            method: 'GET',
            url: '/feedback'
        })
            .then((response) => {
                console.log(`Got feedback from DB`, response.data);
                this.setState({
                    feedbacks: response.data,
                });
            })
            .catch((error) => {
                console.log(`Error getting feedback.`, error);
                alert(`Sorry, could not get feedback. Try again later.`);
            })
    }

  checkDelete = (event) => {
    console.log(event.currentTarget.value);
    event.preventDefault();
    let feedbackId = event.currentTarget.value
    console.log('feedbck id is ', feedbackId);
    
    swal({
      title: "Delete Request",
      text: "Are you sure you want to delete this feedback?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((isDelete) => {
        if (isDelete) {
          swal("The feedback has been deleted", {
            icon: "success",
          });
          // this.deleteValue(feedbackId);
          this.props.deleteFeedback(feedbackId);
        } else {
          swal("The feedback was not deleted.");
        }
      });
  }

  deleteValue = (feedbackId) => {
    this.props.deleteFeedback(feedbackId);
  }

  
    render() {

        return (
          <div>
            <div>
              <table className="table table-striped table-bordered table-hover table-condensed">
                <thead className="thead-dark">
                  <tr>
                    <th>Feeling</th>
                    <th>Comprehension</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.feedbacks.map(feedback => (
                    <tr key={feedback.id}>
                      <td>{feedback.feeling}</td>
                      <td>{feedback.understanding}</td>
                      <td>{feedback.support}</td>
                      <td>{feedback.comments}</td>
                      <td>
                        <button className="Danger" onClick={this.checkDelete} value={feedback.id} getAll={this.getFeedbacks}>Delete</button>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
    }
}



const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Admin);