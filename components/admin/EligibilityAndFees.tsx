"use client";

type EligibilityAndFeesProps = {
  formData: {
    qualification: string;
    age_limit: string;
    age_relaxation: string;
    application_fee: string;
    salary: string;
    job_location: string;
    apply_mode: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export default function EligibilityAndFees({
  formData,
  handleChange,
}: EligibilityAndFeesProps) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        🎯 Eligibility & Fees
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Qualification */}
        <div className="md:col-span-2">
          <label className="mb-2 block font-semibold">
            Qualification
          </label>

          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            placeholder="Graduate / 12th Pass / Diploma / B.Tech"
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Age Limit */}
        <div>
          <label className="mb-2 block font-semibold">
            Age Limit
          </label>

          <input
            type="text"
            name="age_limit"
            value={formData.age_limit}
            onChange={handleChange}
            placeholder="18 - 30 Years"
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Age Relaxation */}
        <div>
          <label className="mb-2 block font-semibold">
            Age Relaxation
          </label>

          <input
            type="text"
            name="age_relaxation"
            value={formData.age_relaxation}
            onChange={handleChange}
            placeholder="As Per Government Rules"
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Application Fee */}
        <div>
          <label className="mb-2 block font-semibold">
            Application Fee
          </label>

          <input
            type="text"
            name="application_fee"
            value={formData.application_fee}
            onChange={handleChange}
            placeholder="General: ₹100 | SC/ST: ₹0"
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Salary */}
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
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Job Location */}
        <div>
          <label className="mb-2 block font-semibold">
            Job Location
          </label>

          <input
            type="text"
            name="job_location"
            value={formData.job_location}
            onChange={handleChange}
            placeholder="All India / Uttar Pradesh"
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Apply Mode */}
        <div>
          <label className="mb-2 block font-semibold">
            Apply Mode
          </label>

          <select
            name="apply_mode"
            value={formData.apply_mode}
            onChange={handleChange}
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          >
            <option value="">Select Apply Mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Online + Offline">Online + Offline</option>
          </select>
        </div>

      </div>
    </div>
  );
}