import { Form } from "react-bootstrap";

export default function InvitesHeader() {
    return (

        <div className="data-status-header">
            <div className="top-portion">
                <h2 className="header ">Send Invites</h2>
                <p className="trs-status">Status:<span>Unpublished</span></p>
            </div>
            <div className="bottom-portion">
                <p className="event-name">
                    <span>View Events</span>
                    <span className="heavy">Published</span>
                    <span>Event ID: 1244 - 5646 - 2636 - 1234</span>
                    <span className="heavy"> Send Invites</span>
                </p>
                <div className="status-menu">
                    <p className="event-name"> <span>Action: </span></p>
                    <Form.Select className="preview-status veselect">
                        <option>Invite</option>
                    </Form.Select>
                </div>
            </div>
        </div>
    )

}