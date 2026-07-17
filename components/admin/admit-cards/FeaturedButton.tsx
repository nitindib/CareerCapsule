"use client";

import { useRouter } from "next/navigation";
import { toggleFeaturedAdmitCard } from "@/services/admitCards";

type Props = {
  id: string;
  featured: boolean;
};

export default function FeaturedButton({
  id,
  featured,
}: Props) {
  const router = useRouter();

  async function handleClick() {
    const error = await toggleFeaturedAdmitCard(
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
      className={`rounded-lg px-4 py-2 font-semibold text-white ${
        featured
          ? "bg-yellow-500 hover:bg-yellow-600"
          : "bg-gray-500 hover:bg-gray-600"
      }`}
    >
      {featured ? "⭐ Featured" : "☆ Normal"}
    </button>
  );
}