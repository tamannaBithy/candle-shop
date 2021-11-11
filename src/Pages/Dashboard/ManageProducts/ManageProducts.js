import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Swal from 'sweetalert2';



const ManageProducts = () => {

    const [products, setProducts] = useState([]);
    const [isDelete, setIsDelete] = useState(null);

    useEffect(() => {
        fetch('https://limitless-everglades-29893.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products, isDelete])


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
                fetch(`https://limitless-everglades-29893.herokuapp.com/deleteMainProducts/${id}`, {
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

                            const remainingUsers = products.filter(order => order._id !== id);
                            setProducts(remainingUsers);
                            setIsDelete(true);
                        } else {
                            setIsDelete(false);
                        }
                    })
            }

        })
    };




    return (
        <Container>
            <Row xs={1} md={3} className="g-5 mb-5 pb-5 container">

                {
                    products.map((pd) => <Col key={pd._id}>

                        <Fade bottom>
                            <Card className="card-height service-card">
                                <Card.Img variant="top" className="service-img" src={pd.image} />
                                <Card.Body>

                                    <Card.Title>
                                        {pd.title}
                                    </Card.Title>

                                    <Card.Text>

                                        <h6>${pd.price}</h6>
                                    </Card.Text>
                                </Card.Body>


                                <button onClick={() => handleDeleteProduct(pd._id)} type="button" className="btn btn-outline-secondary service-btn">Delete Now</button>


                            </Card>
                        </Fade>

                    </Col>)
                }

            </Row>
        </Container>
    );
};

export default ManageProducts;