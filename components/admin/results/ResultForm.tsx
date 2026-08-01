"use client";

import { useEffect, useState } from "react";
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
  const [jobs, setJobs] = useState<any[]>([]);

const [jobId, setJobId] = useState(
  result?.job_id ?? ""
);

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
    
    // ======================
// Auto SEO
// ======================

const autoSeoTitle =
  `${title} | Result | CareerCapsule`;

const autoSeoDescription = [
  title,
  organization,
  description,
  "Result",
  "CareerCapsule",
]
  .filter(Boolean)
  .join(" ");

const autoSeoKeywords = [
  title,
  organization,
  "Result",
  "Merit List",
  "Cutoff",
  "Score Card",
]
  .filter(Boolean)
  .join(", ");

const autoSlug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");

const searchKeywords = [
  title,
  organization,
  description,
  "Result",
  "Score Card",
  "Merit List",
  "Cutoff",
]
  .filter(Boolean)
  .join(", ");
    
useEffect(() => {
  async function loadJobs() {
    const { data } = await supabase
      .from("jobs_v2")
      .select(`
id,
title,
post_name,
organization,
short_description,
official_website,
notification_pdf,
seo_keywords
`)
      .eq("status", "published")
      .order("created_at", {
        ascending: false,
      });

    setJobs(data || []);
  }

  loadJobs();
}, []);

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
          job_id: jobId,
          organization,
          result_date: resultDate,
          result_link: resultLink,
          official_website: officialWebsite,
          notification_pdf: notificationPdf,
          description,
          featured,
          status,
          seo_title: autoSeoTitle,
seo_description: autoSeoDescription,
seo_keywords: autoSeoKeywords,
search_keywords: searchKeywords,
slug: autoSlug,
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
        job_id: jobId,
        organization,
        result_date: resultDate,
        result_link: resultLink,
        official_website: officialWebsite,
        notification_pdf: notificationPdf,
        description,
        featured,
        status,
        seo_title: autoSeoTitle,
seo_description: autoSeoDescription,
seo_keywords: autoSeoKeywords,
search_keywords: searchKeywords,
slug: autoSlug,
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
        <select
  value={jobId}
  onChange={(e) => {
    const id = e.target.value;

    setJobId(id);

    const selectedJob = jobs.find(
      (job) => job.id === id
    );

    if (selectedJob) {
      setTitle(`${selectedJob.title} Result`);
      setOrganization(
        selectedJob.organization || ""
      );
      setResultDate(
  selectedJob.result_date || ""
);

      setDescription(
`${selectedJob.title} Result has been released. Candidates can check their result, merit list, score card and cutoff from the official website.`
);

      setOfficialWebsite(
        selectedJob.official_website || ""
      );

      setNotificationPdf(
        selectedJob.notification_pdf || ""
      );
    }
  }}
  className="rounded-xl border p-4"
>
  <option value="">
    Select Related Job
  </option>

  {jobs.map((job) => (
    <option
  key={job.id}
  value={job.id}
>
  {job.title} ({job.post_name})
</option>
  ))}
</select>

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