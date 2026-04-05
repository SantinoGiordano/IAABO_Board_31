
import { rulesInterpretations } from "@/data/.rulesInterpretations";
import Link from "next/link";

export default function BoardNews() {
  return (
    <div className="min-h-screen from-black via-zinc-900 to-black text-white px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <div>
          <h2 className="text-4xl font-bold text-red-500 inline-block">
            Board News
          </h2>
          <div className="h-1 w-20 bg-red-500 mt-2 rounded-full"></div>
        </div>

        {/* REFRESHER EXAM CARD */}
        <div className="bg-white text-black border border-gray-200 rounded-2xl shadow-lg p-8 space-y-6 hover:shadow-xl transition">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl font-semibold">
              Annual Refresher Exam
            </h2>

            <Link
              href="/refresherExam"
              className="bg-red-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-red-600 transition"
            >
              View Details
            </Link>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The annual refresher exam for Active members is available via the
              Documents section of this site.{" "}
              <a
                href="https://testmoz.com/2325811"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 underline hover:text-red-400"
              >
                Click here
              </a>{" "}
              to complete the exam online.
            </p>

            <p>
              Enter your name, click “continue” and the exam will open. Click
              Yes or No for each question, and when finished, click “submit.”
              You must get a minimum of{" "}
              <span className="font-semibold text-black">43 correct</span> to pass.
            </p>

            <p>
              The deadline is{" "}
              <span className="font-semibold text-black">
                Dec. 1 at 8 p.m.
              </span>.
            </p>

            <p>
              This is an open-book exam. Contact{" "}
              <span className="font-semibold text-black">Jeff Rivet</span> if
              you need assistance.
            </p>
          </div>
        </div>

        {/* RULES CLINICS */}
        <div className="bg-white text-black border border-gray-200 rounded-2xl shadow-lg p-8 space-y-6">

          <div>
            <h3 className="text-2xl font-semibold">
              Rules Interpretation Clinics
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Updated Schedule – Attendance required for eligibility
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Below is a complete listing of all rules interpretation clinics. You
            must attend one to be eligible for high school assignments.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">

              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wider">
                  <th className="p-4 text-left">Host Board</th>
                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Time</th>
                  <th className="p-4 text-left">Location</th>
                </tr>
              </thead>

              <tbody>
                {rulesInterpretations.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="p-4">{item.hostBoard}</td>
                    <td className="p-4">{item.date}</td>
                    <td className="p-4">{item.time}</td>
                    <td className="p-4 text-gray-500">{item.location}</td>
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