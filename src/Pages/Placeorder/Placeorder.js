import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, Card, Col, Row, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import './Placeorder.css';
import Fade from 'react-reveal/Fade';
import Typist from 'react-typist';
import Swal from 'sweetalert2';


const Placeorder = () => {

    const { user } = useAuth();
    const { displayName, email } = user;


    const { productId } = useParams();
    // console.log(serviceId)

    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
        async function callApi() {
            const res = await fetch(`https://limitless-everglades-29893.herokuapp.com/products/${productId}`);
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

        axios.post('https://limitless-everglades-29893.herokuapp.com/manageOrders', data)
            .then(res => {
                // console.log("amar data", res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your order placed successfully',
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
        <Container className="mt-5 pb-5">
            <h2 className="pt-2 pb-5 letter-spacing fw-bold text-uppercase"><Typist cursor={{
                show: false,
                blink: true,
                element: '|',
                hideWhenDone: false,
                hideWhenDoneDelay: 1000,
            }}>
                Have the fragrance of candle...
            </Typist></h2>


            <Row className="g-4 mt-4">

                <Col xs={12} md={6} className="add-service">

                    <Fade left>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            {productDetails?.title && <input
                                {...register("title")}
                                defaultValue={productDetails?.title}
                                className="p-2 m-2 w-75 input-field"
                            />
                            }

                            {displayName && <input
                                {...register("name")}
                                defaultValue={displayName}
                                className="p-2 m-2 w-75 input-field"
                            />}

                            {email && <input
                                {...register("email")}
                                defaultValue={email}
                                className="p-2 m-2 w-75 input-field"
                            />}

                            {productDetails?.image && <input
                                {...register("image")}
                                defaultValue={productDetails?.image}
                                className="p-2 m-2 w-75 input-field"
                            />}

                            <input
                                {...register("phoneNumber", { required: true })}
                                placeholder="Enter phone number"
                                type="number"
                                className="p-2 m-2 w-75 input-field"
                            />

                            {errors.phoneNumber && <Toast>
                                <Toast.Body>
                                    This field is required
                                </Toast.Body>
                            </Toast>}


                            <input
                                {...register("address", { required: true })}
                                placeholder="Your address"
                                className="p-2 m-2 w-75 input-field"
                            />

                            {errors.address && <Toast>
                                <Toast.Body>
                                    This field is required
                                </Toast.Body>
                            </Toast>}




                            <select {...register("model")} className="p-2 m-4 w-75">
                                <option value="premium">premium</option>
                                <option value="classic">classic</option>
                                <option value="business">business</option>
                            </select>
                            <br />



                            <input
                                type="submit"
                                value="Order Now"
                                className="btn btn-info w-25 mt-4"
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
                                <Card.Text className="text-muted">
                                    {details}
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