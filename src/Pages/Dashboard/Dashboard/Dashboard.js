import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import WelcomePage from '../WelcomePage/WelcomePage';

const Dashboard = () => {

    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth();
    console.log(admin);

    return (
        <Container>


            <Row className=" mt-4">

                <Col xs={2} md={3} >

                    <h5>Dashboard</h5>

                    <Link to={`${url}`}>
                        <li className="dashboard-menu mt-5">Welcome Page</li>
                    </Link>

                    {!admin && <div>
                        <Link to={`${url}/myOrder`}>
                            <li className="dashboard-menu mt-5">My Orders</li>
                        </Link>

                        <Link to={`${url}/pay`}>
                            <li className="dashboard-menu mt-2">Payment</li>
                        </Link>

                        <Link to={`${url}/review`}>
                            <li className="dashboard-menu mt-2">Review</li>
                        </Link>
                    </div>}


                    {admin && <div>
                        <Link to={`${url}/manageOrders`}>
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
                    </div>}


                    {user?.email &&
                        <Button onClick={logOut} className=" mt-2">Logout</Button>
                    }

                </Col>



                <Col xs={10} md={9}>

                    <Switch>


                        <Route exact path={path}>
                            <WelcomePage></WelcomePage>
                        </Route>

                        <Route exact path={`${path}/myOrder`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route exact path={`${path}/pay`}>
                            <Payment></Payment>
                        </Route>
                        <Route exact path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <AdminRoute exact path={`${path}/manageOrders`}>
                            <ManageOrders></ManageOrders>
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/addProducts`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                    </Switch>

                </Col>
            </Row>

        </Container>
    );
};

export default Dashboard;