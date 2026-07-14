"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Props = {
  job: any;
};

export default function EditJobForm({ job }: Props) {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState(job.title ?? "");
  const [organization, setOrganization] = useState(job.organization ?? "");
  const [postName, setPostName] = useState(job.post_name ?? "");

  const [qualification, setQualification] = useState(
    job.qualification ?? ""
  );

  const [category, setCategory] = useState(
    job.category ?? ""
  );

  const [description, setDescription] = useState(
    job.description ?? ""
  );

  const [lastDate, setLastDate] = useState(
    job.application_last_date ?? ""
  );

  const [applicationFee, setApplicationFee] = useState(
    job.application_fee ?? ""
  );

  const [ageLimit, setAgeLimit] = useState(
    job.age_limit ?? ""
  );
  const [applyLink, setApplyLink] = useState(
  job.apply_link ?? ""
);

const [officialWebsite, setOfficialWebsite] = useState(
  job.official_website ?? ""
);

const [notificationPdf, setNotificationPdf] = useState(
  job.notification_pdf ?? ""
);

const [vacancy, setVacancy] = useState(
  job.vacancy ?? ""
);

const [salary, setSalary] = useState(
  job.salary ?? ""
);

const [importantDates, setImportantDates] = useState(
  job.important_dates ?? ""
);

const [selectionProcess, setSelectionProcess] = useState(
  job.selection_process ?? ""
);

const [featured, setFeatured] = useState(
  job.featured ?? false
);

const [status, setStatus] = useState(
  job.status ?? "pending"
);
async function updateJob() {

  if (!title.trim()) {
    alert("Please enter Job Title");
    return;
  }

  setLoading(true);

  const { error } = await supabase
    .from("jobs")
    .update({

      title,

      organization,

      post_name: postName,

      qualification,

      category,

      description,

      application_last_date: lastDate,

      application_fee: applicationFee,

      age_limit: ageLimit,

      apply_link: applyLink,

      official_website: officialWebsite,

      notification_pdf: notificationPdf,

      vacancy,

      salary,

      important_dates: importantDates,

      selection_process: selectionProcess,

      featured,

      status,

    })
    .eq("id", job.id);

  setLoading(false);

  if (error) {
    alert(error.message);
    return;
  }

  alert("✅ Job Updated Successfully!");

  router.push("/admin/jobs");

  router.refresh();

}
  return (
    <div className="rounded-xl bg-white p-8 shadow">
      <h2 className="text-2xl font-bold mb-4">
        ✏️ Edit Job
      </h2>

      <p className="text-slate-600 mb-6">
        EditJobForm is under development.
      </p>

      <button
        onClick={updateJob}
        disabled={loading}
        className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:bg-slate-400"
      >
        {loading ? "Updating..." : "Update Job"}
      </button>
    </div>
  );
}