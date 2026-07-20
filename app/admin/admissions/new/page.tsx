import AdminLayout from "@/components/admin/layout/AdminLayout";
import AdmissionsForm from "@/components/admin/admissions/AdmissionsForm";

export default function NewAdmissionPage() {
  return (
    <AdminLayout>
      <div className="mx-auto max-w-5xl">

        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            🎓 Add New Admission
          </h1>

          <p className="mt-2 text-slate-600">
            Create a new admission entry for your website.
          </p>

        </div>

        <AdmissionsForm />

      </div>
    </AdminLayout>
  );
}