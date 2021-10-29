import { Form, FormControl, Modal } from "react-bootstrap";
import { useState } from "react";
import Image from "next/image";
import successTick from '../../public/images/successTick.png';

export default function HowItWorks() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <div className="How-itworks-wrapper">
            <div className="container">
                <div className="how-works-inner">
                    <h2 className="title"> Here’s How it works?</h2>
                    <p className="subtitle">Our innovative events platform enables members worldwide to discover, create, share and register for events</p>

                    <div className="process-part">
                        <div className="process-content">

                            <div className="item-content">
                                <div className="numberBox">
                                    <div className="number-part">
                                        1
                                    </div>
                                </div>
                                <h6>Signup</h6>
                                <p>Create a profile in seconds.<br/>
                                    It&apos;s free!</p>
                            </div>
                            <div className="item-content">
                                <div className="numberBox">
                                    <div className="number-part">
                                        2
                                    </div>
                                </div>
                                <h6>Discover Events</h6>
                                <p>Accept invites or<br/>
                                    Search events near you.</p>
                            </div>
                            <div className="item-content">
                                <div className="numberBox">
                                    <div className="number-part">
                                        3
                                    </div>
                                </div>
                                <h6>Create Events</h6>
                                <p>Apply to be an event organizer<br/>
                                    Power your events with MiSocial</p>
                            </div>
                        </div>
                    </div>
                    <Form className="d-flex search-box">
                        <FormControl
                            type="search"
                            placeholder="Enter your email id"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <button className="btn btn-join-now" onClick={handleShow} type="button">Join Now</button>
                    </Form>
                </div>
            </div>
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
                            {/* <Modal.Title>Password updated</Modal.Title> */}
                            <p>We've sent you an email on how to reset your password. 
In the next 24 hours open the email and follow the steps outlined to create a new password.</p>
<button className="btn btn-next">Click Here To Return To Our Home Page</button>
                            {/* <p className="success-text">
                                You have successfully changed your password.
                                You can   <Link href="/login"><a className="login-now">Login</a></Link> now.
                            </p> */}
                        </div>
                    </div>
                </Modal.Body>

            </Modal>


        </>
    )
}