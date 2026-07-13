import { supabase } from "@/lib/supabase";

export async function getDashboardStats() {
  const { count: jobsCount } = await supabase
    .from("jobs")
    .select("*", { count: "exact", head: true });

  return {
    jobs: jobsCount ?? 0,
    results: 0,
    documents: 0,
    views: 0,
  };
}