import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                   {/* <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/content' component={Content}/>*/}
                    <Route path='/dialogs' render={ () => <DialogsContainer />}/>
                    <Route path='/content' render={ () => <Content />}/>
                    <Route path='/users' render={ () => <UsersContainer />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
