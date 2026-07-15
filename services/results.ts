import { supabase } from "@/lib/supabase";

// ======================
// Get All Results
// ======================

export async function getResults(search?: string) {
  let query = supabase
    .from("results")
    .select("*")
    .order("created_at", { ascending: false });

  if (search && search.trim() !== "") {
    query = query.or(
      `title.ilike.%${search}%,organization.ilike.%${search}%`
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
// Get Single Result
// ======================

export async function getResultById(id: string) {
  const { data, error } = await supabase
    .from("results")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

// ======================
// Delete Result
// ======================

export async function deleteResult(id: string) {
  const { error } = await supabase
    .from("results")
    .delete()
    .eq("id", id);

  return error;
}
// ======================
// Update Result
// ======================

export async function updateResult(
  id: string,
  values: any
) {
  const { error } = await supabase
    .from("results")
    .update(values)
    .eq("id", id);

  return error;
}

// ======================
// Toggle Featured
// ======================

export async function toggleFeaturedResult(
  id: string,
  featured: boolean
) {
  const { error } = await supabase
    .from("results")
    .update({
      featured: !featured,
    })
    .eq("id", id);

  return error;
}
export async function getResultsCount() {
  const { count } = await supabase
    .from("results")
    .select("*", {
      count: "exact",
      head: true,
    });

  return count ?? 0;
}