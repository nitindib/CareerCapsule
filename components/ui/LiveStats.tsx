import { getJobsCount } from "@/services/jobs";
import { getResultsCount } from "@/services/results";
import { getAdmitCardsCount } from "@/services/admitCards";

export default async function LiveStats() {

  const jobs = await getJobsCount();
  const results = await getResultsCount();
  const admitCards = await getAdmitCardsCount();

  const stats = [
    {
      title: "Government Jobs",
      value: jobs,
      icon: "💼",
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Results",
      value: results,
      icon: "📢",
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Admit Cards",
      value: admitCards,
      icon: "🎫",
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "24×7",
      value: "Updates",
      icon: "⚡",
      color: "bg-orange-100 text-orange-700",
    },
  ];

  return (
    <section className="-mt-8 relative z-10 pb-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div
                className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${item.color}`}
              >
                {item.icon}
              </div>

              <h2 className="text-4xl font-extrabold text-slate-900">
                {item.value}
              </h2>

              <p className="mt-2 text-slate-600">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}