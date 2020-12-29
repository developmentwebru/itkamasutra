import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/logo.png"
const Header = (props) => {
    return     <header className={s.header}>
                    <img src="https://turbologo.ru/blog/wp-content/uploads/2018/03/prozrachniy-logo-1280x720.png" alt=""/>

                    <div className={s.loginBlock}>
                        { props.isAuth
                            ? <div className={s.colorLogin}>{props.login} - <button onClick = {props.logout}>Log out</button></div>
                        :<NavLink to={'/login'}>Login</NavLink>}
                    </div>
                </header>;
}

export default Header;