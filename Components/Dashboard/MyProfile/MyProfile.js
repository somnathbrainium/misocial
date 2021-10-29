
import AboutMe from "./AboutMe";
import MySettings from "./MySettings";
import OrganizerSettings from "./OrganizerSettings";


export default function MyProfile() {
    return (
        <>
            <h2 className="header">My Profile</h2>
            <div className="my-profile-wrapper">
                <div className="sign-nextstep-form">
                    <div className="stepfrm-inner">

                        <AboutMe />
                        <MySettings />
                        <OrganizerSettings />
                    </div>
                </div>
            </div>
        </>
    )
}