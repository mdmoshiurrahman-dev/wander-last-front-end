import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";

const searchFields = [
  {
    id: "location",
    label: "Location",
    placeholder: "Address, City Or Zip",
  },
  {
    id: "date",
    label: "Date/Duration",
    placeholder: "Anytimes/3 Days",
  },
  { id: "budget", label: "Budget", placeholder: "$0-$3000" },
  { id: "people", label: "People", placeholder: "5-10" },
];

export function Banner() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[620px] w-full flex-col overflow-hidden bg-[url(/Banner.png)] bg-cover bg-center bg-no-repeat lg:min-h-[660px]"
    >
      {/* Banner copy, centered with flex */}
      <div className="flex flex-1 flex-col items-center justify-center px-5 pt-16 pb-10 text-center sm:px-8 lg:pt-20 lg:pb-14">
        <h1
          id="hero-heading"
          className="max-w-[56rem] text-[clamp(2.75rem,7vw,6rem)] leading-[1.05] font-light tracking-[-0.015em] text-white"
        >
          Discover Your
          <br className="hidden sm:block" /> Next Adventure
        </h1>

        <p className="mt-4 max-w-[38rem] text-base leading-relaxed text-white/90 sm:text-lg">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Link
            href="/destinations"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 w-full rounded-none bg-brand px-7 text-[13px] font-medium tracking-[0.08em] text-white uppercase hover:bg-brand-dark focus-visible:ring-white/60 sm:w-auto",
            )}
          >
            Explore Now
            <ArrowRight
              aria-hidden="true"
              className="size-4"
              strokeWidth={1.5}
            />
          </Link>

          <Link
            href="/explore-all-destinations"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 w-full rounded-none bg-white/25 px-7 text-[13px] font-medium tracking-[0.08em] text-white uppercase backdrop-blur-sm hover:bg-white/35 hover:text-white focus-visible:ring-white/60 sm:w-auto",
            )}
          >
            View Destination
          </Link>
        </div>
      </div>

      {/* Search bar, pinned to the bottom of the banner */}
      <form
        aria-label="Find a trip"
        className="grid w-full grid-cols-2 bg-black/40 backdrop-blur-md lg:grid-cols-[repeat(4,minmax(0,1fr))_180px]"
      >
        {searchFields.map((field, index) => (
          <div
            key={field.id}
            className={cn(
              "border-b border-white/20 px-4 py-4 sm:px-6 sm:py-5 lg:border-r lg:border-b-0 lg:border-white/20 lg:px-8",
              index % 2 === 0 && "border-r",
              index === searchFields.length - 1 && "lg:border-r-0",
            )}
          >
            <label
              htmlFor={field.id}
              className="block text-base leading-snug text-white"
            >
              {field.label}
            </label>
            <input
              id={field.id}
              name={field.id}
              type="text"
              placeholder={field.placeholder}
              autoComplete="off"
              className="mt-2.5 w-full border-0 bg-transparent p-0 text-[13px] leading-normal text-white placeholder:text-white/65 focus:outline-none"
            />
          </div>
        ))}

        <button
          type="submit"
          className="col-span-2 h-14 bg-brand text-lg text-white transition-colors hover:bg-brand-dark focus-visible:ring-3 focus-visible:ring-white/60 focus-visible:outline-none lg:col-span-1 lg:h-auto"
        >
          Search
        </button>
      </form>
    </section>
  );
}
