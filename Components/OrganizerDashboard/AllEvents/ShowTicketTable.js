
import { Form, Nav, Tab, Table } from "react-bootstrap";

export default function ShowTicketTable() {
    return (
        <>
            <div className="tab-structure-wr">

                <Table borderless responsive>
                    <thead>
                        <tr>
                            <th width="55%">Ticket Name </th>
                            <th width="15%">Quantity</th>
                            <th width="15%">Sold</th>
                            <th width="15%">Attending</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ticket one</td>
                            <td>15</td>
                            <td>20</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Ticket Two</td>
                            <td>15</td>
                            <td>20</td>
                            <td>30</td>
                        </tr>

                    </tbody>
                </Table>


            </div>

        </>
    )
}