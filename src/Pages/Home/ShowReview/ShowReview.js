import React, { useEffect, useState } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import reviewpic from '../../../images/review.jpg';
import './ShowReview.css';

const ShowReview = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://limitless-everglades-29893.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])



    return (
        <div className="pb-5 mb-5">
            <Row xs={1} md={2} className=" review-row">

                <Col className="ps-5">

                    <div className="d-flex align-items-center justify-content-start pt-4">
                        <h5 className="font-monospace text-uppercase fw-bold"> You Said About Us</h5>
                        <i className="far fa-smile ms-3 fs-4 "></i>
                    </div>
                    <h4 className="d-flex  justify-content-start text-uppercase fw-bold letter-spacing pt-3">Amazing Page</h4>

                    <Carousel indicators={false} controls={false} className="pt-4">
                        {
                            reviews.map(review => <Carousel.Item key={review._id}>

                                <q className="d-flex  justify-content-start py-3 fst-italic">{review.comments}</q>
                                <p className="d-flex  justify-content-start ">
                                    <Rating
                                        initialRating={review.ratings}
                                        readonly
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star">
                                    </Rating>
                                </p>

                                <h6 className="d-flex  justify-content-start py-2"> - {review.name}</h6>

                            </Carousel.Item>
                            )
                        }
                    </Carousel>
                </Col>

                <Col><img className="img-fluid" src={reviewpic} alt="" /></Col>
            </Row>
        </div>
    );
};

export default ShowReview;