"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { deleteGovernmentScheme } from "@/services/governmentSchemes";

type Props = {
  id: string;
};

export default function DeleteButton({
  id,
}: Props) {

  const router = useRouter();

  const [isPending, startTransition] =
    useTransition();

  async function handleDelete() {

    const ok = confirm(
      "Delete this Government Scheme?"
    );

    if (!ok) return;

    await deleteGovernmentScheme(id);

    startTransition(() => {

      router.refresh();

    });

  }
    return (

    <button
      onClick={handleDelete}
      disabled={isPending}
      className="rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50"
    >
      {isPending ? "Deleting..." : "Delete"}
    </button>

  );

}