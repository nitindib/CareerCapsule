import { supabase } from "@/lib/supabase";

// ======================
// Get All Answer Keys
// ======================

export async function getAnswerKeys(search?: string) {
  let query = supabase
    .from("answer_keys")
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
// Get Single Answer Key
// ======================

export async function getAnswerKeyById(id: string) {
  const { data, error } = await supabase
    .from("answer_keys")
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
// Delete Answer Key
// ======================

export async function deleteAnswerKey(id: string) {
  const { error } = await supabase
    .from("answer_keys")
    .delete()
    .eq("id", id);

  return error;
}

// ======================
// Update Answer Key
// ======================

export async function updateAnswerKey(
  id: string,
  values: any
) {
  const { error } = await supabase
    .from("answer_keys")
    .update(values)
    .eq("id", id);

  return error;
}

// ======================
// Toggle Featured
// ======================

export async function toggleFeaturedAnswerKey(
  id: string,
  featured: boolean
) {
  const { error } = await supabase
    .from("answer_keys")
    .update({
      featured: !featured,
    })
    .eq("id", id);

  return error;
}

// ======================
// Count
// ======================

export async function getAnswerKeysCount() {
  const { count } = await supabase
    .from("answer_keys")
    .select("*", {
      count: "exact",
      head: true,
    });

  return count ?? 0;
}