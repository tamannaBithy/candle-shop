import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import swal from 'sweetalert';
import { useForm } from "react-hook-form";

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
        swal("Are you sure?", "Once deleted, you will not be able to book again", "error");

        fetch(`https://limitless-everglades-29893.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.deletedCount) {

                    const remainingUsers = manageOrders.filter(order => order._id !== id);
                    setManageOrders(remainingUsers);
                    setIsDelete(true);
                } else {
                    setIsDelete(false);
                }
            });
    };



    // for updating status
    const { register, handleSubmit } = useForm();
    const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("");


    const handleOrderId = (id) => {
        setOrderId(id);
    };

    const onSubmit = (data) => {
        console.log(data);
        swal("Yesss!", `Your orded have been ${data.status}!`, "info");

        fetch(`https://limitless-everglades-29893.herokuapp.com/manageOrders/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => setStatus(result));
    };



    return (
        <Container className="mt-5">
            <h1>Total Booked Services : {manageOrders.length}</h1>


            <Table responsive bordered hover>
                <thead >
                    <tr class="table-dark">
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


            {/* {manageOrders?.map((pd) => (
                            <div key={pd._id} className="col-md-6 col-lg-4">
                                <div className=" border border p-2 m-2">
                                    <h5>{pd.title}</h5>
                                    <h6>{pd.price}</h6>
                                    <p>{pd.email}</p>
                                    


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


                                    <button onClick={() => handleDeleteProduct(pd._id)} className="btn btn-danger m-2">Delete</button>
                                </div>
                            </div>
                        ))} */}


        </Container>
    );
};

export default ManageOrders;