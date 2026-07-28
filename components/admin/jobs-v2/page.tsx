import AdminLayout from "@/components/admin/layout/AdminLayout";
import JobFormV2 from "@/components/admin/jobs-v2/JobFormV2";

export default function JobsV2Page() {
  return (
    <AdminLayout>
      <div className="mx-auto max-w-7xl p-6">
        <h1 className="mb-8 text-4xl font-bold">
          🚀 Jobs V2 Admin
        </h1>

        <JobFormV2 />
      </div>
    </AdminLayout>
  );
}