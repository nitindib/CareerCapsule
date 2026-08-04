"use client";

type Props = {
  open: boolean;
  onClose: () => void;
  updateType: string;
};

export default function ConfigureUpdateModal({
  open,
  onClose,
  updateType,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-xl rounded-2xl bg-white p-8">

        <h2 className="text-2xl font-bold">
          Configure {updateType}
        </h2>

        <p className="mt-2 text-slate-500">
          Existing records will appear here.
        </p>

        <div className="mt-8">

          <select className="w-full rounded-xl border p-4">

            <option>
              Select Existing {updateType}
            </option>

          </select>

        </div>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-xl border px-5 py-3"
          >
            Cancel
          </button>

          <button
            className="rounded-xl bg-blue-600 px-5 py-3 text-white"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}