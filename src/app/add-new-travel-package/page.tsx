"use client";
import type { Metadata } from "next";
import { useState, type ReactNode } from "react";
import { ChevronDown, Save, Trash2 } from "lucide-react";
import { cn } from "cn";
import { Spinner } from "@/components/ui/spinner";
import { authClient } from "@/lib/auth-client";
const inputClass =
  "h-12 w-full rounded bg-[#f4f7f9] px-4 text-base text-neutral-900 transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/40";

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
        className="mb-2.5 block text-base text-neutral-900"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default function AddNewTravelPackagePage() {
  const [isLoading, setLoading] = useState(false);
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
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
    const highlights = data.rowHighlights
      .split("#")
      .reduce<string[]>((acc, curr) => {
        if (curr) {
          acc.push(curr.trim());
        }
        return acc;
      }, []);
    const filteredData = { ...data, highlights };

    const { data: authTokenData, error } = await authClient.token();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/destination-data`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${authTokenData?.token}`,
        },
        body: JSON.stringify(filteredData),
      },
    );
    const result = await res.json();
    if (result.insertedId) {
      setLoading(false);
    }
  };
  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-[1280px] px-5 pt-14 pb-24 sm:px-6 lg:px-8 lg:pt-16">
        <h1 className="text-[clamp(2.25rem,4vw,3.5rem)] leading-tight font-light text-neutral-900">
          Add New Travel Package
        </h1>

        <div className="mx-auto mt-8 w-full max-w-[720px] rounded-md border border-neutral-200 bg-white p-7 lg:mt-12">
          <form className="space-y-6" onSubmit={handelSubmit}>
            <Field label="Destination Name" htmlFor="destination-name">
              <input
                id="destination-name"
                name="destinationName"
                type="text"
                placeholder="Bali Paradise"
                required
                className={inputClass}
              />
            </Field>

            <div className="grid gap-8 sm:grid-cols-2">
              <Field label="Country" htmlFor="country">
                <input
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
                    defaultValue="beach"
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
                    className="pointer-events-none absolute top-1/2 right-3 size-5 -translate-y-1/2 text-slate-500"
                    strokeWidth={1.5}
                  />
                </div>
              </Field>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <Field label="Price (USD)" htmlFor="price">
                <input
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
                id="image-url"
                name="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                className={inputClass}
              />
            </Field>

            <Field label="Description" htmlFor="description">
              <textarea
                id="description"
                name="description"
                rows={3}
                placeholder="Describe the travel experience..."
                className={cn(inputClass, "h-36 resize-y py-3")}
              />
            </Field>
            <Field label="Overview" htmlFor="overview">
              <textarea
                id="overview"
                name="overview"
                rows={3}
                placeholder="Describe the travel overview..."
                className={cn(inputClass, "h-36 resize-y py-3")}
              />
            </Field>
            <Field label="Highlights" htmlFor="highlights">
              <textarea
                id="highlights"
                name="rowHighlights"
                rows={3}
                placeholder="#Watch clouds roll over the hills #Enjoy sunrise from a hilltop..."
                className={cn(inputClass, "h-36 resize-y py-3")}
              />
            </Field>
            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-end sm:gap-4">
              <button
                type="reset"
                className="inline-flex h-12 select-none items-center justify-center gap-2 rounded-md border border-red-500 bg-white px-5 text-base font-medium whitespace-nowrap text-red-500 transition-colors hover:bg-red-50 focus-visible:ring-3 focus-visible:ring-red-500/40 focus-visible:outline-none"
              >
                <Trash2
                  aria-hidden="true"
                  className="size-5"
                  strokeWidth={1.5}
                />
                Cancel
              </button>
              <button
                disabled={isLoading}
                type="submit"
                className={`${isLoading ? "bg-[#d6f1f7] cursor-not-allowed" : ""} cursor-pointer inline-flex h-12 select-none items-center justify-center gap-2 rounded-md bg-brand px-6 text-base font-medium whitespace-nowrap text-white transition-colors hover:bg-brand-dark focus-visible:ring-3 focus-visible:ring-brand/40 focus-visible:outline-none`}
              >
                {isLoading ? (
                  <Spinner data-icon="inline-start" className="inline" />
                ) : (
                  <Save
                    aria-hidden="true"
                    className="size-5"
                    strokeWidth={1.5}
                  />
                )}
                Add Travel Package
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
