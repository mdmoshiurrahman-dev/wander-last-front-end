"use client";

import Image from "next/image";
import {
  Calendar,
  ClipboardList,
  Eye,
  Trash2,
  type LucideIcon,
} from "lucide-react";
import { cn } from "cn";
import { UserBooking } from "@/types/UserBooking";

type BookingCardProps = {
  booking: UserBooking;
  /** Wire this up when the cancel flow is implemented. */
};

export function BookingCard({ booking }: BookingCardProps) {
  return (
    <article className="flex flex-col gap-6 rounded-md border border-neutral-200 bg-white p-5 sm:flex-row">
      <Image
        src={booking.imageUrl}
        alt={booking.destinationName}
        width={320}
        height={176}
        className="h-44 w-full shrink-0 rounded-md object-cover sm:w-80"
      />

      <div className="flex flex-1 flex-col">
        <div>
          <h2 className="mt-2 text-3xl leading-tight font-medium text-neutral-900">
            {booking.destinationName}
          </h2>

          <div className="mt-3 space-y-1.5 text-base text-neutral-600">
            <p className="flex items-center gap-2">
              <Calendar
                aria-hidden="true"
                className="size-4 shrink-0 text-neutral-500"
                strokeWidth={1.5}
              />
              Departure: {booking.departureDate}
            </p>
            <p className="flex items-center gap-2">
              <ClipboardList
                aria-hidden="true"
                className="size-4 shrink-0 text-neutral-500"
                strokeWidth={1.5}
              />
              Booking ID: b1
            </p>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-5">
          <p className="text-3xl leading-tight font-medium text-brand">
            ${booking.price}
          </p>
          <div className="ml-auto flex gap-4">
            <button
              type="button"
              // onClick={onCancel}
              className="inline-flex h-11 select-none items-center justify-center gap-2 rounded-md border border-red-500 bg-white px-5 text-base font-medium whitespace-nowrap text-red-500 transition-colors hover:bg-red-50 focus-visible:ring-3 focus-visible:ring-red-500/40 focus-visible:outline-none"
            >
              <Trash2
                aria-hidden="true"
                className="size-4.5"
                strokeWidth={1.5}
              />
              Cancel
            </button>
            <button
              type="button"
              // onClick={onView}
              className="inline-flex h-11 select-none items-center justify-center gap-2 rounded-md bg-brand px-5 text-base font-medium whitespace-nowrap text-white transition-colors hover:bg-brand-dark focus-visible:ring-3 focus-visible:ring-brand/40 focus-visible:outline-none"
            >
              <Eye aria-hidden="true" className="size-4.5" strokeWidth={1.5} />
              View
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
