import AdminLayout from "@/components/admin/layout/AdminLayout";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold">
        👋 Welcome to CareerCapsule Admin
      </h1>

      <p className="mt-3 text-slate-600">
        Manage Jobs, Results, Admit Cards, Schemes and everything from one place.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-slate-500">Total Jobs</h2>
          <p className="mt-2 text-4xl font-bold">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-slate-500">Results</h2>
          <p className="mt-2 text-4xl font-bold">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-slate-500">Documents</h2>
          <p className="mt-2 text-4xl font-bold">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-slate-500">Views</h2>
          <p className="mt-2 text-4xl font-bold">0</p>
        </div>

      </div>
    </AdminLayout>
  );
}