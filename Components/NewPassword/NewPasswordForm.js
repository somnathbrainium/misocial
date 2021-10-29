import { Form, Modal } from "react-bootstrap";
import successTick from '../../public/images/successTick.png';
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';

export default function NewPasswordForm() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="forget-form-wrapper">
            <div className="stepfrm-inner">
                <h2 className="header">New Password</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>New password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Re-enter New Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <ul className="password-hints">
                        <li>Minimum 8 characters.</li>
                        <li>Include at least one lowercase character (a-z)</li>
                        <li>Include at least one uppercase character (A-Z)</li>
                        <li>Include at least one numeric character (0-9)</li>
                    </ul>

                    <button className="btn btn-next" onClick={handleShow} type="button">Save Password</button>

                </Form>
            </div>

            <Modal show={show} onHide={handleClose} className="universalModal forgetModal1">
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>
                    <div className="successReset-modal">
                        <div className="text-center">
                            <Image
                                src={successTick}
                                alt="successTick"

                            />
                            <Modal.Title>Password updated</Modal.Title>
                            
                            <p className="success-text">
                                You have successfully changed your password.
                                You can   <Link href="/login"><a className="login-now">Login</a></Link> now.
                            </p>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}