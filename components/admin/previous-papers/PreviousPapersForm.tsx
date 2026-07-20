"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Props = {
  isEdit?: boolean;
  paper?: any;
};

export default function PreviousPapersForm({
  isEdit = false,
  paper,
}: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState(paper?.title ?? "");
  const [organization, setOrganization] = useState(
    paper?.organization ?? ""
  );
  const [examName, setExamName] = useState(
    paper?.exam_name ?? ""
  );
  const [paperYear, setPaperYear] = useState(
    paper?.paper_year ?? ""
  );
  const [paperType, setPaperType] = useState(
    paper?.paper_type ?? ""
  );
  const [subject, setSubject] = useState(
    paper?.subject ?? ""
  );
  const [description, setDescription] = useState(
    paper?.description ?? ""
  );
  const [downloadLink, setDownloadLink] = useState(
    paper?.download_link ?? ""
  );
  const [officialWebsite, setOfficialWebsite] = useState(
    paper?.official_website ?? ""
  );
  const [notificationPdf, setNotificationPdf] = useState(
    paper?.notification_pdf ?? ""
  );
  const [featured, setFeatured] = useState(
    paper?.featured ?? false
  );
  const [status, setStatus] = useState(
    paper?.status ?? "pending"
  );

  async function savePaper() {
    if (!title.trim()) {
      alert("Please enter Paper Title");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("previous_papers")
      .insert([
        {
          title,
          organization,
          exam_name: examName,
          paper_year: paperYear,
          paper_type: paperType,
          subject,
          description,
          download_link: downloadLink,
          official_website: officialWebsite,
          notification_pdf: notificationPdf,
          featured,
          status,
        },
      ]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Previous Paper Saved Successfully!");

    router.push("/admin/previous-papers");
    router.refresh();
  }

  async function updatePaper() {
    if (!title.trim()) {
      alert("Please enter Paper Title");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("previous_papers")
      .update({
        title,
        organization,
        exam_name: examName,
        paper_year: paperYear,
        paper_type: paperType,
        subject,
        description,
        download_link: downloadLink,
        official_website: officialWebsite,
        notification_pdf: notificationPdf,
        featured,
        status,
      })
      .eq("id", paper.id);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Previous Paper Updated Successfully!");

    router.push("/admin/previous-papers");
    router.refresh();
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-xl">
      <div className="grid gap-5">
        <input
          type="text"
          placeholder="Paper Title"
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

        <div className="grid gap-5 md:grid-cols-2">
          <input
            type="text"
            placeholder="Paper Year"
            value={paperYear}
            onChange={(e) => setPaperYear(e.target.value)}
            className="rounded-xl border p-4"
          />

          <input
            type="text"
            placeholder="Paper Type (Prelims/Mains)"
            value={paperType}
            onChange={(e) => setPaperType(e.target.value)}
            className="rounded-xl border p-4"
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="rounded-xl border p-4"
        />

        <textarea
          placeholder="Description"
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
          />
          <span>Featured Previous Paper</span>
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
          onClick={isEdit ? updatePaper : savePaper}
          disabled={loading}
          className="rounded-xl bg-blue-600 py-4 font-bold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading
            ? isEdit
              ? "Updating..."
              : "Saving..."
            : isEdit
            ? "Update Previous Paper"
            : "Save Previous Paper"}
        </button>
      </div>
    </div>
  );
}