import { Tab, Form, Nav, Table } from "react-bootstrap";
import { FaChevronRight } from 'react-icons/fa'
import Pagination from "../../../Layouts/Pagination";

export default function ViewTransactionsList() {
    return (
        <>
            <div className="data-status-header">
                <div className="top-portion">
                    <h2 className="header ">View transactions</h2>
                    <p className="trs-status">Status:<span>Unpublished</span></p>
                </div>
                <div className="bottom-portion">

                    <p className="event-name">
                        <span>View Events</span>
                        <span className="heavy"> Unpublished</span>
                        <span>Event ID: 1244 - 5646 - 2636 - 1234</span>
                        <span className="heavy">View Transactions</span>
                    </p>
                    <div className="status-menu">
                        <p className="event-name"> <span>Published:</span></p>
                        <Form.Select>
                            <option>View Transactions</option>
                        </Form.Select>
                    </div>
                </div>
            </div>
            <div className="specific-tran-wrap view-transactions-list">

                <div className="trans-body">
                    <div className="search-trans">
                        <Form className="search-form">
                            <Form.Control type="text" placeholder="Name / Email / Customer ID or Last 4 digits of credit card" />
                            <button className="search btn">Find</button>
                        </Form>
                    </div>
                    <p className="table-title">All transactions</p>
                    <Table responsive className="transaction-table">
                        <thead>
                            <tr>
                                <th className="w25pr-0 text-left">
                                    <label className="cs-wrapper table-checkbox">
                                        <input type="checkbox" defaultChecked />
                                        <span className="checkmark"></span>
                                    </label>
                                </th>
                                <th className="text-left">Member</th>
                                <th>Customer<br />
                                    ID</th>
                                <th width="115px">Purchase<br /> Date</th>
                                <th>Last 4 digits<br />
                                    credit card</th>
                                <th>Total Paid</th>
                                <th>Refund(s)</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label className="cs-wrapper table-checkbox">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </td>
                                <td>
                                    <p className="b-title">Jone doe</p>
                                    d**y@gmail.com <br />
                                    Male<br />
                                    Platinum Member
                                </td>
                                <td>
                                    123 - 456 - 789
                                </td>
                                <td className="text-center">21-Jun-2021
                                    03:00PM</td>
                                <td>1234</td>
                                <td>$50</td>
                                <td>
                                    <p className="b-title text-center">$50</p>
                                    25-Jun-2021
                                </td>
                                <td>Paid</td>
                                <td>
                                    <button className="btn btn-action"><FaChevronRight /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="cs-wrapper table-checkbox">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </td>
                                <td>
                                    <p className="b-title">Jone doe</p>
                                    d**y@gmail.com <br />
                                    Male<br />
                                    Platinum Member
                                </td>
                                <td>
                                    123 - 456 - 789
                                </td>
                                <td className="text-center">21-Jun-2021
                                    03:00PM</td>
                                <td>1234</td>
                                <td>$50</td>
                                <td>
                                    <p className="b-title text-center">$50</p>
                                    25-Jun-2021
                                </td>
                                <td>Paid</td>
                                <td>
                                    <button className="btn btn-action"><FaChevronRight /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="cs-wrapper table-checkbox">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </td>
                                <td>
                                    <p className="b-title">Jone doe</p>
                                    d**y@gmail.com <br />
                                    Male<br />
                                    Platinum Member
                                </td>
                                <td>
                                    123 - 456 - 789
                                </td>
                                <td className="text-center">21-Jun-2021
                                    03:00PM</td>
                                <td>1234</td>
                                <td>$50</td>
                                <td>
                                    <p className="b-title text-center">$50</p>
                                    25-Jun-2021
                                </td>
                                <td>Paid</td>
                                <td>
                                    <button className="btn btn-action"><FaChevronRight /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="cs-wrapper table-checkbox">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </td>
                                <td>
                                    <p className="b-title">Jone doe</p>
                                    d**y@gmail.com <br />
                                    Male<br />
                                    Platinum Member
                                </td>
                                <td>
                                    123 - 456 - 789
                                </td>
                                <td className="text-center">21-Jun-2021
                                    03:00PM</td>
                                <td>1234</td>
                                <td>$50</td>
                                <td>
                                    <p className="b-title text-center">$50</p>
                                    25-Jun-2021
                                </td>
                                <td>Paid</td>
                                <td>
                                    <button className="btn btn-action"><FaChevronRight /></button>
                                </td>
                            </tr>


                        </tbody>
                    </Table>
                </div>

                <div className="payment-action">
                    <Pagination />
                    <Tab.Container defaultActiveKey="Partial-Refund">
                        <Nav variant="pills">
                            <Nav.Item>
                                <Nav.Link eventKey="Full-Transaction">Refund Selected Transactions in Full</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="Partial-Refund">Partial Refund for selected transaction</Nav.Link>
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