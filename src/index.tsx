import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';

//index.tsx file called as configuration file
//this configuration file helps to provide the smooth communication in thunk application

//import createStore
//createStore function used to create the store
//import applyMiddleware
//applyMiddleware function used to apply the thunk middleware
//thunk used to provide the communication between action=>reducer=>component

import {createStore, applyMiddleware} from "redux";

//import Provider
//Provider makes the store availability to Component
import { Provider } from "react-redux" ;

//import reducer
import reducer from "./reducer/reducer";

//import thunk
import thunk from "redux-thunk";

//create the store
const store = createStore(reducer,applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
