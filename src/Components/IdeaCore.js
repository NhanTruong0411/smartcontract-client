import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './IdeaCore/IdeaCore.scss'
import ButtonJoin from './ButtonJoin';

function IdeaItem({ ...ideas }) {
    return (
        <Col lg={4} sm={12}>
            <Row>
                <Col lg="auto" xs={2} s className="serial">{ideas.serial}</Col>
                <Col xs={10}>
                    <h3  className="ideaHeading">{ideas.ideaHeading}</h3>
                    <p className="ideaDescription">{ideas.ideaDescription}</p>
                </Col >
            </Row>
        </Col>
    )
}

let listIdea = [
    {
        serial: '1',
        ideaHeading: 'Autonomous Optimization to achieve the best Results',
        ideaDescription: 'The Global Fund at PEAKDEFI redistributes itself automatically among the best performers through smart contracts for maximum success.'
    },
    {
        serial: "2",
        ideaHeading: "Open and transparent to Everybody",
        ideaDescription: "Everybody can become an investor! So can anybody become an Asset Manager and all transactions will be visibly to all on the blockchain."
    },
    {
        serial: "3",
        ideaHeading: "Community based Governance System",
        ideaDescription: "The fund is not controlled by any company or individual. It's governed by the community of users in a decentralized way to benefit all!"
    }
]


function IdeaCore() {
    return (
        <Container >
            <Row className="mb-6">
                {
                    listIdea.map((idea, index) =>
                        <IdeaItem
                            key={index}
                            serial={idea.serial}
                            ideaHeading={idea.ideaHeading}
                            ideaDescription={idea.ideaDescription}
                        />
                    )
                }
            </Row>
            <Row>
                <Col lg="12"  className="mb-72">
                    <div className="txt-center">
                        <h2 className="join__heading">Ready to join PEAKDEFI?</h2>
                        <ButtonJoin  >
                            Lauch App
                        </ButtonJoin>
                    </div>
                </Col>
                <Col lg="12" className="mb-72">
                    <div className="txt-center">
                        <h1 className="work__heading">How it works</h1>
                        <p className="work__desc">There are 3 Ways to build your Wealth through PEAKDEFI.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default IdeaCore;