import Image from "next/image";
import { Col, Form, Row, Table } from "react-bootstrap";
import eventdetailsImage from '../../public/images/event-detailsImage.jpg'
import videoBanner from '../../public/images/videoBanner.jpg'
import addBanner from '../../public/images/addBanner.jpg'
import calendarIconLight from '../../public/images/calendarIconLight.png'
import locationIcon from '../../public/images/locationIcon.png'
import { BiPlus, BiMinus } from 'react-icons/bi'
import { RiShareForwardLine } from 'react-icons/ri';
import { GrCircleInformation } from 'react-icons/gr';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';



export default function EventContents() {
    return (
        <div className="event-content-wr">
            <div className="container">
                <Row>
                    <Col md={8}>
                        <h3 className="details-title">The Event Fairy</h3>
                        <Image
                            src={eventdetailsImage}
                            alt="event-detailsImage"
                            className="details-image"
                        />
                        <div className="act-button">
                            <button className="btn btn-short"><BiPlus />Shortlist</button>
                            <button className="btn btn-view-event"><RiShareForwardLine className="share" />Share</button>
                        </div>

                        <div className="details-cont-portion">
                            <h2>Details</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> <br />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry:</p>
                            <ul className="lists">
                                <li> It is a long established.</li>
                                <li>using Lorem.</li>
                                <li>readable English.</li>
                                <li>remaining essentially.</li>
                                <li>Various versions have evolved.</li>
                            </ul>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                            <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                        <div className="buy-ticket-wr">
                            <h3 className="tkt-title">Buy Tickets</h3>
                            <div className="ticket-row">
                                <div className="ticket-column">
                                    <label className="inner-head"> Platinum member tickets</label>
                                    <Table borderless >
                                        <thead>
                                            <tr>
                                                <th> Ticket </th>
                                                <th>Price</th>
                                                <th>Tickets</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Ticket one Ticket Ticket one Ticket</td>
                                                <td><div className="price">$10</div></td>
                                                <td>
                                                    <div className="incrment">
                                                        <label><BiMinus /></label>
                                                        <span>2</span>
                                                        <label><BiPlus /></label>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ticket Two Ticket one Ticket</td>
                                                <td><div className="price">$10</div></td>
                                                <td>
                                                    <div className="incrment">
                                                        <label><BiMinus /></label>
                                                        <span>3</span>
                                                        <label><BiPlus /></label>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ticket Three</td>
                                                <td><div className="price">$10</div></td>
                                                <td>
                                                    <div className="incrment">
                                                        <label><BiMinus /></label>
                                                        <span>0</span>
                                                        <label><BiPlus /></label>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                </div>
                                <div className="ticket-column">
                                    <label className="inner-head">Basic member tickets</label>
                                    <Table borderless >
                                        <thead>
                                            <tr>
                                                <th> Ticket </th>
                                                <th>Price</th>
                                                <th>Tickets</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Ticket one Ticket Ticket one Ticket</td>
                                                <td><div className="price">$10</div></td>
                                                <td>
                                                    <div className="incrment">
                                                        <label><BiMinus /></label>
                                                        <span>2</span>
                                                        <label><BiPlus /></label>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ticket Two Ticket one Ticket</td>
                                                <td><div className="price">$10</div></td>
                                                <td>
                                                    <div className="incrment">
                                                        <label><BiMinus /></label>
                                                        <span>3</span>
                                                        <label><BiPlus /></label>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ticket Three</td>
                                                <td><div className="price">$10</div></td>
                                                <td>
                                                    <div className="incrment">
                                                        <label><BiMinus /></label>
                                                        <span>0</span>
                                                        <label><BiPlus /></label>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <button className="btn btn-large">Buy now</button>
                        </div>

                        <div className="order-summery-wrapper">
                            <header>
                                Order Summary
                            </header>
                            <div className="sum-items">
                                <span>Platinum Member Tickets</span>
                                <span>3x TicketTwo, 1x Ticket one</span>
                            </div>
                            <div className="sum-items">
                                <span>Basic Member Tickets</span>
                                <span>1x Ticket one </span>
                            </div>
                            <div className="sum-items">
                                <span>Total Tickets</span>
                                <span>5</span>
                            </div>
                            <div className="sum-items">
                                <p>Total  Payment</p>
                                <p>$ 40</p>
                            </div><br />
                            <header>
                                Enter your credit card details to buy tickets
                            </header>
                            <Form className="card-details">

                                <Row >
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="CardNumber">
                                            <Form.Label>Card Number</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="ExpiryDate">
                                            <Form.Label>Expiry Date</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="CardholderName">
                                            <Form.Label>Cardholder Name</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="CVV" className="f-group">
                                            <div className="label-w-hints">
                                                <Form.Label>CVV</Form.Label>
                                                <GrCircleInformation />
                                            </div>

                                            <Form.Control />
                                        </Form.Group>
                                    </Col>
                                </Row>


                                <button className="btn btn-large">Pay Now</button>
                            </Form>

                        </div>
                        <div className="event-location-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.396813362046!2d88.38073241443453!3d22.601652537600767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bb34e13008ab%3A0xb88776c0052769b0!2sKolkata%20Railway%20Station%20(Chitpur%20Station)!5e0!3m2!1sen!2sin!4v1629457047388!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
                            <div className="place">
                                Hudson Road Family Centre
                                95 Hudson Road · Bunbury
                            </div>
                        </div>

                        <div className="videoBanner">
                            <Image
                                src={videoBanner}
                                alt="videoBanner"
                                className="videoBanner"
                            />
                        </div>
                        <div className="imageBanner">
                            <Image
                                src={addBanner}
                                alt="addBanner"
                                className="addBanner"
                            />
                            <span className="add">AD</span>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div className="content-box-address">
                            <div className="address-part">
                                <div className="icon-div">
                                    <Image
                                        src={calendarIconLight}
                                        alt="calendarIconLight"
                                    />
                                </div>
                                <p className="time-date">
                                    <label className="date">Tuesday, April 20, 2021</label>
                                    <label className="time">6:15 PM to 8:15 PM GMT+8</label>
                                    <span> Every week on Tuesday</span></p>

                            </div>
                            <div className="address-part">
                                <div className="icon-div">
                                    <Image
                                        src={locationIcon}
                                        alt="calendarIconLight"
                                    />
                                </div>
                                <p className="time-date">
                                    Hudson Road Family Centre
                                    95 Hudson Road · Bunbury
                                </p>
                                <button className="btn btn-large">View Map</button>
                            </div>
                        </div>
                        <div className="content-box-address">
                            <div className="address-part d-block">

                                <p className="time-date">
                                    <label className="date">Event Organizer: </label>
                                    <span>Business Name(organizer Profile)</span>
                                </p>
                                <p className="time-date wrap-elem">
                                    <span>Event Host:</span>
                                    <label className="date">Emily Wright</label>
                                </p>
                            </div>
                            <div className="address-part">
                                <div className="icon-div with-icon">
                                    <BsFillEnvelopeFill />
                                </div>
                                <p className="time-date">
                                    dummy@gmail.com
                                </p>

                            </div>
                            <div className="address-part">
                                <div className="icon-div with-icon">
                                    <FaPhoneAlt />
                                </div>
                                <p className="time-date">
                                    +1 123 456 7890
                                </p>

                            </div>

                            <div className="footer-wr">
                                <p>Attendees (56)</p>
                            </div>
                        </div>
                        <div className="content-box-address">
                            <div className="address-part d-block">
                                <p className="time-date">

                                    <span>Refund Policy</span>
                                    <label className="date mt-3">
                                        Refund requests must be made within 14 days of delivery date. After 14 days from delivery date you must contact  customer service to determine the best course of action.
                                    </label>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>
        </div>
    )
}