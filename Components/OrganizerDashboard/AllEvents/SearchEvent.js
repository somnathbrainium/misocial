import { Col, Form, Row } from "react-bootstrap";
import { IoRefresh } from 'react-icons/io5';

export default function SearchEvent() {
    return (
        <>
            <Form className="mb-4">

                <Form.Group className="mb-3" controlId="Event-name">
                    <Form.Label>Event name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="Event-Date-From">
                            <Form.Label>Event Date From</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="Event-Date-to">
                            <Form.Label>Event Date to</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="Event-Date-to">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter city / town / suburb" />
                    <button className="btn btn-reset"><IoRefresh />Reset Location</button>
                </Form.Group>
                <button className="btn btn-large w-100">Search events</button>

            </Form>

        </>
    )
}