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
export async function toggleFeatured(
  id: string,
  featured: boolean
) {
  const { error } = await supabase
    .from("jobs")
    .update({
      featured: !featured,
    })
    .eq("id", id);

  return error;
}
export async function updateJobStatus(
  id: string,
  status: string
) {
  const { error } = await supabase
    .from("jobs")
    .update({
      status,
    })
    .eq("id", id);

  return error;
}
export async function getDashboardStats() {
  const jobs = await getJobs();

  return {
    total: jobs.length,
    published: jobs.filter(
      (job: any) => job.status === "published"
    ).length,
    pending: jobs.filter(
      (job: any) => job.status === "pending"
    ).length,
    closed: jobs.filter(
      (job: any) => job.status === "closed"
    ).length,
    recent: jobs.slice(0, 5),
  };
}