import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import conceptImage from '../../public/images/concept-image.jpg';

function Concept() {
    return (
        <div className="concept-wrapper">
            <div className="container">
            <Row>
                <Col md={5} className="concImg">
                    <Image
                    src={conceptImage}
                    alt="conceptImage"
                    className="concept-image"
                    />
                </Col>
                <Col md={7}>
                    <div className="concept-content">
                        <h2>The Concept</h2>
                        <p>MiSocial is an  innovative events platform that caters exclusively to the  needs of professionals & entrepreneurs. From curated bespoke networking events that make in person connections organic. 
                            To best in class workshops to enhance your personal & professional brand. Elevate your biggest assets, network plus brand with MiSocial. </p>
                        <p>
                            For event organizers that love event planning, the opportunity to manage all your events. And every aspect. All on one platform.
                        </p>
                    </div>
                </Col>
            </Row>
            </div>
        </div>
    )
}
    export default Concept;