import React from "react";

export default function DestinationsListSkeleton() {
  return (
    <main className="flex-1 animate-pulse">
      <div className="mx-auto w-full max-w-[1280px] px-5 pt-14 pb-24 sm:px-6 lg:px-8 lg:pt-16">
        {/* Main Title Skeleton */}
        <div className="h-10 sm:h-12 w-3/4 max-w-md bg-gray-300 rounded" />

        {/* Subtitle Skeleton */}
        <div className="mt-3 h-5 w-full max-w-lg bg-gray-300 rounded" />

        {/* Destination Cards Grid Skeleton */}
        <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="overflow-hidden rounded-md border border-gray-200 bg-white">
              {/* Card Image Placeholder */}
              <div className="aspect-video w-full bg-gray-300" />
              
              {/* Card Content Placeholder */}
              <div className="p-4 space-y-3">
                {/* Location / Tag */}
                <div className="h-4 w-24 bg-gray-300 rounded" />
                
                {/* Title */}
                <div className="h-6 w-3/4 bg-gray-300 rounded" />
                
                {/* Description lines */}
                <div className="space-y-2 pt-1">
                  <div className="h-3 w-full bg-gray-300 rounded" />
                  <div className="h-3 w-4/5 bg-gray-300 rounded" />
                </div>
                
                {/* Footer (Price / Action) */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="h-5 w-20 bg-gray-300 rounded" />
                  <div className="h-4 w-16 bg-gray-300 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}