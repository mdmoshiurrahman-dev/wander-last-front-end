"use client";
import { signOut } from "@/lib/auth-client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const SignoutBtn = () => {
  const router = useRouter();
  const handelSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };
  return (
    <>
      <button
        onClick={handelSignOut}
        className="text-red-600 px-3 py-2  text-[15px] border border-transparent  hover:border-red-600 cursor-pointer hidden lg:block"
      >
        <LogOut className="inline size-3.5" /> SignOut
      </button>
    </>
  );
};
export default SignoutBtn;
