import { Tab, Form, Nav } from "react-bootstrap";

export default function ViewTransactions() {
    return (
        <>
            <h2 className="header no-border">View  Specific Transaction </h2>
            <div className="specific-tran-wrap">
                <div className="top-header">
                    <p className="event-name"> <label>Event ID:</label> <span> 1244 - 5646 - 2636 - 1234</span></p>
                    <div className="status-menu">
                        <p className="event-name"><label>Event Status:</label> <span>Published</span></p>
                        <Form.Select>
                            <option>Preview</option>
                        </Form.Select>
                    </div>
                </div>

                <div className="trans-body">
                    <div className="dt-inner">
                        <span>First Name: </span>
                        <span>John</span>
                    </div>
                    <div className="dt-inner">
                        <span>Email:</span>
                        <span>d***m@gmail.com</span>
                    </div>
                    <div className="dt-inner">
                        <span>Gender:</span>
                        <span>Male</span>
                    </div>
                    <div className="dt-inner">
                        <span>Membership: </span>
                        <span>Platinum</span>
                    </div>
                    <div className="dt-inner">
                        <span>Customer ID:</span>
                        <span>123 - 456 - 789</span>
                    </div>
                    <div className="dt-inner">
                        <span>Transaction ID:</span>
                        <span>412 - 456 - 789</span>
                    </div>
                    <div className="dt-inner">
                        <span>Transaction ID:</span>
                        <span>412 - 456 - 789</span>
                    </div>
                    <div className="dt-inner">
                        <span>Transaction Status:</span>
                        <span>Paid</span>
                    </div>
                    <div className="dt-inner">
                        <span>Last 4 digits credit card:</span>
                        <span>1234</span>
                    </div>

                    <div className="dt-inner">
                        <span>Event:</span>
                        <span>Event Name Stars Event</span>
                    </div>

                    <div className="dt-inner">
                        <span>Tickets Bought:</span>
                        <span>2 x Platinum One , 1 x Basic Ticket Name</span>
                    </div>
                    <div className="dt-inner">
                        <span>Purchase Date:</span>
                        <span>12-Jun-2021 06:15 PM</span>
                    </div>
                    <div className="dt-inner">
                        <span>Total Paid:</span>
                        <span>$200</span>
                    </div>
                    <div className="dt-inner">
                        <span>Refund(s) First:</span>
                        <span>$100
                            15-Jun-2021 11:12 AM</span>
                    </div>
                    <div className="dt-inner">
                        <span>Refund(s) Second:</span>
                        <span>$50
                            15-Jun-2021 11:12 AM</span>
                    </div>
                    <div className="dt-inner">
                        <span>Refund(s) Third::</span>
                        <span>$10
                            15-Jun-2021 11:12 AM</span>
                    </div>
                </div>

                <div className="payment-action">
                    <Tab.Container defaultActiveKey="Partial-Refund">
                        <Nav variant="pills">
                            <Nav.Item>
                                <Nav.Link eventKey="Full-Transaction">Refund This Transaction in Full</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="Partial-Refund">Partial Refund for This transaction</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            <Tab.Pane eventKey="Full-Transaction">
                                Full Transaction
                            </Tab.Pane>

                            <Tab.Pane eventKey="Partial-Refund">
                                <div className="refund-ammount-wrap">
                                    <Form className="payment-form">
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Refund Amount</Form.Label>
                                            <Form.Control type="email" />
                                        </Form.Group>

                                        <button className="btn btn-next">Apply Refund</button>
                                        <div className="form-values">
                                            <p className="text">
                                                An amount of <span>$10</span> was successfully refunded on <span>21-Jun-2021 03:00PM </span>
                                            </p>
                                        </div>
                                    </Form>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>

            </div>
        </>
    )
}