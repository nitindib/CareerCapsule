"use client";

type Props = {
ageLimit: any;
setAgeLimit: React.Dispatch<React.SetStateAction<any>>;
};

export default function AgeLimit({
ageLimit,
setAgeLimit,
}: Props) {
const handleChange = (field: string, value: string) => {
setAgeLimit((prev: any) => ({
...prev,
[field]: value,
}));
};

return ( <div className="rounded-2xl bg-white p-6 shadow"> <h2 className="mb-6 text-2xl font-bold">
🎂 Age Limit </h2>

```
  <div className="grid gap-6 md:grid-cols-2">
    <div>
      <label className="mb-2 block font-semibold">
        Minimum Age
      </label>

      <input
        type="number"
        value={ageLimit.min_age || ""}
        onChange={(e) =>
          handleChange("min_age", e.target.value)
        }
        placeholder="18"
        className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="mb-2 block font-semibold">
        Maximum Age
      </label>

      <input
        type="number"
        value={ageLimit.max_age || ""}
        onChange={(e) =>
          handleChange("max_age", e.target.value)
        }
        placeholder="30"
        className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="md:col-span-2">
      <label className="mb-2 block font-semibold">
        Age Relaxation
      </label>

      <textarea
        value={ageLimit.relaxation || ""}
        onChange={(e) =>
          handleChange("relaxation", e.target.value)
        }
        rows={3}
        placeholder="SC/ST: 5 years, OBC: 3 years"
        className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
</div>

);
}
