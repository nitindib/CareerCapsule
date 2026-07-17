import { supabase } from "@/lib/supabase";

export async function getAdmitCards(search?: string) {

  let query = supabase
    .from("admit_cards")
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

export async function getAdmitCardById(
  id: string
) {
  const { data, error } = await supabase
    .from("admit_cards")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return null;
  }

  return data;
}

export async function getAdmitCardsCount() {
  const { count } = await supabase
    .from("admit_cards")
    .select("*", {
      count: "exact",
      head: true,
    });

  return count ?? 0;
}
// ======================
// Delete Admit Card
// ======================

export async function deleteAdmitCard(id: string) {
  const { error } = await supabase
    .from("admit_cards")
    .delete()
    .eq("id", id);

  return error;
}

// ======================
// Toggle Featured
// ======================

export async function toggleFeaturedAdmitCard(
  id: string,
  featured: boolean
) {
  const { error } = await supabase
    .from("admit_cards")
    .update({
      featured: !featured,
    })
    .eq("id", id);

  return error;
}

// ======================
// Update Status
// ======================

export async function updateAdmitCardStatus(
  id: string,
  status: string
) {
  const { error } = await supabase
    .from("admit_cards")
    .update({
      status,
    })
    .eq("id", id);

  return error;
}