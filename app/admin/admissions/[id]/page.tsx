import AdminLayout from "@/components/admin/layout/AdminLayout";
import AdmissionsForm from "@/components/admin/admissions/AdmissionsForm";
import { getAdmissionById } from "@/services/admissions";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditAdmissionPage({
  params,
}: Props) {
  const { id } = await params;

  const admission = await getAdmissionById(id);

  if (!admission) {
    notFound();
  }

  return (
    <AdminLayout>
      <div className="mx-auto max-w-5xl">

        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            ✏️ Edit Admission
          </h1>

          <p className="mt-2 text-slate-600">
            Update the admission details.
          </p>

        </div>

        <AdmissionsForm
          isEdit={true}
          admission={admission}
        />

      </div>
    </AdminLayout>
  );
}