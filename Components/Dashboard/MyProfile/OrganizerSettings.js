import { Form } from "react-bootstrap";
import { AiOutlineInfoCircle } from 'react-icons/ai';

export default function OrganizerSettings() {
    return (
        <>
            <Form className="form-class">
                <Form.Label className="section-name">Organizer Settings</Form.Label>



                <div className="check-radio-wrap membership-wr">
                    <div className="form-label">Membership Status</div>
                    <div className="gender-part">
                        <label className="cs-wrapper">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                            <p className="label-text">No</p>
                        </label>
                        <label className="cs-wrapper">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <p className="label-text">Approved</p>
                        </label>
                        <label className="cs-wrapper">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <p className="label-text">Active</p>
                        </label>
                        <label className="cs-wrapper">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <p className="label-text">Disabled (by Admin)</p>
                        </label>
                        <label className="cs-wrapper">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <p className="label-text">Disabled (Expired Platinum Membership)</p>
                        </label>
                    </div>
                </div>
                <p className="host-title"> Want to host events? </p>
                <button className="btn btn-next">Apply now to become an Event Organizer</button>

                <div className="form-hints-container">
                    <Form.Group className="mb-3" controlId="exampleForm1">
                        <div className="direction-by">
                            <Form.Label>Business Name</Form.Label>
                            <span className="hints"><AiOutlineInfoCircle /></span>
                        </div>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm2">
                        <div className="direction-by">
                            <Form.Label>Business Identifier</Form.Label>
                            <span className="hints"><AiOutlineInfoCircle /></span>
                        </div>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm3">
                        <div className="direction-by">
                            <Form.Label>Tax ID / ABN</Form.Label>
                            <span className="hints"><AiOutlineInfoCircle /></span>
                        </div>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm4">
                        <div className="direction-by">
                            <Form.Label>Contact telephone number</Form.Label>
                            <span className="hints"><AiOutlineInfoCircle /></span>
                        </div>
                        <div className="select-box">
                            <Form.Select aria-label="Default select example" className="form-control">
                                <option defaultValue>AUS +61</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <Form.Control type="number" />
                        </div>
                    </Form.Group>
                    <button className="btn btn-next">Submit Application</button>
                </div>
            </Form>
        </>
    )
}