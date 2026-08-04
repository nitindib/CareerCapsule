"use client";

type Props = {
  value: Record<string, string>;
  onChange: (data: Record<string, string>) => void;
};

const DEFAULT_DATES = [
  "Application Start Date",
  "Application Last Date",
  "Fee Payment Last Date",
  "Correction Last Date",
  "Exam Date",
  "Admit Card Release Date",
  "Answer Key Date",
  "Result Date",
  "Cut Off Date",
];

export default function StageDates({
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-5">

      {DEFAULT_DATES.map((item) => (

        <div
          key={item}
          className="grid gap-3 md:grid-cols-2"
        >

          <label className="font-semibold">
            {item}
          </label>

          <input
            type="date"
            value={value[item] || ""}
            onChange={(e) =>
              onChange({
                ...value,
                [item]: e.target.value,
              })
            }
            className="rounded-xl border border-slate-300 px-4 py-3"
          />

        </div>

      ))}

      <button
        type="button"
        className="rounded-xl border border-dashed border-blue-400 px-4 py-3 text-blue-600 hover:bg-blue-50"
      >
        + Add Custom Date
      </button>

    </div>
  );
}