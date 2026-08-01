type ImportantDatesProps = {
  formData: any;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

export default function ImportantDates({
  formData,
  handleChange,
}: ImportantDatesProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        📅 Important Dates
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-semibold">
            Notification Date
          </label>

          <input
            type="date"
            name="notification_date"
            value={formData.notification_date || ""}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Application Start Date
          </label>

          <input
            type="date"
            name="application_start_date"
            value={formData.application_start_date || ""}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Application Last Date
          </label>

          <input
            type="date"
            name="application_last_date"
            value={formData.application_last_date || ""}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Fee Last Date
          </label>

          <input
            type="date"
            name="fee_payment_last_date"
value={formData.fee_payment_last_date || ""}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Correction Date
          </label>

          <input
  type="date"
  name="correction_last_date"
  value={formData.correction_last_date || ""}
  onChange={handleChange}
  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Exam Date
          </label>

          <input
            type="date"
            name="exam_date"
            value={formData.exam_date || ""}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Admit Card Date
          </label>

          <input
            type="date"
            name="admit_card_date"
            value={formData.admit_card_date || ""}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Result Date
          </label>

          <input
            type="date"
            name="result_date"
            value={formData.result_date || ""}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
  <label className="mb-2 block font-semibold">
    Answer Key Date
  </label>

  <input
    type="date"
    name="answer_key_date"
    value={formData.answer_key_date || ""}
    onChange={handleChange}
    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
<div>
  <label className="mb-2 block font-semibold">
    Cut Off Date
  </label>

  <input
    type="date"
    name="cut_off_date"
    value={formData.cut_off_date || ""}
    onChange={handleChange}
    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
      </div>
    </div>
  );
}