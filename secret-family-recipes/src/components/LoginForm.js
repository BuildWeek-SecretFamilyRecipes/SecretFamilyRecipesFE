import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const LoginForm = ({ errors, touched, status }) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        if (status) {
            setUser([...user, status]);
        }
    }, [status]);

return (
    <div className="login-form">
        <h1 className="login-h1">Log In</h1>
        <Form>
            <div className="boxes">
                <Field className="name-box" type="text" name="name" placeholder="Name" />
                {touched.name && errors.name && ( <p className="error">{errors.name}</p>)}

                <Field className="email-box" type="text" name="email" placeholder="Email" /> 
                {touched.email && errors.email && ( <p className="error">{errors.email}</p>)} 

                <Field className="password-box" type="password" name="password" placeholder="Password" /> 
                {touched.password && errors.password && ( <p className="error">{errors.password}</p>)} 
            </div>

                <button className="login-button">Log In</button>

            <div>
            <label className="sign-up-call">
                Don't have an account? <a href="#"><button className="sign-up-button">Sign Up</button></a>
            </label>
            </div>
        </Form>
        {user.map(users => (
            <ul key={users.id}>
            <li>Name: {user.name}</li> 
            <li>Email: {user.email}</li>  {/* going to display data for practice purposes */}
            </ul>
        ))}
    </div>
)};

const FormikLoginForm = withFormik({
    mapPropsToValues({name, email, password}) {
        return {
            name: name || "",
            email: email || "",
            password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required()
    }),

handleSubmit(values, {setStatus}) {
    axios
        .post("https://reqres.in/api/users", values) // here is my axios call and my post so that the users display on the screen after they press submit. Will change this once we connect with BE
        .then(res => {
            setStatus(res.data);
            console.log("Here is your response", res);
        })
        .catch(err => console.log("Sorry an error has occured", err.res))
    }

})(LoginForm);
console.log(FormikLoginForm);
export default FormikLoginForm;
