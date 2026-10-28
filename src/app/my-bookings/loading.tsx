import React from "react";

export default function MyBookingsSkeleton() {
  return (
    <main className="flex-1 animate-pulse">
      <div className="mx-auto w-full max-w-7xl px-5 pt-14 pb-24 sm:px-6 lg:px-8 lg:pt-16">
        {/* Page Heading */}
        <div className="h-10 sm:h-12 w-52 bg-gray-200 rounded-md" />

        {/* Subtitle */}
        <div className="mt-3 h-5 w-full max-w-md bg-gray-200 rounded-md" />

        {/* Bookings List Layout */}
        <div className="mt-8 space-y-5">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center justify-between gap-5 p-4 sm:p-5 border border-gray-200 rounded-lg bg-white shadow-sm"
            >
              {/* Left Section: Image + Booking Details */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-1">
                {/* Image Placeholder */}
                <div className="h-28 w-full sm:w-36 shrink-0 bg-gray-200 rounded-md" />

                {/* Details Stack */}
                <div className="space-y-2.5 w-full">
                  {/* Status Badge */}
                  <div className="h-5 w-24 bg-gray-200 rounded-full" />

                  {/* Destination / Package Title */}
                  <div className="h-6 w-3/4 max-w-xs bg-gray-200 rounded" />

                  {/* Meta Details (Date / Location / Guests) */}
                  <div className="flex flex-wrap items-center gap-4 pt-1">
                    <div className="h-4 w-32 bg-gray-200 rounded" />
                    <div className="h-4 w-24 bg-gray-200 rounded" />
                  </div>
                </div>
              </div>

              {/* Right Section: Pricing & Action Buttons */}
              <div className="flex flex-row md:flex-col items-center md:items-end justify-between border-t md:border-t-0 pt-3 md:pt-0 border-gray-100 gap-3 min-w-[140px]">
                <div className="h-3 w-16 bg-gray-200 rounded ml-auto" />
                <div className="h-3 w-16 bg-gray-200 rounded ml-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
