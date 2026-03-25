import { awardWinners, presidents } from "../../data/boardHistory";

export default function BoardHistory() {
  return (
    <div className="bg-black min-h-screen p-6 flex justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Board History
        </h1>

        <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-800">
          <table className="w-full text-sm bg-white text-black">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="px-6 py-4 text-center text-lg font-semibold">
                  Past Presidents
                </th>
              </tr>
            </thead>

            <tbody>
              {presidents.map((president, index) => (
                <tr
                  key={index}
                  className={`border-t border-gray-200 hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="px-6 py-3">
                    <span className="font-semibold">{president.years}</span>
                    <span className="text-gray-600"> | {president.name}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bg-black min-h-screen p-6 flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-800">
                <table className="w-full text-sm bg-white text-black">
                  {/* HEADER */}
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="px-6 py-4 text-center text-lg font-semibold">
                        Robert D'Agostine Award
                      </th>
                    </tr>
                  </thead>

                  {/* BODY */}
                  <tbody>
                    {awardWinners.map((winner, index) => (
                      <tr
                        key={index}
                        className={`border-t border-gray-200 hover:bg-gray-100 ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="px-6 py-3">
                          <span className="font-semibold">{winner.year}</span>
                          <span className="text-gray-600">
                            {" "}
                            | {winner.name}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
