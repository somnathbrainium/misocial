import { Form } from "react-bootstrap";
import React from 'react';
import EventsBanner_B from '../../Components/Events/EventsBanner_B';
import EventDetailsContents from '../../Components/EventDetails/EventDetailsContents'
export default function Preview_event_afterlogin() {
    return (
        <div className="event-details-wr">
            <EventsBanner_B />
            <div className="pvrEvent">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="data-status-header">
                            <div className="top-portion">
                                <h2 className="header ">Preview Event</h2>
                                <p className="trs-status">Status:<span>Unpublished</span></p>
                            </div>
                            <div className="bottom-portion">

                                <p className="event-name">
                                    <span>View Events</span>
                                    <span className="heavy"> All Events</span>
                                    <span>Event ID: 1244 - 5646 - 2636 - 1234</span>
                                    <span className="heavy">Preview</span>
                                </p>
                                <div className="status-menu">
                                    <p className="event-name"> <span>Action:</span></p>
                                    <Form.Select>
                                        <option>Preview</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <EventDetailsContents />
        </div>
    )
}