"use client";

type QualificationRow = {
type: string;
details: string;
};

type Props = {
qualification: QualificationRow[];
setQualification: React.Dispatch<
React.SetStateAction<QualificationRow[]>

> ;
 };

export default function Qualification({
qualification,
setQualification,
}: Props) {
const handleChange = (
index: number,
field: keyof QualificationRow,
value: string
) => {
const updated = [...qualification];
updated[index][field] = value;
setQualification(updated);
};

const addRow = () => {
setQualification([
...qualification,
{ type: "", details: "" },
]);
};

const removeRow = (index: number) => {
const updated = qualification.filter((_, i) => i !== index);
setQualification(updated);
};

return ( <div className="rounded-2xl bg-white p-6 shadow"> <div className="mb-6 flex items-center justify-between"> <h2 className="text-2xl font-bold">
🎓 Qualification </h2>

```
    <button
      type="button"
      onClick={addRow}
      className="rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
    >
      + Add Qualification
    </button>
  </div>

  <div className="space-y-4">
    {qualification.map((row, index) => (
      <div
        key={index}
        className="rounded-xl border border-slate-200 p-4"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold">
              Type
            </label>

            <select
              value={row.type}
              onChange={(e) =>
                handleChange(
                  index,
                  "type",
                  e.target.value
                )
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">
                Select Type
              </option>
              <option value="Essential">
                Essential
              </option>
              <option value="Desirable">
                Desirable
              </option>
              <option value="Experience">
                Experience
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Details
            </label>

            <input
              type="text"
              value={row.details}
              onChange={(e) =>
                handleChange(
                  index,
                  "details",
                  e.target.value
                )
              }
              placeholder="Bachelor Degree in any discipline"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => removeRow(index)}
          className="mt-3 rounded-lg bg-red-100 px-3 py-2 text-red-700 hover:bg-red-200"
        >
          Remove
        </button>
      </div>
    ))}
  </div>
</div>

);
}
