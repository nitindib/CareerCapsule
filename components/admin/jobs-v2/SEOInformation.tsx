"use client";

type Props = {
seoInformation: any;
setSeoInformation: React.Dispatch<React.SetStateAction<any>>;
};

export default function SEOInformation({
seoInformation,
setSeoInformation,
}: Props) {
const handleChange = (field: string, value: string) => {
setSeoInformation((prev: any) => ({
...prev,
[field]: value,
}));
};

return ( <div className="rounded-2xl bg-white p-6 shadow"> <h2 className="mb-6 text-2xl font-bold">
🔍 SEO Information </h2>

```
  <div className="space-y-6">
    <input
      type="text"
      value={seoInformation.seo_title || ""}
      onChange={(e) =>
        handleChange("seo_title", e.target.value)
      }
      placeholder="SEO Title"
      className="w-full rounded-xl border border-slate-300 px-4 py-3"
    />

    <textarea
      value={seoInformation.seo_description || ""}
      onChange={(e) =>
        handleChange(
          "seo_description",
          e.target.value
        )
      }
      rows={3}
      placeholder="SEO Description"
      className="w-full rounded-xl border border-slate-300 px-4 py-3"
    />

    <input
      type="text"
      value={seoInformation.seo_keywords || ""}
      onChange={(e) =>
        handleChange("seo_keywords", e.target.value)
      }
      placeholder="SEO Keywords"
      className="w-full rounded-xl border border-slate-300 px-4 py-3"
    />

    <input
      type="text"
      value={seoInformation.slug || ""}
      onChange={(e) =>
        handleChange("slug", e.target.value)
      }
      placeholder="job-slug"
      className="w-full rounded-xl border border-slate-300 px-4 py-3"
    />
  </div>
</div>

);
}
