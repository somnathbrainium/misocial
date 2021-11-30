import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import venueIame from '../../public/images/venue.png'

export default function Venue() {
    return (
        <div className="venue-wrapper">
            <div className="container">

                <Row>
                    <Col sm="5">
                        <div className="img-box">
                            <Image
                                src={venueIame}
                                alt="test"
                            />
                        </div>
                    </Col>
                    <Col sm="7">
                        <div className="pl-custom">
                            <h2 className="title">The Venues</h2>
                            <p className="subtitle">Events are hosted in venues that perfectly enhance the experience of networking, workshop collaboration, learning and new skills development
                            </p>
                            <p className="subtitle">Our networking  events are hosted in venues that are spacious, intimate, ambient, and atmospheric. Every location chosen to ensure interactions flow effortlessly and connections happen without engineering. </p>
                        </div> </Col>
                </Row>
            </div>
        </div>
    )
}