import type { Metadata } from "next";
import { BookingCard } from "@/components/my-bookings-comp/booking-card";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { UserBookingData } from "@/types/destinactionBook";
import NoDataFound from "../../components/my-bookings-comp/NoDataFound";
export const metadata: Metadata = {
  title: "My Bookings — Wanderlast",
};

export default async function MyBookingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const res = await fetch(
    `http://localhost:5000/add-travel-package/${session?.user.email}`,
  );
  const bookings: UserBookingData = await res.json();
  console.log("booking data--> ", bookings.bookedData);
  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-7xl px-5 pt-14 pb-24 sm:px-6 lg:px-8 lg:pt-16">
        <h1 className="text-[clamp(2.25rem,4vw,3.5rem)] leading-tight font-light text-neutral-900">
          My Bookings
        </h1>
        <p className="mt-3 text-base text-neutral-600 sm:text-lg">
          Manage and view your upcoming travel plans
        </p>

        <div className="mt-8 space-y-5">
          {bookings.bookedData.length > 0 ? (
            bookings?.bookedData?.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))
          ) : (
            <NoDataFound />
          )}
        </div>
      </div>
    </main>
  );
}
