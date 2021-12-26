import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StepGetMoney/StepGetMoney.scss'
import peakImage from './StepGetMoney/image/Peak-DeFi-Optimization.jpg'
import peakImage2 from './StepGetMoney/image/peak2.jpg'
import peakImage3 from './StepGetMoney/image/peak3.jpg'
import PeakItem from './PeakItem.js';
import PeakItemRerve from './PeakItemRerve';
import ButtonJoin from './ButtonJoin.js'

function StepGetMoney() {
    return (
        <div className="peak">
            <Container>
                <PeakItem
                    imgUrl={peakImage}
                    heading="Optimized Fund Distribution"
                    desc="It is well known that you should always diversify your risk and distribute your investment between different baskets. With PEAKDEFI the distribution of your funds adjusts itself and gets optimized automatically between the best asset managers through smart contracts
                    . You don’t have to worry about making the right choices."
                    col1="4"
                    col2="8"
                />
                < PeakItemRerve
                    imgUrl={peakImage3}
                    heading="Optimized Fund Distribution"
                    desc="It is well known that you should always diversify your risk and distribute your investment between different baskets. With PEAKDEFI the distribution of your funds adjusts itself and gets optimized automatically between the best asset managers through smart contracts
                    . You don’t have to worry about making the right choices."
                    col1="4"
                    col2="8"
                />
                <PeakItem
                    imgUrl={peakImage2}
                    heading="Flexibility through short Cycles"
                    desc="In todays world, flexibility is one of the most valuable treasures.
                     To guarantee the managers as well as the investors more flexibility there is a fixed management period of just 60 days. 
                     In this period managers can make proper trading decisions while investors can access their funds again quickly."
                    col1="4"
                    col2="8"
                />
                <Row className="mb-72">
                    <Col>
                        <div className="txt-center">
                            <h2 className="join__heading">Ready to join PEAKDEFI?</h2>
                            <ButtonJoin  >
                                Lauch App
                            </ButtonJoin>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default StepGetMoney;