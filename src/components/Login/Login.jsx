import React from "react";
import {Formik} from "formik";
import * as yup from "yup";
import s from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/preloader/FormsControls/FormsControls";
import {required} from "./../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Email"} name={"email"}
                        validate={[required]}
                        component={Input}/></div>
            <div><Field placeholder={"Password"} validate={required} name={"password"} type={"password"} component={Input}/></div>
            <div><Field type={"checkbox"} name={"rememberMe"} component={Input}/>remember me</div>
            <div><button>Отправить</button></div>
            
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/content"} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
};
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps,{login})(Login);