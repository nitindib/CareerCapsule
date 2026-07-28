"use client";

type Props = {
importantLinks: any;
setImportantLinks: React.Dispatch<React.SetStateAction<any>>;
};

export default function ImportantLinks({
importantLinks,
setImportantLinks,
}: Props) {
const handleChange = (field: string, value: string) => {
setImportantLinks((prev: any) => ({
...prev,
[field]: value,
}));
};

return ( <div className="rounded-2xl bg-white p-6 shadow"> <h2 className="mb-6 text-2xl font-bold">
🔗 Important Links </h2>

```
  <div className="grid gap-6 md:grid-cols-2">
    <input
      type="url"
      value={importantLinks.apply_link || ""}
      onChange={(e) =>
        handleChange("apply_link", e.target.value)
      }
      placeholder="Apply Link"
      className="rounded-xl border border-slate-300 px-4 py-3"
    />

    <input
      type="url"
      value={importantLinks.official_website || ""}
      onChange={(e) =>
        handleChange(
          "official_website",
          e.target.value
        )
      }
      placeholder="Official Website"
      className="rounded-xl border border-slate-300 px-4 py-3"
    />

    <input
      type="url"
      value={importantLinks.notification_pdf || ""}
      onChange={(e) =>
        handleChange(
          "notification_pdf",
          e.target.value
        )
      }
      placeholder="Notification PDF"
      className="rounded-xl border border-slate-300 px-4 py-3"
    />

    <input
      type="url"
      value={importantLinks.syllabus_pdf || ""}
      onChange={(e) =>
        handleChange(
          "syllabus_pdf",
          e.target.value
        )
      }
      placeholder="Syllabus PDF"
      className="rounded-xl border border-slate-300 px-4 py-3"
    />

    <input
      type="url"
      value={importantLinks.result_link || ""}
      onChange={(e) =>
        handleChange("result_link", e.target.value)
      }
      placeholder="Result Link"
      className="rounded-xl border border-slate-300 px-4 py-3 md:col-span-2"
    />
  </div>
</div>

);
}
