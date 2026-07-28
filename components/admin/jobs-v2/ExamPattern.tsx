"use client";

type PatternRow = {
subject: string;
questions: string;
marks: string;
};

type Props = {
examPattern: PatternRow[];
setExamPattern: React.Dispatch<React.SetStateAction<PatternRow[]>>;
};

export default function ExamPattern({
examPattern,
setExamPattern,
}: Props) {
const handleChange = (
index: number,
field: keyof PatternRow,
value: string
) => {
const updated = [...examPattern];
updated[index][field] = value;
setExamPattern(updated);
};

const addRow = () => {
setExamPattern([
...examPattern,
{ subject: "", questions: "", marks: "" },
]);
};

const removeRow = (index: number) => {
setExamPattern(examPattern.filter((_, i) => i !== index));
};

return ( <div className="rounded-2xl bg-white p-6 shadow"> <div className="mb-6 flex items-center justify-between"> <h2 className="text-2xl font-bold">📝 Exam Pattern</h2> <button
       type="button"
       onClick={addRow}
       className="rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
     >
+ Add Subject </button> </div>

```
  <div className="overflow-hidden rounded-xl border border-slate-200">
    <table className="w-full">
      <thead className="bg-slate-100">
        <tr>
          <th className="p-4 text-left">Subject</th>
          <th className="p-4 text-left">Questions</th>
          <th className="p-4 text-left">Marks</th>
          <th className="p-4 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {examPattern.map((row, index) => (
          <tr key={index} className="border-t">
            <td className="p-4">
              <input
                type="text"
                value={row.subject}
                onChange={(e) =>
                  handleChange(index, "subject", e.target.value)
                }
                placeholder="General Intelligence"
                className="w-full rounded-lg border border-slate-300 px-3 py-2"
              />
            </td>
            <td className="p-4">
              <input
                type="number"
                value={row.questions}
                onChange={(e) =>
                  handleChange(index, "questions", e.target.value)
                }
                placeholder="25"
                className="w-full rounded-lg border border-slate-300 px-3 py-2"
              />
            </td>
            <td className="p-4">
              <input
                type="number"
                value={row.marks}
                onChange={(e) =>
                  handleChange(index, "marks", e.target.value)
                }
                placeholder="50"
                className="w-full rounded-lg border border-slate-300 px-3 py-2"
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
