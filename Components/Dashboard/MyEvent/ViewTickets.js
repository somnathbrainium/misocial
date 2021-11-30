import { Table } from "react-bootstrap";

export default function ViewTickets() {
    return (
        <div className="view-tickets-wrapper">
            <button className="btn my-tickets">
                My Ticket(s)
            </button>
            <p className="hints">Below are the details of your ticket(s) bought. It also serves as your tax invoice (if required).</p>

            <div className="send-wrapper">
                <div className="data-container">
                    <h4>From</h4>
                    <div className="content-wrap">
                        <span>Business Name:</span>
                        <span>Deepak Events</span>
                    </div>
                    <div className="content-wrap">
                        <span>Business Identifier:</span>
                        <span>Identifier123</span>
                    </div>
                    <div className="content-wrap">
                        <span>Tax ID / ABN:</span>
                        <span>TaxIdabn1234</span>
                    </div>
                </div>

                <div className="data-container">
                    <h4>to</h4>
                    <div className="content-wrap">
                        <span>First Name:</span>
                        <span>Karim </span>
                    </div>
                    <div className="content-wrap">
                        <span>Customer ID:</span>
                        <span>123 - 456 - 789</span>
                    </div>
                    <div className="content-wrap">
                        <span>Member:</span>
                        <span>Platinum</span>
                    </div>
                </div>
            </div>
            <div className="send-wrapper ">
                <div className="data-container no-border">

                    <div className="content-wrap">
                        <span>Invoice No:</span>
                        <span>ISED 12345</span>
                    </div>
                    <div className="content-wrap">
                        <span>Invoice Date:</span>
                        <span>26 Jul 2021</span>
                    </div>
                </div>

                <div className="data-container no-border">

                    <div className="content-wrap">
                        <span>Invoice Status:</span>
                        <span>Paid </span>
                    </div>
                    <div className="content-wrap">
                        <span>Purchase Date:</span>
                        <span>26 Jul 2021</span>
                    </div>

                </div>
            </div>

            <div className="data-container">
                <h4>Event</h4>
                <div className="content-wrap">
                    <span>Event Name:</span>
                    <span>Name of Event </span>
                </div>
                <div className="content-wrap">
                    <span>Date & Time:</span>
                    <span>12 Jun 2021 09:00 PM</span>
                </div>
                <div className="content-wrap">
                    <span>Venue Name:</span>
                    <span>Marbel Bar, Hilton</span>
                </div>
                <div className="content-wrap">
                    <span>Venue Address:</span>
                    <span>212 Pitt Street, Sydney, 2000. NSW</span>
                </div>
            </div>

            <Table borderless responsive className=" ticket-table">
                <thead>
                    <tr>
                        <th>Ticket(s)</th>
                        <th>Qty</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Platinum Ticket One</td>
                        <td>1</td>
                        <td>$10</td>
                    </tr>
                    <tr>
                        <td>Platinum Ticket Two</td>
                        <td>1</td>
                        <td>$10</td>
                    </tr>
                    <tr>
                        <td>Basic Ticket Seventy-Five</td>
                        <td>1</td>
                        <td>$50</td>
                    </tr>
                </tbody>
            </Table>
            <div className="amount-wrap">
                <div className="tag-head">
                    <span>Amount Paid*</span>
                    <span>$100</span>
                </div>
                <p className="other-charges">*Inclusive of local taxes and charges listed below:</p>
                <p className="other-charges">GST: 10%</p>
                <p className="other-charges">Local Tax: 10%</p>
                <p className="other-charges">UPS: 10%</p>
                <button className="btn btn-next">Print Tickets</button>
            </div>
        </div>
    )
}