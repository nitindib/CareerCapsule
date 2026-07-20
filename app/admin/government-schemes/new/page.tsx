import AdminLayout from "@/components/admin/layout/AdminLayout";
import GovernmentSchemeForm from "@/components/admin/government-schemes/GovernmentSchemeForm";

export default function NewGovernmentSchemePage() {
  return (
    <AdminLayout>
      <div className="mx-auto max-w-5xl">

        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            🏛 Add New Government Scheme
          </h1>

          <p className="mt-2 text-slate-600">
            Create a new government scheme entry for your website.
          </p>

        </div>

        <GovernmentSchemeForm />

      </div>
    </AdminLayout>
  );
}