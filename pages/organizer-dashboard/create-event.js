

import Head from "next/head";
import DashboardLayout_B from "../../Components/Dashboard/DashboardLayout_B";
import CreateEvent from "../../Components/OrganizerDashboard/CreateEvent/Index";

export default function createEvent() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="create event" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CreateEvent />
        </>
    )
}

createEvent.Layout = DashboardLayout_B