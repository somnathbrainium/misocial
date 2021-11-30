import EventBanner from '../Components/Events/EventsBanner';
import EventDetailsContents from '../Components/EventDetails/EventDetailsContents';
import Footer  from '../Layouts/Footer';

export default function EventDetails() {
    return (
        <div className="event-details-wr">
            <EventBanner />
            <EventDetailsContents />
            <Footer/>
        </div>
    )
}