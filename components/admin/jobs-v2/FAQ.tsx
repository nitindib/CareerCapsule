"use client";

type FAQRow = {
question: string;
answer: string;
};

type Props = {
faq: FAQRow[];
setFaq: React.Dispatch<React.SetStateAction<FAQRow[]>>;
};

export default function FAQ({ faq, setFaq }: Props) {
const handleChange = (
index: number,
field: keyof FAQRow,
value: string
) => {
const updated = [...faq];
updated[index][field] = value;
setFaq(updated);
};

const addRow = () => {
setFaq([...faq, { question: "", answer: "" }]);
};

const removeRow = (index: number) => {
setFaq(faq.filter((_, i) => i !== index));
};

return ( <div className="rounded-2xl bg-white p-6 shadow"> <div className="mb-6 flex items-center justify-between"> <h2 className="text-2xl font-bold">❓ FAQ</h2> <button
       type="button"
       onClick={addRow}
       className="rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
     >
+ Add FAQ </button> </div>

```
  <div className="space-y-4">
    {faq.map((row, index) => (
      <div key={index} className="rounded-xl border border-slate-200 p-4">
        <div className="space-y-3">
          <input
            type="text"
            value={row.question}
            onChange={(e) =>
              handleChange(index, "question", e.target.value)
            }
            placeholder="What is the last date to apply?"
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
          <textarea
            value={row.answer}
            onChange={(e) =>
              handleChange(index, "answer", e.target.value)
            }
            rows={3}
            placeholder="The last date to apply is 30 July 2027."
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
