import AdminLayout from "@/components/admin/layout/AdminLayout";
import PreviousPapersForm from "@/components/admin/previous-papers/PreviousPapersForm";
import { getPreviousPaperById } from "@/services/previousPapers";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditPreviousPaperPage({
  params,
}: Props) {
  const { id } = await params;

  const paper = await getPreviousPaperById(id);

  if (!paper) {
    notFound();
  }

  return (
    <AdminLayout>
      <div className="mx-auto max-w-5xl">

        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            ✏️ Edit Previous Paper
          </h1>

          <p className="mt-2 text-slate-600">
            Update the previous paper details.
          </p>

        </div>

        <PreviousPapersForm
          isEdit={true}
          paper={paper}
        />

      </div>
    </AdminLayout>
  );
}