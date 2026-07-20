import { supabase } from "@/lib/supabase";

// ======================
// Get All Schemes
// ======================

export async function getGovernmentSchemes(
  search?: string
) {
  let query = supabase
    .from("government_schemes")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (search && search.trim() !== "") {
    query = query.or(
      `title.ilike.%${search}%,scheme_name.ilike.%${search}%,ministry.ilike.%${search}%`
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
// Get Single
// ======================

export async function getGovernmentSchemeById(
  id: string
) {
  const { data, error } = await supabase
    .from("government_schemes")
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

export async function deleteGovernmentScheme(
  id: string
) {
  const { error } = await supabase
    .from("government_schemes")
    .delete()
    .eq("id", id);

  return error;
}

// ======================
// Featured
// ======================

export async function toggleFeaturedGovernmentScheme(
  id: string,
  featured: boolean
) {
  const { error } = await supabase
    .from("government_schemes")
    .update({
      featured: !featured,
    })
    .eq("id", id);

  return error;
}

// ======================
// Status
// ======================

export async function updateGovernmentSchemeStatus(
  id: string,
  status: string
) {
  const { error } = await supabase
    .from("government_schemes")
    .update({
      status,
    })
    .eq("id", id);

  return error;
}

// ======================
// Count
// ======================

export async function getGovernmentSchemesCount() {
  const { count } = await supabase
    .from("government_schemes")
    .select("*", {
      count: "exact",
      head: true,
    });

  return count ?? 0;
}