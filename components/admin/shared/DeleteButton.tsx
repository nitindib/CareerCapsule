"use client";

import { useRouter } from "next/navigation";
import { deleteItem } from "@/services/admin";

type Props = {
  id: string;
  table: string;
  itemName?: string;
};

export default function DeleteButton({
  id,
  table,
  itemName = "item",
}: Props) {
  const router = useRouter();

  async function handleDelete() {
    const ok = confirm(
      `Are you sure you want to delete this ${itemName}?`
    );

    if (!ok) return;

    const error = await deleteItem(table, id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Deleted Successfully!");

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