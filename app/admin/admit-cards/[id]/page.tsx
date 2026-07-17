import { notFound } from "next/navigation";
import AdmitCardForm from "@/components/admin/admit-cards/AdmitCardForm";
import { getAdmitCardById } from "@/services/admitCards";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditAdmitCardPage({
  params,
}: Props) {
  const { id } = await params;

  const admitCard = await getAdmitCardById(id);

  if (!admitCard) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl">

        <h1 className="mb-8 text-4xl font-bold">
          ✏️ Edit Admit Card
        </h1>

        <AdmitCardForm
          mode="edit"
          admitCard={admitCard}
        />

      </div>
    </main>
  );
}