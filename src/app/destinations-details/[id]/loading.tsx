import React from "react";

export default function DestinationDetailsSkeleton() {
  return (
    <div className="animate-pulse w-full p-8">
      {/* Top Header Bar */}
      <div className="my-3 flex justify-between items-center">
        {/* Back Link Skeleton */}
        <div className="h-4 w-40 bg-gray-300 rounded" />
        {/* Action Buttons Skeleton */}
        <div className="flex gap-3">
          <div className="h-9 w-20 bg-gray-300 rounded" />
          <div className="h-9 w-24 bg-gray-300 rounded" />
        </div>
      </div>

      {/* Main Banner Image Skeleton */}
      <div className="h-[70vh] mb-8 rounded-sm bg-gray-300 w-full" />

      {/* Title & Metadata Skeleton */}
      <div className="mb-5 border-t border-gray-300 pt-5 space-y-3">
        {/* Location Pin & Country */}
        <div className="flex items-center gap-2">
          <div className="size-4 bg-gray-300 rounded-full" />
          <div className="h-4 w-28 bg-gray-300 rounded" />
        </div>

        {/* Main Title */}
        <div className="h-12 w-3/4 max-w-xl bg-gray-300 rounded" />

        {/* Duration Label */}
        <div className="flex items-center gap-2">
          <div className="size-4 bg-gray-300 rounded-full" />
          <div className="h-4 w-36 bg-gray-300 rounded" />
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-3 gap-3">
        {/* Left Column (Overview & Description) */}
        <div className="col-span-2 space-y-6">
          {/* Overview Section */}
          <div>
            <div className="h-5 w-28 bg-gray-300 rounded mb-3" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-300 rounded" />
              <div className="h-4 w-5/6 bg-gray-300 rounded" />
            </div>
          </div>

          {/* Description & Highlights Section */}
          <div>
            <div className="h-7 w-36 bg-gray-300 rounded mb-3" />
            <div className="space-y-2 mb-4">
              <div className="h-4 w-full bg-gray-300 rounded" />
              <div className="h-4 w-full bg-gray-300 rounded" />
              <div className="h-4 w-4/5 bg-gray-300 rounded" />
            </div>

            {/* Highlights Grid Skeleton */}
            <div className="my-4">
              <div className="grid md:grid-cols-2 gap-3">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-2 py-1">
                    <div className="size-4 bg-gray-300 rounded-full shrink-0" />
                    <div className="h-4 w-3/4 bg-gray-300 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Sidebar Booking Card) */}
        <div className="col-span-1 shadow-xl p-5 border border-gray-300 rounded-sm space-y-4">
          <div className="h-4 w-24 bg-gray-300 rounded" />
          <div className="h-8 w-28 bg-gray-300 rounded" />
          <div className="h-4 w-20 bg-gray-300 rounded" />

          {/* Booking Widget Placeholder */}
          <div className="h-10 w-full bg-gray-300 rounded my-4" />

          {/* Booking Conditions List */}
          <div className="space-y-2 pt-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="size-4 bg-gray-300 rounded-full shrink-0" />
                <div className="h-4 w-5/6 bg-gray-300 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}