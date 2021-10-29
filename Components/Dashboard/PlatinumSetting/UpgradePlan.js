import { Col, Form, Row } from "react-bootstrap";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Link from 'next/link'

export default function UpgradePlan() {
    return (
        <Form className="form-class">
            <Form.Label className="section-name">Why Platinum</Form.Label>

            <ul className="nav plan-feature-wrap">
                <li className="nav-item">Discounted Tickets to Curated Networking Events </li>
                <li className="nav-item">Invites to Exclusive Platinum only Events</li>
                <li className="nav-item">Cancel Anytime</li>
            </ul>
            <div className="plan-price">
                <span>
                    $9
                </span>
                <label>/Month</label>
            </div>
            <Link href="/dashboard/platinum-settings-next" passHref>
                <button className="btn btn-next"> Upgrade to Platinum</button>
            </Link>
            <p className="host-title mt-5">Enter your credit card details</p>
            <div className="form-hints-container mt-2">

                <Form.Group className="mb-3" controlId="exampleForm1">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm2">
                    <Form.Label>Cardholder Name</Form.Label>

                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm3">
                    <div className="direction-by">
                        <Form.Label>Tax ID / ABN</Form.Label>
                        <span className="hints"><AiOutlineInfoCircle /></span>
                    </div>
                    <Form.Control type="text" />
                </Form.Group>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm4">
                            <Form.Label>Expiry Date</Form.Label>
                            <Form.Control type="text" />

                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm4">
                            <div className="direction-by">
                                <Form.Label>Cvv</Form.Label>
                                <span className="hints"><AiOutlineInfoCircle /></span>
                            </div>

                            <Form.Control type="number" />

                        </Form.Group>
                    </Col>
                </Row>


                <button className="btn btn-next">Pay Now</button>

                <p className="payment-hints">
                    Your Platinum membership will auto-renew monthly. If you ever decide to cancel, you can do so anytime. However be sure to do so before the renewal date to avoid being charged for the next period.
                </p>
            </div>
        </Form>
    )
}
