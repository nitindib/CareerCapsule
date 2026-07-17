import { getAnswerKeyById } from "@/services/answerKeys";
import AnswerKeyForm from "@/components/admin/answer-keys/AnswerKeyForm";

export default async function EditAnswerKeyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const answerKey = await getAnswerKeyById(id);

  if (!answerKey) {
    return (
      <main className="min-h-screen bg-slate-100 p-10">
        <div className="mx-auto max-w-5xl">

          <h1 className="mb-8 text-4xl font-bold">
            Answer Key Not Found
          </h1>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-10">

      <div className="mx-auto max-w-5xl">

        <h1 className="mb-8 text-4xl font-bold">
          ✏️ Edit Answer Key
        </h1>

        <AnswerKeyForm
          isEdit={true}
          answerKey={answerKey}
        />

      </div>

    </main>
  );
}