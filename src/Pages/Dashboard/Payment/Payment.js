import React from 'react';
import { Container } from 'react-bootstrap';

const Payment = () => {
    return (
        <Container>
            <h4 className="font-monospace fw-bold pt-4 d-flex  justify-content-start mt-4">Pay Your Bill</h4>

            <hr className=" mb-4" />

            <div className="d-flex justify-content-start gap-3 pt-3">
                <div><i className="fas fa-info-circle"></i></div>
                <p className=" text-muted">Payment System Is Coming Soon. Thanks for your patience.</p>
            </div>

        </Container>
    );
};

export default Payment;