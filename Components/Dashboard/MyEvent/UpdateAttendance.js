import { Form, Nav, Tab, Table } from "react-bootstrap";
export default function UpdateAttendance() {
    return (
        <>
            <div className="tab-structure-wr">
                <Form>
                    <Table borderless responsive>
                        <thead>
                            <tr>
                                <th width="40%">Ticket Name </th>
                                <th width="20%">Tickets Bought</th>
                                <th width="20%">Attending</th>
                                <th width="20%">Refund Request </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ticket One Ticket One</td>
                                <td>5</td>
                                <td> <Form.Control type="text" defaultValue="3" /></td>
                                <td><Form.Control type="text" defaultValue="3" /></td>
                            </tr>
                            <tr>
                                <td>Ticket Two</td>
                                <td>15</td>
                                <td><Form.Control type="text" defaultValue="3" /></td>
                                <td><Form.Control type="text" defaultValue="3" /></td>
                            </tr>

                        </tbody>
                    </Table>

                    <div className="update-form">
                        <button className="btn btn-next">Update Attendance</button>
                        <button className="btn btn-cancel">Request Refund</button>
                    </div>
                </Form>
            </div>

        </>
    )
}