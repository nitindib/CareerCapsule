"use client";

import { useState } from "react";
import StageDates from "./StageDates";

type Props = {
  stage: any;
  order: number;
  onDelete: () => void;
  onChange?: (data: any) => void;
};

export default function StageCard({
  stage,
  order,
  onDelete,
  onChange,
}: Props) {

  const [showDates, setShowDates] = useState(false);

  const [dates, setDates] = useState<Record<string, string>>(
    stage.stage_dates || {}
  );

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-xl font-bold">
            {order}. {stage.stage_name}
          </h3>

          <p className="text-sm text-slate-500">
            Exam Stage
          </p>

        </div>

        <div className="flex gap-3">

          <button
            type="button"
            onClick={() => setShowDates(!showDates)}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white"
          >
            {showDates ? "Hide Dates" : "Manage Dates"}
          </button>

          <button
            type="button"
            onClick={onDelete}
            className="rounded-lg bg-red-600 px-4 py-2 text-white"
          >
            Delete
          </button>

        </div>

      </div>

      {showDates && (

        <div className="mt-6 rounded-xl border bg-slate-50 p-5">

          <h4 className="mb-5 text-lg font-bold">
            📅 Stage Dates
          </h4>

          <StageDates
            value={dates}
            onChange={(data) => {

              setDates(data);

              onChange?.({
                ...stage,
                stage_dates: data,
              });

            }}
          />

        </div>

      )}

    </div>
  );
}