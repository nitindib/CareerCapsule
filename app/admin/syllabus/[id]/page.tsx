import AdminLayout from "@/components/admin/layout/AdminLayout";
import SyllabusForm from "@/components/admin/syllabus/SyllabusForm";
import { getSyllabusById } from "@/services/syllabus";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditSyllabusPage({
  params,
}: Props) {
  const { id } = await params;

  const syllabus = await getSyllabusById(id);

  if (!syllabus) {
    notFound();
  }

  return (
    <AdminLayout>
      <div className="mx-auto max-w-5xl">

        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            ✏️ Edit Syllabus
          </h1>

          <p className="mt-2 text-slate-600">
            Update the syllabus details.
          </p>

        </div>

        <SyllabusForm
          isEdit={true}
          syllabus={syllabus}
        />

      </div>
    </AdminLayout>
  );
}