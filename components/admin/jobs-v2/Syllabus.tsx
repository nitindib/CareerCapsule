"use client";

type SyllabusRow = {
subject: string;
topics: string;
};

type Props = {
syllabus: SyllabusRow[];
setSyllabus: React.Dispatch<React.SetStateAction<SyllabusRow[]>>;
};

export default function Syllabus({
syllabus,
setSyllabus,
}: Props) {
const handleChange = (
index: number,
field: keyof SyllabusRow,
value: string
) => {
const updated = [...syllabus];
updated[index][field] = value;
setSyllabus(updated);
};

const addRow = () => {
setSyllabus([...syllabus, { subject: "", topics: "" }]);
};

const removeRow = (index: number) => {
setSyllabus(syllabus.filter((_, i) => i !== index));
};

return ( <div className="rounded-2xl bg-white p-6 shadow"> <div className="mb-6 flex items-center justify-between"> <h2 className="text-2xl font-bold">📚 Syllabus</h2> <button
       type="button"
       onClick={addRow}
       className="rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
     >
+ Add Subject </button> </div>

```
  <div className="space-y-4">
    {syllabus.map((row, index) => (
      <div key={index} className="rounded-xl border border-slate-200 p-4">
        <div className="space-y-3">
          <input
            type="text"
            value={row.subject}
            onChange={(e) =>
              handleChange(index, "subject", e.target.value)
            }
            placeholder="General Awareness"
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
          <textarea
            value={row.topics}
            onChange={(e) =>
              handleChange(index, "topics", e.target.value)
            }
            rows={3}
            placeholder="History, Geography, Polity, Economy..."
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
          <button
            type="button"
            onClick={() => removeRow(index)}
            className="rounded-lg bg-red-100 px-3 py-2 text-red-700 hover:bg-red-200"
          >
            Remove
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

);
}
