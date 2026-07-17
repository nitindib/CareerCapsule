import { getResultById } from "@/services/results";
import ResultForm from "@/components/admin/results/ResultForm";

export default async function EditResultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const result = await getResultById(id);

  if (!result) {
    return (
      <main className="min-h-screen bg-slate-100 p-10">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-8 text-4xl font-bold">
            ✏️ Edit Result
          </h1>

          <div className="rounded-xl bg-white p-8 shadow">
            <h2 className="text-2xl font-bold text-red-600">
              Result Not Found
            </h2>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-4xl font-bold">
          ✏️ Edit Result
        </h1>

        <ResultForm
          isEdit={true}
          result={result}
        />
      </div>
    </main>
  );
}