import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const ManageOrders = () => {


    const [manageOrders, setManageOrders] = useState([]);
    const [isDelete, setIsDelete] = useState(null);



    useEffect(() => {
        fetch(`https://limitless-everglades-29893.herokuapp.com/manageOrders`)
            .then((res) => res.json())
            .then((data) => setManageOrders(data));
    }, [manageOrders, isDelete]);


    // for delete
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
                                'Your file has been deleted.',
                                'success'
                            )

                            const remainingUsers = manageOrders.filter(order => order._id !== id);
                            setManageOrders(remainingUsers);
                            setIsDelete(true);
                        } else {
                            setIsDelete(false);
                        }
                    })
            }

        })
    }


    // for updating status
    const { register, handleSubmit } = useForm();
    const [orderId, setOrderId] = useState("");


    const handleOrderId = (id) => {
        setOrderId(id);
    };

    const onSubmit = (data) => {
        console.log(data);

        fetch(`http://localhost:5000/manageOrders/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount === 1) {
                    alert("Orders updated successfully")
                }
            });
    };



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
                {manageOrders?.map((pd, index) => (
                    <tbody key={pd._id}>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.title}</td>
                            <td>{pd.price}</td>
                            <td>{pd.email}</td>
                            <td>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <select
                                        onClick={() => handleOrderId(pd?._id)}
                                        {...register("status")}
                                    >
                                        <option value={pd.status}>{pd.status}</option>
                                        <option value="Shipped">Shipped</option>
                                        <option value="Delivered">Delivered</option>
                                    </select>
                                    <input type="submit" value="update" />
                                </form>


                            </td>
                            <td><button onClick={() => handleDeleteProduct(pd._id)} className="btn btn-danger m-2">Delete</button></td>
                        </tr>
                    </tbody>

                ))}
            </Table>

        </Container>
    );
};

export default ManageOrders;