import { Banner } from "@/components/home/banner"
import { WhyChoose } from "@/components/home/why-choose"
import { Testimonials } from "@/components/home/testimonials"
import { CTA } from "@/components/home/cta"
import FeaturedDestinationMain from "@/components/home/FeaturedDestinationMain"

export default function Home() {
  return (
    <>
      <main className="min-w-0 flex-1">
        <Banner />
        <FeaturedDestinationMain/>
        <WhyChoose />
        <Testimonials />
        <CTA />
      </main>
    </>
  )
}
