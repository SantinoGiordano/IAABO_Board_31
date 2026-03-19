"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Board History", href: "/board-history" },
    { name: "Board News", href: "/board-news" },
    { name: "Calendar", href: "/calendar" },
    { name: "Dictionary", href: "/dictionary" },
    { name: "Documents", href: "/documents" },
    { name: "Mentoring", href: "/mentoring" },
    { name: "New Officials", href: "/new-officials" },
    { name: "Rules Corner", href: "/rules-corner" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-white">
        
        {/* Logo */}
        <div className="text-xl md:text-2xl font-extrabold tracking-wide">
          <span className="text-white">IAABO</span>{" "}
          <span className="text-blue-400">Board 31</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group text-sm font-medium"
            >
              <span className="group-hover:text-blue-400 transition">
                {link.name}
              </span>

              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[600px] py-4" : "max-h-0"
        }`}
      >
        <div className="mx-4 bg-white text-gray-900 rounded-xl shadow-lg p-4 flex flex-col space-y-3">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}