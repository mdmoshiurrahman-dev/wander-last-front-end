import Image from "next/image"

const features = [
  {
    title: "Safe & Secure",
    description:
      "Your safety is our priority, with comprehensive travel insurance and 24/7 support.",
    icon: "/ShieldCheck.png",
  },
  {
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
    icon: "/MapTrifold.png",
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
    icon: "/Headset.png",
  },
]

export function WhyChoose() {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="bg-brand/10 pt-20 pb-28 lg:pt-24 lg:pb-32"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="why-choose-heading"
            className="text-[clamp(2rem,4vw,3rem)] leading-tight font-normal text-neutral-900"
          >
            Why Choose Wanderlust
          </h2>
          <p className="mt-3 text-base leading-relaxed text-neutral-600">
            Travel with confidence, guided by local experts and supported around
            the clock.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col bg-white p-8 lg:min-h-80 lg:p-10"
            >
              <Image
                src={feature.icon}
                alt=""
                width={48}
                height={48}
                className="size-10"
              />
              <h3 className="mt-10 text-2xl leading-tight text-neutral-900 lg:mt-12">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
