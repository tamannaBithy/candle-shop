import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2';



const AddProduct = () => {


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        axios.post('https://limitless-everglades-29893.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully added your product',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    return (
        <Container>
            <h4 className="font-monospace fw-bold pt-5">Add One More Candle <i className="fas fa-hanukiah"></i></h4>

            <hr className="w-75 mb-4 mx-auto" />


            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("title", { required: true })}
                    placeholder="Title"
                    className="p-2 m-2 w-50 input-field"
                />

                <input
                    {...register("details", { required: true })}
                    placeholder="Description"
                    className="p-2 m-2 w-50 input-field"
                />

                <input
                    {...register("price", { required: true })}
                    placeholder="Price"
                    type="number"
                    className="p-2 m-2 w-50 input-field"
                />

                <input
                    className="p-2 m-2 w-50 input-field"
                    type="number"
                    name="ratings"
                    placeholder="ratings"
                    {...register("review", { required: true, min: 0, max: 5 })}
                />

                <input
                    {...register("image", { required: true })}
                    placeholder="Image Link"
                    className="p-2 m-2 w-50 input-field"
                />

                <p className="text-muted">
                    <small>
                        * Please use a image link that hosted in imagebb <br />or you can use this https://i.ibb.co/bLHrN59/port-1-img-02.jpg
                    </small>
                </p>

                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                    type="submit"
                    value="Add"
                    className="btn btn-info w-25 mt-2"
                />
            </form>
        </Container>
    );
};

export default AddProduct;