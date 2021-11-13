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
            <h4 className="font-monospace fw-bold pt-4">Add Your Own Candle <i className="fas fa-hanukiah"></i></h4>

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
                    {...register("image", { required: true })}
                    placeholder="Image Link"
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

                <select {...register("model")} className="p-2 m-2 w-50">
                    <option value="premium">premium</option>
                    <option value="classic">classic</option>
                    <option value="business">business</option>
                </select>
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                    type="submit"
                    value="Add"
                    className="btn btn-info w-25 mt-3"
                />
            </form>
        </Container>
    );
};

export default AddProduct;