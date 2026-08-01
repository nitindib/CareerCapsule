"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

import ImportantDates from "./ImportantDates";
import VacancyDetails from "./VacancyDetails";
import ApplicationFee from "./ApplicationFee";
import AgeLimit from "./AgeLimit";
import Qualification from "./Qualification";
import SelectionProcess from "./SelectionProcess";
import ExamPattern from "./ExamPattern";
import Syllabus from "./Syllabus";
import DocumentsRequired from "./DocumentsRequired";
import FAQ from "./FAQ";
import ImportantLinks from "./ImportantLinks";
import SEOInformation from "./SEOInformation";
import ExamStages from "./ExamStages";

export default function JobFormV2({
initialData,
}: {
initialData?: any;
}) {
const [formData, setFormData] = useState({
title: initialData?.title || "",
 organization: initialData?.organization || "",
post_name: initialData?.post_name || "",
short_description: initialData?.short_description || "",
total_posts: initialData?.total_posts || "",
salary: initialData?.salary || "",
job_location: initialData?.job_location || "",
application_start_date: initialData?.application_start_date || "",
application_last_date: initialData?.application_last_date || "",
fee_payment_last_date: initialData?.fee_payment_last_date || "",
correction_last_date: initialData?.correction_last_date || "",
exam_date: initialData?.exam_date || "",
admit_card_date: initialData?.admit_card_date || "",
answer_key_date: initialData?.answer_key_date || "",
cut_off_date: initialData?.cut_off_date || "",
result_date: initialData?.result_date || "",
featured: initialData?.featured || false,
status: initialData?.status || "draft",
});

const [vacancyDetails, setVacancyDetails] = useState(
initialData?.vacancy_details || []
);

const [applicationFee, setApplicationFee] = useState(
initialData?.application_fee || []
);

const [ageLimit, setAgeLimit] = useState(
initialData?.age_limit || {}
);

const [qualification, setQualification] = useState(
initialData?.qualification || []
);

const [selectionProcess, setSelectionProcess] = useState(
initialData?.selection_process || []
);

const [examPattern, setExamPattern] = useState(
initialData?.exam_pattern || []
);

const [syllabus, setSyllabus] = useState(
initialData?.syllabus || []
);

const [documentsRequired, setDocumentsRequired] = useState(
initialData?.documents_required || []
);

const [faq, setFaq] = useState(
initialData?.faq || []
);

const [importantLinks, setImportantLinks] = useState({
apply_link: initialData?.apply_link || "",
official_website: initialData?.official_website || "",
notification_pdf: initialData?.notification_pdf || "",
syllabus_pdf: initialData?.syllabus_pdf || "",
result_link: initialData?.result_link || "",
});

const [seoInformation, setSeoInformation] = useState({
seo_title: initialData?.seo_title || "",
seo_description: initialData?.seo_description || "",
seo_keywords: initialData?.seo_keywords || "",
slug: initialData?.slug || "",
});

const handleChange = async (
e: React.ChangeEvent<
HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>
) => {
const { name, value, type } = e.target;
setFormData((prev) => ({
  ...prev,
  [name]:
    type === "checkbox"
      ? (e.target as HTMLInputElement).checked
      : value,
}));

};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    // ==============================
// Auto SEO Description
// ==============================

const qualificationText = Array.isArray(qualification)
  ? qualification
      .map((item: any) =>
        expandQualification(`${item.type} ${item.details}`)
      )
      .join(" ")
  : "";
const vacancyText = Array.isArray(vacancyDetails)
  ? vacancyDetails
      .map((item: any) => `${item.category} ${item.posts}`)
      .join(" ")
  : "";

const ageText = Array.isArray(ageLimit)
  ? ageLimit
      .map((item: any) => `${item.type} ${item.age}`)
      .join(" ")
  : "";
const selectionText = selectionProcess.join(" ");

const documentText = documentsRequired.join(" ");

const syllabusText = Array.isArray(syllabus)
  ? syllabus
      .map((item: any) => item.subject)
      .join(" ")
  : "";

  function expandQualification(text: string) {
  const t = text.toLowerCase();

  let keywords = text;

  if (t.includes("graduation") || t.includes("graduate") || t.includes("bachelor")) {
    keywords += " Graduate Graduation Bachelor Degree Any Degree";
  }

  if (t.includes("intermediate") || t.includes("12th")) {
    keywords += " Intermediate 12th Higher Secondary";
  }

  if (t.includes("10th") || t.includes("high school")) {
    keywords += " High School 10th Matric";
  }

  if (t.includes("diploma")) {
    keywords += " Polytechnic Diploma";
  }

  if (t.includes("b.tech") || t.includes("be")) {
    keywords += " BTech BE Engineering Engineer";
  }

  if (t.includes("computer")) {
    keywords += " Computer IT CCC O Level";
  }

  if (t.includes("typing")) {
    keywords += " Typing Hindi Typing English Typing";
  }

  return keywords;
}
const autoSeoDescription = [
  formData.title,
  formData.organization,
  formData.post_name,
  formData.short_description,
  seoInformation.seo_description,
  qualificationText,
  vacancyText,
  ageText,
  selectionText,
  documentText,
  syllabusText,
]
  .filter(Boolean)
  .join(" ");
  const searchKeywords = [
  formData.title,
  formData.organization,
  formData.post_name,
  formData.short_description,
  qualificationText,
  vacancyText,
  ageText,
  selectionText,
  documentText,
  syllabusText,
  seoInformation.seo_keywords,
]
  .filter(Boolean)
  .join(" ")
  .toLowerCase();
  // ==============================
// Auto SEO Title
// ==============================

const autoSeoTitle =
`${formData.title} | ${formData.post_name} | CareerCapsule`;


// ==============================
// Auto Slug
// ==============================

const autoSlug = `${formData.title}-${formData.post_name}`
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");


// ==============================
// Auto SEO Keywords
// ==============================

const autoSeoKeywords = [
  formData.title,
  formData.post_name,
  formData.organization,
  qualificationText,
  vacancyText,
  ageText,
]
.filter(Boolean)
.join(", ");
    const payload = {
  // Basic Information
  title: formData.title,
  organization: formData.organization,
  post_name: formData.post_name,
  short_description: formData.short_description,
  total_posts: formData.total_posts
    ? parseInt(formData.total_posts)
    : null,
  salary: formData.salary,
  job_location: formData.job_location,
  featured: formData.featured,
  status: formData.status,

  application_start_date: formData.application_start_date,
  application_last_date: formData.application_last_date,
  fee_payment_last_date: formData.fee_payment_last_date,
  correction_last_date: formData.correction_last_date,
  exam_date: formData.exam_date,
  admit_card_date: formData.admit_card_date,
  answer_key_date: formData.answer_key_date,
  cut_off_date: formData.cut_off_date,
  result_date: formData.result_date,

  vacancy_details: vacancyDetails,
  application_fee: applicationFee,
  age_limit: ageLimit,
  qualification,
  selection_process: selectionProcess,
  exam_pattern: examPattern,
  syllabus,
  documents_required: documentsRequired,
  faq,

  apply_link: importantLinks.apply_link || null,
  official_website: importantLinks.official_website || null,
  notification_pdf: importantLinks.notification_pdf || null,
  syllabus_pdf: importantLinks.syllabus_pdf || null,
  result_link: importantLinks.result_link || null,

  seo_title:
    seoInformation.seo_title || autoSeoTitle,

  seo_description:
    seoInformation.seo_description || autoSeoDescription,

  seo_keywords:
    seoInformation.seo_keywords || autoSeoKeywords,

  slug:
    seoInformation.slug || autoSlug,

  search_keywords:
    searchKeywords || null,
};
    console.log("Updating ID:", initialData?.id);
    console.log("Payload:", payload);

    let response;

    if (initialData?.id) {
      // UPDATE existing job
     response = await supabase
  .from("jobs_v2")
  .update(payload)
  .eq("id", String(initialData.id))
  .select();

console.log("Updating with ID:", String(initialData.id));
    } else {
      // INSERT new job
      response = await supabase
        .from("jobs_v2")
        .insert([payload])
        .select();
    }

    console.log("Response:", response);

    if (response.error) {
      console.error("Supabase Error:", response.error);
      alert("Error saving job: " + response.error.message);
      return;
    }

    alert(
      initialData?.id
        ? "Job updated successfully!"
        : "Job created successfully!"
    );

    // Redirect back to list page
    window.location.href = "/admin/jobs-v2";
  } catch (err: any) {
    console.error("Unexpected Error:", err);
    alert("Something went wrong: " + err.message);
  }
};
   

return ( <form onSubmit={handleSubmit} className="space-y-8">
{/* Basic Information */} <div className="rounded-2xl bg-white p-6 shadow"> <h2 className="mb-6 text-2xl font-bold">
📌 Basic Information </h2>

```
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <label className="mb-2 block font-semibold">
          Job Title
        </label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="SSC CGL 2027 Notification"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
  <label className="mb-2 block font-semibold">
    Organization
  </label>

  <input
    type="text"
    name="organization"
    value={formData.organization}
    onChange={handleChange}
    placeholder="SSC / UPSC / Railway / UPPSC"
    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

      <div>
        <label className="mb-2 block font-semibold">
          Post Name
        </label>

        <input
          type="text"
          name="post_name"
          value={formData.post_name}
          onChange={handleChange}
          placeholder="Assistant Section Officer"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Total Posts
        </label>

        <input
          type="number"
          name="total_posts"
          value={formData.total_posts}
          onChange={handleChange}
          placeholder="14582"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Salary
        </label>

        <input
          type="text"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          placeholder="₹44,900 - ₹1,42,400"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="md:col-span-2">
        <label className="mb-2 block font-semibold">
          Job Location
        </label>

        <input
          type="text"
          name="job_location"
          value={formData.job_location}
          onChange={handleChange}
          placeholder="All India"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="md:col-span-2">
        <label className="mb-2 block font-semibold">
          Short Description
        </label>

        <textarea
          name="short_description"
          value={formData.short_description}
          onChange={handleChange}
          rows={4}
          placeholder="Enter short description..."
          className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  </div>

  {/* All V2 Components */}
  <ExamStages />

  <VacancyDetails
    vacancyDetails={vacancyDetails}
    setVacancyDetails={setVacancyDetails}
  />

  <ApplicationFee
    applicationFee={applicationFee}
    setApplicationFee={setApplicationFee}
  />

  <AgeLimit
    ageLimit={ageLimit}
    setAgeLimit={setAgeLimit}
  />

  <Qualification
    qualification={qualification}
    setQualification={setQualification}
  />

  <SelectionProcess
    selectionProcess={selectionProcess}
    setSelectionProcess={setSelectionProcess}
  />

  <ExamPattern
    examPattern={examPattern}
    setExamPattern={setExamPattern}
  />

  <Syllabus
    syllabus={syllabus}
    setSyllabus={setSyllabus}
  />

  <DocumentsRequired
    documentsRequired={documentsRequired}
    setDocumentsRequired={setDocumentsRequired}
  />

  <FAQ
    faq={faq}
    setFaq={setFaq}
  />

  <ImportantLinks
    importantLinks={importantLinks}
    setImportantLinks={setImportantLinks}
  />

  <SEOInformation
    seoInformation={seoInformation}
    setSeoInformation={setSeoInformation}
  />

  {/* Status & Submit */}
  <div className="rounded-2xl bg-white p-6 shadow">
    <h2 className="mb-6 text-2xl font-bold">
      ⚙️ Status & Publish
    </h2>

    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="featured"
          checked={formData.featured}
          onChange={handleChange}
          className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
        />

        <label className="font-semibold">
          Featured Job
        </label>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
        >
          {initialData?.id ? "Update Job" : "Publish Job"}
        </button>
      </div>
    </div>
  </div>
</form>

);
}
