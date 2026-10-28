import { UserBooking } from "@/types/UserBooking";
import { ArrowLeft, Calendar, Check, MapPin, Trash } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import DestinationEditDialogBox from "./DestinationEditDialogBox";
import DeleteDestination from "./DeleteDestination";
import Booking from "./booking/Booking";
const conditionOfBooking = [
  "Free cancellation up to 7 days",
  "Travel insurance included",
  "24/7 customer support",
];
function DestinationDetails({ destination }: { destination: UserBooking }) {
  return (
    <div>
      <div className="my-3 flex justify-between">
        <Link href={"/explore-all-destinations"} className="text-gray-500">
          <ArrowLeft className="size-4 inline" /> Back to Destinations
        </Link>
        <div className="flex gap-3">
          <DestinationEditDialogBox destination={destination} />
          <DeleteDestination id={destination._id} name={destination.destinationName} />
        </div>
      </div>
      <div className="relative h-[70vh] mb-8 overflow-hidden rounded-sm bg-neutral-100">
        <Image
          src={destination.imageUrl}
          alt={destination.destinationName}
          width={868}
          height={532}
          className="aspect-video w-full object-cover object-center"
        />
      </div>
      <div className="mb-5 border-t border-gray-300 pt-5">
        <p className="text-[16px]  text-gray-500">
          <MapPin className=" ml-1 size-4 text-primary inline" />
          <span>{destination.country}</span>
        </p>
        <h2 className="text-5xl font-normal mt-3 mb-2">
          {destination.destinationName}
        </h2>
        <p className="flex items-center gap-2">
          <Calendar className="size-4" />
          {destination.durationLabel}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-3">
        <div className="col-span-2">
          <div className="mb-4">
            <h2 className="text-[18px] mb-2 font-bold">Overview</h2>
            <p className="text-gray-600">{destination.overview}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Description</h2>
            <p className="text-gray-600">{destination.description}</p>
            <div className="my-4">
              <ol className="grid md:grid-cols-2">
                {destination.highlights.map((i, index) => (
                  <li key={index} className="py-1">
                    <Check className="inline text-green-500" /> {i}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div className="col-span-1 shadow-xl  p-5 border border-gray-300 rounded-sm">
          <p className="text-gray-600">Starting from</p>
          <h2 className="text-3xl text-brand">${destination.price}</h2>
          <p className="text-gray-600">per person</p>
          <Booking destination ={destination} />
          <div>
            <ol>
              {conditionOfBooking.map((c, index) => (
                <li key={index} className="text-gray-600">
                  <Check className="inline text-green-500" /> {c}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetails;
