import type { Metadata } from "next";
import { DestinationCard } from "@/components/destination/destination-card";
import { UserBookingData } from "@/types/UserBooking";

export const metadata: Metadata = {
  title: "Explore All Destinations — Wanderlast",
};
export default async function ExploreAllDestinationsPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/destination-data`,
  );
  const destinations: UserBookingData = res ? await res.json() : [];
  console.log(destinations)
  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-[1280px] px-5 pt-14 pb-24 sm:px-6 lg:px-8 lg:pt-16">
        <h1 className="text-[clamp(2.25rem,4vw,3.5rem)] leading-tight font-light text-neutral-900">
          Explore All Destinations
        </h1>
        <p className="mt-3 text-base text-neutral-600 sm:text-lg">
          Find your perfect travel experience from our curated collection
        </p>

        {destinations.length === 0 ? (
          <p className="mt-12 text-base text-neutral-500">
            No destinations found. Add a travel package to see it here.
          </p>
        ) : (
          <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination._id}
                destination={destination}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
