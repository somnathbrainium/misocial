import Image from "next/image";
import { Col, Form, FormControl, Row } from "react-bootstrap";
import logo from '../public/images/footerlogo.png';
import sendIcon from '../public/images/sendIcon.png';
import backtotopimg from '../public/images/backtotop.jpg';  


import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import React, { useEffect, useState } from "react";


export default function Footer() {

    const [isVisible, setIsVisible] = useState(false);

        // Show button when page is scorlled upto given distance
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
            setIsVisible(true);
            } else {
            setIsVisible(false);
            }
        };

        // Set the top cordinate to 0
        // make scrolling smooth
        const scrollToTop = () => {
            window.scrollTo({
            top: 0,
            behavior: "smooth"
            });
        };

        useEffect(() => {
            window.addEventListener("scroll", toggleVisibility);
        }, []);


    return (
        <div className="footer-wrapper">

{/* <div className="scrolltop" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                          <img src='https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png' alt='Go to top'/>

            </div>  */}

 {/* <div className="scroll-to-top">
      {isVisible && 
        <div onClick={scrollToTop}>
          <img src={backtotopimg} alt='Go to top'/>
        </div>}
    </div>  */}



            <div className="container">
                <Row>
                <Col md={12} sm={12} className="mobfot_opt" >

                    <div className="footerGap">
                        <div className="footerinfo footerlogo">
                            <div className="f-logo">
                                <Image
                                    src={logo}
                                    alt="logo"
                                />
                            </div>
                        </div>
                    </div>
                </Col>  
                    <Col md={12} sm={12} className="deskfot_opt">

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
                                </ul>
                          

                            </div>
                            <div className="footerinfo ">
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