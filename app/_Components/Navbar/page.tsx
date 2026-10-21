"use client";

import { useState } from "react";
import { PiBooksFill } from "react-icons/pi";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-xl font-bold sm:text-2xl flex justify-center items-center"
        >
          <span className="text-green-600 flex"><span><PiBooksFill /></span>Course</span>
          <span className="text-gray-700">Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors lg:text-base ${
                  isActive
                    ? "text-green-700"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Auth */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/login"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 lg:px-4"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-700 lg:px-4"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">

            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={closeMenu}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-green-700"
                      : "text-gray-700 hover:bg-gray-50 hover:text-green-600"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile Auth */}
            <div className="flex flex-col gap-2 border-t pt-4 sm:flex-row">
              <Link
                href="/login"
                onClick={closeMenu}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-center font-medium text-gray-700 transition hover:bg-gray-50 sm:w-auto"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={closeMenu}
                className="w-full rounded-lg bg-green-700 px-4 py-2.5 text-center font-medium text-white transition hover:bg-green-700 sm:w-auto"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
