"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <h2 className="text-xl font-bold">Error!</h2>
      <button
        className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-4 py-2"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
