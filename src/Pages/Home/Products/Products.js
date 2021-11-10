import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
// import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)));
    }, [])


    return (
        <Container>
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
                                        {/* <Rating
                            initialRating={pd.review}
                            readonly
                            emptySymbol="far fa-circle"
                            fullSymbol="fas fa-circle">
                        </Rating>
                        <span className="ms-4">{pd.review} review</span> */}

                                        {pd.description}
                                    </Card.Text>
                                </Card.Body>

                                <Link to={`/placeOrder/${pd._id}`}>
                                    <button type="button" className="btn btn-outline-secondary service-btn">Book Now</button>
                                </Link>

                            </Card>
                        </Fade>

                    </Col>)
                }

            </Row>
        </Container>
    );
};

export default Products;