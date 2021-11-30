import Head from "next/head"
import DashboardLayout from "../../Components/Dashboard/DashboardLayout";
import DashboardLayout_afterlogin from "../../Components/Dashboard/DashboardLayout_afterlogin";
import InvitesHeader from "../../Components/Dashboard/SendInvites/InvitesHeader"
import SendInvitesForm from "../../Components/Dashboard/SendInvites/SendInvitesForm"

export default function sendInvites() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="events" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <InvitesHeader />
            <SendInvitesForm />
        </>
    )
}

sendInvites.Layout = DashboardLayout_afterlogin