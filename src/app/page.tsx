import { Banner } from "@/components/home/banner"
import { WhyChoose } from "@/components/home/why-choose"
import { Testimonials } from "@/components/home/testimonials"
import { CTA } from "@/components/home/cta"

export default function Home() {
  return (
    <>
      {/* min-w-0 lets this flex item shrink below its content's min-content
          size; without it the wide testimonial carousel track forces the page
          wider than the viewport and a horizontal scrollbar appears. */}
      <main className="min-w-0 flex-1">
        <Banner />
        <WhyChoose />
        <Testimonials />
        <CTA />
      </main>
    </>
  )
}
