import { rulesInterpretations } from "@/data/rulesInterpretations";
import Link from "next/link";

export default function BoardNews() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-red-500 relative inline-block group">
          Board News
          <span className="block h-1 bg-red-500 mt-2 w-0 group-hover:w-full transition-all duration-500"></span>
        </h2>

        <div className="bg-zinc-900 border border-zinc-700 rounded-2xl shadow-lg p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl font-semibold">Annual Refresher Exam</h2>

            <Link
              href="/refresherExam"
              className="bg-white text-black font-semibold px-5 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              View Details
            </Link>
          </div>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              The annual refresher exam for Active members is available via the
              Documents section of this site.{" "}
              <a
                href="https://testmoz.com/2325811"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:text-gray-400"
              >
                Click here
              </a>{" "}
              to complete the exam online.
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
              . Scoring is instant and results are shared immediately.
            </p>

            <p>
              This is an open-book exam. Contact{" "}
              <span className="text-white font-semibold">Jeff Rivet</span> if
              you need assistance.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-2xl shadow-lg p-8 space-y-4">
          <h3 className="text-xl font-semibold">
            Massachusetts Rules Interpretation Clinics
          </h3>

          <small className="text-gray-400">Updated Schedule</small>

          <p className="text-gray-300 leading-relaxed">
            Below is a complete listing of all rules interpretation clinics. You
            must attend one to be eligible for high school assignments.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-700 mt-4">
              <thead>
                <tr className="bg-gray-900 text-left">
                  <th className="p-3 border-b border-gray-700">Host Board</th>
                  <th className="p-3 border-b border-gray-700">Date</th>
                  <th className="p-3 border-b border-gray-700">Time</th>
                  <th className="p-3 border-b border-gray-700">Location</th>
                </tr>
              </thead>

              <tbody>
                {rulesInterpretations.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-800 transition">
                    <td className="p-3 border-b border-gray-700">
                      {item.hostBoard}
                    </td>
                    <td className="p-3 border-b border-gray-700">
                      {item.date}
                    </td>
                    <td className="p-3 border-b border-gray-700">
                      {item.time}
                    </td>
                    <td className="p-3 border-b border-gray-700">
                      {item.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
