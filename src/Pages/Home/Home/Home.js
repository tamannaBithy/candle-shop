import React from 'react';
import { Container } from 'react-bootstrap';
import Products from '../Products/Products';
import ShowReview from '../ShowReview/ShowReview';
// import Banner from '../Banner/Banner';
// import ContactUs from '../ContactUs/ContactUs';


const Home = () => {
    return (
        <Container>
            {/* <Banner></Banner>
           
           
            <ContactUs></ContactUs> */}
            <Products></Products>
            <ShowReview></ShowReview>
        </Container>
    );
};

export default Home;