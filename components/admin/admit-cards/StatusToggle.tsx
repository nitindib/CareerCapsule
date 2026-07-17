"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { updateAdmitCardStatus } from "@/services/admitCards";

type Props = {
  id: string;
  status: string;
};

export default function StatusToggle({
  id,
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

    const error = await updateAdmitCardStatus(
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
      className={`
        rounded-full
        px-4
        py-2
        text-sm
        font-semibold
        text-white
        transition
        disabled:opacity-60
        disabled:cursor-not-allowed

        ${
          status === "published"
            ? "bg-green-600 hover:bg-green-700"
            : status === "closed"
            ? "bg-red-600 hover:bg-red-700"
            : "bg-yellow-500 hover:bg-yellow-600"
        }
      `}
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