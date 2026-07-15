import { supabase } from "@/lib/supabase";

export async function getAdmitCards() {
  const { data, error } = await supabase
    .from("admit_cards")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

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