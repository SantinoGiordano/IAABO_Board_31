import { DataTable } from "@/componets/tables";
import { presidents, awardWinners, walterHicksonAward  } from "../../data/boardHistory";

export default function BoardHistory() {
  return (
    <div className="bg-black min-h-screen p-6 flex justify-center">
      <div className="w-full max-w-3xl">

        <h1 className="text-3xl font-bold text-white mb-10 text-center">
          Board History
        </h1>

        {/* TABLE 1 */}
        <DataTable title="Past Presidents" data={presidents} />

        {/* TABLE 2 */}
        <DataTable title="Robert D'Agostino Award" data={awardWinners} />

        {/* TABLE 3 */}
        <DataTable title="Tom Award Winners" data={walterHicksonAward} />

      </div>
    </div>
  );
}