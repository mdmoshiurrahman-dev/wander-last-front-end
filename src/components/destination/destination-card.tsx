"use client";

import Image from "next/image";
import { ArrowUpRight, CalendarDays, MapPin, Star } from "lucide-react";
import Link from "next/link";
import { UserBooking } from "@/types/UserBooking";

type DestinationCardProps = {
  destination: UserBooking;
};

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <article className="flex flex-col">
      <div className="relative overflow-hidden rounded-sm bg-neutral-100">
        <Image
          src={destination.imageUrl}
          alt={destination.destinationName}
          width={768}
          height={432}
          className="aspect-[16/9] w-full object-cover"
        />
      </div>

      <div className="mt-3 flex flex-col gap-1.5">
        <p className="flex items-center gap-1.5 text-sm text-neutral-800">
          <MapPin
            aria-hidden="true"
            className="size-4 shrink-0"
            strokeWidth={1.75}
          />
          {destination.country}
        </p>

        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-xl leading-snug font-semibold text-neutral-900 sm:text-[22px]">
            {destination.destinationName}
          </h2>
          <p className="shrink-0 text-xl leading-snug font-semibold text-neutral-900 sm:text-[22px]">
            ${destination.price}
            <span className="text-sm font-normal text-neutral-500">
              /Person
            </span>
          </p>
        </div>

        <p className="flex items-center gap-1.5 text-sm text-neutral-800">
          <CalendarDays
            aria-hidden="true"
            className="size-4 shrink-0"
            strokeWidth={1.75}
          />
          {destination.durationLabel}
        </p>

        <Link
          href={`/destinations-details/${destination._id}`}
          className="cursor-pointer mt-1 w-fit inline-flex items-center gap-1 text-sm font-semibold tracking-wide text-brand uppercase underline underline-offset-4 transition-colors hover:text-brand-dark focus-visible:ring-3 focus-visible:ring-brand/40 focus-visible:outline-none"
        >
          Book now
          <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={2} />
        </Link>
      </div>
    </article>
  );
}
