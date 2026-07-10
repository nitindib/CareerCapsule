export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-blue-600">
          CareerCapsule
        </h1>

        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#">Jobs</a>
          <a href="#">Results</a>
          <a href="#">Admit Card</a>
          <a href="#">Syllabus</a>
          <a href="#">AI Guide</a>
        </nav>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
          Login
        </button>

      </div>
    </header>
  );
}