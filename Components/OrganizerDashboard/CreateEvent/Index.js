import Image from 'next/image';
import { Col, Form, Row, Table } from "react-bootstrap";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoRefresh, IoSettingsOutline } from "react-icons/io5";
import cameraIcon from '../../../public/images/cameraIcon.png'

export default function CreateEvent() {
    return (
        <div className="create-event-main">
            <h2 className="header">Create Event</h2>

            <Form className="form-class">
                <Form.Label className="section-name">About event</Form.Label>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Event name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                    <Form.Label>Refund Policy</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <div className="file-upload-area">
                    <input type="file" id="actual-btn" hidden />
                    <label htmlFor="actual-btn">
                        <Image className="upload-image"
                            src={cameraIcon}
                            alt="cameraIcon"
                        />
                        <span>Add Event Image</span>
                    </label>
                </div>

                <Form.Label className="section-name evnHdn">Event Details</Form.Label>
                <p className="frmsub-title">When (Date & Time)</p>
                <Row>
                    <Col sm={6}>
                        <Form.Group className="mb-3" controlId="Event.ControlInput1">
                            <Form.Label>Event Start Date</Form.Label>
                            <Form.Control type="text" placeholder="27-Jun-2021" />
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="mb-3" controlId="Event.ControlInput2">
                            <Form.Label>Event Start Time</Form.Label>
                            <Form.Control type="text" placeholder="12.00 AM" />
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="mb-3" controlId="Event.ControlInput3">
                            <Form.Label>Event End Date</Form.Label>
                            <Form.Control type="text" placeholder="27-Jun-2021" />
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="mb-3" controlId="Event.ControlInput4">
                            <Form.Label>Event End Time</Form.Label>
                            <Form.Control type="text" placeholder="12.00 AM" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="Event.ControlInput5">
                    <Form.Label>Timezone</Form.Label>
                    <Form.Select aria-label="example" className="form-control">
                        <option>(GMT+1000) Australia(Sydney) Time</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                <p className="frmsub-title">Where (Location)</p>

                <Form.Group className="mb-3" controlId="VenueName">
                    <Form.Label>Venue name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="VenueName">
                    <Form.Label>Venue Address</Form.Label>
                    <Form.Control type="text" />
                    <button className="btn btn-reset"><IoRefresh />Reset Venue Address</button>
                </Form.Group>
                <p className="frmsub-title">Tags</p>
                <span className="tag-title">Improve discoverability of your event by adding tags relevant to the subject matter.</span>
                <Form.Group className="mb-3" controlId="VenueName">
                    <Form.Label>Venue Address</Form.Label>
                    <Form.Control as="textarea" rows={2} className="tag-form" placeholder="Add search keywords to your event" />
                    <div className="event-tag-hints">
                        <span>0/10 tags</span>
                        <span>0/25</span>
                    </div>
                </Form.Group>
                <button className="btn btn-cancel">Add</button>

                <div className="add-tickets-wrap mt-4">
                    <Form.Label className="section-name d-block ">Add Tickets</Form.Label>
                    <p className="frmsub-title">Are you creating event for</p>
                    <label className="cs-wrapper">
                        <input type="checkbox" defaultChecked />
                        <span className="checkmark"></span>
                        <p className="label-text">Platinum & Basic Members</p>
                    </label>
                    <label className="cs-wrapper">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <p className="label-text">Platinum Members only</p>
                    </label>
                    <label className="cs-wrapper">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <p className="label-text">Basic Members Only</p>
                    </label>
                    <div className="currency-part">
                        <p className="frmsub-title">Ticket Currency</p>
                        <span className="currency-wrap">CAD - Canadian Dollar </span>
                        <button className="btn btn-next">Change Ticket Currency</button>
                    </div>
                </div>

                <div className="platinum-tickets-wrap">
                    <p className="p-title">Platinum Tickets</p>
                    <Table responsive borderless>
                        <thead>
                            <tr>
                                <th>Ticket Name</th>
                                <th>Type</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>Paid</td>
                                <td>$10</td>
                                <td>20</td>
                                <td>
                                    <div className="action-icon">
                                        <IoSettingsOutline />
                                        <AiOutlineCloseCircle />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Lorem Ipsum is simply dummy</td>
                                <td>Paid</td>
                                <td>$10</td>
                                <td>20</td>
                                <td>
                                    <div className="action-icon">
                                        <IoSettingsOutline />
                                        <AiOutlineCloseCircle />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    <div className="tickets-per-order">
                        <Form>
                            <Row className="mb-3">
                                <Col md={4}>
                                    <p className="tick-title"> Tickets Per Order</p>
                                </Col>
                                <Col md={4}>
                                    <Form.Select className="form-control">
                                        <option>Min 1</option>
                                    </Form.Select>
                                </Col>
                                <Col md={4}>
                                    <Form.Select className="form-control">
                                        <option>Max 2</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={4}>  <p className="tick-title">Ticket Sales Start</p></Col>
                                <Col md={4}>

                                    <Form.Control type="date" defaultValue="2021-09-27" />
                                </Col>
                                <Col md={4}>
                                    <Form.Control type="number" placeholder="12.00 AM" />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}> <p className="tick-title">Ticket Sales End</p></Col>
                                <Col md={4}>
                                    <Form.Control type="date" defaultValue="2021-09-27" />
                                </Col>
                                <Col md={4}>
                                    <Form.Control type="number" placeholder="12.00 AM" />
                                </Col>
                            </Row>



                            <div className="save-cancel-action">
                                <button className="btn btn-next">Save</button>
                                <button className="btn btn-cancel">Cancel</button>
                            </div>
                        </Form>

                    </div>
                </div>
                {/* <p className="frmsub-title">Event organiser</p> */}
                <Form.Label className="section-name d-block evnHdn">Event organiser</Form.Label>


                <Form.Group className="mb-3  " controlId="exampleForm.ControlInput2">
                    <Form.Label>Organiser name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="exampleForm.ControlInput3">
                    <Form.Label>Event host name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="exampleForm.ControlInput4">
                    <Form.Label>Organiser Email</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="exampleForm.ControlInput5">
                    <Form.Label>Organiser Phone</Form.Label>
                    <div className="select-box">
                        <Form.Select className="form-control">
                            <option defaultChecked>AUS +61</option>
                            <option>Uk +4</option>
                            <option>Uk +4</option>
                            <option>Uk +4</option>
                        </Form.Select>
                        <Form.Control type="text" />
                    </div>
                </Form.Group>
                <div className="form-values">
                    <label className="toggleSwitch">
                        <input type="checkbox" defaultChecked />
                        <span>
                            <span>NO</span>
                            <span>YES</span>
                        </span>
                        <a></a>
                    </label>
                    <p className="text"> Display number of attendees on event details page  </p>
                </div>
                <div className="form-values">
                    <label className="toggleSwitch">
                        <input type="checkbox" defaultChecked />
                        <span>
                            <span>NO</span>
                            <span>YES</span>
                        </span>
                        <a></a>
                    </label>
                    <p className="text">Display event on search results on event page </p>
                </div>
                <div className="save-cancel-action">
                    <button className="btn btn-next">Publish</button>
                    <button className="btn btn-cancel">Save</button>
                    <button className="btn btn-short">Preview</button>
                </div>
            </Form>

        </div>
    )
}