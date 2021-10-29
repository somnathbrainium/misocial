
import Pagination from '../../Layouts/Pagination'
import DashboardLayout from "../../Components/Dashboard/DashboardLayout";
import MyEvents from '../../Components/Dashboard/MyEvent/MyEvent';
export default function myEvents() {
    return (
        <>
            <MyEvents />
            <Pagination />
        </>
    )
}

myEvents.Layout = DashboardLayout