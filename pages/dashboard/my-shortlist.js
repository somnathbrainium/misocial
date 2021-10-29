import DashboardLayout from "../../Components/Dashboard/DashboardLayout";
import MyShortList from "../../Components/Dashboard/MyShortlist/MyShortList";
import Pagination from "../../Layouts/Pagination";
export default function myShortlist() {
    return (
        <>
            <MyShortList />
            <Pagination />
        </>
    )
}

myShortlist.Layout = DashboardLayout;