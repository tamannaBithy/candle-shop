import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';


const MyOrders = () => {

    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    const [isDelete, setIsDelete] = useState(null);



    useEffect(() => {
        fetch(`https://limitless-everglades-29893.herokuapp.com/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.email, isDelete]);


    const handleDeleteProduct = (id) => {
        // console.log(id);
        swal("Are you sure?", "Once deleted, you will not be able to book again", "error");

        fetch(`https://limitless-everglades-29893.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.deletedCount) {
                    setIsDelete(true);
                } else {
                    setIsDelete(false);
                }
            });
    };



    return (
        <Container className="mt-5">
            <h1>Your Booked Service : {orders.length}</h1>

            <Table responsive bordered hover>
                <thead >
                    <tr class="table-dark">
                        <th>#</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((pd, index) => (
                    <tbody key={pd._id}>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.title}</td>
                            <td>{pd.price}</td>
                            <td>{pd.email}</td>
                            <td><button onClick={() => handleDeleteProduct(pd._id)} className="btn btn-danger m-2">delete</button></td>
                        </tr>
                    </tbody>

                ))}
            </Table>

        </Container>
    );
};

export default MyOrders;