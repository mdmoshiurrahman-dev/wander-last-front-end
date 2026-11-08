import { UserBooking } from "@/types/UserBooking";
import { ArrowUpRight, CalendarDays, MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedDestinationCard({
  destination,
}: {
  destination: UserBooking;
}) {
  return (
    <article className="flex h-full flex-col">
      <div className="relative overflow-hidden rounded-sm bg-neutral-100">
        <Image
          src={destination.imageUrl}
          alt={destination.destinationName}
          width={768}
          height={480}
          className="aspect-[16/10] w-full object-cover"
        />
      </div>

      <div className="mt-6 flex flex-1 flex-col gap-2">
        <p className="flex items-center gap-1.5 text-sm text-neutral-800">
          <MapPin
            aria-hidden="true"
            className="size-4 shrink-0"
            strokeWidth={1.75}
          />
          {destination.country}
        </p>

        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-2xl leading-snug font-medium text-neutral-900 sm:text-[26px]">
            {destination.destinationName}
          </h3>
          <p className="shrink-0 text-2xl leading-snug font-semibold text-neutral-900 sm:text-[26px]">
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
          className="mt-auto inline-flex w-fit items-center gap-1 pt-3 text-sm font-semibold tracking-wide text-brand uppercase underline underline-offset-4 transition-colors hover:text-brand-dark focus-visible:ring-3 focus-visible:ring-brand/40 focus-visible:outline-none"
        >
          Book now
          <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={2} />
        </Link>
      </div>
    </article>
  );
}
