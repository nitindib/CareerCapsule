import { getResultById } from "@/services/results";
import ResultDetailsCard from "@/components/results/ResultDetailsCard";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ResultDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const result = await getResultById(id);

  if (!result) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <ResultDetailsCard result={result} />
      </div>
    </main>
  );
}