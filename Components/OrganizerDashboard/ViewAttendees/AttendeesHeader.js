import { Form } from "react-bootstrap";

export default function AttendeesHeader() {
    return (



        <div className="data-status-header">
            <div className="top-portion">
                <h2 className="header ">View Attendees</h2>
                <p className="trs-status">Status:<span>Unpublished</span></p>
            </div>
            <div className="bottom-portion">
                <p className="event-name">
                    <span>View Events</span>
                    <span className="heavy"> Unpublished</span>
                    <span>Event ID: 1244 - 5646 - 2636 - 1234</span>
                    <span className="heavy"> View Attendees</span>
                </p>
                <div className="status-menu">
                    <p className="event-name"> <span>Action: </span></p>
                    <Form.Select className="preview-status veselect">
                        <option>View Attendees</option>
                    </Form.Select>
                </div>
            </div>
        </div>



        // <div className="data-status-header">
        //     <div className="top-portion">
        //         <h2 className="header ">View Attendees</h2>
        //         <p className="trs-status">Status:<span>Unpublished</span></p>
        //     </div>
        //     <div className="bottom-portion">
        //         <p className="event-name">
        //             <span>View Events</span>
        //             <span className="heavy"> Unpublished</span>
        //             <span>Event ID: 1244 - 5646 - 2636 - 1234</span>
        //             <span className="heavy"> View Attendees</span>
        //         </p>
        //         <div className="status-menu">
        //             <p className="event-name"> <span>Event Status: </span>Published</p>
        //             <Form.Select className="preview-status">
        //                 <option>Preview</option>
        //             </Form.Select>
        //         </div>
        //     </div>
        // </div>
    )

}