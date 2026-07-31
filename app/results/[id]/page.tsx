import { getResultById } from "@/services/results";
import { notFound, redirect } from "next/navigation";

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

  // Agar job_id hai to direct Job Page par bhej do
  if (result.job_id) {
    redirect(`/jobs/${result.job_id}`);
  }

  notFound();
}