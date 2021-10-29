
import { Form } from "react-bootstrap";
import Link from 'next/link'


export default function LoginForm() {
    return (
        <div className="step-one-form">
            <div className="stepfrm-inner">
                <h2 className="header">Login</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter your email address</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Create Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <div className="remember">
                        <label className="cs-wrapper">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                            <p className="label-text">Remember me</p>
                        </label>
                        <Link href="/forgot-password">
                            <a className="forget-pass">Forgot Password</a>
                        </Link>

                    </div>
                    <button className="btn btn-next"><Link href="/index_B">Login</Link></button>
                </Form>
                <p className="members-already">Already a Member?
                    <Link href="/signup-step1">
                        <a> Join Now</a>
                    </Link>
                </p>
            </div>

        </div>
    )
}