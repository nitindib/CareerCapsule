"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Props = {
  mode?: "new" | "edit";
  admitCard?: any;
};

export default function AdmitCardForm({
  mode = "new",
  admitCard,
}: Props) {
  const isEdit = mode === "edit";
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState(
  admitCard?.title ?? ""
);
  const [organization, setOrganization] = useState(
  admitCard?.organization ?? ""
);
  const [examDate, setExamDate] = useState(
  admitCard?.exam_date ?? ""
);
  const [admitCardDate, setAdmitCardDate] = useState(
  admitCard?.admit_card_date ?? ""
);

  const [downloadLink, setDownloadLink] = useState(
  admitCard?.download_link ?? ""
);
  const [officialWebsite, setOfficialWebsite] = useState(
  admitCard?.official_website ?? ""
);
 const [notificationPdf, setNotificationPdf] = useState(
  admitCard?.notification_pdf ?? ""
);
  const [description, setDescription] = useState(
  admitCard?.description ?? ""
);

  const [featured, setFeatured] = useState(
  admitCard?.featured ?? false
);

 const [status, setStatus] = useState(
  admitCard?.status ?? "pending"
);
  async function saveAdmitCard() {

  if (!title.trim()) {
    alert("Please enter title");
    return;
  }

  setLoading(true);

  let error = null;

if (isEdit) {
  const result = await supabase
    .from("admit_cards")
    .update({
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
    })
    .eq("id", admitCard.id);

  error = result.error;
} else {
  const result = await supabase
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

  error = result.error;
}

  setLoading(false);

  if (error) {
    alert(error.message);
    return;
  }

  alert(
  isEdit
    ? "✅ Admit Card Updated Successfully!"
    : "✅ Admit Card Saved Successfully!"
);

router.push("/admin/admit-cards");
router.refresh();
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
      {loading
  ? "Saving..."
  : isEdit
  ? "Update Admit Card"
  : "Save Admit Card"}
    </button>

  </div>
);
}