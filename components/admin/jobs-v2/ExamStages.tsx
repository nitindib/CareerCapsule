"use client";

import { useState } from "react";
import StageCard from "./StageCard";

const DEFAULT_STAGES = [
  "Pre",
  "Mains",
  "Skill Test",
  "Interview",
  "Document Verification",
  "Medical",
  "Joining",
];

export default function ExamStages() {
  const [stages, setStages] = useState<string[]>([]);

  function addStage(name: string) {
    if (stages.includes(name)) return;
    setStages([...stages, name]);
  }

  function deleteStage(index: number) {
    setStages(stages.filter((_, i) => i !== index));
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          📌 Exam Stages
        </h2>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">

        {DEFAULT_STAGES.map((stage) => (

          <button
            key={stage}
            type="button"
            onClick={() => addStage(stage)}
            className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            + {stage}
          </button>

        ))}

      </div>

      <div className="space-y-4">

        {stages.length === 0 && (

          <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-slate-500">
            No Stage Added
          </div>

        )}

        {stages.map((stage, index) => (

          <StageCard
            key={stage}
            stage={stage}
            order={index + 1}
            onDelete={() => deleteStage(index)}
          />

        ))}

      </div>

    </div>
  );
}