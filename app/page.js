import EventList from "@/components/landing/EventList";
import FrontHero from "@/components/landing/FrontHero";
import Header from "@/components/landing/Header";
import Loading from "@/components/landing/Loading";
import { Suspense } from "react";

export default function Home({ searchParams: { query } }) {
  return (
    <>
      <FrontHero />
      <section className="container">
        <Header />

        <Suspense kay={query} fallback={<Loading />}>
          <EventList query={query} />
        </Suspense>
      </section>
    </>
  );
}
