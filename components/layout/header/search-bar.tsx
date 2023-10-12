"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default async function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("value", search.value);
    } else {
      newParams.delete("value");
    }

    router.push(`/search?${newParams}`);
  }

  return (
    <div className="max-w-md mx-auto ">
      <div className="flex bg-gray-100 items-center w-full h-9 rounded-lg focus-within:shadow-md overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className="bg-gray-100 h-full w-full outline-none text-sm text-gray-700 pr-2"
            id="search"
            name="search"
            type="text"
            placeholder="Search by name..."
          />
        </form>
      </div>
    </div>
  );
}
