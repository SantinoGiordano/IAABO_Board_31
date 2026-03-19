import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-blue-950 to-black min-h-screen">
      
      {/* HERO */}
      <section className="relative h-[60vh] bg-[url('/heroBanner.jpg')] bg-center bg-cover flex items-center justify-center md:bg-fixed">
        <div className="absolute inset-0 bg-black/70"></div>

        <h1 className="relative text-4xl md:text-6xl font-extrabold text-white text-center px-6">
          Welcome to IAABO Board 31
        </h1>
      </section>

      {/* CENTERED CONTENT */}
      <section className="flex justify-center px-4 py-16">
        <div className="w-full max-w-4xl space-y-10">
          
          {/* ABOUT */}
          <div className="bg-white text-gray-900 shadow-xl rounded-2xl p-6">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">
              Meeting Dates
            </h2>

            <p className="text-center">
              <span className="font-semibold">
                In-person meetings:
              </span>{" "}
              Naismith Memorial Basketball Hall of Fame, Springfield, MA
            </p>

            <p className="text-center mt-2">
              <span className="font-semibold">
                Virtual meetings:
              </span>{" "}
              Zoom invite disseminated to the membership
            </p>
          </div>

          {/* MEETINGS */}
          <div className="bg-white text-gray-900 shadow-xl rounded-2xl p-6 text-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Regular Season Meetings
            </h2>

            <div className="space-y-2">
              <p>December 7 — In Person | 10am</p>
              <p>December 14 — Zoom | 10am</p>
              <p>January 11 — Zoom | 10am</p>
              <p>February 1 — In Person | 10am</p>
            </div>
          </div>

          {/* ANNOUNCEMENTS */}
          <div className="space-y-6 text-center">

            <div className="bg-white text-gray-900 shadow-md p-5 rounded-xl">
              <p>
                The 2026 Refresher Exam can be found{" "}
                <a
                  href="https://www.npmjs.com/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  here
                </a>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Please enter your first and last name and complete by xx/xx/xxxx.
              </p>
            </div>

            <div className="bg-white text-gray-900 shadow-md p-5 rounded-xl">
              <p>
                MIAA Registration and Background Checks are due before the season.
              </p>
            </div>

            <div className="bg-white text-gray-900 shadow-md p-5 rounded-xl">
              <p>
                NFHS Concussion Certifications are due before the season starts.
              </p>
            </div>

          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <Image
                src={"/officals_vs_cancer_logo.webp"}
                alt="Officials vs Cancer Logo"
                width={400}
                height={200}
                draggable={false}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="bg-white text-gray-900 shadow-xl rounded-2xl p-6 text-center space-y-4 leading-relaxed">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <p>Integer nec odio. Praesent libero...</p>
            <p>Fusce nec tellus sed augue semper porta...</p>
            <p>Curabitur sodales ligula in libero...</p>
            <p>Maecenas mattis. Sed convallis tristique sem...</p>
            <p>Cras metus. Sed aliquet risus a tortor...</p>
          </div>

        </div>
      </section>
    </div>
  );
}