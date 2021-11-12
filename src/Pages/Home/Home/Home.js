import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import ImageGroup from '../ImageGroup/ImageGroup';
import Products from '../Products/Products';
import ShowReview from '../ShowReview/ShowReview';


const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <Products></Products>
            <ImageGroup></ImageGroup>
            <ShowReview></ShowReview>
        </Container>
    );
};

export default Home;