import { Col, Form, Row } from "react-bootstrap";

export default function OrganizerDashboardApproved() {
    return (
        <>
            <div className="organize-db-wrapper">


                <Form className="form-class OrganizerDashboardApproved">

                    <div className="check-radio-wrap">
                        <div className="form-label">Organizer Status</div>
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

                    <div className="approve-Instruction">
                        <button className="btn btn-next">Finalize my Organizer Settings</button>
                        <button className="btn btn-cancel">Delete my Account</button>
                    </div>

                    <p className="instruction-para">
                        Warning ! If you continue, you agree that your account will be closed and you will not be able to receive ticket refunds regardless of eligibility, as Event Organizers will no longer have access to information needed to process refunds when your account is closed. additionally, you agree that no refund will be provided to you for any unexpired platinum membership remaining.
                    </p>
                    <div className="save-cancel-action">
                        <button className="btn btn-next">Save</button>
                        <button className="btn btn-cancel">Cancel</button>
                    </div>
                    <p className="instruction-para">Your account was successfully deleted</p>
                </Form>

            </div>
        </>
    )
}
