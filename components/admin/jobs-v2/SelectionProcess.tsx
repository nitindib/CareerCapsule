"use client";

type Props = {
selectionProcess: string[];
setSelectionProcess: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function SelectionProcess({
selectionProcess,
setSelectionProcess,
}: Props) {
const handleChange = (index: number, value: string) => {
const updated = [...selectionProcess];
updated[index] = value;
setSelectionProcess(updated);
};

const addRow = () => {
setSelectionProcess([...selectionProcess, ""]);
};

const removeRow = (index: number) => {
setSelectionProcess(selectionProcess.filter((_, i) => i !== index));
};

return ( <div className="rounded-2xl bg-white p-6 shadow"> <div className="mb-6 flex items-center justify-between"> <h2 className="text-2xl font-bold">🎯 Selection Process</h2> <button
       type="button"
       onClick={addRow}
       className="rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
     >
+ Add Step </button> </div>

```
  <div className="space-y-3">
    {selectionProcess.map((step, index) => (
      <div key={index} className="flex gap-3">
        <input
          type="text"
          value={step}
          onChange={(e) => handleChange(index, e.target.value)}
          placeholder="Written Examination"
          className="flex-1 rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={() => removeRow(index)}
          className="rounded-lg bg-red-100 px-3 py-2 text-red-700 hover:bg-red-200"
        >
          Remove
        </button>
      </div>
    ))}
  </div>
</div>

);
}
