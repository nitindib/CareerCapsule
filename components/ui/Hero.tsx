export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">

      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">

        {/* Badge */}
        <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm">
          🚀 India's Smart Career Platform
        </span>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
          Everything You Need

          <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            For Your Career
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
          Latest Government Jobs, Results, Admit Cards, Answer Keys,
          Syllabus and AI Career Guidance — all in one place.
        </p>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-3xl">

          <div className="flex overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

            <input
              type="text"
              placeholder="🔍 Search Jobs, Results, Admit Cards..."
              className="flex-1 px-6 py-5 text-lg outline-none"
            />

            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 font-semibold text-white transition hover:opacity-90">
              Search
            </button>

          </div>

          {/* Trending */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">

            {[
              "SSC CGL",
              "Railway",
              "UPSC",
              "Police",
              "Bank PO",
            ].map((item) => (

              <span
                key={item}
                className="cursor-pointer rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                {item}
              </span>

            ))}

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105">

            🔍 Find Jobs

          </button>

          <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold shadow-md transition hover:-translate-y-1 hover:shadow-xl">

            🤖 AI Career Guide

          </button>

        </div>

        {/* Bottom Highlights */}

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500">

          <span>✔ Daily Updates</span>

          <span>✔ Free Forever</span>

          <span>✔ AI Powered</span>

          <span>✔ Trusted Platform</span>

        </div>

      </div>

    </section>
  );
}