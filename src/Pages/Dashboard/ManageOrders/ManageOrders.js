import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import OrderStatus from '../OrderStatus/OrderStatus';
import Slide from 'react-reveal/Slide';


const ManageOrders = () => {

    const [manageOrders, setManageOrders] = useState([]);


    useEffect(() => {
        fetch(`https://limitless-everglades-29893.herokuapp.com/manageOrders`)
            .then((res) => res.json())
            .then((data) => setManageOrders(data));
    }, [manageOrders]);



    return (
        <Container className="mt-5">
            <Slide right>
                <h4 className="d-flex  justify-content-start font-monospace fw-bold">There Are Total {manageOrders.length} Orders to Review</h4>
            </Slide>
            <hr className=" mb-5" />

            <Table responsive bordered hover >
                <thead >
                    <tr className="table-dark">
                        <th>#</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {manageOrders?.map((pd, index) => (
                        <OrderStatus key={pd._id} pd={pd} index={index}></OrderStatus>
                    ))}

                </tbody>

            </Table>

        </Container>
    );
};

export default ManageOrders;