
import { Form } from "react-bootstrap";
import { IoRefresh } from "react-icons/io5";
import EventSearchResult_B from "./EventSearchResult_B";

export default function EventsContent_B() {
    return (
        <div className="events-wrap">
            <div className="container">
                <h3 className="page-title">Events</h3>

                <Form className="universal-event-search">
                    <Form.Control type="text" placeholder="Enter your city / town / suburb" />
                    <button className="btn btn-search" type="submit">
                        Find Events
                    </button>
                </Form>
                <button className="btn btn-reset"><IoRefresh />Reset Location</button>
                <p className="search-res">Events near Australia, AU</p>
            </div>

            <EventSearchResult_B />
        </div>
    )
}