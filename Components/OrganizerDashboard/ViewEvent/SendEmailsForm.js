import { Form, Table } from "react-bootstrap";
import Image from 'next/image';
import { IoRefresh } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';
import nounUser from '../../../public/images/noun_User.png';

export default function SendEmailsForm() {
    return (
        <>
            <Form className="form-class">
                <div className="check-radio-wrap">
                    <div className="form-label">Send Email to </div>
                    <div className="gender-part">
                        <label className="cs-wrapper">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                            <p className="label-text">All Attendees</p>
                        </label>
                        <label className="cs-wrapper">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <p className="label-text">Attendees by Ticket Type</p>
                        </label>
                        <label className="cs-wrapper">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <p className="label-text">Specific Attendees</p>
                        </label>
                    </div>
                </div>
                <Table responsive className="transaction-table ticket-table mb-4">
                    <thead>
                        <tr>
                            <th>Ticket</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Sold</th>
                            <th className="text-center" width="20%">Attendees</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label className="cs-wrapper table-checkbox">
                                    <input type="checkbox" defaultChecked />
                                    <span className="checkmark">
                                    </span>
                                    <p className="label-text">Female Ticket</p>
                                </label>
                            </td>
                            <td className="text-center">69.00</td>
                            <td className="text-center">0</td>
                            <td className="text-center">0</td>
                        </tr>
                        <tr>
                            <td>
                                <label className="cs-wrapper table-checkbox">
                                    <input type="checkbox" defaultChecked />
                                    <span className="checkmark">
                                    </span>
                                    <p className="label-text">Male Ticket</p>
                                </label>
                            </td>
                            <td className="text-center">69.00</td>
                            <td className="text-center">0</td>
                            <td className="text-center">0</td>
                        </tr>

                    </tbody>
                </Table>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Reply to Email</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>Send Test Message to</Form.Label>
                    <div className="select-box">
                        <Form.Control type="text" />
                        <button className="btn btn-cancel ms-3 ">Send Test</button>
                    </div>
                </Form.Group>
                <div className="save-cancel-action">
                    <button className="btn btn-next">Send Now</button>
                    <button className="btn btn-cancel">Cancel</button></div>
            </Form>

        </>
    )
}