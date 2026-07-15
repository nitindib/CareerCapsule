import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-xl text-white shadow-lg">
            🎯
          </div>

          <div>

            <h1 className="text-2xl font-extrabold text-slate-900">
              CareerCapsule
            </h1>

            <p className="text-xs text-slate-500">
              Everything You Need
            </p>

          </div>

        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-8 font-medium text-slate-700 lg:flex">

          <Link href="/" className="transition hover:text-blue-600">
            Home
          </Link>

          <Link href="/jobs" className="transition hover:text-blue-600">
            Jobs
          </Link>

          <Link href="/results" className="transition hover:text-blue-600">
            Results
          </Link>

          <Link href="/admit-cards" className="transition hover:text-blue-600">
            Admit Cards
          </Link>

          <Link href="/syllabus" className="transition hover:text-blue-600">
            Syllabus
          </Link>

          <Link href="/answer-keys" className="transition hover:text-blue-600">
            Answer Keys
          </Link>

          <Link href="/ai-guide" className="transition hover:text-blue-600">
            AI Guide
          </Link>

        </nav>

        {/* Right Side */}

        <div className="hidden items-center gap-4 lg:flex">

          <input
            type="text"
            placeholder="🔍 Search..."
            className="w-56 rounded-xl border border-slate-300 px-4 py-2 text-sm outline-none transition focus:border-blue-500"
          />

          <button className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 font-semibold text-white shadow transition hover:scale-105">
            Login
          </button>

        </div>

        {/* Mobile Menu */}

        <button className="rounded-xl border border-slate-300 p-2 lg:hidden">
          ☰
        </button>

      </div>
    </header>
  );
}