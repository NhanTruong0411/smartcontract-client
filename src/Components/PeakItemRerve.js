import { Container, Col, Row } from 'react-bootstrap';

function PeakItemRerve({ imgUrl, desc, heading, col1, col2 }) {
    return (
        <Row className="mb-6 mb-72">
            <Col lg={col2}>
                <h3 className="peak__heading">{heading}</h3>
                <p className="peak__desc">{desc}</p>
            </Col>
            <Col lg={col1}>
                <img src={imgUrl} className="peak__img" alt="peak" />
            </Col>
        </Row>
    )
}

export default PeakItemRerve;