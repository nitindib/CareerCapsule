import { supabase } from "@/lib/supabase";

// ======================
// Get All Jobs
// ======================
export async function getJobs(search?: string) {
  let query = supabase
    .from("jobs")
    .select("*")
    .order("created_at", { ascending: false });

  if (search && search.trim() !== "") {
    query = query.or(
      `title.ilike.%${search}%,organization.ilike.%${search}%,post_name.ilike.%${search}%`
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
// Get Single Job
// ======================
export async function getJobById(id: string) {
  const { data, error } = await supabase
    .from("jobs")
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
// Update Job
// ======================
export async function updateJob(id: string, values: any) {
  const { error } = await supabase
    .from("jobs")
    .update(values)
    .eq("id", id);

  return error;
}

// ======================
// Delete Job
// ======================
export async function deleteJob(id: string) {
  const { error } = await supabase
    .from("jobs")
    .delete()
    .eq("id", id);

  return error;
}