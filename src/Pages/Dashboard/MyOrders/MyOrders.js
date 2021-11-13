import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import Slide from 'react-reveal/Slide';


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

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://limitless-everglades-29893.herokuapp.com/deleteProduct/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount) {

                            Swal.fire(
                                'Deleted!',
                                'Your order has been deleted.',
                                'success'
                            )

                            const remainingUsers = orders.filter(order => order._id !== id);
                            setOrders(remainingUsers);
                            setIsDelete(true);
                        } else {
                            setIsDelete(false);
                        }
                    })
            }

        })
    };



    return (
        <Container className="mt-5">
            <Slide right>
                <h4 className="d-flex  justify-content-start font-monospace fw-bold">Greate, You Have Ordered {orders.length} Candles!</h4>
            </Slide>
            <hr className=" mb-5" />

            {orders.length === 0 ?

                <div className="d-flex justify-content-start gap-3 pt-3">
                    <div><i className="fas fa-info-circle"></i></div>
                    <p className=" text-muted">No data found at this moment.</p>
                </div>

                :

                <Table responsive bordered hover>
                    <thead >
                        <tr className="table-dark">
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {orders?.map((pd, index) => (
                        <tbody key={pd._id}>
                            <tr>
                                <td>{index + 1}</td>
                                <td>
                                    <img className="order-img" src={pd.image} alt="" />
                                </td>
                                <td>{pd.title}</td>
                                <td>{pd.phoneNumber}</td>
                                <td>{pd.email}</td>
                                <td>{pd.address}</td>

                                <td>
                                    <Button variant="light">
                                        <i onClick={() => handleDeleteProduct(pd._id)} className="fas fa-trash-alt"></i>
                                    </Button>
                                </td>
                            </tr>
                        </tbody>

                    ))}
                </Table>}

        </Container>
    );
};

export default MyOrders;