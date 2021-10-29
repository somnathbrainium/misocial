import Link from 'next/link'
import UserName from './UserName'
import { useRouter } from "next/router";
import Image from 'next/image'
import dbicon from '../../public/images/dbicon.png'
import transactionIcon from '../../public/images/transactionIcon.png'
import dbcalendarIcon from '../../public/images/dbcalendarIcon.png'
import dbDiamondIcon from '../../public/images/dbDiamondIcon.png'
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { RiCalendarEventLine, RiDeleteBin6Line } from 'react-icons/ri';
import { BiCalendarStar, BiLogOutCircle } from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';


export default function Sidebar() {
    const router = useRouter();

    return (
        <div className="sidebar">
            <UserName />
            <ul className="nav flex-column parent">
                <li className={`nav-item ${router.asPath == "/dashboard" ? "active" : ""}`} >
                    <Image className="icon-image"
                        src={dbicon}
                        alt="df image"
                    />
                    <Link className="nav-link" href="/dashboard"><a>Dashboard</a></Link>
                </li>
                <ul className="nav flex-column child">
                    <li className={`nav-item ${router.asPath == "/dashboard/my-profile" ? "active" : ""}`}>
                        <FaUserCircle /> <Link href="/dashboard/my-profile" className="nav-link"><a>My Profile </a></Link>
                    </li>
                    <li className={`nav-item ${router.asPath == "/dashboard/my-events" ? "active" : ""}`}>
                        <Image
                            src={dbcalendarIcon} alt="image" className="icon-image" />
                        <Link className="nav-link" href="/dashboard/my-events"><a>My Events</a></Link>
                    </li>
                    <li className={`nav-item ${router.asPath == "/dashboard/my-shortlist" ? "active" : ""}`}>
                        <AiOutlinePlusCircle /> <Link className="nav-link" href="/dashboard/my-shortlist"><a>My shortlist</a></Link>
                    </li>
                    <li className={`nav-item ${router.asPath == "/dashboard/platinum-settings" ? "active" : ""}`}>

                        <Image
                            src={dbDiamondIcon} alt="image" className="icon-image" /> <Link className="nav-link" href="/dashboard/platinum-settings"><a>Platinum Settings</a></Link>
                    </li>
                    <li className={`nav-item ${router.asPath == "/dashboard/send-invites" ? "active" : ""}`}>

                        <Image
                            src={dbDiamondIcon} alt="image" className="icon-image" />
                        <Link className="nav-link" href="/dashboard/send-invites"><a>Send Invites</a></Link>
                    </li>
                </ul>

                <li className={`nav-item ${router.asPath == "/organizer-dashboard" ? "active" : ""}`} >
                    <Image className="icon-image"
                        src={dbicon}
                        alt="icon-image 2"
                    />
                    <Link className="nav-link" href="/organizer-dashboard"><a>Organizer Dashboard</a></Link>

                </li>
                <ul className="nav flex-column child">
                    <li className={`nav-item ${router.asPath == "/organizer-dashboard/organizer-approved" ? "active" : ""}`}>
                        <IoSettingsOutline /> <Link href="/organizer-dashboard/organizer-approved" className="nav-link"><a>Organizer Settings</a></Link>
                    </li>
                    <li className={`nav-item ${router.asPath == "/organizer-dashboard/create-event" ? "active" : ""}`}>
                        <BiCalendarStar /> <Link href="/organizer-dashboard/create-event" className="nav-link">Create Event</Link>
                    </li>
                    <li className={`nav-item ${router.asPath == "/organizer-dashboard/all-events" ? "active" : ""}`}>
                        <RiCalendarEventLine /> <Link href="/organizer-dashboard/all-events" className="nav-link">View Events</Link>

                    </li>
                    <ul className="nav flex-column child child-of-child">
                        <li className={`nav-item ${router.asPath == "/organizer-dashboard/all-events" ? "active" : ""}`}>
                            <Link className="nav-link" href="/organizer-dashboard/all-events">All Events</Link>
                        </li>
                        <li className={`nav-item ${router.asPath == "/organizer-dashboard/view-attendees" ? "active" : ""}`}>
                            <Link className="nav-link" href="/organizer-dashboard/view-attendees">View Attendees</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/">Past</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/">Draft</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/">Published</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/">Unpublished</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/">Cancelled & Unpublished</Link>
                        </li>
                        <li className={`nav-item ${router.asPath == "/organizer-dashboard/send-emails" ? "active" : ""}`}>
                            <Link className="nav-link" href="/organizer-dashboard/send-emails">Send Emails</Link>
                        </li>
                        <li className={`nav-item ${router.asPath == "/organizer-dashboard/view-emails" ? "active" : ""}`}>
                            <Link className="nav-link" href="/organizer-dashboard/view-emails">View Emails</Link>
                        </li>
                    </ul>
                    <li className={`nav-item ${router.asPath == "/organizer-dashboard/view-transactions" ? "active" : ""}`}>
                        <Image className="icon-image"
                            src={transactionIcon}
                            alt="transaction Icon" />
                        <Link href="/organizer-dashboard/view-transactions" className="nav-link">View Transactions</Link>
                    </li>
                </ul>

                <div className="divider"></div>
                <li className={`nav-item ${router.asPath == "/dashboard/delete-account" ? "active" : ""}`} >
                    <RiDeleteBin6Line />
                    <Link className="nav-link" href="/dashboard/delete-account">Delete Account</Link>
                </li>
                <li className={`nav-item ${router.asPath == "/logout" ? "active" : ""}`}>
                    <BiLogOutCircle />
                    <Link className="nav-link" href="/logout">Log Out</Link>
                </li>
            </ul>
        </div>
    )
}


