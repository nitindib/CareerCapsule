"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Props = {
  isEdit?: boolean;
  answerKey?: any;
};

export default function AnswerKeyForm({
  isEdit = false,
  answerKey,
}: Props) {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState(
    answerKey?.title ?? ""
  );

  const [organization, setOrganization] =
    useState(
      answerKey?.organization ?? ""
    );

  const [answerKeyDate, setAnswerKeyDate] =
    useState(
      answerKey?.answer_key_date ?? ""
    );

  const [answerKeyLink, setAnswerKeyLink] =
    useState(
      answerKey?.answer_key_link ?? ""
    );

  const [officialWebsite, setOfficialWebsite] =
    useState(
      answerKey?.official_website ?? ""
    );

  const [notificationPdf, setNotificationPdf] =
    useState(
      answerKey?.notification_pdf ?? ""
    );

  const [description, setDescription] =
    useState(
      answerKey?.description ?? ""
    );

  const [featured, setFeatured] =
    useState(
      answerKey?.featured ?? false
    );

  const [status, setStatus] =
    useState(
      answerKey?.status ?? "pending"
    );
      async function saveAnswerKey() {
    if (!title.trim()) {
      alert("Please enter Answer Key Title");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("answer_keys")
      .insert([
        {
          title,
          organization,
          answer_key_date: answerKeyDate,
          answer_key_link: answerKeyLink,
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

    alert("✅ Answer Key Saved Successfully!");

    router.push("/admin/answer-keys");
    router.refresh();
  }

  async function updateAnswerKey() {
    if (!title.trim()) {
      alert("Please enter Answer Key Title");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("answer_keys")
      .update({
        title,
        organization,
        answer_key_date: answerKeyDate,
        answer_key_link: answerKeyLink,
        official_website: officialWebsite,
        notification_pdf: notificationPdf,
        description,
        featured,
        status,
      })
      .eq("id", answerKey.id);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Answer Key Updated Successfully!");

    router.push("/admin/answer-keys");
    router.refresh();
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-xl">

      <div className="grid gap-5">

        <input
          type="text"
          placeholder="Answer Key Title"
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
            Answer Key Date
          </label>

          <input
            type="date"
            value={answerKeyDate}
            onChange={(e) =>
              setAnswerKeyDate(e.target.value)
            }
            className="w-full rounded-xl border p-4"
          />

        </div>

        <input
          type="text"
          placeholder="Answer Key Link"
          value={answerKeyLink}
          onChange={(e) =>
            setAnswerKeyLink(e.target.value)
          }
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

          <span>Featured Answer Key</span>

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
              ? updateAnswerKey
              : saveAnswerKey
          }
          disabled={loading}
          className="rounded-xl bg-blue-600 py-4 font-bold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading
            ? isEdit
              ? "Updating..."
              : "Saving..."
            : isEdit
            ? "Update Answer Key"
            : "Save Answer Key"}
        </button>

      </div>

    </div>
  );
}