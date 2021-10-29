import { Col, Modal, Row, Table } from "react-bootstrap";
import { useState } from "react";
import Pagination from "../../../Layouts/Pagination";

export default function EmailListTable() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="specific-tran-wrap">

                <div className="trans-body">

                    <Table responsive className="transaction-table">
                        <thead>
                            <tr>
                                <th>Subject Of Email</th>
                                <th className="text-center">Recipients</th>
                                <th className="text-center">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr onClick={handleShow}>
                                <td>
                                    Message to Aattendees of Copy of Speed Dating (Age: 40-49)
                                </td>
                                <td className="text-center"> 5 </td>
                                <td className="text-center">28 June 2021</td>
                            </tr>
                            <tr onClick={handleShow}>
                                <td>
                                    Reminder for Copy of Speed Dating (Age: 40-49)
                                </td>
                                <td className="text-center"> 5 </td>
                                <td className="text-center">28 June 2021</td>
                            </tr>
                            <tr onClick={handleShow}>
                                <td>
                                    Reminder for Copy of Speed Dating (Age: 40-49)
                                </td>
                                <td className="text-center"> 5 </td>
                                <td className="text-center">28 June 2021</td>
                            </tr>
                            <tr onClick={handleShow}>
                                <td>
                                    Reminder for Copy of Speed Dating (Age: 40-49)
                                </td>
                                <td className="text-center"> 5 </td>
                                <td className="text-center">28 June 2021</td>
                            </tr>
                        </tbody>
                    </Table>


                </div>

                <div className="container">
                <Pagination />
            </div>

            </div>

            <Modal
                className="universalModal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Preview of your message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="messagepreview-wrapper">
                        <div className="message-title"><strong>Lorem Ipsum is simply dummy text of the printing</strong></div>
                        <p className="messgae-para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  Content here, content here.</p>
                        <p className="messgae-para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                        <Row>
                            <Col md={8}>
                                <p className="messgae-para mb-1"><strong>Lorem Ipsum is simply dummy.</strong></p>
                                <p className="messgae-para"><strong>Lorem Ipsum</strong></p>
                            </Col>
                            <Col md={4}>
                                <p className="messgae-para mb-1"><strong>Lorem Ipsum</strong></p>

                            </Col>
                        </Row>
                    </div>
                </Modal.Body>

            </Modal>

        </>
    )
}