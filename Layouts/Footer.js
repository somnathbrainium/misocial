import Image from "next/image";
import { Col, Form, FormControl, Row } from "react-bootstrap";
import logo from '../public/images/footerlogo.png';
import sendIcon from '../public/images/sendIcon.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';

export default function Footer() {


    return (
        <div className="footer-wrapper">
            <div className="container">
                <Row>
                    <Col md={12} sm={12}>

                        <div className="footerGap">
                            <div className="footerinfo footerlogo">
                                <div className="f-logo">
                                    <Image
                                        src={logo}
                                        alt="logo"
                                    />
                                </div>
                            </div>
                            <div className="footerinfo">
                                <h6 className="link-head">About</h6>
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a href="#">The Concept</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#">Become an Event Organizer</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#">Events management platform</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#">Sell tickets online</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#">Advertise with us </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footerinfo">
                                <h6 className="link-head">Explore</h6>
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a href="#">Women's networking</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#">Networking events</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#">Business networking</a>
                                    </li>
<<<<<<< HEAD
                                </ul>
                                <div class="mobfotopt">
                                <h6 className="link-head">Legal</h6>
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a href="#">Terms & Conditions </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#">Privacy</a>
                                    </li>
                                </ul>
                                </div>

                            </div>
                            <div className="footerinfo deskfotopt">
=======

                                </ul>
                            </div>
                            <div className="footerinfo">
>>>>>>> origin/sushanta
                                <h6 className="link-head">Legal</h6>
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a href="#">Terms & Conditions </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#">Privacy</a>
                                    </li>
<<<<<<< HEAD
=======

>>>>>>> origin/sushanta
                                </ul>
                            </div>

                            <div className="footerinfo footerfromsection">
                                    <h6 className="link-head">Contact us</h6>
                                    <Form className="d-flex search-box">
                                        <FormControl
                                            type="search"
                                            placeholder="info@misocial.com"
                                            className="mr-2"
                                            aria-label="Search"
                                        />
                                        <button className="btn btn-join-now">
                                            <Image
                                                src={sendIcon}
                                                alt="sendIcon"
                                            />
                                        </button>
                                    </Form>
                            </div>
                        </div>
                    </Col>
                    {/* <Col md={3} sm={3} className="contactinfo">
                        <h6 className="link-head">Contact us</h6>
                        <Form className="d-flex search-box">
                            <FormControl
                                type="search"
                                placeholder="info@misocial.com"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <button className="btn btn-join-now">
                                <Image
                                    src={sendIcon}
                                    alt="sendIcon"
                                />
                            </button>
                        </Form>
                    </Col> */}
                </Row>
                <div className="footer-social">
                    <p className="copyright">
                        © <span>MISOCIAL</span> 2021. All Rights Reserved.
                    </p>
                    <div className="social">
                        <a href="#" className="social-link">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="social-link">
                            <FaTwitter />
                        </a>
                        <a href="#" className="social-link">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" className="social-link">
                            <AiFillInstagram />
                        </a>
                        <a href="#" className="social-link">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}