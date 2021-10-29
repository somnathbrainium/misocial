import { Form } from "react-bootstrap";

export default function InvitesHeader() {
    return (

        <div className="data-status-header">
            <div className="top-portion">
                <h2 className="header ">Send invites</h2>
                <p className="trs-status">Status:<span>Unpublished</span></p>
            </div>
            <div className="bottom-portion">
                <p className="event-name">
                    <span>View Events</span>
                    <span className="heavy">Published</span>
                    <span>Event ID:</span>
                    <span className="heavy"> 1244 - 5646 - 2636 - 1234</span>
                </p>
                <div className="status-menu">
                    <p className="event-name"> <span>Event Status: </span>Published</p>
                    <Form.Select className="preview-status">
                        <option>Preview</option>
                    </Form.Select>
                </div>
            </div>
        </div>
    )

}