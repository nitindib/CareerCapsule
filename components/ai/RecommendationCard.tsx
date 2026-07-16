type Props = {
  title: string;
  salary: string;
  difficulty: string;
  preparation: string;
};

export default function RecommendationCard({
  title,
  salary,
  difficulty,
  preparation,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-center justify-between">

        <h3 className="text-2xl font-bold">
          ⭐ {title}
        </h3>

        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          Recommended
        </span>

      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">💰 Salary</p>
          <h4 className="mt-2 font-bold">{salary}</h4>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">📈 Difficulty</p>
          <h4 className="mt-2 font-bold">{difficulty}</h4>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">📚 Preparation</p>
          <h4 className="mt-2 font-bold">{preparation}</h4>
        </div>

      </div>
    </div>
  );
}