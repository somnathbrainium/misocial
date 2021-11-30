import { Tab, Form, Nav, Table } from "react-bootstrap";
import { FaChevronRight } from 'react-icons/fa'
import Pagination from "../../../Layouts/Pagination";

export default function SendEmails() {
    return (
        <>
            <div className="data-status-header">
                <div className="mxWdthead">
                    <div className="top-portion">
                        <h2 className="header ">Send Email</h2>
                        <p className="trs-status">Status:<span>Unpublished</span></p>
                    </div>
                    <div className="bottom-portion">

                        <p className="event-name">
                            <span>View Events</span>
                            <span className="heavy"> Unpublished</span>
                            <span>Event ID: 1244 - 5646 - 2636 - 1234</span>
                            <span className="heavy">Send Email</span>
                        </p>
                        <div className="status-menu">
                            <p className="event-name"> <span>Action:</span></p>
                            <Form.Select>
                                <option>Send Email</option>
                            </Form.Select>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}