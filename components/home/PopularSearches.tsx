import Link from "next/link";

const searches = [
  "SSC CGL",
  "SSC CHSL",
  "Railway NTPC",
  "RRB Group D",
  "UP Police",
  "IBPS PO",
  "SBI Clerk",
  "UPSC",
  "CTET",
  "NDA",
];

export default function PopularSearches() {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-6">

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

        <div className="mb-4 flex items-center gap-2">
          <span className="text-xl">🔥</span>

          <h2 className="text-xl font-bold">
            Popular Searches
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">

          {searches.map((item) => (

            <Link
              key={item}
              href={`/search?q=${encodeURIComponent(item)}`}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
            >
              {item}
            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}