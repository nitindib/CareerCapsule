import Link from "next/link";

const items = [
  {
    title: "Today's Jobs",
    subtitle: "12 New Jobs",
    value: 12,
    icon: "💼",
    href: "/jobs",
    color: "bg-blue-600",
  },
  {
    title: "Today's Results",
    subtitle: "Latest Results",
    value: 4,
    icon: "📢",
    href: "/results",
    color: "bg-green-600",
  },
  {
    title: "Admit Cards",
    subtitle: "Available Now",
    value: 6,
    icon: "🎫",
    href: "/admit-cards",
    color: "bg-purple-600",
  },
  {
    title: "Closing Today",
    subtitle: "Last Chance",
    value: 3,
    icon: "⏰",
    href: "/jobs",
    color: "bg-red-600",
  },
];

export default function TodayDashboard() {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-6">

      {/* Heading */}

      <div className="mb-4 flex items-center gap-2">

        <span className="text-2xl">🔥</span>

        <h2 className="text-2xl font-bold">
          Today's Dashboard
        </h2>

      </div>

      {/* Cards */}

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">

        {items.map((item) => (

          <Link
            key={item.title}
            href={item.href}
            className="group rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
          >

            <div className="flex items-center justify-between">

              {/* Left */}

              <div className="flex items-center gap-3">

                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg text-lg text-white ${item.color}`}
                >
                  {item.icon}
                </div>

                <div>

                  <h3 className="text-sm font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-500">
                    {item.subtitle}
                  </p>

                </div>

              </div>

              {/* Right */}

              <div className="text-right">

                <div className="text-2xl font-extrabold text-slate-900">
                  {item.value}
                </div>

                <div className="text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition">
                  View →
                </div>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}