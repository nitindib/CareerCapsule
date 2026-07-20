"use client";

import { useRouter } from "next/navigation";
import { deleteGovernmentDocument } from "@/services/governmentDocuments";

type Props = {
  id: string;
};

export default function DeleteButton({ id }: Props) {
  const router = useRouter();

  async function handleDelete() {
    const ok = confirm(
      "Are you sure you want to delete this document?"
    );

    if (!ok) return;

    const error = await deleteGovernmentDocument(id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Document deleted successfully!");

    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
    >
      Delete
    </button>
  );
}