type Props = {
  job: any;
};

export default function JobTimeline({ job }: Props) {
  const steps = [
    {
      title: "Application Started",
      date: job.application_start_date,
    },
    {
      title: "Application Last Date",
      date: job.application_last_date,
    },
    {
      title: "Fee Payment Last Date",
      date: job.fee_payment_last_date,
    },
    {
      title: "Correction Last Date",
      date: job.correction_last_date,
    },
    {
      title: "Admit Card Release Date",
      date: job.admit_card_date,
    },
    {
      title: "Exam Date",
      date: job.exam_date,
    },
    {
      title: "Answer Key Release Date",
      date: job.answer_key_date,
    },
    {
      title: "Result Date",
      date: job.result_date,
    },
    {
      title: "Cut Off Release Date",
      date: job.cut_off_date,
    },
  ].filter((step) => step.date);

  const today = new Date();

  return (
    <div className="overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100 shadow-xl">

      <div className="flex items-center justify-between border-b border-blue-300 bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-700 px-6 py-5 text-white">

        <div>

          <h3 className="text-2xl font-bold">
            🚀 Job Progress
          </h3>

          <p className="text-sm text-blue-100">
            Track every important event
          </p>

        </div>

        <span className="rounded-full bg-green-500 px-4 py-2 text-sm font-bold text-white shadow-lg animate-pulse">
          LIVE
        </span>

      </div>

      <div className="space-y-6 p-6">

      {steps.map((step, index) => {

  const stepDate = step.date ? new Date(step.date) : null;

  let status = "upcoming";

  if (stepDate) {

    if (
      step.title === "Application Last Date" ||
      step.title === "Fee Payment Last Date" ||
      step.title === "Correction Last Date"
    ) {

      status =
        today <= stepDate
          ? "running"
          : "completed";

    } else {

      status =
        today >= stepDate
          ? "completed"
          : "upcoming";

    }

  }

  return (

    <div
      key={index}
      className="group flex gap-5 rounded-2xl border border-blue-100 bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >

      <div className="flex flex-col items-center">

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all

          ${
            status === "completed"
              ? "bg-green-500"
              : status === "running"
              ? "bg-blue-600 animate-pulse"
              : "bg-slate-400"
          }`}
        >

          {status === "completed"
            ? "✓"
            : status === "running"
            ? "●"
            : "○"}

        </div>

        {index !== steps.length - 1 && (

          <div
            className={`mt-2 h-14 w-1 rounded-full

            ${
              status === "completed"
                ? "bg-green-400"
                : status === "running"
                ? "bg-blue-400"
                : "bg-slate-300"
            }`}
          />

        )}

      </div>

      <div className="flex-1">

        <div className="flex items-center justify-between">

          <h4 className="text-lg font-bold text-slate-800">

            {step.title}

          </h4>

          {status === "completed" && (

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">

              ✔ Completed

            </span>

          )}

          {status === "running" && (

            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">

              🔵 Running

            </span>

          )}

          {status === "upcoming" && (

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">

              ⏳ Upcoming

            </span>

          )}

        </div>

        <p className="mt-3 text-base font-medium text-slate-600">

          📅{" "}
          {step.date
            ? new Date(step.date).toLocaleDateString(
                "en-GB"
              )
            : "Coming Soon"}

        </p>

      </div>

    </div>

  );

})}
      </div>

    </div>

  );
}