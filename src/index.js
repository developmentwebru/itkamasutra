/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';*/
import reportWebVitals from './reportWebVitals';
/*import {rerenderEntireTree} from "./render";*/
import store from "./redux/redux-store";
/*
import state from "./redux/state";
import {addPost} from "./redux/state";
*/

//addPost('dsdsfdsf');

/*let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
/*import state from "./redux/state";*/





    ReactDOM.render(
       // <React.StrictMode>
            <Provider store={store}>
                  <App />
            </Provider>
       // </React.StrictMode>
        ,
        document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
