"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type JobFormProps = {
  mode: "new" | "edit";
  job?: any;
};

export default function JobForm({
  mode,
  job,
}: JobFormProps) {

  const router = useRouter();

  const isEdit = mode === "edit";
  const [loading, setLoading] = useState(false);

const [title, setTitle] = useState(job?.title ?? "");
const [organization, setOrganization] = useState(job?.organization ?? "");
const [postName, setPostName] = useState(job?.post_name ?? "");

const [qualification, setQualification] = useState(
  job?.qualification ?? ""
);

const [category, setCategory] = useState(
  job?.category ?? ""
);

const [description, setDescription] = useState(
  job?.description ?? ""
);

const [lastDate, setLastDate] = useState(
  job?.application_last_date ?? ""
);
const [applicationFee, setApplicationFee] = useState(
  job?.application_fee ?? ""
);

const [ageLimit, setAgeLimit] = useState(
  job?.age_limit ?? ""
);

const [applyLink, setApplyLink] = useState(
  job?.apply_link ?? ""
);

const [officialWebsite, setOfficialWebsite] = useState(
  job?.official_website ?? ""
);

const [notificationPdf, setNotificationPdf] = useState(
  job?.notification_pdf ?? ""
);

const [vacancy, setVacancy] = useState(
  job?.vacancy ?? ""
);

const [salary, setSalary] = useState(
  job?.salary ?? ""
);

const [importantDates, setImportantDates] = useState(
  job?.important_dates ?? ""
);

const [selectionProcess, setSelectionProcess] = useState(
  job?.selection_process ?? ""
);

const [featured, setFeatured] = useState(
  job?.featured ?? false
);

const [status, setStatus] = useState(
  job?.status ?? "pending"
);
const jobData = {

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

};
async function saveJob() {

  if (!title.trim()) {
    alert("Please enter Job Title");
    return;
  }

  if (!organization.trim()) {
    alert("Please enter Organization");
    return;
  }

  if (!qualification.trim()) {
    alert("Please enter Qualification");
    return;
  }

  setLoading(true);

  let error = null;

  if (isEdit) {

    const result = await supabase
      .from("jobs")
      .update(jobData)
      .eq("id", job.id);

    error = result.error;

  } else {

    const result = await supabase
      .from("jobs")
      .insert([jobData]);

    error = result.error;

  }

  setLoading(false);

  if (error) {
    alert(error.message);
    return;
  }

  alert(
    isEdit
      ? "✅ Job Updated Successfully!"
      : "🎉 Job Added Successfully!"
  );

  router.push("/admin/jobs");

  router.refresh();

}
async function updateJob() {

  if (!title.trim()) {
    alert("Please enter Job Title");
    return;
  }

  if (!organization.trim()) {
    alert("Please enter Organization");
    return;
  }

  if (!qualification.trim()) {
    alert("Please enter Qualification");
    return;
  }

  setLoading(true);

  const { error } = await supabase
    .from("jobs")
    .update(jobData)
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
 <div className="grid gap-5">

  <h2 className="mb-2 text-2xl font-bold text-slate-800">
    📝 Basic Information
  </h2>

  <input
    type="text"
    placeholder="Job Title"
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
    placeholder="Post Name"
    value={postName}
    onChange={(e) => setPostName(e.target.value)}
    className="rounded-xl border p-4"
  />

  <input
    type="text"
    placeholder="Qualification"
    value={qualification}
    onChange={(e) => setQualification(e.target.value)}
    className="rounded-xl border p-4"
  />

  <input
    type="text"
    placeholder="Category"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="rounded-xl border p-4"
  />

  <textarea
    placeholder="Job Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    className="min-h-[140px] rounded-xl border p-4"
  />

  <input
    type="date"
    value={lastDate}
    onChange={(e) => setLastDate(e.target.value)}
    className="rounded-xl border p-4"
  />
  <h2 className="mt-6 mb-2 text-2xl font-bold text-slate-800">
  🎓 Eligibility
</h2>

<input
  type="text"
  placeholder="Application Fee"
  value={applicationFee}
  onChange={(e) => setApplicationFee(e.target.value)}
  className="rounded-xl border p-4"
/>

<input
  type="text"
  placeholder="Age Limit"
  value={ageLimit}
  onChange={(e) => setAgeLimit(e.target.value)}
  className="rounded-xl border p-4"
/>

<h2 className="mt-6 mb-2 text-2xl font-bold text-slate-800">
  🔗 Application & Links
</h2>

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

<h2 className="mt-6 mb-2 text-2xl font-bold text-slate-800">
  💼 Vacancy & Salary
</h2>

<input
  type="text"
  placeholder="Total Vacancy"
  value={vacancy}
  onChange={(e) => setVacancy(e.target.value)}
  className="rounded-xl border p-4"
/>

<input
  type="text"
  placeholder="Salary"
  value={salary}
  onChange={(e) => setSalary(e.target.value)}
  className="rounded-xl border p-4"
/><h2 className="mt-6 mb-2 text-2xl font-bold text-slate-800">
  🎓 Eligibility
</h2>

<input
  type="text"
  placeholder="Application Fee"
  value={applicationFee}
  onChange={(e) => setApplicationFee(e.target.value)}
  className="rounded-xl border p-4"
/>

<input
  type="text"
  placeholder="Age Limit"
  value={ageLimit}
  onChange={(e) => setAgeLimit(e.target.value)}
  className="rounded-xl border p-4"
/>

<h2 className="mt-6 mb-2 text-2xl font-bold text-slate-800">
  🔗 Application & Links
</h2>

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

<h2 className="mt-6 mb-2 text-2xl font-bold text-slate-800">
  💼 Vacancy & Salary
</h2>

<input
  type="text"
  placeholder="Total Vacancy"
  value={vacancy}
  onChange={(e) => setVacancy(e.target.value)}
  className="rounded-xl border p-4"
/>

<input
  type="text"
  placeholder="Salary"
  value={salary}
  onChange={(e) => setSalary(e.target.value)}
  className="rounded-xl border p-4"
/>
<h2 className="mt-6 mb-2 text-2xl font-bold text-slate-800">
  📅 Other Details
</h2>

<input
  type="text"
  placeholder="Important Dates"
  value={importantDates}
  onChange={(e) => setImportantDates(e.target.value)}
  className="rounded-xl border p-4"
/>

<textarea
  placeholder="Selection Process"
  value={selectionProcess}
  onChange={(e) => setSelectionProcess(e.target.value)}
  className="min-h-[120px] rounded-xl border p-4"
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
    ⭐ Featured Job
  </span>

</label>

<select
  value={status}
  onChange={(e) => setStatus(e.target.value)}
  className="rounded-xl border p-4"
>
  <option value="pending">
    🟡 Pending
  </option>

  <option value="published">
    🟢 Published
  </option>

  <option value="closed">
    🔴 Closed
  </option>
</select>
<button
  onClick={isEdit ? updateJob : saveJob}
  disabled={loading}
  className="rounded-xl bg-blue-600 py-4 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
>
  {loading
    ? isEdit
      ? "Updating..."
      : "Saving..."
    : isEdit
    ? "💾 Update Job"
    : "💾 Save Job"}
</button>

</div>
);
}