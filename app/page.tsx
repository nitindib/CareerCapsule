import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
  
      {/* Hero Section */}
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

        {/* Search Bar */}
        <div className="mx-auto mt-10 max-w-3xl">
          <input
            type="text"
            placeholder="🔍 Search Jobs, Results, Admit Cards..."
            className="w-full rounded-2xl border border-slate-300 bg-white px-6 py-4 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
              SSC CGL
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
              UPSC
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
              Railway
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
              Police
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
              Banking
            </span>
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

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="mb-10 text-center text-4xl font-bold text-slate-900">
          Everything You Need
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold">🔥 Latest Jobs</h3>
            <p className="mt-3 text-slate-600">
              Daily updated government job notifications.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold">📢 Results</h3>
            <p className="mt-3 text-slate-600">
              Check latest exam results instantly.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold">🎫 Admit Cards</h3>
            <p className="mt-3 text-slate-600">
              Download admit cards in one click.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold">📚 Syllabus</h3>
            <p className="mt-3 text-slate-600">
              Latest syllabus and exam pattern.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold">📄 Answer Keys</h3>
            <p className="mt-3 text-slate-600">
              Official answer keys and objections.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold">🤖 AI Career Guide</h3>
            <p className="mt-3 text-slate-600">
              AI helps you choose the best career path.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}