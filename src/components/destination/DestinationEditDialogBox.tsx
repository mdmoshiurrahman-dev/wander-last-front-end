"use client";
import React, { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { ChevronDown, PencilLine, Save, Trash } from "lucide-react";
import { cn } from "@/lib/utils"; // Adjust to match your utils path
import { UserBooking } from "@/types/UserBooking";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-neutral-900"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "h-11 w-full rounded-md bg-[#f4f7f9] px-3.5 text-sm text-neutral-900 transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/40";

export function DestinationEditDialogBox({
  destination,
}: {
  destination: UserBooking;
}) {
  const [isSpanning, setSpanning] = useState(false);
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSpanning(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      category: string;
      country: string;
      departureDate: string;
      description: string;
      destinationName: string;
      durationLabel: string;
      rowHighlights: string;
      imageUrl: string;
      overview: string;
      price: string;
    };
    console.log(data);
    const highlights = data.rowHighlights
      .split("#")
      .reduce<string[]>((acc, curr) => {
        if (curr) {
          acc.push(curr.trim());
        }
        return acc;
      }, []);
    const filteredData = { ...data, highlights, _id: destination._id };
    console.log(filteredData);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/update-travel-package`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filteredData),
    });
    const result = await res.json();
    if (result.modifiedCount > 0) {
      setSpanning(false);
      console.log("--->", result);
    }
  };
  return (
    <Dialog>
      <DialogTrigger className="py-2 px-3 border border-black text-[15px] cursor-pointer">
        <PencilLine className="size-4 inline" /> Edit
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] scrollbar-thin scrollbar md:min-w-3xl lg:min-w-4xl overflow-y-auto p-6 sm:p-8">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Update Travel Package
          </DialogTitle>
          <DialogDescription>
            Make changes to the travel package details below
          </DialogDescription>
        </DialogHeader>

        <form className="mt-4 space-y-5" onSubmit={handelSubmit}>
          <Field label="Destination Name" htmlFor="destination-name">
            <input
              defaultValue={destination.destinationName}
              id="destination-name"
              name="destinationName"
              type="text"
              placeholder="Bali Paradise"
              required
              className={inputClass}
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Country" htmlFor="country">
              <input
                defaultValue={destination.country}
                id="country"
                name="country"
                type="text"
                placeholder="Indonesia"
                required
                className={inputClass}
              />
            </Field>

            <Field label="Category" htmlFor="category">
              <div className="relative">
                <select
                  id="category"
                  name="category"
                  defaultValue={destination.description}
                  required
                  className={cn(inputClass, "appearance-none pr-10")}
                >
                  <option value="beach">Beach</option>
                  <option value="mountain">Mountain</option>
                  <option value="city">City</option>
                  <option value="adventure">Adventure</option>
                  <option value="cultural">Cultural</option>
                  <option value="wildlife">Wildlife</option>
                </select>
                <ChevronDown
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-500"
                  strokeWidth={1.5}
                />
              </div>
            </Field>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Price (USD)" htmlFor="price">
              <input
                defaultValue={destination.price}
                id="price"
                name="price"
                type="number"
                min={0}
                step={1}
                placeholder="e.g., 1299"
                required
                className={inputClass}
              />
            </Field>

            <Field label="Duration" htmlFor="duration">
              <input
                defaultValue={destination.durationLabel}
                id="duration"
                name="durationLabel"
                type="text"
                placeholder="e.g., 7 Days/6 Nights"
                className={inputClass}
              />
            </Field>
          </div>

          <Field label="Departure Date" htmlFor="departure-date">
            <input
              defaultValue={destination.departureDate}
              id="departure-date"
              name="departureDate"
              type="date"
              required
              className={cn(
                inputClass,
                "[&::-webkit-calendar-picker-indicator]:opacity-40",
              )}
            />
          </Field>

          <Field label="Image URL" htmlFor="image-url">
            <input
              defaultValue={destination.imageUrl}
              id="image-url"
              name="imageUrl"
              type="url"
              placeholder="https://example.com/image.jpg"
              className={inputClass}
            />
          </Field>

          <Field label="Description" htmlFor="description">
            <textarea
              defaultValue={destination.description}
              id="description"
              name="description"
              rows={3}
              placeholder="Describe the travel experience..."
              className={cn(inputClass, "h-28 resize-y py-2.5")}
            />
          </Field>
          <Field label="Overview" htmlFor="overview">
            <textarea
              defaultValue={destination.overview}
              id="overview"
              name="overview"
              rows={3}
              placeholder="Describe the travel overview..."
              className={cn(inputClass, "h-36 resize-y py-3")}
            />
          </Field>
          <Field label="Highlights" htmlFor="rowHighlights">
            <textarea
              defaultValue={destination.rowHighlights || ""}
              id="rowHighlights"
              name="rowHighlights"
              rows={3}
              placeholder="#Watch clouds roll over the hills #Enjoy sunrise from a hilltop..."
              className={cn(inputClass, "h-36 resize-y py-3")}
            />
          </Field>
          <div className="flex flex-col-reverse gap-3 pt-3 sm:flex-row sm:items-center sm:justify-end">
            <DialogClose className="inline-flex h-11 items-center justify-center gap-2 text-red-600 border border-red-600 bg-white px-5 text-sm font-medium ">
              <Trash className="inline size-4" strokeWidth={1.5} />
              Cancel
            </DialogClose>

            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center gap-2  bg-brand px-6 text-sm font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
            >
              {isSpanning ? (
                <Spinner data-icon="inline-start" />
              ) : (
                <Save aria-hidden="true" className="size-4" strokeWidth={1.5} />
              )}
              Save Changes
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default DestinationEditDialogBox;
