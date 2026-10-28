"use client";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Lock, Mail } from "lucide-react";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "@/components/ui/toast";
import GoogleSignIn from "@/components/auth/GoogleSignIn";


const inputClass =
  "h-9 w-full rounded border border-transparent bg-[#f4f7f9] pl-9 pr-3 text-sm text-neutral-900 transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/40";
function Field({
  label,
  htmlFor,
  icon: Icon,
  type,
  placeholder,
  name,
}: {
  label: string;
  htmlFor: string;
  icon: LucideIcon;
  type: string;
  placeholder: string;
  name: string;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[13px] font-semibold text-neutral-900"
      >
        {label}
      </label>
      <div className="relative">
        <Icon
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400"
          strokeWidth={1.75}
        />
        <input
          id={htmlFor}
          name={name}
          type={type}
          placeholder={placeholder}
          required
          className={inputClass}
        />
      </div>
    </div>
  );
}

export default function SignInPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handelOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
      rememberMe?: string;
    };
    const res = await signIn.email({
      ...data,
      rememberMe: data.rememberMe ? true : false,
    });
    if (res.data?.token) {
      setIsLoading(false);
      router.push("/");
    } else {
      setIsLoading(false);
      toast.add({
        type: "error",
        description: res.error?.message,
      });
    }
  };
  return (
    <section className="flex flex-1 flex-col items-center bg-[#f5f7f8] px-5 py-14 sm:px-6">
      <h1 className="text-[28px] leading-tight font-bold text-neutral-900">
        Welcome Back
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Resume your adventure with Wanderlust
      </p>

      <div className="mt-8 w-full max-w-[400px] rounded border border-neutral-200 bg-white p-6 sm:p-7">
        <form className="space-y-4" onSubmit={handelOnSubmit}>
          <Field
            label="Email Address"
            htmlFor="email"
            icon={Mail}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <Field
            label="Password"
            htmlFor="password"
            icon={Lock}
            type="password"
            name="password"
            placeholder="Enter your password"
          />

          <div className="flex items-center justify-between gap-3">
            <label
              htmlFor="remember-me"
              className="flex select-none items-center gap-2 text-[13px] text-neutral-900"
            >
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                className="size-3.5 cursor-pointer accent-brand"
              />
              Remember me
            </label>
            <Link
              href="/forgot-password"
              className="text-[13px] font-medium text-brand transition-colors hover:text-brand-dark"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="mt-1 h-10 w-full cursor-pointer rounded bg-brand text-sm font-medium text-white transition-colors hover:bg-brand-dark focus-visible:ring-3 focus-visible:ring-brand/40 focus-visible:outline-none"
          >
            {isLoading ? (
              <span>
                <Spinner className="inline" /> Signing In
              </span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p className="my-4 text-center text-[13px] text-slate-500">
          Or continue with
        </p>

        <GoogleSignIn />

        <p className="mt-5 text-center text-[13px] text-slate-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-brand transition-colors hover:text-brand-dark"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}
