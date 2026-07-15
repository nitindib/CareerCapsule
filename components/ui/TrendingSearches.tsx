import Link from "next/link";

const searches = [
  "SSC CGL",
  "SSC CHSL",
  "SSC MTS",
  "Railway NTPC",
  "Group D",
  "UPSC",
  "Bank PO",
  "IBPS Clerk",
  "UP Police",
  "Teacher",
  "NEET",
  "CUET",
];

export default function TrendingSearches() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">

      <h2 className="mb-6 text-2xl font-bold">
        🔥 Trending Searches
      </h2>

      <div className="flex flex-wrap gap-4">

        {searches.map((item) => (

          <Link
            key={item}
            href={`/jobs?search=${encodeURIComponent(item)}`}
            className="rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
          >
            {item}
          </Link>

        ))}

      </div>

    </section>
  );
}