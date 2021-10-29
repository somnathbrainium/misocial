import Image from "next/image";
import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { IoRefresh } from 'react-icons/io5'
import { MdEdit } from 'react-icons/md'
import nounUser from '../../public/images/noun_User.png';
import successTick from '../../public/images/successTick.png';
import Link from 'next/link';

export default function SignupNextForm() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="sign-nextstep-form">
                <div className="stepfrm-inner">
                    <h2 className="header">Sign Up - next step</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>City/town/suburb</Form.Label>
                            <Form.Control type="text" />
                            <button className="btn btn-reset"><IoRefresh />Reset Location</button>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

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
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Year Born</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
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
                        <Form.Group className="mb-3"  >
                            <Form.Label>Profile Image</Form.Label>
                            <Form.Control type="file" hidden id="main-input" />
                            <div className="image-upload">
                                <Image
                                    src={nounUser}
                                    alt="noun User"
                                />
                                <label className="edit-icon" htmlFor="main-input">
                                    <MdEdit />
                                </label>
                            </div>

                        </Form.Group>
                        <button className="btn btn-next" type="button" onClick={handleShow}>Sign Up</button>
                    </Form>

                </div>

            </div>
            <Modal show={show} onHide={handleClose} className="universalModal signModal">
                <Modal.Header closeButton>
                    <Modal.Title>&nbsp;</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="success-modal">
                        <div className="text-center">
                            <Image
                                src={successTick}
                                alt="successTick"

                            />
                        </div>
                        <p className="success-text">
                            Open the email we just sent you and confirm your email.
                            You may need to check your spam folder and ensure emails from
                            <strong>no-reply@misocial.net</strong> are not blocked.
                        </p>
                        <p className="success-text"> We look forward to seeing you soon! </p>
                    </div>
                </Modal.Body>

                <Link href="/" passHref>
                    <button className="btn btn-next"  >
                        Click here to return to our Home page
                    </button>
                </Link>


            </Modal>
        </>
    )

}