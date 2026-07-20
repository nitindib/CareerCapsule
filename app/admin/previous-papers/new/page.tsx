import AdminLayout from "@/components/admin/layout/AdminLayout";
import PreviousPapersForm from "@/components/admin/previous-papers/PreviousPapersForm";

export default function NewPreviousPaperPage() {
  return (
    <AdminLayout>
      <div className="mx-auto max-w-5xl">

        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            📄 Add New Previous Paper
          </h1>

          <p className="mt-2 text-slate-600">
            Create a new previous paper entry for your website.
          </p>

        </div>

        <PreviousPapersForm />

      </div>
    </AdminLayout>
  );
}