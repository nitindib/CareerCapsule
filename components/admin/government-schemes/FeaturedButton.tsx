"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { toggleFeaturedGovernmentScheme } from "@/services/governmentSchemes";

type Props = {
  id: string;
  featured: boolean;
};

export default function FeaturedButton({
  id,
  featured,
}: Props) {

  const router = useRouter();

  const [isPending, startTransition] =
    useTransition();

  async function handleClick() {

    await toggleFeaturedGovernmentScheme(
      id,
      featured
    );

    startTransition(() => {

      router.refresh();

    });

  }
    return (

    <button
      onClick={handleClick}
      disabled={isPending}
      className={`rounded-lg px-3 py-2 text-sm font-semibold text-white ${
        featured
          ? "bg-yellow-500 hover:bg-yellow-600"
          : "bg-slate-600 hover:bg-slate-700"
      } disabled:opacity-50`}
    >
      {featured ? "⭐ Featured" : "☆ Normal"}
    </button>

  );

}