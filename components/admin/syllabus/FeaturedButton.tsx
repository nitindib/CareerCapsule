"use client";

import { useRouter } from "next/navigation";
import { toggleFeaturedSyllabus } from "@/services/syllabus";

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
    const error = await toggleFeaturedSyllabus(
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
      className={`rounded-lg px-4 py-2 text-white font-semibold ${
        featured
          ? "bg-yellow-500 hover:bg-yellow-600"
          : "bg-gray-500 hover:bg-gray-600"
      }`}
    >
      {featured ? "⭐ Featured" : "☆ Normal"}
    </button>
  );
}