import { supabase } from "@/lib/supabase";

export async function getAnswerKeys() {
  const { data, error } = await supabase
    .from("answer_keys")
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

export async function getAnswerKeyById(
  id: string
) {
  const { data, error } = await supabase
    .from("answer_keys")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return null;

  return data;
}