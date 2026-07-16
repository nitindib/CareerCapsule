import { supabase } from "@/lib/supabase";

// ======================
// Get All Syllabus
// ======================

export async function getSyllabus(search?: string) {

  let query = supabase
    .from("syllabus")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

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
// Get Single Syllabus
// ======================

export async function getSyllabusById(id: string) {

  const { data, error } = await supabase
    .from("syllabus")
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

export async function deleteSyllabus(id: string) {

  const { error } = await supabase
    .from("syllabus")
    .delete()
    .eq("id", id);

  return error;
}

// ======================
// Update
// ======================

export async function updateSyllabus(
  id: string,
  values: any
) {

  const { error } = await supabase
    .from("syllabus")
    .update(values)
    .eq("id", id);

  return error;
}

// ======================
// Toggle Featured
// ======================

export async function toggleFeaturedSyllabus(
  id: string,
  featured: boolean
) {

  const { error } = await supabase
    .from("syllabus")
    .update({
      featured: !featured,
    })
    .eq("id", id);

  return error;
}

// ======================
// Count
// ======================

export async function getSyllabusCount() {

  const { count } = await supabase
    .from("syllabus")
    .select("*", {
      count: "exact",
      head: true,
    });

  return count ?? 0;
}