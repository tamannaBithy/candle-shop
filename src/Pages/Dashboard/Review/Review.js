import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Container } from 'react-bootstrap';


const Review = () => {

    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = (data) => {
        data.image = user?.photoURL;

        axios.post('https://limitless-everglades-29893.herokuapp.com/review', data)
            .then(res => {
                // console.log("amar data", res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Thanks for your review',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset();

                }
            })
            .catch(function (error) {
                console.log(error);
            });
        // console.log(data);
    };


    return (
        <Container>

            <h4 className="font-monospace fw-bold pt-5">Write Down Your Review</h4>

            <hr className="w-75 mb-5 mx-auto" />

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field"
                    name="name"
                    value={user?.displayName}
                    {...register("name")}
                />
                <br />
                <input
                    className="input-field"
                    name="comments"
                    placeholder="Comments"
                    {...register("comments", { required: true })}
                />
                <br />

                <input
                    className="input-field"
                    type="number"
                    name="ratings"
                    placeholder="Rate us"
                    {...register("ratings", { required: true, min: 0, max: 5 })}
                />
                <br />

                <input
                    className="submit-btn btn btn-info mt-4"
                    type="submit"
                    value="Review"
                />
            </form>
        </Container>
    );
};

export default Review;