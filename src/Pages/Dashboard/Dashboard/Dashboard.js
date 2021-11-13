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
import Slide from 'react-reveal/Slide';


const Dashboard = () => {

    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth();
    console.log(admin);

    return (
        <Container className="mb-5 pb-5">

            <Row xs={1} md={2} className=" my-5 py-5">

                <Col xs={12} md={2}>

                    <Slide left>
                        <h4 className="mt-5 mb-3 font-monospace fw-bold">Dashboard</h4>
                    </Slide>
                    <hr />

                    {
                        !admin &&
                        <div>
                            <Link to={`${url}`}>
                                <li className="dashboard-menu mt-5 cool-link mb-2 "> <i className="fas fa-table me-3"></i>My Orders</li>
                            </Link>

                            <Link to={`${url}/pay`} className="dash-link">
                                <li className="dashboard-menu mt-3 cool-link mb-2 me-3"><i className="fab fa-cc-amazon-pay me-3"></i>Payment</li>
                            </Link>

                            <Link to={`${url}/review`} className="dash-link">
                                <li className="dashboard-menu mt-3 cool-link mb-2 me-3"><i className="fas fa-feather-alt me-4"></i>Review</li>
                            </Link>
                        </div>
                    }


                    {
                        admin &&
                        <div>
                            <Link to={`${url}`}>
                                <li className="dashboard-menu mt-5 cool-link mb-2"> <i className="fas fa-table me-1"></i> Manage All Orders</li>
                            </Link>

                            <Link to={`${url}/addProducts`} className="dash-link">
                                <li className="dashboard-menu mt-3 cool-link mb-2 me-4"> <i className="fas fa-folder-plus me-3"></i>Add A Product</li>
                            </Link>

                            <Link to={`${url}/makeAdmin`} className="dash-link">
                                <li className="dashboard-menu mt-2 mt-3 cool-link mb-2 me-4"> <i className="fas fa-user-cog me-4"></i>Make Admin</li>
                            </Link>

                            <Link to={`${url}/manageProducts`} className="dash-link">
                                <li className="dashboard-menu mt-2 mt-3 cool-link mb-2"> <i className="fas fa-tasks me-3"></i>Manage Products</li>
                            </Link>
                        </div>
                    }


                    {user?.email &&
                        <Button variant="outline-dark" onClick={logOut} className=" my-5 me-2">Logout</Button>
                    }

                </Col>



                <Col xs={12} md={10} className="dashboard-bg pb-5">

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