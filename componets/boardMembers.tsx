"use client";
import { useState } from "react";

export default function BoardMembers() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const members = [
    { role: "President", name: "John Doe", email: "jdoe@gmail.com" },
    { role: "Vice President", name: "Jane Smith", email: "jsmith@gmail.com" },
    { role: "Secretary", name: "Emily Johnson", email: "ejohnson@gmail.com" },
    { role: "Treasurer", name: "Michael Brown", email: "mbrown@gmail.com" },
  ];

  const handleCopy = async (email: string, index: number) => {
    await navigator.clipboard.writeText(email);
    setCopiedIndex(index);

    setTimeout(() => {
      setCopiedIndex(null);
    }, 1500);
  };

  return (
    <div className="text-center space-y-3">
      {members.map((member, i) => (
        <div
          key={i}
          onClick={() => handleCopy(member.email, i)}
          className="relative cursor-pointer bg-gray-50 rounded-xl p-3 shadow-sm 
          transition-all duration-300 hover:shadow-md hover:-translate-y-1 active:scale-95"
        >
          <span className="font-semibold">{member.role}:</span>{" "}
          {member.name} | {member.email}

          {/* TOOLTIP */}
          {copiedIndex === i && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 
              bg-black text-white text-xs px-3 py-1 rounded-md shadow-lg 
              animate-fadeIn">
              Copied!
            </span>
          )}
        </div>
      ))}
    </div>
  );
}