"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { updateStatus } from "@/services/admin";

type Props = {
  id: string;
  table: string;
  status: string;
};

export default function StatusToggle({
  id,
  table,
  status,
}: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function changeStatus() {
    if (loading) return;

    setLoading(true);

    let nextStatus = "pending";

    if (status === "pending") {
      nextStatus = "published";
    } else if (status === "published") {
      nextStatus = "closed";
    } else {
      nextStatus = "pending";
    }

    const error = await updateStatus(
      table,
      id,
      nextStatus
    );

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.refresh();
  }

  return (
    <button
      onClick={changeStatus}
      disabled={loading}
      className={`rounded-full px-4 py-2 text-sm font-semibold text-white
      ${
        status === "published"
          ? "bg-green-600"
          : status === "closed"
          ? "bg-red-600"
          : "bg-yellow-500"
      }`}
    >
      {loading
        ? "Updating..."
        : status === "published"
        ? "🟢 Published"
        : status === "closed"
        ? "🔴 Closed"
        : "🟡 Pending"}
    </button>
  );
}