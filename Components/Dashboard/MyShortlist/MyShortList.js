import Image from 'next/image';
import { BiCalendar, BiPlus } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import myeventImage from '../../../public/images/myeventImage.jpg';
import shortlistIcon from '../../../public/images/shortlistIcon.png';


export default function MyShortList() {
    return (
        <>

            <h2 className="header">My Shortlist</h2>
            <div className="myevents-list">
                <div className="content-inner">
                    <Image className="image-part"
                        src={myeventImage}
                        alt="events images"
                    />

                    <div className="content-part">
                        <h2 className="m-header">Bunbury Toastmaster- Regular  Club Meeting</h2>
                        <div className="sub-title capitalized">
                            <BiCalendar /> SUN, APR 25 - MON, APR 26  6.30PM - 8.30PM</div>
                        <div className="sub-title">
                            <IoLocationOutline /> Australia, AU, Aplus club</div>
                        <div className="save-cancel-action msBtn">
                            <button className="btn btn-view-event">
                                View
                            </button>
                            <button className="btn btn-short">
                                <Image
                                    src={shortlistIcon}
                                    alt="events images"
                                />Shortlist
                            </button>

                        </div>
                    </div>


                </div>
            </div>
            <div className="myevents-list">
                <div className="content-inner">
                    <Image className="image-part"
                        src={myeventImage}
                        alt="events images"
                    />

                    <div className="content-part">
                        <h2 className="m-header">The Event Fairy</h2>
                        <div className="sub-title capitalized">
                            <BiCalendar /> SUN, APR 25 - MON, APR 26  6.30PM - 8.30PM</div>
                        <div className="sub-title">
                            <IoLocationOutline /> Australia, AU, Aplus club</div>
                        <div className="save-cancel-action msBtn">
                            <button className="btn btn-view-event">
                                View
                            </button>
                            <button className="btn btn-short">
                                <Image
                                    src={shortlistIcon}
                                    alt="events images"
                                />Shortlist
                            </button>

                        </div>
                    </div>


                </div>
            </div>
            <div className="myevents-list">
                <div className="content-inner">
                    <Image className="image-part"
                        src={myeventImage}
                        alt="events images"
                    />

                    <div className="content-part">
                        <h2 className="m-header">Galas and Casual</h2>
                        <div className="sub-title capitalized">
                            <BiCalendar /> SUN, APR 25 - MON, APR 26  6.30PM - 8.30PM</div>
                        <div className="sub-title">
                            <IoLocationOutline /> Australia, AU, Aplus club</div>
                        <div className="save-cancel-action msBtn">
                            <button className="btn btn-view-event">
                                View
                            </button>
                            <button className="btn btn-short">
                                <Image
                                    src={shortlistIcon}
                                    alt="events images"
                                />Shortlist
                            </button>

                        </div>
                    </div>


                </div>
            </div>
            <div className="myevents-list">
                <div className="content-inner">
                    <Image className="image-part"
                        src={myeventImage}
                        alt="events images"
                    />

                    <div className="content-part">
                        <h2 className="m-header">Step by Step Corporate</h2>
                        <div className="sub-title capitalized">
                            <BiCalendar /> SUN, APR 25 - MON, APR 26  6.30PM - 8.30PM</div>
                        <div className="sub-title">
                            <IoLocationOutline /> Australia, AU, Aplus club</div>
                        <div className="save-cancel-action msBtn">
                            <button className="btn btn-view-event">
                                View
                            </button>
                            <button className="btn btn-short">
                                <Image
                                    src={shortlistIcon}
                                    alt="events images"
                                />Shortlist
                            </button>

                        </div>
                    </div>


                </div>
            </div>
            <div className="myevents-list">
                <div className="content-inner">
                    <Image className="image-part"
                        src={myeventImage}
                        alt="events images"
                    />

                    <div className="content-part">
                        <h2 className="m-header">A Wedding to Remember</h2>
                        <div className="sub-title capitalized">
                            <BiCalendar /> SUN, APR 25 - MON, APR 26  6.30PM - 8.30PM</div>
                        <div className="sub-title">
                            <IoLocationOutline /> Australia, AU, Aplus club</div>
                        <div className="save-cancel-action msBtn">
                            <button className="btn btn-view-event">
                                View
                            </button>
                            <button className="btn btn-short">
                                <Image
                                    src={shortlistIcon}
                                    alt="events images"
                                />Shortlist
                            </button>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}