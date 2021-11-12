import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import './Dashboard.css';


const Dashboard = () => {

    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth();
    console.log(admin);

    return (
        <Container>


            <Row className=" mt-4">

                <Col xs={2} md={3} >

                    <h5>Dashboard</h5>

                    {
                        !admin &&
                        <div>
                            <Link to={`${url}`}>
                                <li className="dashboard-menu mt-5">My Orders</li>
                            </Link>

                            <Link to={`${url}/pay`}>
                                <li className="dashboard-menu mt-2">Payment</li>
                            </Link>

                            <Link to={`${url}/review`}>
                                <li className="dashboard-menu mt-2">Review</li>
                            </Link>
                        </div>
                    }


                    {
                        admin &&
                        <div>
                            <Link to={`${url}`}>
                                <li className="dashboard-menu mt-2">Manage All Orders</li>
                            </Link>

                            <Link to={`${url}/addProducts`}>
                                <li className="dashboard-menu mt-2">Add A Product</li>
                            </Link>

                            <Link to={`${url}/makeAdmin`}>
                                <li className="dashboard-menu mt-2">Make Admin</li>
                            </Link>

                            <Link to={`${url}/manageProducts`}>
                                <li className="dashboard-menu mt-2">Manage Products</li>
                            </Link>
                        </div>
                    }


                    {user?.email &&
                        <Button onClick={logOut} className=" mt-2">Logout</Button>
                    }

                </Col>



                <Col xs={10} md={9}>

                    <Switch>

                        {
                            admin &&
                            <div>
                                <Route exact path={path}>
                                    <ManageOrders></ManageOrders>
                                </Route>
                                <Route path={`${path}/addProducts`}>
                                    <AddProduct></AddProduct>
                                </Route>
                                <Route path={`${path}/makeAdmin`}>
                                    <MakeAdmin></MakeAdmin>
                                </Route>
                                <Route path={`${path}/manageProducts`}>
                                    <ManageProducts></ManageProducts>
                                </Route>

                            </div>
                        }


                        {
                            !admin &&
                            <div>

                                <Route exact path={`${path}`}>
                                    <MyOrders></MyOrders>
                                </Route>
                                <Route path={`${path}/pay`}>
                                    <Payment></Payment>
                                </Route>
                                <Route path={`${path}/review`}>
                                    <Review></Review>
                                </Route>
                            </div>
                        }



                    </Switch>

                </Col>
            </Row>

        </Container>
    );
};

export default Dashboard;