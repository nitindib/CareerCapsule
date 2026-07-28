import AdminLayout from "@/components/admin/layout/AdminLayout";
import JobFormV2 from "@/components/admin/jobs-v2/JobFormV2";

export default function NewJobPage() {
  return (
    <AdminLayout>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            ➕ Add New Job
          </h1>

          <p className="mt-2 text-slate-600">
            Create a new Government Job Notification
          </p>
        </div>

        <JobFormV2 />
      </div>
    </AdminLayout>
  );
}