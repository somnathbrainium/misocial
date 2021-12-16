import { Form, Nav, Tab, Table } from "react-bootstrap";
export default function UpdateAttendance() {
    return (
        <>
            <div className="tab-structure-wr responsivetableview">
                <Form>
                    <Table borderless responsive1 >
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
                                <td data-label="Ticket Name" >Ticket One Ticket One</td>
                                <td data-label="Tickets Bought" >5</td>
                                <td data-label="Attending"> <Form.Control type="text" defaultValue="3" /></td>
                                <td data-label="Refund Request"><Form.Control type="text" defaultValue="3" /></td>
                            </tr>
                            <tr>
                                <td  data-label="Ticket Name" >Ticket Two</td>
                                <td  data-label="Tickets Bought">15</td>
                                <td data-label="Attending"><Form.Control type="text" defaultValue="3" /></td>
                                <td data-label="Refund Request"><Form.Control type="text" defaultValue="3" /></td>
                            </tr>

                        </tbody>
                    </Table>

                    <div className="update-form">
                        <button className="btn btn-next">Update Attendance</button>
                        <button className="btn btn-cancel">Request Refund</button>

                        {/* <button className="btn btn-next">Request Refund</button> */}

                    </div>
                </Form>
            </div>

        </>
    )
}