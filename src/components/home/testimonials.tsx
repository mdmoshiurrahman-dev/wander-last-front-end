"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "The Bali trip was absolutely magical! Every detail was perfectly planned. The resorts were luxurious and the cultural experiences were unforgettable.",
    name: "Michael Chen",
    location: "Singapore",
    image: "/person1.png",
  },
  {
    quote:
      "Swiss Alps adventure exceeded all expectations. The mountain views were breathtaking and our guide was incredibly knowledgeable. Highly recommend!",
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/person2.png",
  },
  {
    quote:
      "Paris was everything we dreamed of and more! The Seine cruise at sunset was pure romance and the local cuisine was simply out of this world.",
    name: "Emma Williams",
    location: "London, UK",
    image: "/person2.png",
  },
  {
    quote:
      "The Kenyan safari was a once-in-a-lifetime experience. Seeing the big five up close left us speechless and the team took care of every detail.",
    name: "David Kim",
    location: "Seoul, South Korea",
    image: "/person1.png",
  },
];

function TestimonialNav() {
  const { scrollPrev, scrollNext } = useCarousel();

  return (
    <div className="flex shrink-0 items-center gap-4">
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="grid size-11 place-items-center rounded-full border border-neutral-200 bg-white text-neutral-400 transition-colors hover:border-brand hover:text-brand focus-visible:ring-3 focus-visible:ring-brand/40 focus-visible:outline-none md:size-14"
      >
        <ArrowLeft aria-hidden="true" className="size-5" strokeWidth={1.5} />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next slide"
        className="grid size-11 place-items-center rounded-full border border-neutral-200 bg-white text-neutral-400 transition-colors hover:border-brand hover:text-brand focus-visible:ring-3 focus-visible:ring-brand/40 focus-visible:outline-none md:size-14"
      >
        <ArrowRight aria-hidden="true" className="size-5" strokeWidth={1.5} />
      </button>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-white py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <Carousel
          aria-label="Traveler testimonials"
          opts={{ align: "start", loop: true }}
        >
          <div className="flex items-center justify-between gap-6">
            <div>
              <h2
                id="testimonials-heading"
                className="text-[clamp(2.25rem,4vw,3rem)] leading-tight font-light text-neutral-900"
              >
                What Travelers Say
              </h2>
              <p className="mt-3 text-base text-neutral-600">
                Real experiences from our happy travelers
              </p>
            </div>
            <TestimonialNav />
          </div>

          <CarouselContent className="-ml-6 mt-8 md:mt-12">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="pl-6 md:basis-1/2"
              >
                <article className="flex lg:flex-row flex-col h-full items-stretch gap-5 rounded-md border border-neutral-200 bg-white p-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={220}
                    height={277}
                    className="w-36 shrink-0 self-stretch rounded-sm object-cover sm:w-52 md:w-[220px]"
                  />
                  <div className="flex flex-1 flex-col">
                    <p className="text-xl leading-snug text-neutral-900 capitalize">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-auto pt-8">
                      <p className="text-base text-brand">
                        — {testimonial.name}
                      </p>
                      <p className="pl-[1.375rem] text-sm text-neutral-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
