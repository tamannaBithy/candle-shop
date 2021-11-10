import React from 'react';
import { Container } from 'react-bootstrap';
import Products from '../Products/Products';
// import Banner from '../Banner/Banner';
// import ContactUs from '../ContactUs/ContactUs';


const Home = () => {
    return (
        <Container>
            {/* <Banner></Banner>
           
           
            <ContactUs></ContactUs> */}
            <Products></Products>
        </Container>
    );
};

export default Home;