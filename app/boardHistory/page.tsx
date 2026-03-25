import { presidents } from "../data/boardHistory";

export default function BoardHistory() {
  return (
    <div className="bg-black min-h-screen p-6 flex justify-center">
      <div className="w-full max-w-5xl">
        
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Board History
        </h1>

        <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-800">
          <table className="w-full text-sm text-left text-gray-300">
            
            {/* HEADER */}
            <thead className="bg-gray-900 text-gray-100 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-3">Recent Years</th>
                <th className="px-6 py-3">Earlier Years</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {presidents.map((row, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-800 hover:bg-gray-900 transition duration-200"
                >
                  <td className="px-6 py-3">
                    <span className="font-semibold text-white">
                      {row.left.years}
                    </span>
                    <span className="text-gray-400">
                      {" "} | {row.left.name}
                    </span>
                  </td>

                  <td className="px-6 py-3">
                    {row.right ? (
                      <>
                        <span className="font-semibold text-white">
                          {row.right.years}
                        </span>
                        <span className="text-gray-400">
                          {" "} | {row.right.name}
                        </span>
                      </>
                    ) : (
                      <span className="text-gray-600 italic">
                        —
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}