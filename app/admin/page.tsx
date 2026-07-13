import Link from "next/link";

export default function AdminDashboard() {
  const cards = [
    {
      title: "Jobs",
      description: "Manage Government Jobs",
      href: "/admin/jobs",
      emoji: "💼",
    },
    {
      title: "Results",
      description: "Manage Results",
      href: "/admin/results",
      emoji: "📢",
    },
    {
      title: "Admit Cards",
      description: "Manage Admit Cards",
      href: "/admin/admit-cards",
      emoji: "🎫",
    },
    {
      title: "Government Schemes",
      description: "Manage Schemes",
      href: "/admin/schemes",
      emoji: "🏛️",
    },
    {
      title: "Admissions",
      description: "Manage Admissions",
      href: "/admin/admissions",
      emoji: "🎓",
    },
    {
      title: "Documents Hub",
      description: "Manage Documents",
      href: "/admin/documents",
      emoji: "📄",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl p-10">
        <h1 className="mb-2 text-5xl font-bold">
          CareerCapsule Admin
        </h1>

        <p className="mb-10 text-slate-600">
          Manage everything from one dashboard.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-2xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-5xl">
                {card.emoji}
              </div>

              <h2 className="mt-5 text-2xl font-bold">
                {card.title}
              </h2>

              <p className="mt-3 text-slate-600">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}