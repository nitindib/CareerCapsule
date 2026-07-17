"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Props = {
  isEdit?: boolean;
  result?: any;
};

export default function ResultForm({
  isEdit = false,
  result,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState(
    result?.title ?? ""
  );

  const [organization, setOrganization] =
    useState(
      result?.organization ?? ""
    );

  const [resultDate, setResultDate] =
    useState(
      result?.result_date ?? ""
    );

  const [resultLink, setResultLink] =
    useState(
      result?.result_link ?? ""
    );

  const [officialWebsite, setOfficialWebsite] =
    useState(
      result?.official_website ?? ""
    );

  const [notificationPdf, setNotificationPdf] =
    useState(
      result?.notification_pdf ?? ""
    );

  const [description, setDescription] =
    useState(
      result?.description ?? ""
    );

  const [featured, setFeatured] =
    useState(
      result?.featured ?? false
    );

  const [status, setStatus] =
    useState(
      result?.status ?? "pending"
    );
      async function saveResult() {
    if (!title.trim()) {
      alert("Please enter Result Title");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("results")
      .insert([
        {
          title,
          organization,
          result_date: resultDate,
          result_link: resultLink,
          official_website: officialWebsite,
          notification_pdf: notificationPdf,
          description,
          featured,
          status,
        },
      ]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Result Saved Successfully!");

    router.push("/admin/results");
    router.refresh();
  }

  async function updateResult() {
    if (!title.trim()) {
      alert("Please enter Result Title");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("results")
      .update({
        title,
        organization,
        result_date: resultDate,
        result_link: resultLink,
        official_website: officialWebsite,
        notification_pdf: notificationPdf,
        description,
        featured,
        status,
      })
      .eq("id", result.id);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Result Updated Successfully!");

    router.push("/admin/results");
    router.refresh();
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-xl">

      <div className="grid gap-5">

        <input
          type="text"
          placeholder="Result Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-xl border p-4"
        />

        <input
          type="text"
          placeholder="Organization"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          className="rounded-xl border p-4"
        />

        <div>

          <label className="mb-2 block font-medium">
            Result Date
          </label>

          <input
            type="date"
            value={resultDate}
            onChange={(e) => setResultDate(e.target.value)}
            className="w-full rounded-xl border p-4"
          />

        </div>

        <input
          type="text"
          placeholder="Result Link"
          value={resultLink}
          onChange={(e) => setResultLink(e.target.value)}
          className="rounded-xl border p-4"
        />

        <input
          type="text"
          placeholder="Official Website"
          value={officialWebsite}
          onChange={(e) =>
            setOfficialWebsite(e.target.value)
          }
          className="rounded-xl border p-4"
        />
                <input
          type="text"
          placeholder="Notification PDF"
          value={notificationPdf}
          onChange={(e) =>
            setNotificationPdf(e.target.value)
          }
          className="rounded-xl border p-4"
        />

        <textarea
          placeholder="Description"
          rows={5}
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="rounded-xl border p-4"
        />

        <div className="flex items-center gap-3">

          <input
            type="checkbox"
            checked={featured}
            onChange={(e) =>
              setFeatured(e.target.checked)
            }
          />

          <span>Featured Result</span>

        </div>

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="rounded-xl border p-4"
        >
          <option value="pending">
            Pending
          </option>

          <option value="published">
            Published
          </option>

          <option value="closed">
            Closed
          </option>

        </select>

        <button
          onClick={
            isEdit
              ? updateResult
              : saveResult
          }
          disabled={loading}
          className="rounded-xl bg-blue-600 py-4 font-bold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading
            ? isEdit
              ? "Updating..."
              : "Saving..."
            : isEdit
            ? "Update Result"
            : "Save Result"}
        </button>

      </div>

    </div>
  );
}