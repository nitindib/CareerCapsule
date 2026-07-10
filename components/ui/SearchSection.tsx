export default function SearchSection() {
  const categories = [
    "SSC",
    "UPSC",
    "Railway",
    "Bank",
    "Police",
    "Teaching",
    "Defence",
    "State Jobs",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <input
        type="text"
        placeholder="Search Jobs, Results, Admit Cards..."
        className="w-full rounded-xl border p-4 text-lg shadow"
      />

      <h2 className="mt-10 text-3xl font-bold">
        🔥 Popular Categories
      </h2>

      <div className="mt-6 flex flex-wrap gap-4">
        {categories.map((item) => (
          <button
            key={item}
            className="rounded-full bg-blue-100 px-5 py-3 font-semibold hover:bg-blue-600 hover:text-white"
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}