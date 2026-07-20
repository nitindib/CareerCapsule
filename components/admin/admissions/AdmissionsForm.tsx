"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Props = {
  isEdit?: boolean;
  admission?: any;
};

export default function AdmissionsForm({
  isEdit = false,
  admission,
}: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState(admission?.title ?? "");
  const [organization, setOrganization] = useState(
    admission?.organization ?? ""
  );
  const [courseName, setCourseName] = useState(
    admission?.course_name ?? ""
  );
  const [admissionYear, setAdmissionYear] = useState(
    admission?.admission_year ?? ""
  );
  const [applicationStartDate, setApplicationStartDate] = useState(
    admission?.application_start_date ?? ""
  );
  const [applicationLastDate, setApplicationLastDate] = useState(
    admission?.application_last_date ?? ""
  );
  const [examDate, setExamDate] = useState(
    admission?.exam_date ?? ""
  );
  const [resultDate, setResultDate] = useState(
    admission?.result_date ?? ""
  );
  const [eligibility, setEligibility] = useState(
    admission?.eligibility ?? ""
  );
  const [description, setDescription] = useState(
    admission?.description ?? ""
  );
  const [applyLink, setApplyLink] = useState(
    admission?.apply_link ?? ""
  );
  const [officialWebsite, setOfficialWebsite] = useState(
    admission?.official_website ?? ""
  );
  const [notificationPdf, setNotificationPdf] = useState(
    admission?.notification_pdf ?? ""
  );
  const [featured, setFeatured] = useState(
    admission?.featured ?? false
  );
  const [status, setStatus] = useState(
    admission?.status ?? "pending"
  );

  async function saveAdmission() {
    if (!title.trim()) {
      alert("Please enter Admission Title");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("admissions")
      .insert([
        {
          title,
          organization,
          course_name: courseName,
          admission_year: admissionYear,
          application_start_date: applicationStartDate || null,
          application_last_date: applicationLastDate || null,
          exam_date: examDate || null,
          result_date: resultDate || null,
          eligibility,
          description,
          apply_link: applyLink,
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

    alert("✅ Admission Saved Successfully!");

    router.push("/admin/admissions");
    router.refresh();
  }

  async function updateAdmission() {
    if (!title.trim()) {
      alert("Please enter Admission Title");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("admissions")
      .update({
        title,
        organization,
        course_name: courseName,
        admission_year: admissionYear,
        application_start_date: applicationStartDate || null,
        application_last_date: applicationLastDate || null,
        exam_date: examDate || null,
        result_date: resultDate || null,
        eligibility,
        description,
        apply_link: applyLink,
        official_website: officialWebsite,
        notification_pdf: notificationPdf,
        featured,
        status,
      })
      .eq("id", admission.id);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Admission Updated Successfully!");

    router.push("/admin/admissions");
    router.refresh();
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-xl">
      <div className="grid gap-5">
        <input
          type="text"
          placeholder="Admission Title"
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
          <input
            type="text"
            placeholder="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="rounded-xl border p-4"
          />

          <input
            type="text"
            placeholder="Admission Year"
            value={admissionYear}
            onChange={(e) => setAdmissionYear(e.target.value)}
            className="rounded-xl border p-4"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold">
              Application Start Date
            </label>
            <input
              type="date"
              value={applicationStartDate}
              onChange={(e) => setApplicationStartDate(e.target.value)}
              className="w-full rounded-xl border p-4"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Application Last Date
            </label>
            <input
              type="date"
              value={applicationLastDate}
              onChange={(e) => setApplicationLastDate(e.target.value)}
              className="w-full rounded-xl border p-4"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold">
              Exam Date
            </label>
            <input
              type="date"
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              className="w-full rounded-xl border p-4"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Result Date
            </label>
            <input
              type="date"
              value={resultDate}
              onChange={(e) => setResultDate(e.target.value)}
              className="w-full rounded-xl border p-4"
            />
          </div>
        </div>

        <textarea
          placeholder="Eligibility"
          rows={3}
          value={eligibility}
          onChange={(e) => setEligibility(e.target.value)}
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
          placeholder="Apply Link"
          value={applyLink}
          onChange={(e) => setApplyLink(e.target.value)}
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
          <span>Featured Admission</span>
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
          onClick={isEdit ? updateAdmission : saveAdmission}
          disabled={loading}
          className="rounded-xl bg-blue-600 py-4 font-bold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading
            ? isEdit
              ? "Updating..."
              : "Saving..."
            : isEdit
            ? "Update Admission"
            : "Save Admission"}
        </button>
      </div>
    </div>
  );
}