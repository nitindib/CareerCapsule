"use client";

type Props = {
documentsRequired: string[];
setDocumentsRequired: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function DocumentsRequired({
documentsRequired,
setDocumentsRequired,
}: Props) {
const handleChange = (index: number, value: string) => {
const updated = [...documentsRequired];
updated[index] = value;
setDocumentsRequired(updated);
};

const addRow = () => {
setDocumentsRequired([...documentsRequired, ""]);
};

const removeRow = (index: number) => {
setDocumentsRequired(
documentsRequired.filter((_, i) => i !== index)
);
};

return ( <div className="rounded-2xl bg-white p-6 shadow"> <div className="mb-6 flex items-center justify-between"> <h2 className="text-2xl font-bold">
📄 Documents Required </h2>

```
    <button
      type="button"
      onClick={addRow}
      className="rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
    >
      + Add Document
    </button>
  </div>

  <div className="space-y-3">
    {documentsRequired.map((doc, index) => (
      <div key={index} className="flex gap-3">
        <input
          type="text"
          value={doc}
          onChange={(e) =>
            handleChange(index, e.target.value)
          }
          placeholder="10th Marksheet"
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
