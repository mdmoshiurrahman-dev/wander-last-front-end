import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Lock, Mail } from "lucide-react";

const inputClass =
  "h-9 w-full rounded border border-transparent bg-[#f4f7f9] pl-9 pr-3 text-sm text-neutral-900 transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/40";

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.55-.2-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3.02h3.88c2.27-2.09 3.54-5.17 3.54-8.89z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.01c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.12A11.99 11.99 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.28a7.21 7.21 0 0 1 0-4.56V6.6H1.29a12 12 0 0 0 0 10.8l3.98-3.12z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.29 6.6l3.98 3.12C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

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
  return (
    <section className="flex flex-1 flex-col items-center bg-[#f5f7f8] px-5 py-14 sm:px-6">
      <h1 className="text-[28px] leading-tight font-bold text-neutral-900">
        Welcome Back
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Resume your adventure with Wanderlust
      </p>

      <div className="mt-8 w-full max-w-[400px] rounded border border-neutral-200 bg-white p-6 sm:p-7">
        <form className="space-y-4">
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
            Sign In
          </button>
        </form>

        <p className="my-4 text-center text-[13px] text-slate-500">
          Or continue with
        </p>

        <button
          type="button"
          className="flex h-10 w-full cursor-pointer items-center justify-center gap-2.5 rounded border border-neutral-200 bg-white text-sm text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:ring-3 focus-visible:ring-brand/40 focus-visible:outline-none"
        >
          <GoogleIcon className="size-4" />
          Sign Up With Google
        </button>

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
