import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SaleOff/SaleOff.scss'


function SaleOff() {
    return(
       <div className="sale-off">
            <Container>
            <Row>
                <Col>
                    <Button variant="primary" className="Sale__button">Invest and get 108.77% APY now</Button>
                </Col>
                <Col>
                    <p className="Sale__item">Earn 83% APY rewards</p>
                </Col>
                <Col>
                    <p className="Sale__item">Become a fund manager</p>
                </Col>
            </Row>
        </Container>
       </div>
    )
}

export default SaleOff;
