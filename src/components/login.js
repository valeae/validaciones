import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Required field')
                .max(25, 'Must be 25 characters or less'),
            email: Yup.string()
                .required('Required field')
                .email('Invalid email address'),
            password: Yup.string()
            .required('Required field')
            .min(5, 'Must be 5 characters or less'),
        }),
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
                {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (<div>{formik.errors.name}</div>) : null}

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}

            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}

            <button type="submit">Submit</button>
            </form>
        </div>
    )
}