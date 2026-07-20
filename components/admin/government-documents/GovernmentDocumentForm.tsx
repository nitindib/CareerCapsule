"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Props = {
  initialData?: any;
};

export default function GovernmentDocumentForm({
  initialData,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] = useState({
    title: initialData?.title || "",
    category: initialData?.category || "",
    required_for:
      initialData?.required_for || "",
    how_to_apply:
      initialData?.how_to_apply || "",
    official_website:
      initialData?.official_website || "",
    download_form:
      initialData?.download_form || "",
    description:
      initialData?.description || "",
    featured:
      initialData?.featured || false,
    status:
      initialData?.status || "draft",
    seo_title:
      initialData?.seo_title || "",
    seo_description:
      initialData?.seo_description || "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  }
    async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    let error;

    if (initialData) {
      ({ error } = await supabase
        .from("government_documents")
        .update(form)
        .eq("id", initialData.id));
    } else {
      ({ error } = await supabase
        .from("government_documents")
        .insert(form));
    }

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin/government-documents");
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl bg-white p-8 shadow-xl"
    >
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="mb-2 block font-semibold">
            Document Title
          </label>

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Category
          </label>

          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
            placeholder="e.g. Aadhaar, PAN, Passport"
          />
        </div>

        <div className="col-span-2">
          <label className="mb-2 block font-semibold">
            Required For
          </label>

          <input
            name="required_for"
            value={form.required_for}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
            placeholder="e.g. Job Application, Bank Account"
          />
        </div>
      </div>
            <div className="grid grid-cols-2 gap-6">

        <div>

          <label className="mb-2 block font-semibold">
            Required For
          </label>

          <input
            name="required_for"
            value={form.required_for}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold">
            How to Apply
          </label>

          <textarea
            name="how_to_apply"
            value={form.how_to_apply}
            onChange={handleChange}
            rows={3}
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold">
            Official Website
          </label>

          <input
            name="official_website"
            value={form.official_website}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold">
            Download Form
          </label>

          <input
            name="download_form"
            value={form.download_form}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

        </div>

      </div>

      <div>

        <label className="mb-2 block font-semibold">
          Description
        </label>

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-xl border p-3"
        />

      </div>

      <div className="grid grid-cols-2 gap-6">

        <div>

          <label className="mb-2 block font-semibold">
            SEO Title
          </label>

          <input
            name="seo_title"
            value={form.seo_title}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold">
            SEO Description
          </label>

          <textarea
            name="seo_description"
            value={form.seo_description}
            onChange={handleChange}
            rows={3}
            className="w-full rounded-xl border p-3"
          />

        </div>

      </div>
            <div className="flex items-center justify-between rounded-xl border p-5">

        <div className="flex items-center gap-3">

          <input
            id="featured"
            type="checkbox"
            name="featured"
            checked={form.featured}
            onChange={handleChange}
          />

          <label htmlFor="featured">
            Featured Document
          </label>

        </div>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="rounded-xl border p-3"
        >

          <option value="draft">
            Draft
          </option>

          <option value="published">
            Published
          </option>

          <option value="closed">
            Closed
          </option>

        </select>

      </div>

      <div className="flex justify-end">

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading
            ? "Saving..."
            : initialData
            ? "Update Document"
            : "Create Document"}
        </button>

      </div>

    </form>

  );

}