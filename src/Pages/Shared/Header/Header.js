import React from 'react';
import { Container, Navbar, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';



const Header = () => {
    const { user, logOut } = useAuth();


    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" className="navbar py-4">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        Home
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav className="me-auto">

                            <Nav.Link as={Link} to="/explore" className="font-color me-5 ms-5">Explore</Nav.Link>

                            {user?.email && <Nav.Link as={Link} to="/dashboard" className="font-color">Dashboard</Nav.Link>}

                        </Nav>


                        <Nav>
                            <Nav.Link as={Link} to="/home" className="font-color me-4"><i className="far fa-heart me-1"></i>( 0 )</Nav.Link>
                            <Nav.Link as={Link} to="/home" className="font-color me-4"><i class="fas fa-shopping-bag me-1"></i>( 0 )</Nav.Link>

                            {user?.email ?
                                <Button onClick={logOut} variant="outline-dark" className="me-4 ">Logout</Button> :
                                <Nav.Link as={Link} to="/login" variant="outline-dark" className="me-4 ">Login</Nav.Link>}

                            <Navbar.Text className="userName">
                                <a href="#login" >{user?.displayName}</a>
                            </Navbar.Text>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;