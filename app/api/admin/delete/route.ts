import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { table, id } = await req.json();

    if (!table || !id) {
      return NextResponse.json(
        { error: "Missing table or id" },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from(table)
      .delete()
      .eq("id", id);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}