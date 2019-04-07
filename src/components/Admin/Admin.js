import React, { Component } from 'react';
import axios from 'axios';



class Admin extends Component {

    state = {
        feedbacks: []
    }

    componentDidMount() {
        this.getFeedbacks();
    }

    getOrders = () => {
        console.log(`getting feedbacks....`);

        axios({
            method: 'GET',
            url: '/api/feedback'
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

    render() {

        return (
          <div>
            <h2>Feedbacks</h2>
            <div>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>Feeling</th>
                    <th>Comprehension</th>
                    <th>Support</th>
                    <th>Comments</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.feedbacks.map(feedback => (
                    <tr key={feedback.id}>
                      <td>{feedback.feeling}</td>
                      <td>{feedback.understanding}</td>
                      <td>{feedback.support}</td>
                      <td>{feedback.comments}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
    }
}

export default Admin;