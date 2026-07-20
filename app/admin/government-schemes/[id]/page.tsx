import AdminLayout from "@/components/admin/layout/AdminLayout";
import GovernmentSchemeForm from "@/components/admin/government-schemes/GovernmentSchemeForm";
import { getGovernmentSchemeById } from "@/services/governmentSchemes";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditGovernmentSchemePage({
  params,
}: Props) {
  const { id } = await params;

  const scheme = await getGovernmentSchemeById(id);

  if (!scheme) {
    notFound();
  }

  return (
    <AdminLayout>
      <div className="mx-auto max-w-5xl">

        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            ✏️ Edit Government Scheme
          </h1>

          <p className="mt-2 text-slate-600">
            Update the government scheme details.
          </p>

        </div>

        <GovernmentSchemeForm initialData={scheme} />

      </div>
    </AdminLayout>
  );
}