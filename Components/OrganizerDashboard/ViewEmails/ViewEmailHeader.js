import { Form } from "react-bootstrap";

export default function ViewEmailsHeader() {
    return (

        <div className="data-status-header">
            <div className="top-portion">
                <h2 className="header ">View Emails</h2>
                <p className="trs-status">Status:<span>Unpublished</span></p>
            </div>
            <div className="bottom-portion">
                <p className="event-name">
                    <span>View Events</span>
                    <span className="heavy"> Unpublished</span>
                    <span>Event ID: 1244 - 5646 - 2636 - 1234</span>
                    <span className="heavy"> View Emails</span>
                </p>
                <div className="status-menu">
                    <p className="event-name"> <span>Action: </span></p>
                    <Form.Select className="preview-status veselect">
                        <option>View Emails</option>
                    </Form.Select>
                </div>
            </div>
        </div>
    )

}