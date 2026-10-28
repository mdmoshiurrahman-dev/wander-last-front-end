import type { Metadata } from "next";
import {
  Camera,
  DollarSign,
  Globe,
  MapPin,
  Pencil,
  Plane,
  TrendingUp,
} from "lucide-react";
import { cn } from "cn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export const metadata: Metadata = {
  title: "My Profile — Wanderlast",
};

const profile = {
  name: "Sarah Mitchell",
  location: "San Francisco, CA",
  avatarSrc: "/person1.png",
  memberSince: "Mar 2024",
  nationality: "United States",
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
          <Card className="gap-5 rounded-lg p-6 ring-neutral-200">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="rounded-full flex justify-center items-center h-35 w-35 overflow-hidden">
                  <Image
                    src={profile.avatarSrc}
                    alt="avater"
                    height={150}
                    width={150}
                    className="object-cover object-center"
                  ></Image>
                </div>
                {/* <AvatarFallback className="size-24 text-xl">
                  {profile.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </AvatarFallback> */}
                <button
                  type="button"
                  aria-label="Change profile photo"
                  className="absolute right-3 bottom-3 flex translate-x-1 translate-y-1 items-center justify-center rounded-full bg-brand text-white ring-4 ring-white transition-colors hover:bg-brand-dark"
                >
                  <Camera aria-hidden="true" className="size-6 p-1.5" />
                </button>
              </div>

              <h2 className="mt-4 font-heading text-xl font-semibold text-neutral-900">
                {profile.name}
              </h2>

              <p className="mt-1 flex items-center gap-1.5 text-sm text-neutral-500">
                <MapPin aria-hidden="true" className="size-4" />
                {profile.location}
              </p>
            </div>

            <div className="border-t border-neutral-200 pt-4">
              <dl className="space-y-2.5">
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-sm text-neutral-500">Member since</dt>
                  <dd className="text-sm font-semibold text-neutral-900">
                    {profile.memberSince}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-sm text-neutral-500">Nationality</dt>
                  <dd className="text-sm font-semibold text-neutral-900">
                    {profile.nationality}
                  </dd>
                </div>
              </dl>

              <Button className="mt-5 h-11 w-full gap-2 bg-brand text-base text-white hover:bg-brand-dark">
                <Pencil aria-hidden="true" className="size-4" />
                Edit Profile
              </Button>
            </div>
          </Card>

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
