import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import OrderStatus from '../OrderStatus/OrderStatus';

const ManageOrders = () => {

    const [manageOrders, setManageOrders] = useState([]);


    useEffect(() => {
        fetch(`https://limitless-everglades-29893.herokuapp.com/manageOrders`)
            .then((res) => res.json())
            .then((data) => setManageOrders(data));
    }, [manageOrders]);



    return (
        <Container className="mt-5">
            <h1>Total Booked Services : {manageOrders.length}</h1>

            <Table responsive bordered hover>
                <thead >
                    <tr className="table-dark">
                        <th>#</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>email</th>
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