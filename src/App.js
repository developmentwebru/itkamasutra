import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ContentContainer from "./components/Content/ContentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                   {/* <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/content' component={Content}/>*/}
                    <Route path='/dialogs' render={ () => <DialogsContainer />}/>
                    <Route path='/content/:userId?' render={ () => <ContentContainer />}/>
                    <Route path='/users' render={ () => <UsersContainer />}/>
                    <Route path='/login' render={ () => <LoginPage />}/>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
