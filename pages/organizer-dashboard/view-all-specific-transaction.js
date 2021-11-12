import Head from "next/head"
import DashboardLayout_E from "../../Components/Dashboard/DashboardLayout_E";
import ViewTransactions_All from "../../Components/OrganizerDashboard/ViewTransaction/ViewTransactions_All";
// import ViewTransactions from "../../Components/OrganizerDashboard/ViewTransaction/ViewTransactions";
import React from 'react'


export default function view_all_specific_transaction() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="View Transactions" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ViewTransactions_All />


        </>
    )
}

view_all_specific_transaction.Layout = DashboardLayout_E