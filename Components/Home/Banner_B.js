import { Button, Form, FormControl, Modal } from "react-bootstrap";
import Header_B from "../../Layouts/Header_B"

import Image from "next/image";
import successTick from '../../public/images/successTick.png';
import { useState } from "react";


export const Banner_B = () => {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
        <div className="top-banner">
        <div className="banner-container">
          <Header_B />

          <div className="banner-content-wrap">
            <h2> The Events Platform <br /> That Connects </h2>
            <p>
              Professionals & Entrepreneurs through Live Experiences  <br />
              And<br />
              An Event Organizer&apos;s  Passion For Events With Members
            </p>

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

// const Banner_B = () => (
//   <>
    
//   </>
// )
export default Banner_B;