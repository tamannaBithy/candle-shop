import React from 'react';
import './Login.css';
import { useHistory, useLocation } from "react-router";
import { Alert, Container, Spinner } from "react-bootstrap";
import useAuth from '../../../Hooks/useAuth';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';



const Login = () => {


    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
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
                <h4 className="fw-bold pb-5">At First <span className="fs-2 mx-2">Login</span> to Our Site!</h4>

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
                        className="submit-btn btn btn-danger mt-3"
                        type="submit"
                        value="Login"
                    />
                </form>

                <NavLink
                    style={{ textDecoration: 'none' }}
                    to="/register">
                    <button>New User? Please Register</button>
                </NavLink>

                {isLoading && <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}

                {user?.email && <Alert variant="success">
                    login successfully!
                </Alert>}
                {authError && <Alert variant="danger">
                    {authError}
                </Alert>}


                <br />
                <br />
                <button onClick={handleGoogleLogin} className="btn btn-outline-secondary btn-lg py-3 mb-4" type="submit"><i className="fab fa-google me-3"></i>Sign In with Google</button>
                <br />
                <br />

                <input type="checkbox" id="terms" className="mt-4 me-1" />
                <label htmlFor="terms" className="text-muted"> Agree with the terms & condition of our site. We won't use your information with others.</label>
            </div>
        </Container>

    )
};

export default Login;