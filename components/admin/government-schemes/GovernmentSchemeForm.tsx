"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";

type Props = {
  initialData?: any;
};

export default function GovernmentSchemeForm({
  initialData,
}: Props) {

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] = useState({

    title:
      initialData?.title ?? "",

    scheme_name:
      initialData?.scheme_name ?? "",

    ministry:
      initialData?.ministry ?? "",

    scheme_type:
      initialData?.scheme_type ?? "",

    category:
      initialData?.category ?? "",

    beneficiaries:
      initialData?.beneficiaries ?? "",

    eligibility:
      initialData?.eligibility ?? "",

    benefits:
      initialData?.benefits ?? "",

    required_documents:
      initialData?.required_documents ?? "",

    apply_mode:
      initialData?.apply_mode ?? "",

    official_website:
      initialData?.official_website ?? "",

    apply_link:
      initialData?.apply_link ?? "",

    notification_pdf:
      initialData?.notification_pdf ?? "",

    launch_date:
      initialData?.launch_date ?? "",

    last_date:
      initialData?.last_date ?? "",

    description:
      initialData?.description ?? "",

    seo_title:
      initialData?.seo_title ?? "",

    seo_description:
      initialData?.seo_description ?? "",

    featured:
      initialData?.featured ?? false,

    status:
      initialData?.status ?? "draft",

  });

  function handleChange(
    e: any
  ) {

    const { name, value, type, checked } =
      e.target;

    setForm((prev: any) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
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
        .from("government_schemes")
        .update(form)
        .eq("id", initialData.id));

    } else {

      ({ error } = await supabase
        .from("government_schemes")
        .insert(form));

    }

    setLoading(false);

    if (error) {

      alert(error.message);

      return;

    }

    router.push("/admin/government-schemes");

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
            Title
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
            Scheme Name
          </label>

          <input
            name="scheme_name"
            value={form.scheme_name}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold">
            Ministry
          </label>

          <input
            name="ministry"
            value={form.ministry}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold">
            Scheme Type
          </label>

          <select
            name="scheme_type"
            value={form.scheme_type}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          >

            <option value="">
              Select
            </option>

            <option value="Central">
              Central
            </option>

            <option value="State">
              State
            </option>

          </select>

        </div>

      </div>
            <div className="grid grid-cols-2 gap-6">

        <div>

          <label className="mb-2 block font-semibold">
            Category
          </label>

          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold">
            Beneficiaries
          </label>

          <input
            name="beneficiaries"
            value={form.beneficiaries}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold">
            Eligibility
          </label>

          <textarea
            name="eligibility"
            value={form.eligibility}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold">
            Benefits
          </label>

          <textarea
            name="benefits"
            value={form.benefits}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold">
            Required Documents
          </label>

          <textarea
            name="required_documents"
            value={form.required_documents}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold">
            Apply Mode
          </label>

          <select
            name="apply_mode"
            value={form.apply_mode}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          >

            <option value="">
              Select
            </option>

            <option value="Online">
              Online
            </option>

            <option value="Offline">
              Offline
            </option>

            <option value="Both">
              Both
            </option>

          </select>

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
            Apply Link
          </label>

          <input
            name="apply_link"
            value={form.apply_link}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold">
            Notification PDF
          </label>

          <input
            name="notification_pdf"
            value={form.notification_pdf}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold">
            Launch Date
          </label>

          <input
            type="date"
            name="launch_date"
            value={form.launch_date}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold">
            Last Date
          </label>

          <input
            type="date"
            name="last_date"
            value={form.last_date}
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
          rows={6}
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
            Featured Scheme
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
            ? "Update Scheme"
            : "Create Scheme"}
        </button>

      </div>

    </form>

  );

}