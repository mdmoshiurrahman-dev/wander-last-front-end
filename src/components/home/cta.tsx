import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";

export function CTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-[url(/CTA.png)] bg-cover bg-center bg-no-repeat px-5 py-24 text-center sm:px-8 lg:min-h-[400px]"
    >
      {/* Dark overlay so the white copy stays readable over the photo */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/40" />

      <div className="relative flex w-full max-w-4xl flex-col items-center">
        <h2
          id="cta-heading"
          className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-light text-white"
        >
          Ready To Start Your Journey?
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:text-xl">
          Join thousands of travelers who have discovered the world with us
        </p>

        <Link
          href="/destinations"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-8 h-14 gap-6 rounded-none bg-white px-6 text-base tracking-[0.03em] text-neutral-900 uppercase hover:bg-neutral-100 focus-visible:ring-white/60",
          )}
        >
          Book Your Trip Today
          <ArrowRight
            aria-hidden="true"
            className="size-5"
            strokeWidth={1.5}
          />
        </Link>
      </div>
    </section>
  );
}
