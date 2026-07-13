"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [postName, setPostName] = useState("");
  const [qualification, setQualification] = useState("");
  const [lastDate, setLastDate] = useState("");

  const saveJob = async () => {
    const { error } = await supabase.from("jobs").insert([
      {
        title: title,
        organization: organization,
        post_name: postName,
        qualification: qualification,
        application_last_date: lastDate,
      },
    ]);

    if (error) {
      alert(error.message);
    } else {
      alert("✅ Job Saved Successfully!");

      setTitle("");
      setOrganization("");
      setPostName("");
      setQualification("");
      setLastDate("");
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-4xl mx-auto rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-8 text-4xl font-bold">
          CareerCapsule Admin
        </h1>

        <div className="grid gap-5">
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
            type="date"
            value={lastDate}
            onChange={(e) => setLastDate(e.target.value)}
            className="border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="Fee"
            className="border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="Age Limit"
            className="border rounded-xl p-4"
          />

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
            className="rounded-xl bg-blue-600 py-4 font-bold text-white hover:bg-blue-700"
          >
            Save Job
          </button>
        </div>
      </div>
    </main>
  );
}