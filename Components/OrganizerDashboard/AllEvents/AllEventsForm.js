import Image from 'next/image';
import { IoLocationOutline } from 'react-icons/io5'
import { BiCalendar } from 'react-icons/bi'
import myeventImage from '../../../public/images/myeventImage.jpg';
import { Col, Form, Modal, Nav, Row, Tab } from "react-bootstrap";
import ShowTicketTable from './ShowTicketTable';
import { useState } from 'react';
import Link from 'next/link'


export default function AllEventsForm() {
    const [show, setShow] = useState(false);
    const [copyevent, setCopyevent] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const copyEventClose = () => setCopyevent(false);
    const copyEventShow = () => setCopyevent(true);

    return (
        <>

            <div className="myevents-list">
                <Tab.Container defaultActiveKey="showtickets">
                    <div className="content-inner">

                        <Image className="image-part"
                            src={myeventImage}
                            alt="events images"
                        />

                        <div className="content-part">
                            <h2 className="m-header">Bunbury Toastmaster- Regular  Club Meeting</h2>
                            <div className="sub-title capitalized">
                                <BiCalendar /> SUN, APR 25 - MON, APR 26  6.30PM - 8.30PM</div>
                            <div className="sub-title">
                                <IoLocationOutline /> Australia, AU, Aplus club</div>
                            <div className="save-cancel-action">
                                <button className="btn btn-next">Cancel & unpublish</button>
                                <button className="btn btn-cancel">Unpublish</button>
                            </div>
                        </div>
                    </div>
                    <div className="save-cancel-action">

                        <Nav variant="pills">

                            <Nav.Item>
                                <Nav.Link eventKey="edit">Edit</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link href="/previewEvent">
                                    <Nav.Link eventKey="preview" type="button">
                                        Preview
                                    </Nav.Link>
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="invite">Invite</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="copyURL">Copy URL</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="copyEvent" onClick={copyEventShow}>Copy Event</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Transactions">Transactions</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sendemail">Send Email</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="viewemails">View Emails</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="viewattendees">View Attendees</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="download-attendees" onClick={handleShow}>Download Attendees</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="showtickets">Show Tickets</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </div>
                    <div className="inner-form-part">
                        <Tab.Content>
                            <Tab.Pane eventKey="edit">
                                <h5>edit</h5>
                            </Tab.Pane>
                            <Tab.Pane eventKey="preview">
                                preview
                            </Tab.Pane>

                            <Tab.Pane eventKey="invite">
                                invite
                            </Tab.Pane>
                            <Tab.Pane eventKey="copyURL">
                                copyURL
                            </Tab.Pane>
                            {/* <Tab.Pane eventKey="copyEvent">
                                Copy Event
                            </Tab.Pane> */}
                            <Tab.Pane eventKey="Transactions">
                                Transactions
                            </Tab.Pane>
                            <Tab.Pane eventKey="sendemail">
                                Send email
                            </Tab.Pane>
                            <Tab.Pane eventKey="viewemails">
                                view emails
                            </Tab.Pane>
                            <Tab.Pane eventKey="viewattendees">
                                view-attendees
                            </Tab.Pane>

                            <Tab.Pane eventKey="showtickets">
                                <ShowTicketTable />
                            </Tab.Pane>

                        </Tab.Content>
                    </div>
                </Tab.Container>
            </div>
            <div className="myevents-list">
                <Tab.Container defaultActiveKey="showtickets">
                    <div className="content-inner">

                        <Image className="image-part"
                            src={myeventImage}
                            alt="events images"
                        />

                        <div className="content-part">
                            <h2 className="m-header">The Event Fairy</h2>
                            <div className="sub-title capitalized">
                                <BiCalendar /> SUN, APR 25 - MON, APR 26  6.30PM - 8.30PM</div>
                            <div className="sub-title">
                                <IoLocationOutline /> Australia, AU, Aplus club</div>
                            <div className="save-cancel-action">
                                <button className="btn btn-next">Cancel & unpublish</button>
                                <button className="btn btn-cancel">Unpublish</button>
                            </div>
                        </div>
                    </div>
                    <div className="save-cancel-action">

                        <Nav variant="pills">

                            <Nav.Item>
                                <Nav.Link eventKey="edit">Edit</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link href="/previewEvent">
                                    <Nav.Link eventKey="preview" type="button">
                                        Preview
                                    </Nav.Link>
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="invite">Invite</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="copyURL">Copy URL</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="copyEvent" onClick={copyEventShow}>Copy Event</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Transactions">Transactions</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sendemail">Send Email</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="viewemails">View Emails</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="viewattendees">View Attendees</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="download-attendees" onClick={handleShow}>Download Attendees</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="showtickets">Show Tickets</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </div>
                    {/* <div className="inner-form-part">
                        <Tab.Content>
                            <Tab.Pane eventKey="edit">
                                <h5>edit</h5>
                            </Tab.Pane>
                            <Tab.Pane eventKey="preview">
                                preview
                            </Tab.Pane>

                            <Tab.Pane eventKey="invite">
                                invite
                            </Tab.Pane>
                            <Tab.Pane eventKey="copyURL">
                                copyURL
                            </Tab.Pane>
                            
                            <Tab.Pane eventKey="Transactions">
                                Transactions
                            </Tab.Pane>
                            <Tab.Pane eventKey="sendemail">
                                Send email
                            </Tab.Pane>
                            <Tab.Pane eventKey="viewemails">
                                view emails
                            </Tab.Pane>
                            <Tab.Pane eventKey="viewattendees">
                                view-attendees
                            </Tab.Pane>

                            <Tab.Pane eventKey="showtickets">
                                <ShowTicketTable />
                            </Tab.Pane>

                        </Tab.Content>
                    </div> */}
                </Tab.Container>
            </div>
            <div className="myevents-list">
                <Tab.Container defaultActiveKey="showtickets">
                    <div className="content-inner">

                        <Image className="image-part"
                            src={myeventImage}
                            alt="events images"
                        />

                        <div className="content-part">
                            <h2 className="m-header">Galas and Casual</h2>
                            <div className="sub-title capitalized">
                                <BiCalendar /> SUN, APR 25 - MON, APR 26  6.30PM - 8.30PM</div>
                            <div className="sub-title">
                                <IoLocationOutline /> Australia, AU, Aplus club</div>
                            <div className="save-cancel-action">
                                <button className="btn btn-next">Cancel & unpublish</button>
                                <button className="btn btn-cancel">Unpublish</button>
                            </div>
                        </div>
                    </div>
                    <div className="save-cancel-action">

                        <Nav variant="pills">

                            <Nav.Item>
                                <Nav.Link eventKey="edit">Edit</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link href="/previewEvent">
                                    <Nav.Link eventKey="preview" type="button">
                                        Preview
                                    </Nav.Link>
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="invite">Invite</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="copyURL">Copy URL</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="copyEvent" onClick={copyEventShow}>Copy Event</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Transactions">Transactions</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sendemail">Send Email</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="viewemails">View Emails</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="viewattendees">View Attendees</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="download-attendees" onClick={handleShow}>Download Attendees</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="showtickets">Show Tickets</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </div>
                </Tab.Container>
            </div>
            <div className="myevents-list">
                <Tab.Container defaultActiveKey="showtickets">
                    <div className="content-inner">

                        <Image className="image-part"
                            src={myeventImage}
                            alt="events images"
                        />

                        <div className="content-part">
                            <h2 className="m-header">Step by Step Corporate</h2>
                            <div className="sub-title capitalized">
                                <BiCalendar /> SUN, APR 25 - MON, APR 26  6.30PM - 8.30PM</div>
                            <div className="sub-title">
                                <IoLocationOutline /> Australia, AU, Aplus club</div>
                            <div className="save-cancel-action">
                                <button className="btn btn-next">Cancel & unpublish</button>
                                <button className="btn btn-cancel">Unpublish</button>
                            </div>
                        </div>
                    </div>
                    <div className="save-cancel-action">

                        <Nav variant="pills">

                            <Nav.Item>
                                <Nav.Link eventKey="edit">Edit</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link href="/previewEvent">
                                    <Nav.Link eventKey="preview" type="button">
                                        Preview
                                    </Nav.Link>
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="invite">Invite</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="copyURL">Copy URL</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="copyEvent" onClick={copyEventShow}>Copy Event</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Transactions">Transactions</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sendemail">Send Email</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="viewemails">View Emails</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="viewattendees">View Attendees</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="download-attendees" onClick={handleShow}>Download Attendees</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="showtickets">Show Tickets</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </div>
                </Tab.Container>
            </div>
            <div className="myevents-list">
                <Tab.Container defaultActiveKey="showtickets">
                    <div className="content-inner">

                        <Image className="image-part"
                            src={myeventImage}
                            alt="events images"
                        />

                        <div className="content-part">
                            <h2 className="m-header">An Arbon Day to Remember</h2>
                            <div className="sub-title capitalized">
                                <BiCalendar /> SUN, APR 25 - MON, APR 26  6.30PM - 8.30PM</div>
                            <div className="sub-title">
                                <IoLocationOutline /> Australia, AU, Aplus club</div>
                            <div className="save-cancel-action">
                                <button className="btn btn-next">Cancel & unpublish</button>
                                <button className="btn btn-cancel">Unpublish</button>
                            </div>
                        </div>
                    </div>
                    <div className="save-cancel-action">

                        <Nav variant="pills">

                            <Nav.Item>
                                <Nav.Link eventKey="edit">Edit</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link href="/previewEvent">
                                    <Nav.Link eventKey="preview" type="button">
                                        Preview
                                    </Nav.Link>
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="invite">Invite</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="copyURL">Copy URL</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="copyEvent" onClick={copyEventShow}>Copy Event</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Transactions">Transactions</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sendemail">Send Email</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="viewemails">View Emails</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="viewattendees">View Attendees</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="download-attendees" onClick={handleShow}>Download Attendees</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="showtickets">Show Tickets</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </div>
                </Tab.Container>
            </div>

            <Modal show={show} onHide={handleClose} className="universalModal">
                <Modal.Header closeButton>
                    <Modal.Title>Download Attendees </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="download-format">
                        <p className="format-head">Select file format:</p>
                        <button className="btn btn-view-event">PDF File</button>
                        <button className="btn btn-view-event">Excel File </button>
                    </div>
                </Modal.Body>

            </Modal>

            <Modal show={copyevent} onHide={copyEventClose} className="universalModal">
                <Modal.Header closeButton>
                    <Modal.Title>Copy event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="copy-event  main-frame-inner">
                        <p className="sub-header">Your event copy will have the same event information and settings, without attendee information.</p>
                        <Form className="form-class ">

                            <Form.Group className="mb-3" controlId="Eventname">
                                <Form.Label>Event title</Form.Label>
                                <Form.Control type="text" placeholder="COPY - Bunbury Toastmaster- Regular  Club Meeting" />
                            </Form.Group>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="Datejoinedfrom">
                                        <Form.Label>Event Starts</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="Datejoinedto">
                                        <Form.Label>Start Time</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="age-from">
                                        <Form.Label>Event Ends</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="age-to">
                                        <Form.Label>End Time</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="save-cancel-action">
                                <button className="btn btn-cancel">Cancel</button>
                                <button className="btn btn-next">Copy Event</button>
                            </div>
                        </Form>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}