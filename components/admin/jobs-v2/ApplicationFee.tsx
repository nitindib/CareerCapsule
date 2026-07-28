"use client";

type FeeRow = {
category: string;
fee: string;
};

type Props = {
applicationFee: FeeRow[];
setApplicationFee: React.Dispatch<React.SetStateAction<FeeRow[]>>;
};

export default function ApplicationFee({
applicationFee,
setApplicationFee,
}: Props) {
const handleChange = (
index: number,
field: keyof FeeRow,
value: string
) => {
const updated = [...applicationFee];
updated[index][field] = value;
setApplicationFee(updated);
};

const addRow = () => {
setApplicationFee([
...applicationFee,
{ category: "", fee: "" },
]);
};

const removeRow = (index: number) => {
const updated = applicationFee.filter((_, i) => i !== index);
setApplicationFee(updated);
};

return ( <div className="rounded-2xl bg-white p-6 shadow"> <div className="mb-6 flex items-center justify-between"> <h2 className="text-2xl font-bold">
💰 Application Fee </h2>

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
            Fee
          </th>

          <th className="p-4 text-left font-semibold">
            Action
          </th>
        </tr>
      </thead>

      <tbody>
        {applicationFee.map((row, index) => (
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
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="EWS">EWS</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="PwD">PwD</option>
                <option value="Female">Female</option>
              </select>
            </td>

            <td className="p-4">
              <input
                type="text"
                value={row.fee}
                onChange={(e) =>
                  handleChange(index, "fee", e.target.value)
                }
                placeholder="₹100"
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
