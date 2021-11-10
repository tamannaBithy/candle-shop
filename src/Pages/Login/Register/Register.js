import React from 'react';
import { Alert, Container, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from "react-hook-form";


const Register = () => {

    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();
    const { register, handleSubmit } = useForm();



    const onSubmit = (data) => {
        if (data.password !== data.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(data.email, data.password, data.name, history);
        console.log(data);
    };

    return (
        <Container>
            {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field"
                    name="name"
                    placeholder="Your Name"
                    // onBlur={handleOnBlur}
                    {...register("name", { required: true })}
                />
                <br />
                <input
                    className="input-field"
                    name="email"
                    placeholder="Your Email"
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
                    className="input-field"
                    name="password2"
                    type="password"
                    placeholder="Retype Password"
                    // onBlur={handleOnBlur}
                    {...register("password2", { required: true })}
                />
                <br />

                <input
                    className="submit-btn btn btn-danger mt-3"
                    type="submit"
                    value="Register"
                />
            </form>}

            <NavLink
                style={{ textDecoration: 'none' }}
                to="/login">
                <button>Already Registered? Please Login</button>
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
        </Container>
    );
};

export default Register;