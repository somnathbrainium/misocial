import EventBanner_B from '../Components/Events/EventsBanner_B';
import EventDetailsContents from '../Components/EventDetails/EventDetailsContents';
import Footer  from '../Layouts/Footer';

export default function EventDetails_B() {
    return (
        <div className="event-details-wr">
            <EventBanner_B />
            <EventDetailsContents />
            <Footer/>
        </div>
    )
}