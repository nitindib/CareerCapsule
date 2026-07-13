"use client";

type BasicInformationProps = {
  formData: {
    title: string;
    organization: string;
    post_name: string;
    category: string;
    total_posts: string;
    short_description: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export default function BasicInformation({
  formData,
  handleChange,
}: BasicInformationProps) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg">

      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        📄 Basic Information
      </h2>

      <div className="grid gap-5">

        <div>
          <label className="mb-2 block font-semibold">
            Job Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="SSC CGL 2026"
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
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
            placeholder="Staff Selection Commission"
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
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
            placeholder="Combined Graduate Level"
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Category
          </label>

          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Central Government"
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
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
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Short Description
          </label>

          <textarea
            name="short_description"
            value={formData.short_description}
            onChange={handleChange}
            rows={5}
            placeholder="Write a short description about this recruitment..."
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

      </div>
    </div>
  );
}