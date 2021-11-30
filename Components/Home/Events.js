import { Col, Row } from "react-bootstrap";
import eventImage from '../../public/images/event-mage.jpg';
import Image from 'next/image'
export default function Events() {
    return (
        <div className="event-wrapper">
            <div className="container">
                <Row>
                    <Col sm={6}>
                        <div className="pr-custom">
                        <h2 className="title">The Events</h2>
                        <p className="subtitle">MiSocial events bring the world of professionals & entrepreneurs together through live experiences.</p>
                        <p className="subtitle"> From curated networking events that take the guesswork out of how to build your network, to bespoke workshops that enhance your personal / professional brand.</p>
                    </div></Col>
                    <Col sm={6}>
                        <div className="img-box egntImagebg">
                            <Image src={eventImage} alt="eventImage" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}