import Head from "next/head";
import DashboardLayout_B from "../../Components/Dashboard/DashboardLayout_B";
import SendEmailsForm from "../../Components/OrganizerDashboard/ViewEvent/SendEmailsForm";
import SendEmails from "../../Components/OrganizerDashboard/ViewEvent/SendEmails";

export default function sendEmails() {
    return (
        <div className="allevents-wrapper">
            <Head>
                <title>Create Next App</title>
                <meta name="create event" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SendEmails />
            <SendEmailsForm />
        </div>
    )
}

sendEmails.Layout = DashboardLayout_B