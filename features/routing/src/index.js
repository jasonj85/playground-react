import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// set base url for axios 
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// axios.defaults.headers.common['Authorization'] = 'TOKEN';

axios.interceptors.request.use(req => {
    console.log(req);
    return req;
}, err => {
    console.log(err);
    return Promise.reject(err);
});

axios.interceptors.response.use(res => {
    return res;
}, err => {
    return Promise.reject(err);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
