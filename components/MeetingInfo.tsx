import { Meeting } from "@/types/type";


export default function MeetingInfo({ meetings }: { meetings: Meeting[] }) {
  return (
    <div className="text-center space-y-2">
      <h2 className="text-2xl font-bold text-red-700">
        Regular Season Meetings
      </h2>

      {meetings.map((meeting, i) => (
        <p key={i}>
          {meeting.date} — {meeting.type} | {meeting.time}
        </p>
      ))}
    </div>
  );
}