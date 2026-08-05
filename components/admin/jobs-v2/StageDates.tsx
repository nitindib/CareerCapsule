"use client";

import { useState } from "react";

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

  const [customDateName, setCustomDateName] =
    useState("");

  const [customDateValue, setCustomDateValue] =
    useState("");

  return (

    <div className="space-y-5">

      {/* Default Dates */}

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

      {/* Custom Dates */}

      {Object.entries(value)
        .filter(
          ([key]) =>
            !DEFAULT_DATES.includes(key)
        )
        .map(([key, val]) => (

          <div
            key={key}
            className="grid gap-3 md:grid-cols-[1fr_auto]"
          >

            <div>

              <label className="font-semibold">
                {key}
              </label>

              <input
                type="date"
                value={val}
                onChange={(e) =>
                  onChange({
                    ...value,
                    [key]: e.target.value,
                  })
                }
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              />

            </div>

            <button
              type="button"
              onClick={() => {

                const temp = {
                  ...value,
                };

                delete temp[key];

                onChange(temp);

              }}
              className="self-end rounded-xl bg-red-600 px-4 py-3 text-white hover:bg-red-700"
            >
              Delete
            </button>

          </div>

        ))}

      {/* Add Custom Date */}

      <div className="rounded-xl border border-dashed border-slate-300 p-5">

        <h4 className="mb-4 text-lg font-bold">
          ➕ Add Custom Date
        </h4>

        <div className="grid gap-4 md:grid-cols-2">

          <input
            type="text"
            placeholder="Date Name (Example: PET Date)"
            value={customDateName}
            onChange={(e) =>
              setCustomDateName(e.target.value)
            }
            className="rounded-xl border border-slate-300 px-4 py-3"
          />

          <input
            type="date"
            value={customDateValue}
            onChange={(e) =>
              setCustomDateValue(e.target.value)
            }
            className="rounded-xl border border-slate-300 px-4 py-3"
          />

        </div>

        <button
          type="button"
          className="mt-4 rounded-xl bg-green-600 px-5 py-3 text-white hover:bg-green-700"
          onClick={() => {

            if (!customDateName.trim()) {

              alert("Enter Date Name");

              return;

            }

            onChange({

              ...value,

              [customDateName]:
                customDateValue,

            });

            setCustomDateName("");

            setCustomDateValue("");

          }}
        >

          + Save Custom Date

        </button>

      </div>

    </div>

  );

}