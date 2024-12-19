import { getAllEvents } from "@/db/queries";
import EventCard from "./EventCard";

const EventList = async ({ query }) => {
  const allEvents = await getAllEvents(query);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-8 mt-8">
      {allEvents.map((event) => (
        <EventCard key={event?.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
