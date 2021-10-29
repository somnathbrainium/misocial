import { Button, Form, Modal } from "react-bootstrap";
import { IoRefresh } from 'react-icons/io5';
import { useState } from "react";




export default function MySettings() {

    const [show, setShow] = useState(false)
    const handleResetModal = () => {
        setShow(true)
    }
    const handleModalClose = () => {
        setShow(false)
    }
    return (
        <>
            <Form className="form-class">
                <Form.Label className="section-name">My Settings</Form.Label>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Login Email</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                    <Form.Label>Customer ID</Form.Label>
                    <Form.Control type="text" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Date Joined</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>



                <div className="check-radio-wrap">
                    <div className="form-label">Membership Status</div>
                    <div className="gender-part">
                        <label className="cs-wrapper">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                            <p className="label-text">Basic</p>
                        </label>
                        <label className="cs-wrapper">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <p className="label-text">Platinum</p>
                        </label>
                    </div>
                </div>

                <button className="btn btn-next">Upgrade to platinum</button>
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
                    <p className="text"> I want to receive MiSocial news, offers & promotions</p>
                </div>
                <div className="save-cancel-action">
                    <button className="btn btn-next">Save</button>
                    <button className="btn btn-cancel">Cancel</button>
                    <button type="button" className="btn btn-reset" onClick={handleResetModal}><IoRefresh />Reset</button>
                </div>
            </Form>


            <Modal className="universalModal resetPw" show={show} onHide={handleModalClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Reset Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="stepfrm-inner">
                        <h2 className="header">New Password</h2>
                        <Form className="modal-form">
                            <Form.Group className="mb-3" controlId="Current-password">
                                <Form.Label>Current password</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Newpassword1">
                                <Form.Label>New password</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Re-enter">
                                <Form.Label>Re-enter New Password</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>
                            <ul className="password-hints">
                                <li>Minimum 8 characters.</li>
                                <li>Include at least one lowercase character (a-z)</li>
                                <li>Include at least one uppercase character (A-Z)</li>
                                <li>Include at least one numeric character (0-9)</li>
                            </ul>

                            <button className="btn btn-next">Save Password</button>

                        </Form>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}