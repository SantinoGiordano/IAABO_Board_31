"use client";

import BoardMembers from "@/componets/boardMembers";
import MeetingInfo from "@/componets/MeetingInfo";
import HeroText from "@/componets/textRotate";
import { useEffect, useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      
      {/* HERO */}
      <section className="relative h-[60vh] md:h-[60vh] lg:h-[75vh] overflow-hidden flex items-center justify-center">
        
        {/* Background Image */}
        <img
          src="/heroBanner.jpg"
          alt="Basketball court with hoop and ball"
          fetchPriority="high"
          draggable={false}
          className="absolute inset-0 w-full h-[120%] object-cover"
          style={{
            transform: `translateY(${offset * 0.6}px)`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text */}
        <div className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-extrabold text-white text-center px-6">
          <HeroText />
        </div>
      </section>

      {/* CONTENT */}
      <section className="flex justify-center px-4 py-16">
        <div className="w-full max-w-5xl">

          {/* MAIN CARD */}
          <div className="bg-white text-black border border-gray-200 rounded-2xl shadow-xl p-10 space-y-10">

            {/* HEADER */}
            <div className="text-center space-y-3">
               <h2 className="text-3xl font-bold text-red-700 relative inline-block group">
              Meeting Dayes 2026-27
              <span className="block h-1 bg-red-600 mt-2 w-0 group-hover:w-full transition-all duration-500"></span>
            </h2>

              <p className="text-gray-700">
                <span className="font-semibold">In-person meetings:</span>{" "}
                Naismith Memorial Basketball Hall of Fame, Springfield, MA
              </p>

              <p className="text-gray-700">
                <span className="font-semibold">Virtual meetings:</span> Zoom
                invite disseminated to the membership
              </p>
            </div>

            <div className="border-t border-gray-200"></div>

            {/* MEETINGS */}
            <MeetingInfo
              meetings={[
                { date: "December 7", type: "In Person", time: "10am" },
                { date: "December 14", type: "Zoom", time: "10am" },
                { date: "January 7", type: "In Person", time: "10am" },
                { date: "January 15", type: "Zoom", time: "10am" },
              ]}
            />

            <div className="border-t border-gray-200"></div>

            {/* ANNOUNCEMENTS */}
            <div className="text-center space-y-6">

              <div>
                <p className="text-gray-800">
                  The 2026 Refresher Exam can be found{" "}
                  <a
                    href="https://testmoz.com/q/14953086"
                    className="text-red-600 font-semibold hover:underline"
                  >
                    here
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Please enter your first and last name and complete by xx/xx/xxxx.
                </p>
              </div>

              <div>
                <p className="text-gray-800">
                  MIAA Registration and Background Checks are due before the season.
                </p>
              </div>

              <div>
                <p className="text-gray-800">
                  NFHS Concussion Certifications are due before the season starts.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200"></div>

            {/* LOGO */}
            <div className="flex justify-center">
              <a
                href="https://officials.cancer.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div
                  className="bg-white p-6 rounded-full shadow-md border 
                  transition-all duration-300
                  group-hover:scale-110 group-hover:shadow-xl"
                >
                  <img
                    fetchPriority="high"
                    src="/officals_vs_cancer_logo.webp"
                    alt="Officials vs Cancer Logo"
                    className="w-40 h-40 object-contain pointer-events-none"
                    draggable={false}
                  />
                </div>
              </a>
            </div>

            {/* DESCRIPTION */}
            <div className="max-w-3xl mx-auto text-center mt-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                A heartfelt thank you to all who donated and participated in our
                initiative for the 2026 season. Since 2016, Board 31 members and
                supporters have donated more than $6,000 to the American Cancer
                Society, donning pink whistles, lanyards, and lapel pins during
                OVC Week to demonstrate our unity in this fight.{" "}
                <a
                  href="https://officials.cancer.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 font-medium underline hover:text-red-800 transition"
                >
                  Visit our site
                </a>{" "}
                to donate and track our progress.
              </p>

              <p className="mt-4 font-medium text-gray-700">
                Your generosity and support is appreciated!
              </p>
            </div>

            <div className="border-t border-gray-200"></div>

            {/* BOARD MEMBERS */}
            <BoardMembers />

          </div>
        </div>
      </section>
    </div>
  );
}