"use client";

import { useRouter } from "next/navigation";
import { deleteAdmission } from "@/services/admissions";

type Props = {
  id: string;
};

export default function DeleteButton({ id }: Props) {
  const router = useRouter();

  async function handleDelete() {
    const ok = confirm(
      "Are you sure you want to delete this admission?"
    );

    if (!ok) return;

    const error = await deleteAdmission(id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Admission deleted successfully!");

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