import { NextResponse } from "next/server";
import { getAllArticles } from "@/lib/articles";

export async function GET() {
  return NextResponse.json({ articles: getAllArticles() });
}
