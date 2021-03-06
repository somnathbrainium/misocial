
import { Form } from "react-bootstrap";
import { IoRefresh } from "react-icons/io5";
import EventSearchResult_C from "./EventSearchResult_C";

export default function EventsContent() {
    return (
        <div className="events-wrap">
            <div className="container">
                <h3 className="page-title">Shortlist</h3>

                {/* <Form className="universal-event-search">
                    <Form.Control type="text" placeholder="Enter your city / town / suburb" />
                    <button className="btn btn-search" type="submit">
                        Find Events
                    </button>
                </Form>
                <button className="btn btn-reset"><IoRefresh />Reset Location</button>
                <p className="search-res">Events near Australia, AU</p> */}
            </div>

            <EventSearchResult_C />
        </div>
    )
}