"use client";

import { useRouter } from "next/navigation";
import { deleteResult } from "@/services/results";
type Props = {
  id: string;
};

export default function DeleteButton({ id }: Props) {
  const router = useRouter();

  async function handleDelete() {
    const ok = confirm(
      "Are you sure you want to delete this result?"
    );

    if (!ok) return;

    const error = await deleteResult(id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Result deleted successfully!");

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