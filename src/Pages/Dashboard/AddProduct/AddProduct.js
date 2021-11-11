import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import swal from 'sweetalert';


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
                    swal("Great job!", "You have added a product!", "success");
                    reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("title", { required: true })}
                    placeholder="Title"
                    className="p-2 m-2 w-100 input-field"
                />

                <input
                    {...register("details", { required: true })}
                    placeholder="Description"
                    className="p-2 m-2 w-100 input-field"
                />

                <input
                    {...register("image", { required: true })}
                    placeholder="Image Link"
                    className="p-2 m-2 w-100 input-field"
                />

                <input
                    {...register("price", { required: true })}
                    placeholder="Price"
                    type="number"
                    className="p-2 m-2 w-100 input-field"
                />

                <select {...register("model")} className="p-2 m-2 w-100">
                    <option value="premium">premium</option>
                    <option value="classic">classic</option>
                    <option value="business">business</option>
                </select>
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                    type="submit"
                    value="Add"
                    className="btn btn-info w-50"
                />
            </form>
        </Container>
    );
};

export default AddProduct;