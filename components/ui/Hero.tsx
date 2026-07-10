export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 text-center">
      <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        🚀 India's Smart Career Platform
      </span>

      <h1 className="mt-8 text-6xl font-extrabold text-slate-900">
        Build Your Career With AI
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600">
        Latest Government Jobs, Results, Admit Cards, Syllabus,
        Answer Keys and AI Career Guidance — all in one place.
      </p>

      <div className="mx-auto mt-10 max-w-3xl">
        <input
          type="text"
          placeholder="🔍 Search Jobs, Results, Admit Cards..."
          className="w-full rounded-2xl border border-slate-300 bg-white px-6 py-4 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {["SSC CGL", "UPSC", "Railway", "Police", "Banking"].map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-100 px-4 py-2 text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700">
          Explore Jobs
        </button>

        <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold hover:bg-slate-100">
          AI Career Guide
        </button>
      </div>
    </section>
  );
}