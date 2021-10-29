import Image from 'next/image';
import { IoLocationOutline } from 'react-icons/io5'
import { BiCalendar } from 'react-icons/bi'
import myeventImage from '../../../public/images/myeventImage.jpg';
import { Form, Nav, Tab, Table } from "react-bootstrap";
import UpdateAttendance from './UpdateAttendance';
import ViewTickets from './ViewTickets';

export default function MyEvents() {
    return (
        <>
            <h2 className="header">My Events</h2>
            <div className="myevents-list">
                <Tab.Container defaultActiveKey="update-attendance">
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

                                <Nav variant="pills">

                                    <Nav.Item>
                                        <Nav.Link eventKey="view">View</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="update-attendance">Update Attendance</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="view-tickets">View Tickets</Nav.Link>
                                    </Nav.Item>

                                </Nav>
                            </div>
                        </div>
                    </div>

                    <div className="inner-form-part">
                        <Tab.Content>
                            <Tab.Pane eventKey="view">
                                <h5>view Dashbord</h5>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                            </Tab.Pane>

                            <Tab.Pane eventKey="update-attendance">
                                <UpdateAttendance />
                            </Tab.Pane>

                            <Tab.Pane eventKey="view-tickets">
                                <ViewTickets />
                            </Tab.Pane>

                        </Tab.Content>
                    </div>
                </Tab.Container>
            </div>

            <div className="myevents-list">
                <Tab.Container defaultActiveKey="update-attendance">
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

                                <Nav variant="pills">

                                    <Nav.Item>
                                        <Nav.Link eventKey="view">View</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="update-attendance">Update Attendance</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="view-tickets">View Tickets</Nav.Link>
                                    </Nav.Item>

                                </Nav>
                            </div>
                        </div>
                    </div>

                    <div className="inner-form-part">
                        <Tab.Content>
                            <Tab.Pane eventKey="view">
                                <h5>view Dashbord</h5>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                            </Tab.Pane>

                            <Tab.Pane eventKey="update-attendance">
                                <UpdateAttendance />
                            </Tab.Pane>

                            <Tab.Pane eventKey="view-tickets">

                                <ViewTickets />

                            </Tab.Pane>

                        </Tab.Content>
                    </div>
                </Tab.Container>
            </div>

        </>
    )
}