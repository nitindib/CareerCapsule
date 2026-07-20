import { supabase } from "@/lib/supabase";

// ======================
// Get All Admissions
// ======================

export async function getAdmissions(
  search?: string
) {
  let query = supabase
    .from("admissions")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (search && search.trim() !== "") {
    query = query.or(
      `title.ilike.%${search}%,organization.ilike.%${search}%,course_name.ilike.%${search}%`
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
// Get Single Admission
// ======================

export async function getAdmissionById(
  id: string
) {
  const { data, error } = await supabase
    .from("admissions")
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

export async function deleteAdmission(
  id: string
) {
  const { error } = await supabase
    .from("admissions")
    .delete()
    .eq("id", id);

  return error;
}

// ======================
// Featured
// ======================

export async function toggleFeaturedAdmission(
  id: string,
  featured: boolean
) {
  const { error } = await supabase
    .from("admissions")
    .update({
      featured: !featured,
    })
    .eq("id", id);

  return error;
}

// ======================
// Status
// ======================

export async function updateAdmissionStatus(
  id: string,
  status: string
) {
  const { error } = await supabase
    .from("admissions")
    .update({
      status,
    })
    .eq("id", id);

  return error;
}

// ======================
// Count
// ======================

export async function getAdmissionsCount() {
  const { count } = await supabase
    .from("admissions")
    .select("*", {
      count: "exact",
      head: true,
    });

  return count ?? 0;
}

// ======================
// Get Featured Admissions
// ======================

export async function getFeaturedAdmissions() {
  const { data, error } = await supabase
    .from("admissions")
    .select("*")
    .eq("featured", true)
    .eq("status", "published")
    .order("created_at", {
      ascending: false,
    })
    .limit(6);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}