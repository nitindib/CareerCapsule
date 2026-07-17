import { supabase } from "@/lib/supabase";

// ==========================
// Get All Items
// ==========================
export async function getItems(
  table: string,
  search?: string
) {
  let query = supabase
    .from(table)
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

// ==========================
// Get Single Item
// ==========================
export async function getItem(
  table: string,
  id: string
) {
  const { data, error } = await supabase
    .from(table)
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

// ==========================
// Delete Item
// ==========================
export async function deleteItem(
  table: string,
  id: string
) {
  const { error } = await supabase
    .from(table)
    .delete()
    .eq("id", id);

  return error;
}

// ==========================
// Update Status
// ==========================
export async function updateStatus(
  table: string,
  id: string,
  status: string
) {
  const { error } = await supabase
    .from(table)
    .update({
      status,
    })
    .eq("id", id);

  return error;
}

// ==========================
// Toggle Featured
// ==========================
export async function toggleFeatured(
  table: string,
  id: string,
  featured: boolean
) {
  const { error } = await supabase
    .from(table)
    .update({
      featured: !featured,
    })
    .eq("id", id);

  return error;
}