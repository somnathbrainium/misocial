import {VscChevronRight} from 'react-icons/vsc'
export default function FooterBanner () {
    return (
        <div className="FooterBanner">
            <div className="container">
                <div className="content-box">
                    <h3 className="ms-head">MiSocial </h3>
                    <ul className="nav">
                        <li className="nav-item">
                           <VscChevronRight/>
                           Dedicated exclusively to bringing the world of professionals & entrepreneurs together through live experiences.
                        </li>
                        <li className="nav-item">
                           <VscChevronRight/>
                           Create, discover, share and book events worldwide, all on one platform.
                        </li>
                        <li className="nav-item">
                           <VscChevronRight/>
                           An inviting special network of professionals & entrepreneurs powered by an innovative events platform.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}