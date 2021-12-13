
import { Form, Nav, Tab, Table } from "react-bootstrap";

export default function ShowTicketTable() {
    return (
        <>
            <div className="tab-structure-wr responsivetableview">

                <Table borderless responsive1>
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
                            <td data-label="Ticket Name" >Ticket one</td>
                            <td data-label="Quantity">15</td>
                            <td data-label="Sold">20</td>
                            <td data-label="Attending">30</td>
                        </tr>
                        <tr>
                            <td data-label="Ticket Name">Ticket Two</td>
                            <td data-label="Quantity">15</td>
                            <td data-label="Sold">20</td>
                            <td data-label="Attending">30</td>
                        </tr>

                    </tbody>
                </Table>


            </div>

        </>
    )
}