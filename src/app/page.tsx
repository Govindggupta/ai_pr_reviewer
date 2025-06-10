"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex items-center justify-center">
          <h1>AI PR Reviewer</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push("/chat")}
          >
            Start Reviewing PRs
          </button>
        </div>
      </div>
    </>
  );
}
