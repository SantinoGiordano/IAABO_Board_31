import { DataTable } from "@/componets/tables";
import {
  presidents,
  RobertDAgostinoAward,
  walterHicksonAward,
} from "../../data/.boardHistory";

export default function BoardHistory() {
  return (
    <div className="bg-black min-h-screen p-6 flex justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-white mb-10 text-center">
          Board History
        </h1>

        {/* TABLE 1 */}
        <DataTable title="Past Presidents" data={presidents} />

        <h4 className="text-white text-justify p-5">
          Honoring a former board president and longtime rules interpreter, this
          is presented to a member who has demonstrated exceptional officiating
          ability and/or elevated his/her officiating to an elite level worthy
          of recognition.
        </h4>

        {/* TABLE 2 */}
        <DataTable title="Robert D'Agostino Award" data={RobertDAgostinoAward} />

        <h4 className="text-white text-justify p-5">
          Honoring a former board president and longtime secretary-treasurer,
          this is presented to a member who has gone above and beyond in service
          to the board, or helped present it in a favorable light.
        </h4>
        {/* TABLE 3 */}
        <DataTable title="Walter Hickson Award" data={walterHicksonAward} />
      </div>
    </div>
  );
}
