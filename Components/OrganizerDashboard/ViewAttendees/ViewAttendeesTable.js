import { Form, Tab, Table } from "react-bootstrap";
import Pagination from "../../../Layouts/Pagination";

export default function ViewAttendeesTable() {
    return (

        <div className="specific-tran-wrap">

            <div className="trans-body">

                <Table responsive className="transaction-table">
                    <thead>
                        <tr>
                            <th className="w25pr-0 text-left">
                                <label className="cs-wrapper table-checkbox">
                                    <input type="checkbox" defaultChecked />
                                    <span className="checkmark"></span>
                                </label>
                            </th>
                            <th>Customer ID</th>
                            <th width="100px">MID</th>
                            <th> Email</th>
                            <th>First Name</th>
                            <th>Gender</th>
                            <th>Membership</th>
                            <th width="20%">Tickets (Bought / Attending)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="w25pr-0">
                                <label className="cs-wrapper table-checkbox">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                            <td>
                                100 - 254 - 235
                            </td>
                            <td>
                                <Form.Select defaultValue="Z" className="mid-value">
                                    <option>X</option>
                                    <option>Y</option>
                                </Form.Select>
                            </td>
                            <td className="text-center"> d**y
                                @gmail.com</td>
                            <td>Tom</td>
                            <td>Male</td>
                            <td>
                                Platinum
                            </td>
                            <td className="text-center">Platinum Ticket One:  (10 / 2)
                                Basic Ticket two: (7 / 2)</td>
                        </tr>
                    </tbody>
                </Table>

                <div className="container">
                <Pagination />
            </div>

                <div className="save-cancel-action">
                    <button className="btn btn-next">Download Attendees PDF</button>
                    <button className="btn btn-next">Download Attendees Excel</button>
                    <button className="btn btn-next">Update MID for selected Attendees</button>
                </div>
            </div>

        </div>
    )
}