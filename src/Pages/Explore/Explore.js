import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Dropdown, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Rating from 'react-rating';
import './Explore.css';
import useAuth from '../../Hooks/useAuth';


const Explore = () => {
    const [products, setProducts] = useState([]);
    const { isLoading } = useAuth();

    useEffect(() => {
        fetch('https://limitless-everglades-29893.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <Container className="mt-5">
            <h2 className="pt-3 letter-spacing fw-bold ">EXPLORE ALL OF OUR PRODUCTS TODAY</h2>

            <Dropdown className="my-5 d-flex justify-content-end me-5 pe-5">
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                    Select Your Candle
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Aroma</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Diffiuser</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Flower</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {isLoading ? <Spinner animation="border" />
                :
                <Row xs={1} md={3} className="g-5 mb-5 pb-5 container">

                    {
                        products.map((pd) => <Col key={pd._id}>

                            <Fade bottom>
                                <Card className="card-height service-card">
                                    <Card.Img variant="top" className="service-img" src={pd.image} />
                                    <Card.Body>

                                        <Card.Title>
                                            {pd.title}
                                        </Card.Title>

                                        <Card.Text>
                                            <Rating
                                                initialRating={pd.review}
                                                readonly
                                                emptySymbol="far fa-star"
                                                fullSymbol="fas fa-star">
                                            </Rating>

                                            <q className="d-block my-2 text-muted"> {pd.details.slice(0, 212)}</q>
                                            <h6>${pd.price}</h6>
                                        </Card.Text>
                                    </Card.Body>

                                    <Link to={`/placeOrder/${pd._id}`}>
                                        <button type="button" className="btn btn-outline-secondary service-btn">Book Now</button>
                                    </Link>

                                </Card>
                            </Fade>

                        </Col>)
                    }

                </Row>}
        </Container>
    );
};

export default Explore;