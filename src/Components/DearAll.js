import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DearAll/DearAll.scss'

function DearAll() {

    return (
        <Container >
            <Row className="justify-content-lg-center">
                <Col >
                    <h2 className="fund__heading">One fund to be ruled by all!</h2>
                    <p className="fund__desc">The desire of every investor is pretty simple: Maximum return!
                        some might be interested in the How,
                        the majority of investors just want to enjoy the monthly growth of their money.
                        For these people, this fund was created. PEAKDEFI - One global fund for all,
                        transparent to all, governed by all, to reach the PEAK of the Markets.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default DearAll;