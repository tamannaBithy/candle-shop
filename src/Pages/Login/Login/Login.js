import React from 'react';
import './Login.css';
import { useHistory, useLocation } from "react-router";
import { Alert, Container, Spinner } from "react-bootstrap";
import useAuth from '../../../Hooks/useAuth';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import GoogleButton from 'react-google-button';



const Login = () => {


    const { loginUser, isLoading, authError, signInWithGoogle } = useAuth();
    const { register, handleSubmit } = useForm();


    // for redirect
    const location = useLocation();
    const history = useHistory();


    // email login
    const onSubmit = (data) => {
        loginUser(data.email, data.password, location, history);
        console.log(data);
    };


    // for google sign in
    const handleGoogleLogin = () => {
        signInWithGoogle(location, history)
    }


    return (

        <Container>
            <div className="login">
                <h3 className="fw-bold pb-5 font-monospace"> Login to Our Site Now!</h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="input-field"
                        name="email"
                        placeholder="Email"
                        type="email"
                        // onBlur={handleOnBlur}
                        {...register("email", { required: true })}
                    />
                    <br />
                    <input
                        className="input-field"
                        name="password"
                        type="password"
                        placeholder="Password"
                        // onBlur={handleOnBlur}
                        {...register("password", { required: true })}
                    />
                    <br />


                    <input
                        className=" btn btn-primary mt-3"
                        type="submit"
                        value="Login"
                    />

                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/register">
                        <button class="btn btn-light mt-4 ms-3">New User? Please Register</button>
                    </NavLink>

                </form>


                {authError && <Alert className="w-50 mt-4 mx-auto" variant="danger">
                    {authError}
                </Alert>}


                <br />
                <br />
                <GoogleButton className="mx-auto" onClick={handleGoogleLogin} />


                {isLoading && <Spinner className="mt-4" animation="border" />}


                <input type="checkbox" id="terms" className="mt-4 me-1" />
                <label htmlFor="terms" className="text-muted"> Agree with the terms & condition of our site. We won't use your information with others.</label>
            </div>
        </Container>

    )
};

export default Login;