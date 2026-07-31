type Props = {
  job: any;
};

export default function JobTimeline({ job }: Props) {
  const steps = [
  {
    title: "Application Start Date",
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
    title: "Exam Date",
    date: job.exam_date,
  },
  {
    title: "Admit Card Release Date",
    date: job.admit_card_date,
  },
  {
    title: "Result Declaration Date",
    date: job.result_date,
  },
].filter((step) => step.date);

  const today = new Date();

  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      
      <h3 className="mb-5 flex items-center justify-between text-lg font-bold">
  <span>🚀 Job Progress</span>

  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
    Live
  </span>
</h3>

      <div className="space-y-5">
        {steps.map((step, index) => {
          const stepDate = step.date ? new Date(step.date) : null;

let status = "upcoming";

if (stepDate) {
  if (
    step.title === "Application Last Date" ||
    step.title === "Fee Payment Last Date" ||
    step.title === "Correction Last Date"
  ) {
    status = today <= stepDate ? "running" : "completed";
  } else {
    status = today >= stepDate ? "completed" : "upcoming";
  }
}

          return (
            <div key={index} className="flex gap-3">

              <div className="flex flex-col items-center">
                <div
  className={`h-4 w-4 rounded-full ${
    status === "completed"
      ? "bg-green-500"
      : status === "running"
      ? "bg-blue-500 animate-pulse"
      : "bg-gray-300"
  }`}
/>

                {index !== steps.length - 1 && (
                  <div className="h-10 w-[2px] bg-gray-200" />
                )}
              </div>

              <div>
                <p className="font-semibold">
                  {step.title}
                </p>

                <p className="text-sm text-slate-500">
                  {step.date
                    ? new Date(step.date).toLocaleDateString(
                        "en-GB"
                      )
                    : "Coming Soon"}
                </p>
                <div className="mt-1">

  {status === "completed" && (
    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
      ✔ Completed
    </span>
  )}

  {status === "running" && (
    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
      🔵 Running
    </span>
  )}

  {status === "upcoming" && (
    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700">
      ⏳ Upcoming
    </span>
  )}

</div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}