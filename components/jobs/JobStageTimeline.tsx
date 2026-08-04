"use client";

import { useState } from "react";
import { formatDate } from "@/lib/formatDate";

type Props = {
  stages: any[];
};

export default function JobStageTimeline({
  stages,
}: Props) {
  if (!stages || stages.length === 0) return null;

  return (
    <div className="space-y-5">

      {stages.map((stage) => (

        <StageAccordion
          key={stage.id}
          stage={stage}
        />

      ))}

    </div>
  );
}

function StageAccordion({
  stage,
}: {
  stage: any;
}) {

  const [open, setOpen] = useState(
    stage.is_current ?? false
  );

  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow">

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between bg-slate-50 px-5 py-4"
      >
        <div>

          <h3 className="text-lg font-bold">
            {stage.stage_name}
          </h3>

          <p className="text-sm text-slate-500">
            {stage.stage_status}
          </p>

        </div>

        <span className="text-2xl">
          {open ? "−" : "+"}
        </span>

      </button>

      {open && (

        <div className="space-y-4 p-5">

          {stage.notification_date && (
            <TimelineRow
              title="Notification"
              date={stage.notification_date}
            />
          )}

          {stage.application_start_date && (
            <TimelineRow
              title="Application Start"
              date={stage.application_start_date}
            />
          )}

          {stage.application_last_date && (
            <TimelineRow
              title="Application Last Date"
              date={stage.application_last_date}
            />
          )}

          {stage.fee_last_date && (
            <TimelineRow
              title="Fee Last Date"
              date={stage.fee_last_date}
            />
          )}

          {stage.correction_last_date && (
            <TimelineRow
              title="Correction Last Date"
              date={stage.correction_last_date}
            />
          )}

          {stage.exam_date && (
            <TimelineRow
              title="Exam Date"
              date={stage.exam_date}
            />
          )}

          {stage.admit_card_date && (
            <TimelineRow
              title="Admit Card"
              date={stage.admit_card_date}
            />
          )}

          {stage.answer_key_date && (
            <TimelineRow
              title="Answer Key"
              date={stage.answer_key_date}
            />
          )}

          {stage.result_date && (
            <TimelineRow
              title="Result"
              date={stage.result_date}
            />
          )}

          {stage.cutoff_date && (
            <TimelineRow
              title="Cut Off"
              date={stage.cutoff_date}
            />
          )}

        </div>

      )}

    </div>
  );
}

function TimelineRow({
  title,
  date,
}: {
  title: string;
  date: string;
}) {

  return (

    <div className="flex items-center justify-between rounded-xl border p-4">

      <span className="font-semibold">
        {title}
      </span>

      <span className="text-slate-500">
        {formatDate(date)}
      </span>

    </div>

  );
}