"use client";
import { Trash, TriangleAlert, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const DeleteDestination = ({ id, name }: { id: string; name?: string }) => {
  const router = useRouter();
  const handelDelete = async () => {
    const res = await fetch(`http://localhost:5000/delete-destination/${id}`);
    const result = await res.json();
    if (result.deletedCount > 0) {
      router.push("/explore-all-destinations");
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <button className="py-2 text-red-600 px-3 border border-red-600 text-[15px] cursor-pointer">
            <Trash className="inline size-3.5" /> Delete
          </button>
        }
      />
      <AlertDialogContent className="gap-0  p-0 ring-0 data-[size=default]:max-w-xl data-[size=default]:sm:max-w-xl">
        <AlertDialogCancel
          variant="ghost"
          size="icon"
          aria-label="Close"
          className="absolute top-3 right-3 text-neutral-400 hover:bg-transparent hover:text-neutral-700"
        >
          <X />
        </AlertDialogCancel>
        <div className="px-8 pt-10 pb-6">
          <AlertDialogHeader className="flex flex-row items-center gap-4 text-left">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100">
              <TriangleAlert className="size-6 text-red-500" />
            </span>
            <AlertDialogTitle className="text-xl font-semibold">
              Delete Travel Package
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription className="mt-4 text-base text-neutral-600">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-foreground">
              {name ? `"${name}"` : "this destination"}
            </span>
            ? This action cannot be undone and will permanently remove this
            travel package from the system.
          </AlertDialogDescription>
        </div>
        <AlertDialogFooter className="mx-0 mb-0 flex-row justify-end gap-3 border-0 border-t-0 bg-transparent p-0 px-8 pb-10">
          <AlertDialogCancel className="h-11 rounded-md px-6 text-[15px]">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handelDelete}
            className="h-11 gap-2 rounded-md bg-red-600 px-6 text-[15px] text-white hover:bg-red-700"
          >
            <Trash /> Delete Package
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDestination;
