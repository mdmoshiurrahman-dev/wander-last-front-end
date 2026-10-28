import type { Metadata } from "next";
import {
  DollarSign,
  Globe,
  Plane,
  TrendingUp,
} from "lucide-react";
import { cn } from "cn";
import ProfileCart from "@/components/profile/ProfileCart";

export const metadata: Metadata = {
  title: "My Profile — Wanderlast",
};

const travelStats = [
  {
    label: "Total Bookings",
    value: "12",
    icon: Plane,
    badgeClassName: "bg-sky-100 text-sky-600",
  },
  {
    label: "Countries Visited",
    value: "18",
    icon: Globe,
    badgeClassName: "bg-green-100 text-green-600",
  },
  {
    label: "Upcoming Trips",
    value: "2",
    icon: TrendingUp,
    badgeClassName: "bg-orange-100 text-orange-500",
  },
  {
    label: "Total Spent",
    value: "$15,750",
    icon: DollarSign,
    badgeClassName: "bg-pink-100 text-pink-600",
  },
];

export default function ProfilePage() {
  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-[1280px] px-5 pt-14 pb-24 sm:px-6 lg:px-8 lg:pt-16">
        <h1 className="text-[clamp(2.25rem,4vw,3.5rem)] leading-tight font-light text-neutral-900">
          My Profile
        </h1>
        <p className="mt-3 text-base text-neutral-600 sm:text-lg">
          Manage your account settings and travel preferences
        </p>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[320px_1fr]">
          <ProfileCart />
          <section aria-labelledby="travel-stats-heading">
            <h2
              id="travel-stats-heading"
              className="font-heading text-xl font-semibold text-neutral-900"
            >
              Travel Statistics
            </h2>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {travelStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="flex items-start justify-between gap-4 rounded-lg border border-neutral-200 bg-white p-5"
                  >
                    <div>
                      <p className="text-sm text-neutral-500">{stat.label}</p>
                      <p className="mt-2 text-2xl font-bold text-neutral-900">
                        {stat.value}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-full",
                        stat.badgeClassName,
                      )}
                    >
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
