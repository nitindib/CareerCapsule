"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [postName, setPostName] = useState("");
  const [qualification, setQualification] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [category, setCategory] = useState("");
const [description, setDescription] = useState("");

const [applicationFee, setApplicationFee] = useState("");
const [ageLimit, setAgeLimit] = useState("");

const [applyLink, setApplyLink] = useState("");
const [officialWebsite, setOfficialWebsite] = useState("");
const [notificationPdf, setNotificationPdf] = useState("");

const [vacancy, setVacancy] = useState("");
const [salary, setSalary] = useState("");

const [importantDates, setImportantDates] = useState("");
const [selectionProcess, setSelectionProcess] = useState("");

const [featured, setFeatured] = useState(false);

const [status, setStatus] = useState("pending");
const router = useRouter();
const [loading, setLoading] = useState(false);

  const saveJob = async () => {
    const { error } = await supabase.from("jobs").insert([
      {
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
},
    ]);

    if (!title.trim()) {
  alert("Please enter Job Title.");
  return;
}

if (!organization.trim()) {
  alert("Please enter Organization.");
  return;
}

if (!qualification.trim()) {
  alert("Please enter Qualification.");
  return;
}

setLoading(true);
    if (error) {
  setLoading(false);
  alert(error.message);
  return;
} else {
      setLoading(false);

alert("🎉 Job Added Successfully!");

router.push("/admin/jobs");
router.refresh();

      setTitle("");
      setOrganization("");
      setPostName("");
      setQualification("");
      setLastDate("");
      setCategory("");
setDescription("");

setApplicationFee("");
setAgeLimit("");

setApplyLink("");
setOfficialWebsite("");
setNotificationPdf("");

setVacancy("");
setSalary("");

setImportantDates("");
setSelectionProcess("");

setFeatured(false);

setStatus("pending");
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-4xl mx-auto rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-8 text-4xl font-bold">
          CareerCapsule Admin
        </h1>

        <div className="grid gap-5">
          <h2 className="mb-2 text-2xl font-bold text-slate-800">
  📝 Basic Information
</h2>
          <input
            type="text"
            placeholder="Job Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="Organization"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className="border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="Post Name"
            value={postName}
            onChange={(e) => setPostName(e.target.value)}
            className="border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="Qualification"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            className="border rounded-xl p-4"
          />
          <input
  type="text"
  placeholder="Category (Central Govt / State Govt / Railway...)"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="border rounded-xl p-4"
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
            className="border rounded-xl p-4"
          />
          <h2 className="mt-6 mb-2 text-2xl font-bold text-slate-800">
  🎓 Eligibility
</h2>

         <input
  type="text"
  placeholder="Application Fee"
  value={applicationFee}
  onChange={(e) => setApplicationFee(e.target.value)}
  className="border rounded-xl p-4"
/>

<input
  type="text"
  placeholder="Age Limit"
  value={ageLimit}
  onChange={(e) => setAgeLimit(e.target.value)}
  className="border rounded-xl p-4"
/>
<h2 className="mt-6 mb-2 text-2xl font-bold text-slate-800">
  🔗 Application & Links
</h2>
<input
  type="text"
  placeholder="Apply Link"
  value={applyLink}
  onChange={(e) => setApplyLink(e.target.value)}
  className="border rounded-xl p-4"
/>

<input
  type="text"
  placeholder="Official Website"
  value={officialWebsite}
  onChange={(e) => setOfficialWebsite(e.target.value)}
  className="border rounded-xl p-4"
/>

<input
  type="text"
  placeholder="Notification PDF Link"
  value={notificationPdf}
  onChange={(e) => setNotificationPdf(e.target.value)}
  className="border rounded-xl p-4"
/>
<h2 className="mt-6 mb-2 text-2xl font-bold text-slate-800">
  💼 Vacancy & Salary
</h2>
<input
  type="text"
  placeholder="Total Vacancy"
  value={vacancy}
  onChange={(e) => setVacancy(e.target.value)}
  className="border rounded-xl p-4"
/>

<input
  type="text"
  placeholder="Salary"
  value={salary}
  onChange={(e) => setSalary(e.target.value)}
  className="border rounded-xl p-4"
/>
<h2 className="mt-6 mb-2 text-2xl font-bold text-slate-800">
  📅 Other Details
</h2>
<input
  type="text"
  placeholder="Important Dates"
  value={importantDates}
  onChange={(e) => setImportantDates(e.target.value)}
  className="border rounded-xl p-4"
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

          <input
            type="text"
            placeholder="Official Website"
            className="border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="Notification PDF Link"
            className="border rounded-xl p-4"
          />

          <button
  onClick={saveJob}
  disabled={loading}
  className="rounded-xl bg-blue-600 py-4 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
>
  {loading ? "Saving..." : "💾 Save Job"}
</button>
        </div>
      </div>
    </main>
  );
}