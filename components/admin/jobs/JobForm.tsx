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
return (
  <div className="rounded-xl bg-white p-8 shadow">
    <h2 className="text-2xl font-bold">
      {isEdit ? "Edit Job" : "New Job"}
    </h2>

    <p className="mt-3 text-slate-600">
      Reusable JobForm is ready ✅
    </p>
  </div>
);
}