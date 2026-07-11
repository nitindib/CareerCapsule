const jobs = [
  {
    title: "SSC CGL 2026",
    lastDate: "30 July 2026",
    qualification: "Graduate",
    type: "Central Govt",
  },
  {
    title: "UP Police Constable",
    lastDate: "12 August 2026",
    qualification: "12th Pass",
    type: "State Govt",
  },
  {
    title: "Railway NTPC",
    lastDate: "25 August 2026",
    qualification: "Graduate",
    type: "Railway",
  },
];

export default function LatestJobs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold">
          🔥 Latest Government Jobs
        </h2>

        <button className="text-blue-600 font-semibold hover:underline">
          View All →
        </button>
      </div>

      <div className="grid gap-6">
        {jobs.map((job) => (
          <div
            key={job.title}
            className="rounded-2xl bg-white p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-bold">{job.title}</h3>

            <p className="mt-3 text-slate-600">
              Last Date: {job.lastDate}
            </p>

            <div className="mt-5 flex gap-3">
              <span className="rounded-full bg-green-100 px-4 py-2 text-green-700">
                {job.qualification}
              </span>

              <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
                {job.type}
              </span>
            </div>

            <button className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}