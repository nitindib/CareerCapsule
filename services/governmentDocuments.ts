import { supabase } from "@/lib/supabase";

// ======================
// Get All Government Documents
// ======================

export async function getGovernmentDocuments(
  search?: string
) {
  let query = supabase
    .from("government_documents")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (search && search.trim() !== "") {
    query = query.or(
      `title.ilike.%${search}%,category.ilike.%${search}%,required_for.ilike.%${search}%`
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
// Get Single Government Document
// ======================

export async function getGovernmentDocumentById(
  id: string
) {
  const { data, error } = await supabase
    .from("government_documents")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return null;
  }

  return data;
}

// ======================
// Delete Government Document
// ======================

export async function deleteGovernmentDocument(
  id: string
) {
  const { error } = await supabase
    .from("government_documents")
    .delete()
    .eq("id", id);

  return error;
}

// ======================
// Toggle Featured
// ======================

export async function toggleFeaturedGovernmentDocument(
  id: string,
  featured: boolean
) {
  const { error } = await supabase
    .from("government_documents")
    .update({
      featured: !featured,
    })
    .eq("id", id);

  return error;
}

// ======================
// Update Status
// ======================

export async function updateGovernmentDocumentStatus(
  id: string,
  status: string
) {
  const { error } = await supabase
    .from("government_documents")
    .update({
      status,
    })
    .eq("id", id);

  return error;
}

// ======================
// Get Count
// ======================

export async function getGovernmentDocumentsCount() {
  const { count } = await supabase
    .from("government_documents")
    .select("*", {
      count: "exact",
      head: true,
    });

  return count ?? 0;
}

// ======================
// Get Featured Government Documents
// ======================

export async function getFeaturedGovernmentDocuments() {
  const { data, error } = await supabase
    .from("government_documents")
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