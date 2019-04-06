import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from "./registerServiceWorker";
import logger from "redux-logger";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// state
const feedback = {
  feeling: "",
  understanding: "",
  support: "",
  comments: ""
};
// Reducer that holds the values of 4 feedback question
const feedbackReducer = (state = feedback, action) => {
    switch (action.type) {
        case 'SET_FEEDBACK_FEELING':
            //console.log('state is ',state);
            return { ...state, feeling: action.payload }

        case 'SET_FEEDBACK_UNDERSTANDING':
            return { ...state, understanding: action.payload }
        case 'SET_FEEDBACK_SUPPORT':
            return { ...state, support: action.payload }
        case 'SET_FEEDBACK_COMMENTS':
            return { ...state, comments: action.payload }
        default:
            break;
    }
    return state;



}

const storeInstance = createStore(
    combineReducers({
        // reducers....
        feedbackReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(
    <Provider store={storeInstance} >
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
