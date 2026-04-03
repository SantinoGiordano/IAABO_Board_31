import Link from "next/link";

export default function BoardNews() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <h2 className="text-3xl font-bold text-red-500 relative inline-block group">
          Board News
          <span className="block h-1 bg-red-500 mt-2 w-0 group-hover:w-full transition-all duration-500"></span>
        </h2>

        {/* Main Card */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-2xl shadow-lg p-8 space-y-6">
          {/* Title + Button */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl font-semibold">Annual Refresher Exam</h2>

            <Link
              href="/refresherExam"
              className="bg-white text-black font-semibold px-5 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              View Details
            </Link>
          </div>

          {/* Content */}
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              The annual refresher exam for Active members is available via the
              Documents section of this site. To complete the exam online,{" "}
              <a
                href="https://testmoz.com/2325811"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:text-gray-400"
              >
                click here
              </a>
              .
            </p>

            <p>
              Enter your name, click “continue” and the exam will open. Click
              Yes or No for each question, and when finished, click “submit.”
              You must get a minimum of{" "}
              <span className="text-white font-semibold">43 correct</span> to
              pass.
            </p>

            <p>
              The deadline is{" "}
              <span className="text-white font-semibold">Dec. 1 at 8 p.m.</span>
              . Scoring is instant and results are shared immediately with you
              and the board secretary.
            </p>

            <p>
              This is an open-book exam. Contact{" "}
              <span className="text-white font-semibold">Jeff Rivet</span> if
              you need assistance.
            </p>
          </div>
        </div>

        {/* Secondary Article */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-2xl shadow-lg p-8 space-y-4">
          <h3 className="text-xl font-semibold">
            2019 Massachusetts Rules Interpretation Clinics
          </h3>

          <small className="text-gray-400">Tuesday, October 15th, 2019</small>

          <p className="text-gray-300 leading-relaxed">
            Below is a complete listing of all rules interpretation clinics in
            Massachusetts. You must attend one to be eligible for high school
            assignments. Be sure to notify the secretary of the board whose
            clinic you attend so your attendance is properly credited.
          </p>
        </div>
      </div>
    </div>
  );
}
