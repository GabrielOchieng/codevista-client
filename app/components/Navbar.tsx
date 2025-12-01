"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("light", mode === "light");
  }, [mode]);

  return (
    <header className="fixed top-0 filter backdrop-blur-sm w-full bg-(--pure-black)/90 shadow-lg/40 border-b border-(--pure-graphite) text-(--pure-white) z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4 max-md:px-4">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/codevista.jpg"
            alt="CodeVista Logo"
            width={28}
            height={28}
            className="hidden sm:block"
          />

          <h1 className="text-xl font-medium tracking-wider hover:text-(--solar-sky) transition">
            CodeVista
          </h1>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <a href="/#features">Features</a>
          <a href="/#mission" className="hidden sm:block">
            Mission
          </a>
          <a href="/#cta">Start</a>

          {/* Theme Toggle */}
          <button
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            className="p-2 rounded-md border border-(--solar-sky) text-(--solar-sky) hover:bg-(--solar-sky) cursor-pointer hover:text-(--pure-black) transition"
          >
            {mode === "dark" ? (
              // Show the SUN because clicking will activate LIGHT mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25M12 18.75V21M4.22 4.22l1.59 1.59M18.19 18.19l1.59 1.59M3 12h2.25M18.75 12H21M4.22 19.78l1.59-1.59M18.19 5.81l1.59-1.59M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
                />
              </svg>
            ) : (
              // Show the MOON because clicking will activate DARK mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
