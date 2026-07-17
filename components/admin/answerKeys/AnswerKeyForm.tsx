"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AnswerKeyForm() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  // Basic Information

  const [title, setTitle] = useState("");

  const [organization, setOrganization] = useState("");

  const [examName, setExamName] = useState("");

  const [postName, setPostName] = useState("");

  // Dates

  const [releaseDate, setReleaseDate] = useState("");

  const [objectionLastDate, setObjectionLastDate] = useState("");

  // Description

  const [description, setDescription] = useState("");

  // Links

  const [officialWebsite, setOfficialWebsite] = useState("");

  const [downloadLink, setDownloadLink] = useState("");

  const [notificationPdf, setNotificationPdf] = useState("");

  // Settings

  const [featured, setFeatured] = useState(false);

  const [status, setStatus] = useState("published");
  const answerKeyData = {

  title,

  organization,

  exam_name: examName,

  post_name: postName,

  release_date: releaseDate,

  objection_last_date: objectionLastDate,

  description,

  official_website: officialWebsite,

  download_link: downloadLink,

  notification_pdf: notificationPdf,

  featured,

  status,

};
async function saveAnswerKey() {

  if (!title.trim()) {
    alert("Please enter Answer Key Title.");
    return;
  }

  if (!organization.trim()) {
    alert("Please enter Organization.");
    return;
  }

  setLoading(true);

  const { error } = await supabase
    .from("answer_keys")
    .insert([answerKeyData]);

  setLoading(false);

  if (error) {
    alert(error.message);
    return;
  }

  alert("🎉 Answer Key Added Successfully!");

  setTitle("");
  setOrganization("");
  setExamName("");
  setPostName("");

  setReleaseDate("");
  setObjectionLastDate("");

  setDescription("");

  setOfficialWebsite("");
  setDownloadLink("");
  setNotificationPdf("");

  setFeatured(false);
  setStatus("published");

  router.push("/admin/answer-keys");

  router.refresh();
}
return (
  <main className="rounded-2xl bg-white p-8 shadow-xl">

    <div className="grid gap-5">

      <h2 className="mb-2 text-2xl font-bold text-slate-800">
        📝 Basic Information
      </h2>

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

      <input
        type="text"
        placeholder="Exam Name"
        value={examName}
        onChange={(e) => setExamName(e.target.value)}
        className="rounded-xl border p-4"
      />

      <input
        type="text"
        placeholder="Post Name"
        value={postName}
        onChange={(e) => setPostName(e.target.value)}
        className="rounded-xl border p-4"
      />

      <h2 className="mt-6 mb-2 text-2xl font-bold text-slate-800">
        📅 Dates
      </h2>

      <label className="font-medium">
        Release Date
      </label>

      <input
        type="date"
        value={releaseDate}
        onChange={(e) => setReleaseDate(e.target.value)}
        className="rounded-xl border p-4"
      />

      <label className="font-medium">
        Objection Last Date
      </label>

      <input
        type="date"
        value={objectionLastDate}
        onChange={(e) => setObjectionLastDate(e.target.value)}
        className="rounded-xl border p-4"
      />

      <h2 className="mt-6 mb-2 text-2xl font-bold text-slate-800">
        📄 Description
      </h2>

      <textarea
        placeholder="Answer Key Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="min-h-[150px] rounded-xl border p-4"
      />

      <h2 className="mt-6 mb-2 text-2xl font-bold text-slate-800">
        🔗 Links
      </h2>

      <input
        type="text"
        placeholder="Official Website"
        value={officialWebsite}
        onChange={(e) => setOfficialWebsite(e.target.value)}
        className="rounded-xl border p-4"
      />

      <input
        type="text"
        placeholder="Download Link"
        value={downloadLink}
        onChange={(e) => setDownloadLink(e.target.value)}
        className="rounded-xl border p-4"
      />

      <input
        type="text"
        placeholder="Notification PDF"
        value={notificationPdf}
        onChange={(e) => setNotificationPdf(e.target.value)}
        className="rounded-xl border p-4"
      />

      <h2 className="mt-6 mb-2 text-2xl font-bold text-slate-800">
        ⚙️ Settings
      </h2>

      <label className="flex items-center gap-3 rounded-xl border p-4">

        <input
          type="checkbox"
          checked={featured}
          onChange={(e) => setFeatured(e.target.checked)}
          className="h-5 w-5"
        />

        <span className="font-medium">
          ⭐ Featured Answer Key
        </span>

      </label>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="rounded-xl border p-4"
      >

        <option value="published">
          🟢 Published
        </option>

        <option value="pending">
          🟡 Pending
        </option>

        <option value="closed">
          🔴 Closed
        </option>

      </select>

      <button
        onClick={saveAnswerKey}
        disabled={loading}
        className="mt-4 rounded-xl bg-blue-600 py-4 text-lg font-bold text-white transition hover:bg-blue-700 disabled:bg-slate-400"
      >
        {loading ? "Saving..." : "💾 Save Answer Key"}
      </button>

    </div>

    </main>
);
}