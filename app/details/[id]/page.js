import EventDetails from "@/components/details/EventDetails";
import EventVenue from "@/components/details/EventVenue";
import HeroSection from "@/components/details/HeroSection";

import { getEventById } from "@/db/queries";

export async function generateMetadata({ params: { id } }) {
  const eventInfo = await getEventById(id);

  return {
    title: `Eventry - ${eventInfo?.name}`,
    description: eventInfo?.details,
    openGraph: {
      images: [eventInfo?.imageUrl],
    },
  };
}

const EventDetailsPage = async ({ params: { id } }) => {
  const eventInfo = await getEventById(id);

  console.log(eventInfo);
  return (
    <>
      <HeroSection eventInfo={eventInfo} />
      <section class="container">
        <div class="flex flex-wrap justify-between gap-12 my-12 ">
          <EventDetails details={eventInfo?.details} swags={eventInfo?.swags} />
          <EventVenue location={eventInfo?.location} />
        </div>
      </section>
    </>
  );
};

export default EventDetailsPage;
