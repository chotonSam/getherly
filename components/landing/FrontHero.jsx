"use client";
import { useAuth } from "@/app/hooks/useAuth";

export default function FrontHero() {
  const { auth } = useAuth();
  return (
    <section
      className="relative h-[200px] bg-cover bg-center "
      style={{ backgroundImage: "url('/event-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50 "></div>{" "}
      {/* Optional overlay */}
      <div className="relative z-10 flex  items-center justify-center h-full text-center text-white">
        {auth ? (
          <span className="mx-6 bg-gradient-to-r text-md text-white from-indigo-500 via-purple-500 to-pink-500 py-2 px-4 rounded-md font-bold">
            Hello, {auth?.name}
          </span>
        ) : null}

        <div>
          <h1 className="sm:text-5xl text-3xl font-bold">
            Welcome to Gatherly
          </h1>
          <p className="mt-4 sm:text-xl text-sm">
            Find the best events happening around you!
          </p>
        </div>
      </div>
    </section>
  );
}
