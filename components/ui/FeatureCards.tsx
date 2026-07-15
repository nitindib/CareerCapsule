import Link from "next/link";
import { getJobs } from "@/services/jobs";
import { getResults } from "@/services/results";
export default async function FeatureCards() {

  const jobs = await getJobs();
  const results = await getResults();

  const totalJobs = jobs.filter(
    (job: any) => job.status === "published"
  ).length;

  const totalResults = results.filter(
    (result: any) => result.status === "published"
  ).length;
  const features = [
  {
    icon: "🔥",
    title: "Latest Jobs",
    description: `${totalJobs} Active Jobs`,
    href: "/jobs",
    color: "text-blue-600",
  },
  {
    icon: "🏆",
    title: "Results",
    description: `${totalResults} Latest Results`,
    href: "/results",
    color: "text-green-600",
  },
  {
    icon: "🎫",
    title: "Admit Cards",
    description: "Coming Soon",
    href: "/admit-cards",
    color: "text-red-600",
  },
  {
    icon: "📚",
    title: "Syllabus",
    description: "Coming Soon",
    href: "/syllabus",
    color: "text-purple-600",
  },
  {
    icon: "📄",
    title: "Answer Keys",
    description: "Coming Soon",
    href: "/answer-keys",
    color: "text-orange-600",
  },
  {
    icon: "🤖",
    title: "AI Career Guide",
    description: "AI Powered",
    href: "/ai-guide",
    color: "text-indigo-600",
  },
];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">

      <h2 className="mb-3 text-center text-4xl font-bold text-slate-900">
        Everything You Need
      </h2>

      <p className="mb-10 text-center text-slate-500">
        Everything required for your government exam journey — all in one place.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {features.map((feature) => (

          <Link
  key={feature.title}
  href={feature.href}
  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
>

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl transition duration-300 group-hover:scale-110 group-hover:bg-blue-100">
              {feature.icon}
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              {feature.title}
            </h3>

            <p
  className={`mt-4 text-lg font-semibold ${feature.color}`}
>
  {feature.description} →
</p>

          </Link>

        ))}

      </div>

    </section>
  );
}