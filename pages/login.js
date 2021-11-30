import LogBanner from "../Components/Login/LogBanner";
import LoginForm from "../Components/Login/LoginForm";
import FooterBanner from '../Components/Home/FooterBanner';
import Footer  from '../Layouts/Footer';

export default function Login() {
    return (
        <div className="logon-wrapper">
            <LogBanner />
            <LoginForm />
            <Footer/>
        </div>
    )
}