"use client";
import { Button } from "@base-ui/react";
import { Camera, CircleUserRound, MapPin, Pencil } from "lucide-react";
import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { useSession } from "@/lib/auth-client";

const ProfileCart = () => {
  const session = useSession();
  return (
    <>
      <Card className="gap-5 rounded-lg p-6 ring-neutral-200">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="rounded-full flex justify-center items-center h-35 w-35 overflow-hidden">
              {session.data?.user.image ? (
                <Image
                  src={session.data?.user.image}
                  alt="avater"
                  height={150}
                  width={150}
                  className="object-cover object-center"
                ></Image>
              ) : (
                <CircleUserRound className="size-35" />
              )}
            </div>
            <button
              type="button"
              aria-label="Change profile photo"
              className="absolute right-3 bottom-3 flex translate-x-1 translate-y-1 items-center justify-center rounded-full bg-brand text-white ring-4 ring-white transition-colors hover:bg-brand-dark"
            >
              <Camera aria-hidden="true" className="size-6 p-1.5" />
            </button>
          </div>

          <h2 className="mt-4 font-heading text-xl font-semibold text-neutral-900">
            {session.data?.user.name}
          </h2>

          <p className="mt-1 flex items-center gap-1.5 text-sm text-neutral-500">
            <MapPin aria-hidden="true" className="size-4" />
            Unknown
          </p>
        </div>

        <div className="border-t border-neutral-200 pt-4">
          <dl className="space-y-2.5">
            <div className="flex items-center justify-between gap-3">
              <dt className="text-sm text-neutral-500">Member since</dt>
              <dd className="text-sm font-semibold text-neutral-900">
                Unknown
              </dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-sm text-neutral-500">Nationality</dt>
              <dd className="text-sm font-semibold text-neutral-900">
                Unknown
              </dd>
            </div>
          </dl>

          <Button className="mt-5 h-11 w-full gap-2 bg-brand text-base text-white hover:bg-brand-dark">
            <Pencil aria-hidden="true" className="size-4 inline mr-1" />
            Edit Profile
          </Button>
        </div>
      </Card>
    </>
  );
};

export default ProfileCart;
