import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const MakeAdmin = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        fetch("https://limitless-everglades-29893.herokuapp.com/makeAdmin", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Admin successfully added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            });

        reset()
    };


    return (
        <Container>

            <h4 className="font-monospace fw-bold pt-4">Make a Admin Whom You Want</h4>

            <hr className="w-75 mb-5 mx-auto" />


            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="p-3 m-3 w-50 input-field"
                    name="email"
                    placeholder="Email"
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />

                <input
                    className=" btn btn-info mt-4"
                    type="submit"
                    value="Make as Admin"
                />
            </form>
        </Container>
    );
};

export default MakeAdmin;