import Image from "next/image";
import { Button, Form, Modal } from "react-bootstrap";
import recaptcha from "../../public/images/recaptcha.png";
import successTick from '../../public/images/successTick.png';
import Link from 'next/link';
import { useState } from "react";

export default function FormSection() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="step-one-form">
            <div className="stepfrm-inner">
                <h2 className="header">Join now</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter your email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Create Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>

                    <div className="captcha">
                        <div className="cap-text">
                            <input id="name" type="checkbox" />
                            <label htmlFor="name">I’m not a robot</label>
                        </div>
                        <button className="btn btn-recaptcha">
                            <Image
                                src={recaptcha}
                                alt="recaptcha"
                            />
                        </button>
                    </div>
                    <div className="form-values">
                        <label className="toggleSwitch" >
                            <input type="checkbox" defaultChecked />
                            <span>
                                <span>NO</span>
                                <span>YES</span>
                            </span>
                            <a>

                            </a>
                        </label>
                        <p className="text"> I have read and agree to the <span>Terms & Conditions and Privacy Policy</span></p>
                    </div>
                    <div className="form-values">
                        <label className="toggleSwitch" >
                            <input type="checkbox" />
                            <span>
                                <span>NO</span>
                                <span>YES</span>
                            </span>
                            <a>

                            </a>
                        </label>
                        <p className="text"> I want   receive MiSocial news, offers and promotions</p>
                    </div>

                    <button className="btn btn-next" onClick={handleShow} type="button">Next</button>
                    {/* <button className="btn btn-next">Next</button> */}
                </Form>
                <p className="members-already">Already a Member?
                    <Link href="login"> Login Now</Link>
                </p>
            </div>

            <Modal show={show} onHide={handleClose} className="universalModal formNextmodal">
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>
                    <div className="successReset-modal">
                        <div className="text-center">
                            <Image
                                src={successTick}
                                alt="successTick"

                            />
                            {/* <Modal.Title>Password updated</Modal.Title> */}
                            <p>Open the email we just sent you and confirm your email. You may need to check your spam folder and ensure emails from <strong>no-reply@misocial.net</strong> are not blocked. 
                            <br/><br/>We look forward to seeing you soon! </p>
                            <button className="btn btn-next" type="button">Click Here To Return To Our Home Page</button>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>

        </div>
        
    )
}