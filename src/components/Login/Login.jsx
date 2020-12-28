import React from "react";
import {Formik} from "formik";
import * as yup from "yup";
import s from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/preloader/FormsControls/FormsControls";
import {required} from "./../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Login"} name={"login"}
                        validate={[required]}
                        component={Input}/></div>
            <div><Field placeholder={"Password"} validate={[required]} name={"password"} component={Input}/></div>
            <div><Field type={"checkbox"} name={"rememberMe"} component={Input}/>remember me</div>
            <div><button>Отправить</button></div>
            
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login;