"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import StageCard from "./StageCard";

type StageType = {
  id?: string;
  job_id?: string;
  stage_name: string;
  display_order: number;
  custom_stage: boolean;
  is_active: boolean;
  stage_dates: Record<string, any>;
};

type Props = {
  jobId?: string;
  value: StageType[];
  onChange: (data: StageType[]) => void;
};

const DEFAULT_STAGES = [
  "Pre",
  "Mains",
  "Skill Test",
  "Interview",
  "Document Verification",
  "Medical",
  "Joining",
];

export default function ExamStages({
  jobId,
  value,
  onChange,
}: Props) {

  // ✅ NEW
  const [customStageName, setCustomStageName] = useState("");

  useEffect(() => {

    async function loadStages() {

      if (!jobId) return;

      const { data, error } = await supabase
        .from("job_stages")
        .select("*")
        .eq("job_id", jobId)
        .order("display_order", {
          ascending: true,
        });

      if (error) {
        console.error(error);
        return;
      }

      if (data) {

        const formatted = data.map((item: any) => ({

          ...item,

          stage_dates: {

            "Application Start Date":
              item.application_start_date || "",

            "Application Last Date":
              item.application_last_date || "",

            "Fee Payment Last Date":
              item.fee_payment_last_date || "",

            "Correction Last Date":
              item.correction_last_date || "",

            "Exam Date":
              item.exam_date || "",

            "Admit Card Release Date":
              item.admit_card_date || "",

            "Answer Key Date":
              item.answer_key_date || "",

            "Result Date":
              item.result_date || "",

            "Cut Off Date":
              item.cut_off_date || "",

            "Document Verification Date":
              item.document_verification_date || "",

            "Medical Date":
              item.medical_date || "",

            "Joining Date":
              item.joining_date || "",
 ...(item.custom_stage_dates || {}),
          },

        }));

        onChange(formatted);

      }

    }

    loadStages();

  }, [jobId]);



  function addStage(name: string) {

    if (
      value.find(
        (item) => item.stage_name === name
      )
    )
      return;

    onChange([
      ...value,
      {
        stage_name: name,
        display_order: value.length + 1,
        custom_stage: false,
        is_active: true,
        stage_dates: {},
      },
    ]);

  }

  // ✅ NEW
  function addCustomStage() {

    if (!customStageName.trim()) return;

    if (
      value.find(
        (item) =>
          item.stage_name.toLowerCase() ===
          customStageName.toLowerCase()
      )
    ) {
      alert("Stage already exists.");
      return;
    }

    onChange([
      ...value,
      {
        stage_name: customStageName,
        display_order: value.length + 1,
        custom_stage: true,
        is_active: true,
        stage_dates: {},
      },
    ]);

    setCustomStageName("");

  }

  function deleteStage(index: number) {

    onChange(
      value.filter((_, i) => i !== index)
    );

  }

  return (

    <div className="rounded-2xl bg-white p-6 shadow">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          📌 Exam Stages
        </h2>

      </div>

      {/* Default Stage Buttons */}

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

      {/* ✅ Custom Stage */}

      <div className="mb-8 flex gap-3">

        <input
          type="text"
          placeholder="Custom Stage Name"
          value={customStageName}
          onChange={(e) =>
            setCustomStageName(e.target.value)
          }
          className="flex-1 rounded-xl border border-slate-300 px-4 py-3"
        />

        <button
          type="button"
          onClick={addCustomStage}
          className="rounded-xl bg-green-600 px-5 py-3 text-white hover:bg-green-700"
        >
          + Add Custom Stage
        </button>

      </div>

      {/* Stage Cards */}

      <div className="space-y-4">

        {value.length === 0 && (

          <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-slate-500">

            No Stage Added

          </div>

        )}

        {value.map((stage, index) => (

          <StageCard
            key={index}
            stage={stage}
            order={index + 1}
            onDelete={() => deleteStage(index)}
            onChange={(updatedStage) => {

              const temp = [...value];

              temp[index] = updatedStage;

              onChange(temp);

            }}
          />

        ))}

      </div>

    </div>

  );

}