import { Form, Tab, Table } from "react-bootstrap";
import Pagination from "../../../Layouts/Pagination";

export default function ViewAttendeesTable() {
    return (

        <div className="specific-tran-wrap responsivetableview2">

            <div className="trans-body">

                <Table responsive className="transaction-table vaTable">
                    <thead>
                        <tr>
                            <th className="w25pr-0 text-left">
                                <label className="cs-wrapper table-checkbox">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </th>
                            <th>Customer ID</th>
                            <th width="100px">MID</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Gender</th>
                            <th>Membership</th>
                            <th width="20%">Tickets (Bought / Attending)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Id" className="w25pr-0">
                                <label className="cs-wrapper table-checkbox">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                            <td data-label="Customer ID">
                                100 - 254 - 235
                            </td>
                            <td data-label="MID">
                                <Form.Select defaultValue="Z" className="mid-value">
                                    <option>Z</option>
                                    <option>Y</option>
                                </Form.Select>
                            </td>
                            <td className="text-center" data-label="Email" > d**y
                                @gmail.com</td>
                            <td data-label="First Name">Tom</td>
                            <td data-label="Gender" >Male</td>
                            <td data-label="Platinum">
                                Platinum
                            </td>
                            <td className="text-center" data-label="Tickets (Bought / Attending)" >Platinum Ticket One:  (10 / 2)
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
                    <button className="btn btn-next">Update MID For Selected Attendees</button>
                </div>
            </div>

        </div>
    )
}