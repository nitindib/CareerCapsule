"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdmitCardForm() {
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [examDate, setExamDate] = useState("");
  const [admitCardDate, setAdmitCardDate] = useState("");

  const [downloadLink, setDownloadLink] = useState("");
  const [officialWebsite, setOfficialWebsite] = useState("");
  const [notificationPdf, setNotificationPdf] = useState("");

  const [description, setDescription] = useState("");

  const [featured, setFeatured] = useState(false);

  const [status, setStatus] = useState("pending");
  async function saveAdmitCard() {

  if (!title.trim()) {
    alert("Please enter title");
    return;
  }

  setLoading(true);

  const { error } = await supabase
    .from("admit_cards")
    .insert([
      {
        title,
        organization,
        exam_date: examDate,
        admit_card_date: admitCardDate,
        download_link: downloadLink,
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

  alert("✅ Admit Card Saved Successfully!");
}
return (
  <div className="grid gap-5">

    <input
      type="text"
      placeholder="Exam Title"
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

    <div className="grid gap-5 md:grid-cols-2">

      <div>
        <label className="mb-2 block font-medium">
          Admit Card Date
        </label>

        <input
          type="date"
          value={admitCardDate}
          onChange={(e) => setAdmitCardDate(e.target.value)}
          className="w-full rounded-xl border p-4"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Exam Date
        </label>

        <input
          type="date"
          value={examDate}
          onChange={(e) => setExamDate(e.target.value)}
          className="w-full rounded-xl border p-4"
        />
      </div>

    </div>

    <input
      type="text"
      placeholder="Download Link"
      value={downloadLink}
      onChange={(e) => setDownloadLink(e.target.value)}
      className="rounded-xl border p-4"
    />

    <input
      type="text"
      placeholder="Official Website"
      value={officialWebsite}
      onChange={(e) => setOfficialWebsite(e.target.value)}
      className="rounded-xl border p-4"
    />

    <input
      type="text"
      placeholder="Notification PDF"
      value={notificationPdf}
      onChange={(e) => setNotificationPdf(e.target.value)}
      className="rounded-xl border p-4"
    />

    <textarea
      placeholder="Description"
      rows={5}
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="rounded-xl border p-4"
    />

    <div className="flex items-center gap-3">

      <input
        type="checkbox"
        checked={featured}
        onChange={(e) => setFeatured(e.target.checked)}
      />

      <span>Featured Admit Card</span>

    </div>

    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="rounded-xl border p-4"
    >
      <option value="pending">Pending</option>
      <option value="published">Published</option>
      <option value="closed">Closed</option>
    </select>

    <button
      onClick={saveAdmitCard}
      disabled={loading}
      className="rounded-xl bg-blue-600 py-4 font-bold text-white hover:bg-blue-700 disabled:opacity-50"
    >
      {loading ? "Saving..." : "Save Admit Card"}
    </button>

  </div>
);
}