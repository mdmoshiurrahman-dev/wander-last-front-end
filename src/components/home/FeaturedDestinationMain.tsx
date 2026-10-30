import React, { Suspense } from "react";
import { FeaturedDestinations } from "./FeaturedDestinations";
import { UserBookingData } from "@/types/UserBooking";

const FetchData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feature_destination_data`);
  const destinations: UserBookingData = await res.json();
  return <FeaturedDestinations destinations={destinations} />;
};

const FeaturedDestinationMain = async () => {
  return (
    <Suspense fallback ={'Loading...'}>
      <FetchData />
    </Suspense>
  );
};

export default FeaturedDestinationMain;
