"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function NewResultPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [resultDate, setResultDate] = useState("");
  const [description, setDescription] = useState("");
  const [officialWebsite, setOfficialWebsite] = useState("");
  const [resultPdf, setResultPdf] = useState("");
  const [featured, setFeatured] = useState(false);

  async function saveResult() {
    const { error } = await supabase
      .from("results")
      .insert({
        title,
        organization,
        result_date: resultDate || null,
        description,
        official_website: officialWebsite,
        result_pdf: resultPdf,
        featured,
        status: "published",
      });

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Result Saved Successfully!");

    router.push("/admin/results");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow">

        <h1 className="mb-8 text-4xl font-bold">
          🏆 Add Result
        </h1>

        <div className="grid gap-5">

          <input
            placeholder="Result Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-xl border p-4"
          />

          <input
            placeholder="Organization"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className="rounded-xl border p-4"
          />

          <input
            type="date"
            value={resultDate}
            onChange={(e) => setResultDate(e.target.value)}
            className="rounded-xl border p-4"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="rounded-xl border p-4"
            rows={5}
          />

          <input
            placeholder="Official Website"
            value={officialWebsite}
            onChange={(e) => setOfficialWebsite(e.target.value)}
            className="rounded-xl border p-4"
          />

          <input
            placeholder="Result PDF Link"
            value={resultPdf}
            onChange={(e) => setResultPdf(e.target.value)}
            className="rounded-xl border p-4"
          />

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
            />
            Featured Result
          </label>

          <button
            onClick={saveResult}
            className="rounded-xl bg-blue-600 py-4 font-bold text-white hover:bg-blue-700"
          >
            Save Result
          </button>

        </div>

      </div>
    </main>
  );
}