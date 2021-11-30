import { Col, Row } from "react-bootstrap";
import Image from 'next/image';
import Misocialwhy from '../../public/images/Misocial-why.jpg'
export default function MiSocial() {
    return (
        <div className="why-misocial">
            <div className="container">

                <Row>
                    <Col md={6}>
                        <div className="pr-custom">
                            <h2 className="title">Why MiSocial</h2>
                            <p className="subtitle">
                                We’re the fastest growing network of professionals & entrepreneurs!
                            </p>
                            <p className="subtitle">
                                Our network (your opportunity) in a snapshot: 32% entrepreneurs, 53% professionals, 15% executive,  65% female.
 
                            </p>
                            <p className="subtitle">
                                MiSocial is 100% free to join.
                            </p>
                        </div>
                    </Col>
                    <Col md={6} className="mysocialImg">
                        <Image src={Misocialwhy}
                        alt="Misocialwhy"
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}