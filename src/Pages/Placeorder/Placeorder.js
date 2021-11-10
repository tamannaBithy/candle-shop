import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import swal from 'sweetalert';
// import './Placeorder.css';
import Fade from 'react-reveal/Fade';
import Typist from 'react-typist';

const Placeorder = () => {

    const { user } = useAuth();
    const { displayName, email } = user;


    const { productId } = useParams();
    // console.log(serviceId)

    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
        async function callApi() {
            const res = await fetch(`http://localhost:5000/products/${productId}`);
            const data = await res.json();
            setProductDetails(data)
            // console.log('serviceDetails', serviceDetails);
        }
        callApi();
    }, [productId])

    const { image, title, details } = productDetails;



    // react hook form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.email = user?.email;
        data.status = "Pending";
        console.log("satus", data)

        axios.post('http://localhost:5000/manageOrders', data)
            .then(res => {
                // console.log("amar data", res.data);
                if (res.data.insertedId) {
                    swal("Good job!", "You have booked the service!", "success");
                    reset();

                }
            })
            .catch(function (error) {
                console.log(error);
            });


    };



    return (
        <Container className="mt-5">
            <h2 className="py-3"><Typist cursor={{
                show: false,
                blink: true,
                element: '|',
                hideWhenDone: false,
                hideWhenDoneDelay: 1000,
            }}>
                Place Your Order Today...
            </Typist></h2>


            <Row className="g-4 mt-4">

                <Col xs={12} md={6} className="add-service">

                    <Fade left>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("title", { required: true })}
                                defaultValue={productDetails?.title}
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("name")}
                                defaultValue={displayName}

                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("image", { required: true })}
                                defaultValue={productDetails?.image}
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("price", { required: true })}
                                defaultValue={productDetails?.price}
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
                                value="Order now"
                                className="btn btn-info w-50"
                            />
                        </form>
                    </Fade>

                </Col>

                <Col xs={12} md={5}>

                    <Fade right>
                        <Card className="card-height">
                            <Card.Img className="placeorder-img" variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    <div className="text-muted">{details}</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Fade>

                </Col>
            </Row>
        </Container>
    );
};

export default Placeorder;