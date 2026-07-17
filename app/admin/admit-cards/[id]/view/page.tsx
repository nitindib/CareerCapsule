import { notFound } from "next/navigation";
import { getAdmitCardById } from "@/services/admitCards";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ViewAdmitCardPage({
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
          👁 View Admit Card
        </h1>

        <div className="grid gap-6">

          <div>
            <h3 className="font-semibold text-slate-500">
              Title
            </h3>
            <p className="text-xl">{admitCard.title}</p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-500">
              Organization
            </h3>
            <p>{admitCard.organization}</p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-500">
              Admit Card Date
            </h3>
            <p>{admitCard.admit_card_date}</p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-500">
              Exam Date
            </h3>
            <p>{admitCard.exam_date}</p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-500">
              Description
            </h3>
            <p>{admitCard.description}</p>
          </div>

        </div>

      </div>
    </main>
  );
}