import { Banner } from "@/components/banner"
import { WhyChoose } from "@/components/why-choose"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Banner />
        <WhyChoose />
        <Testimonials />
        <CTA />
      </main>
    </>
  )
}
