"use client";

import { useEffect, useState } from "react";

type Props = {
  formData: any;
  setFormData: any;
};

export default function StageUpdates({
  formData,
  setFormData,
}: Props) {
  const [stages, setStages] = useState<any[]>([]);

  useEffect(() => {
    async function loadStages() {
      const { supabase } = await import("@/lib/supabase");

      const { data } = await supabase
        .from("job_stages")
        .select("*")
        .eq("job_id", formData.job_id)
        .order("display_order", {
          ascending: true,
        });

      setStages(data || []);
    }

    if (formData.job_id) {
      loadStages();
    }
  }, [formData.job_id]);

  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        🚀 Stage Updates
      </h2>

      {stages.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
          No Exam Stage Available
        </div>
      ) : (
        <div className="space-y-5">
          {stages.map((stage: any) => (
            <div
              key={stage.id}
              className="rounded-xl border p-5"
            >
              <h3 className="mb-5 text-xl font-bold">
                {stage.stage_name}
              </h3>

              <div className="grid gap-5 md:grid-cols-2">

                {/* Linked Title */}

                <div>
                  <label className="mb-2 block font-semibold">
                    Linked Title
                  </label>

                  <input
                    type="text"
                    value={
                      formData.stage_updates?.[
                        stage.id
                      ]?.linked_title || ""
                    }
                    onChange={(e) =>
                      setFormData((prev: any) => ({
                        ...prev,
                        stage_updates: {
                          ...prev.stage_updates,
                          [stage.id]: {
                            ...prev.stage_updates?.[
                              stage.id
                            ],
                            linked_title:
                              e.target.value,
                          },
                        },
                      }))
                    }
                    className="w-full rounded-xl border p-3"
                  />
                </div>

                {/* Status */}

                <div>
                  <label className="mb-2 block font-semibold">
                    Status
                  </label>

                  <select
                    value={
                      formData.stage_updates?.[
                        stage.id
                      ]?.stage_status ||
                      "pending"
                    }
                    onChange={(e) =>
                      setFormData((prev: any) => ({
                        ...prev,
                        stage_updates: {
                          ...prev.stage_updates,
                          [stage.id]: {
                            ...prev.stage_updates?.[
                              stage.id
                            ],
                            stage_status:
                              e.target.value,
                          },
                        },
                      }))
                    }
                    className="w-full rounded-xl border p-3"
                  >
                    <option value="pending">
                      Pending
                    </option>

                    <option value="live">
                      Live
                    </option>

                    <option value="completed">
                      Completed
                    </option>
                  </select>
                </div>

                {/* Publish Date */}

                <div>
                  <label className="mb-2 block font-semibold">
                    Publish Date
                  </label>

                  <input
                    type="date"
                    value={
                      formData.stage_updates?.[
                        stage.id
                      ]?.publish_date || ""
                    }
                    onChange={(e) =>
                      setFormData((prev: any) => ({
                        ...prev,
                        stage_updates: {
                          ...prev.stage_updates,
                          [stage.id]: {
                            ...prev.stage_updates?.[
                              stage.id
                            ],
                            publish_date:
                              e.target.value,
                          },
                        },
                      }))
                    }
                    className="w-full rounded-xl border p-3"
                  />
                </div>

                {/* Display Order */}

                <div>
                  <label className="mb-2 block font-semibold">
                    Display Order
                  </label>

                  <input
                    type="number"
                    value={
                      formData.stage_updates?.[
                        stage.id
                      ]?.display_order ??
                      stage.display_order
                    }
                    onChange={(e) =>
                      setFormData((prev: any) => ({
                        ...prev,
                        stage_updates: {
                          ...prev.stage_updates,
                          [stage.id]: {
                            ...prev.stage_updates?.[
                              stage.id
                            ],
                            display_order:
                              Number(
                                e.target.value
                              ),
                          },
                        },
                      }))
                    }
                    className="w-full rounded-xl border p-3"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}