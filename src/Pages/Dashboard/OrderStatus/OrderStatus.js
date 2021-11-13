import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import './OrderStatus.css';
import { Button } from 'react-bootstrap';


const OrderStatus = ({ pd, index }) => {

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
                                'This order has been deleted.',
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

        fetch(`https://limitless-everglades-29893.herokuapp.com/manageOrders/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount === 1) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Order status have been updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            });
    };


    return (


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
                <form onSubmit={handleSubmit(onSubmit)}>

                    <select
                        className="btn btn-outline-dark btn-sm"
                        onClick={() => handleOrderId(pd?._id)}
                        {...register("status")}
                    >
                        <option value={pd.status}>{pd.status}</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                    </select>
                    <input type="submit" className="btn btn-outline-dark btn-sm ms-2" value="Update" />

                </form>
            </td>

            <td>
                <Button variant="light">
                    <i onClick={() => handleDeleteProduct(pd._id)} className="fas fa-trash-alt"></i>
                </Button>

            </td>

        </tr>


    );
};

export default OrderStatus;