import React from "react";
import { reduxForm } from 'redux-form'
import { required } from "../../Utils/Validators/validators";
import { createField, Input } from "../Common/Preloader/FormsControls/FormsControls";
import { connect} from "react-redux"
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router";
import styles from "../../components/Common/Preloader/FormsControls/FomsControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
       
        {createField("Email", "email",  [required], Input )}
        {createField("Password", "password", [required], Input, {type: "password"} )}
        {createField( null,  "rememberMe", [], Input, {type: "checkbox"}, "remember me" )}

        {error && <div className={styles.formSummaryError}>   {error}  </div>}
        
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