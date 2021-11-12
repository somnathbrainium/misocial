import Head from "next/head"
import DashboardLayout_E from "../../Components/Dashboard/DashboardLayout_E";
import EmailListTable from "../../Components/OrganizerDashboard/ViewEmails/EmailListTable";
import ViewEmailsHeader from "../../Components/OrganizerDashboard/ViewEmails/ViewEmailHeader";

export default function viewEmails() {
    return (
        <div className="view-emails">
            <Head>
                <title>Create Next App</title>
                <meta name="View Transactions" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ViewEmailsHeader />
            <EmailListTable />
        </div>
    )
}

viewEmails.Layout = DashboardLayout_E