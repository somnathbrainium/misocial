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
                    <Col md={9} sm={9}>

                        <Row className="footerGap">
                            <Col md={3} sm={3}>
                                <div className="f-logo">
                                    <Image
                                        src={logo}
                                        alt="logo"
                                    />
                                </div>
                            </Col>
                            <Col md={4} sm={4}>
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
                            </Col>
                            <Col md={3} sm={3}>
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

                                </ul>
                            </Col>
                            <Col md={2} sm={2}>
                                <h6 className="link-head">Legal</h6>
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a href="#">Terms & Conditions </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#">Privacy</a>
                                    </li>

                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3} sm={3}>
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
                    </Col>
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