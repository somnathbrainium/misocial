import Image from "next/image";
import { Col, Form, FormControl, Row } from "react-bootstrap";
import organizer from '../../public/images/organizer.jpg';

export default function EventOrganizer() {
    return (
        <div className="organizer-wrapper" id="becomeorg">
            <div className="container">
                <Row>
                    <Col md={5} className="evOrg">
                        <Image
                            src={organizer}
                            alt="organizer" className="img-fluid"
                        />
                    </Col>
                    <Col md={7}>
                        <div className="pl-custom">
                            <h2 className="title">Become an event organizer</h2>
                            <p className="subtitle">Creating your own events is so easy. With us. </p>
                            <p className="subtitle">If you have a passion for event planning & can host events that will resonate with profesionals & entrepreneurs, we want you. Not to work for us, but rather to be the boss of your own events. </p>
                            <p className="subtitle">Next steps:<br />
                                Join now (it&apos;s free!). Once your profile is verified, you can
                                <span>Apply to create events.</span>
                            </p>

                            <Form className="d-flex search-box">
                                <FormControl
                                    type="search"
                                    placeholder="Enter your email id"
                                    className="mr-2"
                                    aria-label="Search"
                                />
                                <button className="btn btn-join-now">Join Now</button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}