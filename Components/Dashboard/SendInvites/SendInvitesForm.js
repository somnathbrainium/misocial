import { Col, Form, Row } from "react-bootstrap";
import Image from 'next/image';
import csvImage from '../../../public/images/csvImage.png';

export default function SendInvitesForm() {
    return (
        <>
            <Form className="form-class sendinvites-wrapper">

                <Form.Group className="mb-3" controlId="Eventname">
                    <Form.Label>Event name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="Datejoinedfrom">
                            <Form.Label>Date joined from</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="Datejoinedto">
                            <Form.Label>Date joined to</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="age-from">
                            <Form.Label>Age from</Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="age-to">
                            <Form.Label>Age to</Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>
                    </Col>
                </Row>


                <div className="check-radio-wrap">
                    <div className="form-label">Gender</div>
                    <div className="gender-part">
                        <label className="cs-wrapper">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                            <p className="label-text">Male</p>
                        </label>
                        <label className="cs-wrapper">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <p className="label-text">Female</p>
                        </label>
                    </div>
                </div>
                <div className="check-radio-wrap">
                    <div className="form-label">Membership</div>
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
                    <div className="form-label">Occupation</div>
                    <div className="gender-part">
                        <label className="cs-wrapper">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                            <p className="label-text">Professional</p>
                        </label>
                        <label className="cs-wrapper">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <p className="label-text">Entrepreneur</p>
                        </label>
                        <label className="cs-wrapper">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <p className="label-text">Other</p>
                        </label>
                    </div>
                </div>

                <div className="check-radio-wrap">
                    <div className="form-label">Email verified</div>
                    <div className="gender-part">
                        <label className="cs-wrapper">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                            <p className="label-text">Yes</p>
                        </label>
                        <label className="cs-wrapper">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <p className="label-text">No</p>
                        </label>

                    </div>
                </div>


                <div className="sub-iiner">
                    <div className="check-radio-wrap">
                        <div className="form-label">MiSocial News</div>
                        <div className="gender-part">
                            <label className="cs-wrapper">
                                <input type="checkbox" defaultChecked />
                                <span className="checkmark"></span>
                                <p className="label-text">Yes</p>
                            </label>
                            <label className="cs-wrapper">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <p className="label-text">No</p>
                            </label>
                        </div>
                    </div>
                    <div className="check-radio-wrap">
                        <div className="form-label">Organizer</div>
                        <div className="gender-part">
                            <label className="cs-wrapper">
                                <input type="checkbox" defaultChecked />
                                <span className="checkmark"></span>
                                <p className="label-text">Yes</p>
                            </label>
                            <label className="cs-wrapper">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <p className="label-text">No</p>
                            </label>
                        </div>
                    </div>
                    <div className="check-radio-wrap">
                        <div className="form-label">MID</div>
                        <div className="gender-part">
                            <label className="cs-wrapper">
                                <input type="checkbox" defaultChecked />
                                <span className="checkmark"></span>
                                <p className="label-text">Z</p>
                            </label>
                            <label className="cs-wrapper">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <p className="label-text">A</p>
                            </label>
                            <label className="cs-wrapper">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <p className="label-text">B</p>
                            </label>
                            <label className="cs-wrapper">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <p className="label-text">C</p>
                            </label>
                        </div>
                    </div>
                    <div className="form-values sendInvit mb-4">
                        <label className="toggleSwitch">
                            <input type="checkbox" defaultChecked />
                            <span>NO</span>
                            <span>YES</span>
                            <a></a>
                        </label>
                        <p className="text">Add Invitation List</p>
                    </div>
                    <div className="file-upload-area">
                        <input type="file" id="actual-btn" hidden />
                        <label htmlFor="actual-btn">
                            <Image className="upload-image"
                                src={csvImage}
                                alt="cameraIcon"
                            />

                            <span>Upload CSV File</span>
                        </label>
                    </div>
                    <p className="payment-hints"><strong> Important:</strong> Make sure your CSV file is formatted with email addresses in the first column (A), and first names in the second column (B)</p>
                    <div className="successfull-tips">
                        Successfully imported 5 out of 100 records
                    </div>

                    <div className="save-cancel-action">
                        <button className="btn btn-next">Send invitation</button>
                        <button className="btn btn-cancel">Clear filter</button>
                    </div>
                    <p className="payment-hints">
                        By Continuing, I am aware that I am responsible for my own data privacy obligations related to email marketing, including securing any required opt-in consent from the recipients.
                    </p>
                </div>
            </Form>

        </>
    )
}