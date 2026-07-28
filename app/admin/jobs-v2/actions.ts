"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase";

export async function deleteJob(id: string) {
const { error } = await supabase
.from("jobs_v2")
.delete()
.eq("id", id);

if (error) {
throw new Error(error.message);
}

revalidatePath("/admin/jobs-v2");
}

export async function toggleStatus(id: string, currentStatus: string) {
const newStatus = currentStatus === "published" ? "draft" : "published";

const { error } = await supabase
.from("jobs_v2")
.update({ status: newStatus })
.eq("id", id);

if (error) {
throw new Error(error.message);
}

revalidatePath("/admin/jobs-v2");
}

export async function toggleFeatured(id: string, currentFeatured: boolean) {
const { error } = await supabase
.from("jobs_v2")
.update({ featured: !currentFeatured })
.eq("id", id);

if (error) {
throw new Error(error.message);
}

revalidatePath("/admin/jobs-v2");
}
