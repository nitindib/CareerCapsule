"use client";

import { useRouter } from "next/navigation";
import { toggleFeatured } from "@/services/admin";

type Props = {
  id: string;
  table: string;
  featured: boolean;
};

export default function FeaturedButton({
  id,
  table,
  featured,
}: Props) {
  const router = useRouter();

  async function handleClick() {
    const error = await toggleFeatured(
      table,
      id,
      featured
    );

    if (error) {
      alert(error.message);
      return;
    }

    router.refresh();
  }

  return (
    <button
      onClick={handleClick}
      className={`rounded-lg px-4 py-2 font-semibold text-white transition
      ${
        featured
          ? "bg-yellow-500 hover:bg-yellow-600"
          : "bg-gray-500 hover:bg-gray-600"
      }`}
    >
      {featured ? "⭐ Featured" : "☆ Normal"}
    </button>
  );
}