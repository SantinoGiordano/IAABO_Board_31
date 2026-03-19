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
    <nav className="w-full p-5 bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold">
          IABBO BOARD 31
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-blue-400 transition duration-200"
            >
              {link.name}
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
        className={`md:hidden bg-gray-800 px-4 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-3">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-blue-400 transition duration-200"
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