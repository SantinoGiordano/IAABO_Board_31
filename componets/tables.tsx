type TableProps = {
  title: string;
  data: { year?: string; years?: string; name: string }[];
};

export function DataTable({ title, data }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-800 mb-10">
      <table className="w-full text-sm bg-white text-black">
        
        {/* HEADER */}
        <thead>
          <tr className="border-b border-gray-300">
            <th className="px-6 py-4 text-center text-lg font-semibold">
              {title}
            </th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`border-t border-gray-200 hover:bg-gray-100 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td className="px-6 py-3">
                <span className="font-semibold">
                  {item.years || item.year}
                </span>
                <span className="text-gray-600">
                  {" "} | {item.name}
                </span>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}