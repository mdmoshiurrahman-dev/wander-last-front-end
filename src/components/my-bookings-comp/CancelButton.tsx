"use client";
import { authClient, useSession } from "@/lib/auth-client";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "../ui/toast";

const CancelButton = ({ id }: { id: string }) => {
  const email = useSession().data?.user.email;
  const router = useRouter();
  const handelCancelButton = async () => {
    const { data, error } = await authClient.token();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/request_delete_booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${data?.token}`
      },
      body: JSON.stringify({ id, email }),
    });
    const response = await res.json();
    if (response.modifiedCount > 0) {
      toast.add({
            type: "success",
            description: `Deleted from My Bookings`,
          })
      router.refresh();
    }
  };
  return (
    <>
      <button
        onClick={handelCancelButton}
        type="button"
        className="inline-flex h-11 select-none items-center justify-center gap-2 rounded-md border border-red-500 bg-white px-5 text-base font-medium whitespace-nowrap text-red-500 transition-colors hover:bg-red-50 focus-visible:ring-3 focus-visible:ring-red-500/40 focus-visible:outline-none"
      >
        <Trash2 aria-hidden="true" className="size-4.5" strokeWidth={1.5} />
        Cancel
      </button>
    </>
  );
};

export default CancelButton;
