import Link from "next/link";

export default function BoardNews() {
    return (
        <>
        <div className="bg-black p-6 flex justify-center">
            News 
        </div>
        <Link href="/boardHistory" className="bg-gray-800 text-white px-4 py-2 rounded-md mt-4">
            Refresher Exam
        </Link>
        </>
    )
}