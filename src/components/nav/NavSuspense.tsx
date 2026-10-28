import React from "react";

function NavSuspense() {
  return (
    <header className="relative z-40 w-full bg-white">
      <div className="relative mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-4 w-16 animate-pulse rounded bg-neutral-200"
            />
          ))}
        </nav>

        {/* Logo */}
        <div className="h-6 w-32 animate-pulse rounded bg-neutral-200 lg:absolute lg:left-1/2 lg:-translate-x-1/2" />

        {/* Actions */}
        <div className="flex items-center gap-4 sm:gap-7">
          <div className="h-4 w-14 animate-pulse rounded bg-neutral-200" />

          <div className="hidden h-4 w-12 animate-pulse rounded bg-neutral-200 sm:block" />

          <div className="h-9 w-20 animate-pulse rounded-md bg-neutral-200" />

          {/* Mobile menu icon */}
          <div className="size-9 animate-pulse rounded-md bg-neutral-200 lg:hidden" />
        </div>
      </div>
    </header>
  );
}

export default NavSuspense;
