import Image from 'next/image';
import searchImage from '../../public/images/event-searchResult.jpg';
import searchImage2 from '../../public/images/event-searchResult2.jpg';
import calendarIcon from '../../public/images/calendarIcon.png';
import { GoPlus } from 'react-icons/go';
import { IoLocationOutline } from 'react-icons/io5'
import Pagination from '../../Layouts/Pagination';
import Link from 'next/link';
import shortlistIcon from '../../public/images/shortlistIcon.png';



export default function EventSearchResult_C() {
    return (
        <div className="ev-search-result">

            <div className="singleItem">
                <div className="container">
                    <div className="content-wrap">
                        {/* <Image
                            src={searchImage}
                            alt="searchImage"
                            className="image-style"
                        /> */}

                <div className="modf_img modfimgevent"   style={{ background: 'url(../images/event-searchResult.jpg) no-repeat center center'}}>
                            <Image
                                src={searchImage}
                                alt="searchImage"
                                className="image-style"
                            />
                        </div> 


                        <div className="content addpading">
                            <div className="title-head"><a href="/event-details-B">Bunbury Toastmaster- Regular  Club Meeting</a></div>
                            <div className="time-date">
                                <Image className="image-icon"
                                    src={calendarIcon}
                                    alt="calendarIcon"
                                />
                                <span>SUN, APR 25 - MON, APR 26  6.30PM - 8.30PM</span></div>
                            <div className="location">
                                <IoLocationOutline />
                                Australia, AU, Aplus club</div>

                            <div className="action-section">
                                <a href="/event-details-B" className="aBtnnew">View Event</a>
                                
                                <Link href="/shortList">
                                <button className="btn btn-short">
                                <Image
                                    src={shortlistIcon}
                                    alt="events images"
                                /> Shortlist
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="singleItem">
                <div className="container">
                    <div className="content-wrap">
                        {/* <Image
                            src={searchImage2}
                            alt="searchImage"
                            className="image-style"
                        /> */}

<div className="modf_img modfimgevent"   style={{ background: 'url(../images/event-searchResult2.jpg) no-repeat center center'}}>
                            <Image
                                src={searchImage}
                                alt="searchImage2"
                                className="image-style"
                            />
                        </div>
                        <div className="content addpading">
                            <div className="title-head">The Event Fairy</div>
                            <div className="time-date">
                                <Image className="image-icon"
                                    src={calendarIcon}
                                    alt="calendarIcon"
                                />
                                <span>SUN, APR 25 - MON, APR 26  6.30PM - 8.30PM</span></div>
                            <div className="location">
                                <IoLocationOutline />
                                Australia, AU, Aplus club</div>

                            <div className="action-section">
                                <button className="btn btn-view-event">
                                    View Event
                                </button>

                                <Link href="/dashboard/my-shortlist">
                                <button className="btn btn-short">
                                <Image
                                    src={shortlistIcon}
                                    alt="events images"
                                /> Shortlist
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="singleItem">
                <div className="container">
                    <div className="content-wrap ">
                    <div className="modf_img modfimgevent"   style={{ background: 'url(../images/event-searchResult.jpg) no-repeat center center'}}>
                            <Image
                                src={searchImage}
                                alt="searchImage"
                                className="image-style"
                            />
                        </div>
                        <div className="content addpading">
                            <div className="title-head">Step by Step Corporate</div>
                            <div className="time-date">
                                <Image className="image-icon"
                                    src={calendarIcon}
                                    alt="calendarIcon"
                                />
                                <span>SUN, APR 25 - MON, APR 26  6.30PM - 8.30PM</span></div>
                            <div className="location">
                                <IoLocationOutline />
                                Australia, AU, Aplus club</div>

                            <div className="action-section">
                                <button className="btn btn-view-event">
                                    View Event
                                </button>

                                <Link href="/dashboard/my-shortlist">
                                <button className="btn btn-short">
                                <Image
                                    src={shortlistIcon}
                                    alt="events images"
                                />Shortlist
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="singleItem">
                <div className="container">
                    <div className="content-wrap">
                    <div className="modf_img modfimgevent"   style={{ background: 'url(../images/event-searchResult2.jpg) no-repeat center center'}}>
                            <Image
                                src={searchImage2}
                                alt="searchImage"
                                className="image-style"
                            />
                        </div>
                        <div className="content addpading">
                            <div className="title-head">A Wedding to Remember</div>
                            <div className="time-date">
                                <Image className="image-icon"
                                    src={calendarIcon}
                                    alt="calendarIcon"
                                />
                                <span>SUN, APR 25 - MON, APR 26  6.30PM - 8.30PM</span></div>
                            <div className="location">
                                <IoLocationOutline />
                                Australia, AU, Aplus club</div>

                            <div className="action-section">
                                <button className="btn btn-view-event">
                                    View Event
                                </button>

                                <Link href="/dashboard/my-shortlist">
                                <button className="btn btn-short">
                                <Image
                                    src={shortlistIcon}
                                    alt="events images"
                                /> Shortlist
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <Pagination />
            </div>
        </div>
    )
}