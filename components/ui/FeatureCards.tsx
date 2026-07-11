export default function FeatureCards() {
  const features = [
    {
      title: "🔥 Latest Jobs",
      description: "Daily updated government job notifications.",
    },
    {
      title: "📢 Results",
      description: "Check latest exam results instantly.",
    },
    {
      title: "🎫 Admit Cards",
      description: "Download admit cards in one click.",
    },
    {
      title: "📚 Syllabus",
      description: "Latest syllabus and exam pattern.",
    },
    {
      title: "📄 Answer Keys",
      description: "Official answer keys and objections.",
    },
    {
      title: "🤖 AI Career Guide",
      description: "AI helps you choose the best career path.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <h2 className="mb-10 text-center text-4xl font-bold text-slate-900">
        Everything You Need
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-xl"
          >
            <h3 className="text-xl font-bold">{feature.title}</h3>

            <p className="mt-3 text-slate-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}