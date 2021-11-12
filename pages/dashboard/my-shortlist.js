import DashboardLayout_C from "../../Components/Dashboard/DashboardLayout_C";
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

myShortlist.Layout = DashboardLayout_C;