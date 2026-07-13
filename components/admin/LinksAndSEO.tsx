"use client";

type LinksAndSEOProps = {
  formData: {
    official_website: string;
    apply_link: string;
    notification_pdf: string;
    selection_process: string;
    how_to_apply: string;
    documents_required: string;
    seo_title: string;
    seo_description: string;
    tags: string;
    featured: boolean;
    status: string;
  };
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
};

export default function LinksAndSEO({
  formData,
  handleChange,
}: LinksAndSEOProps) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        🌐 Links & SEO
      </h2>

      <div className="grid gap-6">

        {/* Official Website */}
        <div>
          <label className="mb-2 block font-semibold">
            Official Website
          </label>

          <input
            type="url"
            name="official_website"
            value={formData.official_website}
            onChange={handleChange}
            placeholder="https://ssc.gov.in"
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Apply Link */}
        <div>
          <label className="mb-2 block font-semibold">
            Apply Link
          </label>

          <input
            type="url"
            name="apply_link"
            value={formData.apply_link}
            onChange={handleChange}
            placeholder="https://ssc.gov.in/apply"
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Notification PDF */}
        <div>
          <label className="mb-2 block font-semibold">
            Notification PDF
          </label>

          <input
            type="url"
            name="notification_pdf"
            value={formData.notification_pdf}
            onChange={handleChange}
            placeholder="https://ssc.gov.in/notification.pdf"
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Selection Process */}
        <div>
          <label className="mb-2 block font-semibold">
            Selection Process
          </label>

          <textarea
            name="selection_process"
            value={formData.selection_process}
            onChange={handleChange}
            rows={4}
            placeholder="Tier-I, Tier-II, Document Verification..."
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* How To Apply */}
        <div>
          <label className="mb-2 block font-semibold">
            How To Apply
          </label>

          <textarea
            name="how_to_apply"
            value={formData.how_to_apply}
            onChange={handleChange}
            rows={5}
            placeholder="Step 1: Visit official website..."
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Documents Required */}
        <div>
          <label className="mb-2 block font-semibold">
            Documents Required
          </label>

          <textarea
            name="documents_required"
            value={formData.documents_required}
            onChange={handleChange}
            rows={4}
            placeholder="Photo, Signature, Aadhaar, Graduation Certificate..."
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* SEO Title */}
        <div>
          <label className="mb-2 block font-semibold">
            SEO Title
          </label>

          <input
            type="text"
            name="seo_title"
            value={formData.seo_title}
            onChange={handleChange}
            placeholder="SSC CGL Recruitment 2026 Apply Online | CareerCapsule"
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* SEO Description */}
        <div>
          <label className="mb-2 block font-semibold">
            SEO Description
          </label>

          <textarea
            name="seo_description"
            value={formData.seo_description}
            onChange={handleChange}
            rows={4}
            placeholder="Apply online for SSC CGL Recruitment 2026..."
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="mb-2 block font-semibold">
            Tags
          </label>

          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="SSC,CGL,Graduate,Government Job"
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />

          <p className="mt-2 text-sm text-slate-500">
            Separate tags using commas (,)
          </p>
        </div>

        {/* Featured */}
        <div>
          <label className="mb-2 block font-semibold">
            Featured Job
          </label>

          <select
            name="featured"
            value={formData.featured ? "true" : "false"}
            onChange={handleChange}
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="mb-2 block font-semibold">
            Status
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

      </div>
    </div>
  );
}