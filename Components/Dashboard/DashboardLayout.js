import Sidebar from "./Sidebar";
import Footer from '../../Layouts/Footer'
import DashboardBanner from "./DashboardBanner";
import { RiMenu2Fill } from "react-icons/ri";
import { useState } from "react";

export default function DashboardLayout({ children }) {

    const [sidebar, setSidebar] = useState(false);
    const menuToggle = () => {
        setSidebar(!sidebar);
    }

    return (
        <>
            <DashboardBanner />
            <div className="dashboard-layout">

                <div className="container">
                    <div className="dashboard-type">
                        <RiMenu2Fill className="menu-icon" onClick={menuToggle} /> <p className="title">Dashboard</p>
                    </div>
                    <div className="layout-frame">
                        <div className={sidebar ? 'leftpannel open' : 'leftpannel'} onClick={menuToggle}>
                            <Sidebar />
                        </div>
                        <div className="right-panel">
                            <div className="main-frame-inner">
                                {children}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}