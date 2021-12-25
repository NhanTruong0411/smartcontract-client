import { Container, Col, Row } from 'react-bootstrap';

function PeakItem({ imgUrl, desc, heading, col1, col2 }) {
    return (
        <Row className="mb-6 mb-72">
            <Col lg={col1}>
                <img src={imgUrl} className="peak__img" alt="peak" />
            </Col>
            <Col lg={col2}>
                <h3 className="peak__heading">{heading}</h3>
                <p className="peak__desc">{desc}</p>
            </Col>
        </Row>
    )
}

export default PeakItem;