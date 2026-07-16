"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Dashboard", href: "/admin", icon: "🏠" },
  { name: "Jobs", href: "/admin/jobs", icon: "💼" },
  { name: "Results", href: "/admin/results", icon: "📢" },
  { name: "Admit Cards", href: "/admin/admit-cards", icon: "🎫" },
  { name: "Syllabus", href: "/admin/syllabus", icon: "📚" },
  { name: "Answer Keys", href: "/admin/answer-keys", icon: "📄" },
  { name: "Previous Papers", href: "/admin/previous-papers", icon: "📝" },

  { name: "Admissions", href: "/admin/admissions", icon: "🎓" },
  { name: "Schemes", href: "/admin/schemes", icon: "🏛️" },
  { name: "Documents", href: "/admin/documents", icon: "📂" },

  { name: "AI Career Guide", href: "/admin/ai-guide", icon: "🤖" },
];

export default function AdminSidebar() {

  const pathname = usePathname();

  return (

    <aside className="sticky top-0 h-screen w-72 overflow-y-auto bg-slate-900 text-white">

      <div className="border-b border-slate-800 p-6">

        <h1 className="text-3xl font-bold text-blue-400">
          CareerCapsule
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Admin Panel
        </p>

      </div>

      <nav className="p-4 space-y-2">

        {menu.map((item) => {

          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (

            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-200

              ${
                active
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >

              <span className="text-xl">
                {item.icon}
              </span>

              <span className="font-medium">
                {item.name}
              </span>

            </Link>

          );

        })}

      </nav>

      <div className="absolute bottom-0 w-full border-t border-slate-800 p-5">

        <Link
          href="/"
          className="block rounded-xl bg-green-600 px-4 py-3 text-center font-semibold transition hover:bg-green-700"
        >
          🌐 Visit Website
        </Link>

      </div>

    </aside>

  );
}