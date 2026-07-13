"use client";

type ImportantDatesProps = {
  formData: {
    application_start_date: string;
    application_last_date: string;
    fee_payment_last_date: string;
    correction_last_date: string;
    exam_date: string;
    admit_card_date: string;
    result_date: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

export default function ImportantDates({
  formData,
  handleChange,
}: ImportantDatesProps) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        📅 Important Dates
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-semibold">
            Application Start Date
          </label>
          <input
            type="date"
            name="application_start_date"
            value={formData.application_start_date}
            onChange={handleChange}
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Application Last Date
          </label>
          <input
            type="date"
            name="application_last_date"
            value={formData.application_last_date}
            onChange={handleChange}
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Fee Payment Last Date
          </label>
          <input
            type="date"
            name="fee_payment_last_date"
            value={formData.fee_payment_last_date}
            onChange={handleChange}
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Correction Last Date
          </label>
          <input
            type="date"
            name="correction_last_date"
            value={formData.correction_last_date}
            onChange={handleChange}
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Exam Date
          </label>
          <input
            type="text"
            name="exam_date"
            value={formData.exam_date}
            onChange={handleChange}
            placeholder="Coming Soon / 15 Dec 2026"
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Admit Card Date
          </label>
          <input
            type="text"
            name="admit_card_date"
            value={formData.admit_card_date}
            onChange={handleChange}
            placeholder="Before Exam"
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block font-semibold">
            Result Date
          </label>
          <input
            type="text"
            name="result_date"
            value={formData.result_date}
            onChange={handleChange}
            placeholder="Will be announced later"
            className="w-full rounded-xl border p-4 focus:border-blue-500 focus:outline-none"
          />
        </div>

      </div>
    </div>
  );
}