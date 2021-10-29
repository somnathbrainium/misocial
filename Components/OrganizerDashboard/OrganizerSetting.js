import { Col, Form, Row } from "react-bootstrap";

export default function OrganizerSetting() {
    return (
        <>
            <div className="organize-db-wrapper">

                <div className="my-profile-wrapper">
                    <div className="sign-nextstep-form">
                        <div className="stepfrm-inner organizer-dashboard-wrap">
                            <Form className="form-class">
                                <Form.Label className="section-name">Organizer Settings</Form.Label>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <div className="check-radio-wrap">
                                    <div className="form-label">Membership Status</div>
                                    <div className="gender-part">
                                        <label className="cs-wrapper">
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkmark"></span>
                                            <p className="label-text">Platinum</p>
                                        </label>
                                        <label className="cs-wrapper">
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                            <p className="label-text">Basic</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="check-radio-wrap">

                                    <div className="gender-part"><div className="form-label">Organizer Status</div>
                                        <label className="cs-wrapper">
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkmark"></span>
                                            <p className="label-text">No</p>
                                        </label>
                                        <label className="cs-wrapper">
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                            <p className="label-text">Approved</p>
                                        </label>
                                        <label className="cs-wrapper">
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                            <p className="label-text">Active</p>
                                        </label>
                                        <div className="orgSetting">
                                            <label className="cs-wrapper">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                                <p className="label-text">Disabled (by Admin)</p>
                                            </label>
                                            <label className="cs-wrapper">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                                <p className="label-text">Disabled (Expired Platinum Membership)</p>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <Form.Group className="mb-3  " controlId="exampleForm.ControlInput2">
                                    <Form.Label>Business Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3 " controlId="exampleForm.ControlInput3">
                                    <Form.Label>Business Identifier</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3 " controlId="exampleForm.ControlInput4">
                                    <Form.Label>Tax ID / ABN</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3 " controlId="exampleForm.ControlInput5">
                                    <Form.Label>Contact telephone number</Form.Label>
                                    <div className="select-box orgSel">
                                        <Form.Select className="form-control">
                                            <option defaultChecked>AUS +61</option>
                                            <option>Uk +4</option>
                                            <option>Uk +4</option>
                                            <option>Uk +4</option>
                                        </Form.Select>
                                        <Form.Control type="text" />
                                    </div>
                                </Form.Group>
                                <p className="host-title mb-0">Taxes to display on ticket invoice. </p>
                                <p className="nb-text">All ticket prices must be inclusive of any local taxes and charges that may apply.
                                    List below all taxes and charges that are included in your ticket price if applicable</p>


                                <div className="taxes-wrap">
                                    <label className="cs-wrapper">
                                        <input type="checkbox" defaultChecked />
                                        <span className="checkmark"></span>
                                        <p className="label-text">Tax / Charge 1</p>
                                    </label>

                                    <Row className="mb-3 per-position">
                                        <Col md="6">
                                            <Form.Group controlId="formGridAddress20">
                                                <Form.Label>Tax Name 1</Form.Label>
                                                <Form.Control />
                                            </Form.Group>
                                        </Col>
                                        <Col md="6">
                                            <Form.Group controlId="formGridAddress02">
                                                <Form.Label>Tax Percentage 1 (1-100%)</Form.Label>
                                                <Form.Control />
                                            </Form.Group>
                                        </Col>
                                        <span className="percent">%</span>
                                    </Row>

                                </div>
                                <div className="taxes-wrap">
                                    <label className="cs-wrapper">
                                        <input type="checkbox" defaultChecked />
                                        <span className="checkmark"></span>
                                        <p className="label-text">Tax / Charge 2</p>
                                    </label>

                                    <Row className="mb-3 per-position">
                                        <Col md="6">
                                            <Form.Group controlId="formGridAddress20">
                                                <Form.Label>Tax Name 2</Form.Label>
                                                <Form.Control />
                                            </Form.Group>
                                        </Col>
                                        <Col md="6">
                                            <Form.Group controlId="formGridAddress02">
                                                <Form.Label>Tax Percentage 2 (1-100%)</Form.Label>
                                                <Form.Control />
                                            </Form.Group>
                                        </Col>
                                        <span className="percent">%</span>
                                    </Row>

                                </div>
                                <div className="taxes-wrap">
                                    <label className="cs-wrapper">
                                        <input type="checkbox" defaultChecked />
                                        <span className="checkmark"></span>
                                        <p className="label-text">Tax / Charge 3</p>
                                    </label>

                                    <Row className="mb-3 per-position">
                                        <Col md="6">
                                            <Form.Group controlId="formGridAddress20">
                                                <Form.Label>Tax Name 3</Form.Label>
                                                <Form.Control />
                                            </Form.Group>
                                        </Col>
                                        <Col md="6">
                                            <Form.Group controlId="formGridAddress02">
                                                <Form.Label>Tax Percentage 3 (1-100%)</Form.Label>
                                                <Form.Control />
                                            </Form.Group>
                                        </Col>
                                        <span className="percent">%</span>
                                    </Row>
                                </div>

                                <div className="form-values">
                                    <label className="toggleSwitch">
                                        <input type="checkbox" />
                                        <span>
                                            <span>NO</span>
                                            <span>YES</span>
                                        </span>
                                        <a></a>
                                    </label>
                                    <p className="text">I have read and agree to the <a href="/organizer-terms">Organizer Terms &amp; Conditions</a> </p>
                                </div>

                                <button className="btn btn-next">Save</button>

                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}