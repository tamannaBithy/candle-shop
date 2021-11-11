import React, { useEffect, useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';

const ShowReview = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://limitless-everglades-29893.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])


    return (
        <Container>
            <Carousel>
                {
                    reviews.map(review => <Carousel.Item key={review._id}>
                        {/* <img
                            className="d-block w-100 carosel-img"
                            src={review.image}
                            alt="First slide"
                        /> */}
                        <h3>{review.name}</h3>
                        <p>{review.comments} are available now!</p>
                        <p>{review.ratings}</p>
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    )
                }
            </Carousel>
        </Container>
    );
};

export default ShowReview;