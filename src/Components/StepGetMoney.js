import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StepGetMoney/StepGetMoney.scss'
import peakImage from './StepGetMoney/image/Peak-DeFi-Optimization.jpg'



function StepGetMoney() {

    return (
       <div className="peak">
            <Container>
            <Row>
                <Col lg="8">
                    <img src={peakImage} className="peak__img" alt="peak" />
                </Col>
                <Col lg="4">
                    <h3 className="step__heading">Optimized Fund Distribution</h3>
                    <p className="Sale__item">It is well known that you should always diversify your risk and distribute your investment between different baskets.
                        With PEAKDEFI the distribution of your funds adjusts itself and gets optimized automatically between the best asset managers through smart contracts.
                        You don't have to worry about making the right choices.
                    </p>
                </Col>
            </Row>
        </Container>
       </div>
    )
}

export default StepGetMoney;