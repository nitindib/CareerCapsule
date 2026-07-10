import Hero from "@/components/ui/Hero";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
  <Hero/>
      {/* Hero Section */}
     

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
      {/* Latest Jobs */}

<section className="max-w-7xl mx-auto px-6 py-20">
  <div className="flex items-center justify-between mb-8">
    <h2 className="text-4xl font-bold">
      🔥 Latest Government Jobs
    </h2>

    <button className="text-blue-600 font-semibold">
      View All →
    </button>
  </div>

  <div className="grid gap-6">

    <div className="rounded-2xl bg-white p-6 shadow hover:shadow-lg transition">
      <h3 className="text-2xl font-bold">
        SSC CGL 2026 Recruitment
      </h3>

      <p className="mt-3 text-slate-600">
        Last Date: 30 July 2026
      </p>

      <div className="mt-5 flex gap-3">
        <span className="rounded-full bg-green-100 px-4 py-2 text-green-700">
          Graduate
        </span>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
          Central Govt
        </span>
      </div>

      <button className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-white">
        Apply Now
      </button>
    </div>

  </div>
</section>
    </main>
  );
}