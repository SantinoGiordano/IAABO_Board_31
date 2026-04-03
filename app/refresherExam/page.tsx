export default function RefresherExam() {
  return (
    <div className="min-h-screen bg-black px-4 py-12">
      <div className="max-w-3xl mx-auto">
        
        {/* Title aligned with card */}
        <h2 className="text-3xl font-bold text-red-500 relative inline-block group mb-6">
          Board News
          <span className="block h-1 bg-red-500 mt-2 w-0 group-hover:w-full transition-all duration-500"></span>
        </h2>

        {/* Card */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-2xl shadow-lg p-8 space-y-6">
        

          {/* Content */}
          <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
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
                className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-200"
              >
                Take the Exam
              </a>
            </div>

            <p>
              Enter your name, click “continue” and the exam will open. Click
              Yes or No for each question, and when you are done, click
              “submit.” You must get a minimum of{" "}
              <span className="text-white font-semibold">43 correct</span> to
              pass.
            </p>

            <p>
              The deadline to complete the exam is{" "}
              <span className="text-white font-semibold">
                Dec. 1 at 8 p.m.
              </span>
              .
            </p>

            <p>
              As always, the exam is open-book. Please contact{" "}
              <span className="text-white font-semibold">
                Jeff Rivet
              </span>{" "}
              if you require further assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}