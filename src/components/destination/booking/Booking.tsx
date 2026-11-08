"use client";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "@/components/ui/toast";
import { authClient, useSession } from "@/lib/auth-client";
import { UserBooking } from "@/types/UserBooking";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
const generateRandomId = (): string => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const randomLetter = letters[Math.floor(Math.random() * letters.length)];
  const randomDigit = Math.floor(Math.random() * 10);

  return `${randomLetter}${randomDigit}`;
};
function Booking({ destination }: { destination: UserBooking }) {
  const session = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const handelBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const { data: jwtTokenData, error } = await authClient.token();
    const completedBookingData = {
      email: session.data?.user.email,
      ...data,
      id: destination._id,
      destinationName: destination.destinationName,
      price: destination.price,
      bookingId: generateRandomId(),
      imageUrl: destination.imageUrl,
    };

    const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add_user_booking_data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${jwtTokenData?.token}`,
      },
      body: JSON.stringify(completedBookingData),
    });
    const response = await result.json();
    if (response.success) {
      setIsLoading(false);
      toast.add({
        type: "success",
        description: response.message,
      });
    } else {
      setIsLoading(false);
      toast.add({
        type: "warning",
        description: response.message,
      });
    }
  };
  return (
    <div className="mb-3 mt-6">
      <form className="flex flex-col gap-3" onSubmit={handelBooking}>
        <input
          type="date"
          name="departureDate"
          className="py-3 bg-gray-100 px-2"
        />
        <button
          disabled={isLoading}
          type="submit"
          className="bg-brand py-3 text-white cursor-pointer"
        >
          {isLoading ? (
            <span>
              <Spinner className="inline mr-1" /> Booking...
            </span>
          ) : (
            <span>
              <ArrowRight className="inline" /> Book Now
            </span>
          )}
        </button>
      </form>
    </div>
  );
}

export default Booking;
