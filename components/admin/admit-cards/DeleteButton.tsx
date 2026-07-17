"use client";

import { useRouter } from "next/navigation";
import { deleteAdmitCard } from "@/services/admitCards";

type Props = {
  id: string;
};

export default function DeleteButton({ id }: Props) {
  const router = useRouter();

  async function handleDelete() {
    const ok = confirm(
      "Are you sure you want to delete this Admit Card?"
    );

    if (!ok) return;

    const error = await deleteAdmitCard(id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Admit Card deleted successfully!");

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