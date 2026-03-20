import Image from "next/image";
import Footer from "@/componets/footer";
import MeetingInfo from "@/componets/MeetingInfo";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-blue-950 to-black min-h-screen">
      {/* HERO */}
      <section className="relative h-[60vh] bg-[url('/heroBanner.jpg')] bg-center bg-cover flex items-center justify-center md:bg-fixed">
        <div className="absolute inset-0 bg-black/70"></div>

        <h1 className="relative text-4xl md:text-6xl font-extrabold text-white text-center px-6">
          {/* Welcome to IAABO Board 31 */}
          One Rule, One Interpretation
        </h1>
      </section>

      <section className="flex justify-center px-4 py-16">
        <div className="w-full max-w-4xl">
          {/* ONE MAIN CARD */}
          <div className="bg-white text-gray-900 shadow-2xl rounded-3xl p-8 space-y-10">
            {/* MEETING INFO */}
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-bold text-blue-700">
                Meeting Dates
              </h2>

              <p>
                <span className="font-semibold">In-person meetings:</span>{" "}
                Naismith Memorial Basketball Hall of Fame, Springfield, MA
              </p>

              <p>
                <span className="font-semibold">Virtual meetings:</span> Zoom
                invite disseminated to the membership
              </p>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-gray-200"></div>

            {/* REGULAR MEETINGS */}
            <MeetingInfo
              meetings={[
                { date: "December 7", type: "In Person", time: "10am" },
                { date: "December 14", type: "Zoom", time: "10am" },
                { date: "January 7", type: "In Person", time: "10am" },
                { date: "January 15", type: "Zoom", time: "10am" },
              ]}
            />

            {/* DIVIDER */}
            <div className="border-t border-gray-200"></div>

            {/* ANNOUNCEMENTS */}
            <div className="text-center space-y-4">
              <div>
                <p>
                  The 2026 Refresher Exam can be found{" "}
                  <a
                    href="https://www.npmjs.com/"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    here
                  </a>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Please enter your first and last name and complete by
                  xx/xx/xxxx.
                </p>
              </div>

              <div>
                <p>
                  MIAA Registration and Background Checks are due before the
                  season.
                </p>
              </div>

              <div>
                <p>
                  NFHS Concussion Certifications are due before the season
                  starts.
                </p>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-gray-200"></div>

            {/* IMAGE WITH CIRCLE BACKGROUND */}
            <div className="flex justify-center">
              <a
                href="https://officials.cancer.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div
                  className="bg-white p-6 rounded-full shadow-lg border 
                    transform transition-all duration-300 ease-in-out
                    group-hover:scale-110 group-active:scale-95"
                >
                  <img
                    src="/officals_vs_cancer_logo.webp"
                    alt="Officials vs Cancer Logo"
                    className="w-40 h-40 object-contain pointer-events-none"
                    draggable={false}
                  />
                </div>
              </a>
            </div>
            <div className="max-w-3xl mx-auto text-center mt-4">
              <p className="text-sm text-gray-600 text-justify leading-relaxed">
                A heartfelt thank you to all who donated and participated in our
                initiative for the 2026 season. Since 2016, Board 31 members and
                supporters have donated more than $6,000 to the American Cancer
                Society, donning pink whistles, lanyards, and lapel pins during
                OVC Week to demonstrate our unity in this fight.{" "}
                <a
                  href="https://officials.cancer.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium underline hover:text-blue-800 transition"
                >
                  Visit our site
                </a>{" "}
                to donate and track our progress, or contact Officials vs.
                Cancer Chair, Owen Shanahan, with any questions or feedback.
              </p>

              <p className="mt-4 font-medium text-gray-700">
                Your generosity and support is appreciated!
              </p>
            </div>
            <hr />
            <div className="text-center space-y-2">
              <div>
                President : <span className="font-semibold">John Doe |</span>
              </div>
              <div>
                Vice President :{" "}
                <span className="font-semibold">Jane Smith |</span>
              </div>
              <div>
                Secretary : <span className="font-semibold">Emily Johnson |</span>
              </div>
              <div>
                Treasurer : <span className="font-semibold">Michael Brown |</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
