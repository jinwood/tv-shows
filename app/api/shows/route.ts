import { NextRequest, NextResponse } from "next/server";

const API_BASE = "https://api.tvmaze.com";

export async function GET(_request: NextRequest): Promise<NextResponse> {
  console.log("getting shows");
  const res = await fetch(`${API_BASE}/schedule`);
  const data = await res.json();

  return NextResponse.json(data);
}
