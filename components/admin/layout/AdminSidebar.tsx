import Link from "next/link";

const menu = [
  { name: "Dashboard", href: "/admin", icon: "🏠" },
  { name: "Jobs", href: "/admin/jobs", icon: "💼" },
  { name: "Results", href: "/admin/results", icon: "📢" },
  { name: "Admit Cards", href: "/admin/admit-cards", icon: "🎫" },
  { name: "Admissions", href: "/admin/admissions", icon: "🎓" },
  { name: "Schemes", href: "/admin/schemes", icon: "🏛️" },
  { name: "Documents", href: "/admin/documents", icon: "📄" },
];

export default function AdminSidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-10">
        CareerCapsule
      </h1>

      <nav className="space-y-3">

        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-800 transition"
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}

      </nav>
    </aside>
  );
}