"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  function handleSearch() {
    if (!search.trim()) return;

    router.push(`/search?q=${encodeURIComponent(search)}`);
  }

  return (
    <div className="flex overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        type="text"
        placeholder="🔍 Search Jobs, Results, Admit Cards..."
        className="flex-1 px-6 py-5 text-lg outline-none"
      />

      <button
        onClick={handleSearch}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 font-semibold text-white transition hover:opacity-90"
      >
        Search
      </button>

    </div>
  );
}