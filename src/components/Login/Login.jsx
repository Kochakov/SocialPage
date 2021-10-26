import React from "react";
import { reduxForm, Field } from 'redux-form'
import { required } from "../../Utils/Validators/validators";
import { Input } from "../Common/Preloader/FormsControls/FormsControls";
import { connect} from "react-redux"
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router";
import styles from "../../components/Common/Preloader/FormsControls/FomsControls.module.css"

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email"} component={Input} name={"email"} validate={[required]} />
        </div>
        <div>
            <Field type={"password"} placeholder={"Password"} component={Input} name={"password"} validate={[required]} />
        </div>
        <div>
            <Field type={"checkbox"} component={Input} name={"rememberMe"} /> remember me
        </div>

        {props.error && <div className={styles.formSummaryError}>   {props.error}  </div>}
        
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1> Login </h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login}) (Login)