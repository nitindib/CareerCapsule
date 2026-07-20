"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { updateGovernmentSchemeStatus } from "@/services/governmentSchemes";

type Props = {
  id: string;
  status: string;
};

export default function StatusToggle({
  id,
  status,
}: Props) {

  const router = useRouter();

  const [isPending, startTransition] =
    useTransition();

  async function handleChange(
    value: string
  ) {

    await updateGovernmentSchemeStatus(
      id,
      value
    );

    startTransition(() => {

      router.refresh();

    });

  }
    return (

    <select
      value={status}
      disabled={isPending}
      onChange={(e) =>
        handleChange(e.target.value)
      }
      className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
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