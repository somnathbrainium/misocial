import Head from "next/head";
import TermsAndConditions from "../Components/TermsAndPrivacy/TermsAndConditions";
import TermsBanner_B from "../Components/TermsAndPrivacy/TermsBanner_B";
import Footer from "../Layouts/Footer";

export default function termsConditions() {
    return (
        <div className="terms-main-wr">
            <Head>
                <title>Create Next App/sign up next</title>
                <meta name="sign up next" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TermsBanner_B />
            <TermsAndConditions />
            <Footer />
        </div>
    )
}