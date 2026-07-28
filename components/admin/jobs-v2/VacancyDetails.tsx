"use client";

type VacancyRow = {
category: string;
posts: string;
};

type Props = {
vacancyDetails: VacancyRow[];
setVacancyDetails: React.Dispatch<React.SetStateAction<VacancyRow[]>>;
};

export default function VacancyDetails({
vacancyDetails,
setVacancyDetails,
}: Props) {
const handleChange = (
index: number,
field: keyof VacancyRow,
value: string
) => {
const updated = [...vacancyDetails];
updated[index][field] = value;
setVacancyDetails(updated);
};

const addRow = () => {
setVacancyDetails([
...vacancyDetails,
{ category: "", posts: "" },
]);
};

const removeRow = (index: number) => {
const updated = vacancyDetails.filter((_, i) => i !== index);
setVacancyDetails(updated);
};

return ( <div className="rounded-2xl bg-white p-6 shadow"> <div className="mb-6 flex items-center justify-between"> <h2 className="text-2xl font-bold">
📊 Vacancy Details </h2>

```
    <button
      type="button"
      onClick={addRow}
      className="rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
    >
      + Add Row
    </button>
  </div>

  <div className="overflow-hidden rounded-xl border border-slate-200">
    <table className="w-full">
      <thead className="bg-slate-100">
        <tr>
          <th className="p-4 text-left font-semibold">
            Category
          </th>

          <th className="p-4 text-left font-semibold">
            Posts
          </th>

          <th className="p-4 text-left font-semibold">
            Action
          </th>
        </tr>
      </thead>

      <tbody>
        {vacancyDetails.map((row, index) => (
          <tr key={index} className="border-t">
            <td className="p-4">
              <select
                value={row.category}
                onChange={(e) =>
                  handleChange(
                    index,
                    "category",
                    e.target.value
                  )
                }
                className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">
                  Select Category
                </option>

                <option value="General">
                  General
                </option>

                <option value="OBC">
                  OBC
                </option>

                <option value="EWS">
                  EWS
                </option>

                <option value="SC">
                  SC
                </option>

                <option value="ST">
                  ST
                </option>

                <option value="PwD">
                  PwD
                </option>

                <option value="Female">
                  Female
                </option>
              </select>
            </td>

            <td className="p-4">
              <input
                type="number"
                value={row.posts}
                onChange={(e) =>
                  handleChange(
                    index,
                    "posts",
                    e.target.value
                  )
                }
                placeholder="0"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </td>

            <td className="p-4">
              <button
                type="button"
                onClick={() => removeRow(index)}
                className="rounded-lg bg-red-100 px-3 py-2 text-red-700 hover:bg-red-200"
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

);
}
