"use client";

import { useState } from "react";

type Props = {
  stage: string;
  order: number;
  onDelete: () => void;
};

export default function StageCard({
  stage,
  order,
  onDelete,
}: Props) {

  const [showDates, setShowDates] = useState(false);
  const [showUpdates, setShowUpdates] = useState(false);

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>
          <h3 className="text-xl font-bold">
            📌 {stage}
          </h3>

          <p className="text-sm text-slate-500">
            Display Order : {order}
          </p>
        </div>

        <button
          type="button"
          onClick={onDelete}
          className="rounded-lg bg-red-500 px-3 py-2 text-white hover:bg-red-600"
        >
          Delete
        </button>

      </div>

      <div className="mt-5 flex flex-wrap gap-3">

        <button
          type="button"
          onClick={() => setShowDates(!showDates)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          {showDates ? "Hide Dates" : "Manage Dates"}
        </button>

        <button
          type="button"
          onClick={() => setShowUpdates(!showUpdates)}
          className="rounded-lg bg-green-600 px-4 py-2 text-white"
        >
          {showUpdates ? "Hide Updates" : "Manage Updates"}
        </button>

      </div>

      {showDates && (
        <div className="mt-6 rounded-xl bg-slate-50 p-5">
          <h4 className="mb-4 font-bold">
            📅 Stage Dates
          </h4>

          <p className="text-slate-500">
            (Next Step me Date Form yahan aayega)
          </p>
        </div>
      )}

      {showUpdates && (
        <div className="mt-6 rounded-xl bg-slate-50 p-5">
          <h4 className="mb-4 font-bold">
            🔗 Stage Updates
          </h4>

          <p className="text-slate-500">
            (Next Step me Update Manager yahan aayega)
          </p>
        </div>
      )}

    </div>
  );
}