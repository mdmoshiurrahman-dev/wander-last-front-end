"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { UserBookingData } from "@/types/UserBooking";
import FeaturedDestinationCard from "./FeaturedDestinationCard";

export function FeaturedDestinations({destinations}:{destinations:UserBookingData}) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = (emblaApi: CarouselApi) => {
      if (!emblaApi) return;
      setSelected(emblaApi.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section
      aria-labelledby="featured-destinations-heading"
      className="overflow-x-clip bg-white py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2
              id="featured-destinations-heading"
              className="text-[clamp(2.25rem,4.5vw,3.5rem)] leading-tight font-normal text-neutral-900"
            >
              Featured Destinations
            </h2>
            <p className="mt-3 text-base text-neutral-600 sm:text-lg">
              Handpicked travel experiences for the adventure seekers
            </p>
          </div>

          <Link
            href="/explore-all-destinations"
            className="group inline-flex shrink-0 items-center gap-4 border border-brand px-7 py-4 text-sm font-medium tracking-[0.08em] text-brand uppercase transition-colors hover:bg-brand hover:text-white focus-visible:ring-3 focus-visible:ring-brand/40 focus-visible:outline-none"
          >
            All Destinations
            <ArrowRight
              aria-hidden="true"
              className="size-5 transition-transform group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>

        {/* From lg up the track bleeds past the container to the viewport's
            right edge so the next card peeks in, while its slides stay sized
            to the container: two full cards plus a glimpse of the third. */}
        <Carousel
          aria-label="Featured destinations"
          opts={{ align: "start", loop: true }}
          setApi={setApi}
          className="mt-10 lg:mr-[max(calc((100%-100vw)/2),-128px)]"
        >
          <CarouselContent className="-ml-6">
            {destinations.map((destination) => (
              <CarouselItem
                key={destination._id}
                className="basis-[85%] pl-6 sm:basis-[calc(50%+12px)] lg:basis-[calc((min(1280px,100vw)-40px)/2)]"
              >
                <FeaturedDestinationCard destination={destination} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-10 flex items-center gap-8 lg:mt-12">
          <p
            aria-live="polite"
            aria-atomic="true"
            className="shrink-0 text-3xl leading-none font-normal text-neutral-900"
          >
            {selected + 1}/{destinations.length}
          </p>

          <div aria-hidden="true" className="h-px flex-1 bg-neutral-200" />

          <div className="flex shrink-0 items-center gap-4">
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              aria-label="Previous slide"
              className="grid size-11 place-items-center rounded-full border border-neutral-200 bg-white text-neutral-400 transition-colors hover:border-brand hover:text-brand focus-visible:ring-3 focus-visible:ring-brand/40 focus-visible:outline-none md:size-14"
            >
              <ArrowLeft
                aria-hidden="true"
                className="size-5"
                strokeWidth={1.5}
              />
            </button>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              aria-label="Next slide"
              className="grid size-11 place-items-center rounded-full border border-neutral-200 bg-white text-neutral-400 transition-colors hover:border-brand hover:text-brand focus-visible:ring-3 focus-visible:ring-brand/40 focus-visible:outline-none md:size-14"
            >
              <ArrowRight
                aria-hidden="true"
                className="size-5"
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
