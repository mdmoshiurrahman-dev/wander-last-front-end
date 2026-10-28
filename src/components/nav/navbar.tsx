"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, User, X } from "lucide-react";
import { cn } from "cn";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/explore-all-destinations" },
  { label: "My Bookings", href: "/my-bookings" },
  { label: "Admin", href: "/add-new-travel-package" },
];

const actionLinkClass =
  "text-base text-neutral-900 transition-colors hover:text-brand";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();
  return (
    <header className="relative z-40 w-full bg-white">
      <div className="relative mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathName === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-base text-neutral-900 transition-colors hover:text-brand",
                  isActive &&
                    "text-brand underline decoration-dotted decoration-1 underline-offset-[7px]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/"
          aria-label="Wanderlast home"
          className="shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
        >
          <Image
            src="/Wanderlast.png"
            alt="Wanderlast"
            width={162}
            height={24}
            loading="eager"
            className="h-6 w-auto"
          />
        </Link>

        <div className="flex items-center gap-4 sm:gap-7">
          <Link
            href="/profile"
            aria-label="Profile"
            className={cn(actionLinkClass, "flex items-center gap-1.5")}
          >
            <User aria-hidden="true" className="size-4" strokeWidth={1.75} />
            <span className="hidden sm:inline">Profile</span>
          </Link>

          <Link
            href="/login"
            className={cn(actionLinkClass, "hidden sm:inline")}
          >
            Login
          </Link>

          <Link href="/signup" className={actionLinkClass}>
            Sign Up
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="-mr-2 inline-flex size-9 items-center justify-center rounded-md text-neutral-900 transition-colors hover:bg-neutral-100 lg:hidden"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-neutral-200 bg-white lg:hidden"
        >
          <ul className="mx-auto flex max-w-[1280px] flex-col px-3 py-3 sm:px-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={link.href === "/" ? "page" : undefined}
                  className={cn(
                    "block rounded-md px-2 py-2.5 text-base text-neutral-900 transition-colors hover:bg-neutral-100 hover:text-brand",
                    link.href === "/" && "text-brand",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 border-t border-neutral-200 pt-2 sm:hidden">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-2 py-2.5 text-base text-neutral-900 transition-colors hover:bg-neutral-100 hover:text-brand"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
