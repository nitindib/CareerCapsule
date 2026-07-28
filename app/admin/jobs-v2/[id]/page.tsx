import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import AdminLayout from "@/components/admin/layout/AdminLayout";
import JobFormV2 from "@/components/admin/jobs-v2/JobFormV2";

export default async function EditJobV2Page({
params,
}: {
params: Promise<{ id: string }>;
}) {
const { id } = await params;

const { data: job } = await supabase
.from("jobs_v2")
.select("*")
.eq("id", id)
.single();

if (!job) {
notFound();
}

return ( <AdminLayout> <div className="mx-auto max-w-7xl"> <div className="mb-8"> <h1 className="text-4xl font-bold">
✏️ Edit Job V2 </h1> <p className="mt-2 text-slate-500">
Update saved job details </p> </div>

```
    <JobFormV2 initialData={job} />
  </div>
</AdminLayout>

);
}
