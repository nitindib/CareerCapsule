import { supabase } from "@/lib/supabase";

// ======================
// Get All Previous Papers
// ======================

export async function getPreviousPapers(
  search?: string
) {
  let query = supabase
    .from("previous_papers")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (search && search.trim() !== "") {
    query = query.or(
      `title.ilike.%${search}%,organization.ilike.%${search}%,exam_name.ilike.%${search}%`
    );
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

// ======================
// Get Single Previous Paper
// ======================

export async function getPreviousPaperById(
  id: string
) {
  const { data, error } = await supabase
    .from("previous_papers")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return null;
  }

  return data;
}

// ======================
// Delete
// ======================

export async function deletePreviousPaper(
  id: string
) {
  const { error } = await supabase
    .from("previous_papers")
    .delete()
    .eq("id", id);

  return error;
}

// ======================
// Featured
// ======================

export async function toggleFeaturedPreviousPaper(
  id: string,
  featured: boolean
) {
  const { error } = await supabase
    .from("previous_papers")
    .update({
      featured: !featured,
    })
    .eq("id", id);

  return error;
}

// ======================
// Status
// ======================

export async function updatePreviousPaperStatus(
  id: string,
  status: string
) {
  const { error } = await supabase
    .from("previous_papers")
    .update({
      status,
    })
    .eq("id", id);

  return error;
}

// ======================
// Count
// ======================

export async function getPreviousPapersCount() {
  const { count } = await supabase
    .from("previous_papers")
    .select("*", {
      count: "exact",
      head: true,
    });

  return count ?? 0;
}

// ======================
// Get Featured Previous Papers
// ======================

export async function getFeaturedPreviousPapers() {
  const { data, error } = await supabase
    .from("previous_papers")
    .select("*")
    .eq("featured", true)
    .eq("status", "published")
    .order("created_at", {
      ascending: false,
    })
    .limit(6);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}