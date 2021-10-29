

import { Col, Form, Row } from "react-bootstrap";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Link from 'next/link'

export default function PlatinumSettingNext() {
    return (
        <Form className="form-class planCancel-wrap">
            <Form.Label className="section-name">Why Platinum</Form.Label>

            <ul className="nav plan-feature-wrap">
                <li className="nav-item">Discounted Tickets to Curated Networking Events </li>
                <li className="nav-item">Invites to Exclusive Platinum only Events</li>
                <li className="nav-item">Cancel Anytime</li>
            </ul>
            <hr />
            <div className="check-radio-wrap">
                <div className="form-label">Platinum Membership:</div>
                <div className="gender-part">
                    <label className="cs-wrapper">
                        <input type="checkbox" defaultcheck />
                        <span className="checkmark"></span>
                        <p className="label-text">No</p>
                    </label>
                    <label className="cs-wrapper">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <p className="label-text">Yes</p>
                    </label>
                </div>
            </div>
            <div className="check-radio-wrap">
                <div className="form-label">Platinum Membership expires / ended:</div>
                <span className="plan-hints">N/A</span>
            </div>
            <div className="check-radio-wrap">
                <div className="form-label">Platinum Membership renews:  </div>
                <span className="plan-hints"> 26-Dec-2020 (Amount Payable - $36.00)</span>
            </div>
            <hr />

            <div className="form-hints-container mt-2">

                <button className="btn btn-next">Cancel platinum membership</button>

                <p className="payment-hints">
                    Your Platinum Membership will auto-renew monthly. If you ever decide to cancel, you can do so anytime. However be sure to do so before the renewal date to avoid being charged for the next period.
                </p>
                <div className="save-cancel-action"><button className="btn btn-next">Save</button><button className="btn btn-cancel">Cancel</button></div>
                <p className="payment-hints">
                    Your Platinum Membership has been successfully cancelled.
                </p>
            </div>
        </Form>
    )
}
