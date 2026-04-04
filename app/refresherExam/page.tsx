"use client";

import { useRouter } from "next/navigation";

export default function RefresherExam() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-red-500 inline-block">
            Refresher Exam
          </h2>
          <div className="h-1 w-20 bg-red-500 mt-2 rounded-full"></div>
        </div>

        {/* Card */}
        <div className="bg-white text-black border border-gray-200 rounded-2xl shadow-lg p-8 space-y-6 hover:shadow-xl transition">
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>
              The annual refresher exam for Active members is available via the
              Documents section of this site. To complete the exam online, use
              the link below.
            </p>

            <div className="flex justify-center">
              <a
                href="https://testmoz.com/2325811"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-600 transition duration-200 shadow-md"
              >
                Take the Exam
              </a>
            </div>

            <p>
              Enter your name, click “continue” and the exam will open. Click
              Yes or No for each question, and when you are done, click
              “submit.” You must get a minimum of{" "}
              <span className="font-semibold text-black">43 correct</span> to
              pass.
            </p>

            <p>
              The deadline to complete the exam is{" "}
              <span className="font-semibold text-black">Dec. 1 at 8 p.m.</span>
              .
            </p>

            <p>
              As always, the exam is open-book. Please contact{" "}
              <span className="font-semibold text-black">Jeff Rivet</span> if
              you require further assistance.
            </p>
          </div>
        </div>
        <button
          onClick={() => router.back()}
          className="bottom-6 right-6 bg-red-500 text-white px-6 py-4 rounded-full shadow-lg text-lg font-semibold flex items-center gap-2 hover:bg-red-600 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <span className="text-xl">←</span>
          Back
        </button>
      </div>
    </div>
  );
}
