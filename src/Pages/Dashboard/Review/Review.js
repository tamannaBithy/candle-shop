import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';


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
                        title: 'Your work has been saved',
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
        <div>
            <h1>Review</h1>
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
                    placeholder="ratings"
                    {...register("ratings", { required: true, min: 0, max: 5 })}
                />
                <br />

                <input
                    className="submit-btn btn btn-danger mt-3"
                    type="submit"
                    value="review"
                />
            </form>
        </div>
    );
};

export default Review;