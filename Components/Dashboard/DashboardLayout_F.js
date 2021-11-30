import Sidebar_D from "./Sidebar_D";
import Footer from '../../Layouts/Footer'
import DashboardBanner_C from "./DashboardBanner_C";
import DashboardBanner_afterlogin from "./DashboardBanner_afterlogin";
import { RiMenu2Fill } from "react-icons/ri";
import { useState } from "react";

export default function DashboardLayout({ children }) {

    const [sidebar, setSidebar] = useState(false);
    const menuToggle = () => {
        setSidebar(!sidebar);
    }

    return (
        <>
            <DashboardBanner_afterlogin />
            <div className="dashboard-layout">

                <div className="container">
                    <div className="dashboard-type">
                        <RiMenu2Fill className="menu-icon" onClick={menuToggle} /> <p className="title">Organizer Dashboard</p>
                    </div>

                    {/* <div className="layout-frame headingopt">
                        <div className='leftpannel'>
                        
                        </div>
                        <div className="right-panel">
                            <div className="main-frame-inner">
                            <RiMenu2Fill className="menu-icon" onClick={menuToggle} /> <p className="title">Organizer Dashboard</p>
                            </div>

                        </div>
                    </div> */}


                    <div className="layout-frame">
                        <div className={sidebar ? 'leftpannel open' : 'leftpannel'} onClick={menuToggle}>
                            <Sidebar_D />
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