import React from "react";
import { useFormik } from "formik";

export default function Login() {
    const validate = values => {
    const errors = {}

        if (!values.name) {
        errors.name = "UserName is required!";
        } else if (values.name.length < 10) {
        errors.name = "UserName has to be 10 character at less!";
        }

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (values.email.length < 10) {
            errors.email = "Invalid email address";
        }

        if (!values.password) {
            errors.password = 'Password is required!'
        } else if (values.password.length < 8) {
            errors.password = 'Must be 8 characters or more'
        } else if (values.password === '12345678') {
            errors.password = 'Must not be 12345678 !!!'
        }

        return errors
    };
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={formik.handleSubmit}>

            <label htmlFor="name">UserName</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            {formik.errors.name ? <div>{formik.errors.name}</div> : null}

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {formik.errors.password ? <div>{formik.errors.password}</div> : null}

            <button type="submit">Submit</button>
            </form>
        </div>
    )
}