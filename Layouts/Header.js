
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../public/images/misocial-logo.svg';
import hambergerIcon from '../public/images/hambergerIcon.png';
import loggedinImage from '../public/images/loggedinImage.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';


function Header() {

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  }
  return (
    <div className="header-wraapper">
      <div className="logo-part">
        <Link href="/">
          <a>
            <Image
              src={logo}
              alt="Picture of the website"
            />
          </a>
        </Link>
      </div>
      <div className="other-part">
        <Link href="/login">
          <a className="login">Login</a>
        </Link>
        {/* <div className="profile">
          <Image src={loggedinImage}
            alt="loggedinImage" className="profile-image"
          />

          <p className="name">John</p>
        </div> */}

        <Image src={hambergerIcon} onClick={() => handleClick()}
          className="hamberger-icon" alt="hamberger icon" />

      </div>
      <div className={show ? "menu-wrapper d-block" : "menu-wrapper"}>

        <GrFormClose className="closeIcon" onClick={() => handleClose()} />
        <ul className="nav">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/events">
              <a className="nav-link">Events</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#">
              <a className="nav-link">Shortlist</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#becomeorg">
              <a className="nav-link">Become an Event Organizer</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/signup-step1">
              <a href="#" className="nav-link">Join Now</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/login">
              <a className="nav-link">Log In</a>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link href="/dashboard/my-profile">
              <a className="nav-link">Dashboard</a>
            </Link>
          </li> */}
        </ul>
        <div className="trms">
          <Link href="/terms-and-conditions">
            <a className="tc-link">Terms & Conditions </a>
          </Link>
          <Link href="/privacy-policy">
            <a className="tc-link"> Privacy</a>
          </Link>

        </div>
        <div className="social-media">
          <Link href="#" >
            <a className="social-icon">
              <FaFacebookF />
            </a>
          </Link>
          <Link href="#" >
            <a className="social-icon">
              <FaTwitter />
            </a>
          </Link>
          <Link href="#" >
            <a className="social-icon">
              <FaLinkedinIn />
            </a>
          </Link>
          <Link href="#" >
            <a className="social-icon">
              <AiFillInstagram />
            </a>
          </Link>
          <Link href="#" >
            <a className="social-icon">
              <FaYoutube />
            </a>
          </Link>
        </div>
      </div>

    </div >)
}



export default Header