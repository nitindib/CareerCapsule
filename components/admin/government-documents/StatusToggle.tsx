"use client";

import { useRouter } from "next/navigation";
import { updateGovernmentDocumentStatus } from "@/services/governmentDocuments";

type Props = {
  id: string;
  status: string;
};

export default function StatusToggle({
  id,
  status,
}: Props) {
  const router = useRouter();

  async function handleChange(
    value: string
  ) {
    const error =
      await updateGovernmentDocumentStatus(
        id,
        value
      );

    if (error) {
      alert(error.message);
      return;
    }

    router.refresh();
  }

  return (
    <select
      value={status}
      onChange={(e) =>
        handleChange(e.target.value)
      }
      className="rounded-lg border px-3 py-2"
    >
      <option value="draft">
        Draft
      </option>

      <option value="published">
        Published
      </option>

      <option value="closed">
        Closed
      </option>
    </select>
  );
}