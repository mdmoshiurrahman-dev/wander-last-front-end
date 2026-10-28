import { signIn } from "@/lib/auth-client";
import React from "react";
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

const GoogleSignIn = () => {
  const handelSignInWithGoogle = async () => {
    const result = await signIn.social({
      provider: "google",
    });
    console.log(result.data)
  };
  return (
    <>
      <button
        onClick={handelSignInWithGoogle}
        type="button"
        className="flex h-10 w-full cursor-pointer items-center justify-center gap-2.5 rounded border border-neutral-200 bg-white text-sm text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:ring-3 focus-visible:ring-brand/40 focus-visible:outline-none"
      >
        <GoogleIcon className="size-4" />
        Google
      </button>
    </>
  );
};

export default GoogleSignIn;