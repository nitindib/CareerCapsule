import { supabase } from "@/lib/supabase";
import { searchDictionary } from "@/lib/searchDictionary";

// ======================
// Get All Jobs
// ======================
export async function getJobs(
  search?: string,
  category?: string
) {
  let query = supabase
    .from("jobs_v2")
    .select("*")
    .order("created_at", { ascending: false });

    if (search && search.trim() !== "") {

  const keyword = search.trim().toLowerCase();

const words = [
  keyword,
  ...(searchDictionary[keyword] || []),
];

// duplicate remove
const uniqueWords = [...new Set(words)];

const filters = uniqueWords.flatMap(word => [
  `title.ilike.%${word}%`,
  `post_name.ilike.%${word}%`,
  `short_description.ilike.%${word}%`,
  `seo_description.ilike.%${word}%`,
  `seo_keywords.ilike.%${word}%`,
  `search_keywords.ilike.%${word}%`,
]);

query = query.or(filters.join(","));

  
}
  

  const { data, error } = await query;

  if (error) {
    console.log(error.message);
console.log(error.details);
console.log(error.hint);
    return [];
  }

  return data;
}

// ======================
// Get Single Job
// ======================
export async function getJobById(id: string) {
  const { data, error } = await supabase
    .from("jobs_v2")
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
    .from("jobs_v2")
    .update(values)
    .eq("id", id);

  return error;
}

// ======================
// Delete Job
// ======================
export async function deleteJob(id: string) {
  const { error } = await supabase
    .from("jobs_v2")
    .delete()
    .eq("id", id);

  return error;
}
export async function toggleFeatured(
  id: string,
  featured: boolean
) {
  const { error } = await supabase
    .from("jobs_v2")
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
    .from("jobs_v2")
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
// ======================
// Get Featured Jobs
// ======================

export async function getFeaturedJobs() {
  const { data, error } = await supabase
    .from("jobs_v2")
    .select("*")
    .eq("featured", true)
    .eq("status", "published")
    .order("created_at", { ascending: false })
    .limit(6);

  if (error) {
  console.log("ERROR MESSAGE:", error.message);
  console.log("ERROR DETAILS:", error.details);
  console.log("ERROR HINT:", error.hint);

  return [];
}

  return data;
}
export async function getJobsCount() {
  const { count } = await supabase
    .from("jobs_v2")
    .select("*", {
      count: "exact",
      head: true,
    });

  return count ?? 0;
}