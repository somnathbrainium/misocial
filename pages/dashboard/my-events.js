
import Pagination from '../../Layouts/Pagination'
import DashboardLayout_C from "../../Components/Dashboard/DashboardLayout_C";
import MyEvents from '../../Components/Dashboard/MyEvent/MyEvent';
export default function myEvents() {
    return (
        <>
            <MyEvents />
            <Pagination />
        </>
    )
}

myEvents.Layout = DashboardLayout_C