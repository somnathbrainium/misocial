import { Form } from "react-bootstrap";
import Image from 'next/image';
import { IoRefresh } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';
import nounUser from '../../../public/images/noun_User.png';

export default function AboutMe() {
    return (
        <>
            <Form className="form-class">
                <Form.Label className="section-name">About Me</Form.Label>
                <div  className="inprow"> 
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Mukaddar" />
                </Form.Group>

                
                <Form.Group className="mb-3 date-year yearInput" controlId="exampleForm.ControlInput5">
                        <Form.Label>Year Born</Form.Label>
                        {/* <Form.Control type="date" /> */}
                        <Form.Control type="number" max="9999" placeholder="Y-Y-Y-Y"/>
                    </Form.Group>

                </div>

                
                <div className="check-radio-wrap crwNew">
                    <div className="form-label">Gender</div>
                    <div className="gender-part">
                        <label className="cs-wrapper">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                            <p className="label-text">Male</p>
                        </label>
                        <label className="cs-wrapper">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <p className="label-text">Female</p>
                        </label>
                    </div>
                </div>

                <div className="check-radio-wrap crwNew">
                    <div className="form-label">Occupation</div>
                    <div className="gender-part">
                        <label className="cs-wrapper">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                            <p className="label-text">Professional</p>
                        </label>
                        <label className="cs-wrapper">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <p className="label-text">Entrepreneur</p>
                        </label>
                        <label className="cs-wrapper">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <p className="label-text">Other</p>
                        </label>
                    </div>
                </div>


                
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                    <Form.Label>City/Town/Suburb</Form.Label>
                    <Form.Control type="text" placeholder="Minneapolis" />
                    <button className="btn btn-reset"><IoRefresh />Reset Location</button>
                </Form.Group>

                <div  className="inprow">  

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="Minnesota" />
                    </Form.Group>
                  
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" placeholder="USA" />
                    </Form.Group>

                    </div>
                {/* <input className="date-own form-control" type="text" /> */}
              
                <Form.Group className="mb-3 profImg"  >
                    <Form.Label>Profile Image</Form.Label>
                    <Form.Control type="file" hidden id="main-input" />
                    <div className="image-upload">
                        <Image
                            src={nounUser}
                            alt="noun User"
                        />
                        <label className="edit-icon" htmlFor="main-input">
                            <MdEdit />
                        </label>
                    </div>
                </Form.Group>
                <div className="save-cancel-action">
                    <button className="btn btn-next">Save</button>
                    <button className="btn btn-cancel">Cancel</button>
                </div>
            </Form>

        </>
    )
}