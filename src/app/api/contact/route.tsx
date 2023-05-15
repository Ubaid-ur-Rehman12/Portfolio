import { NextRequest, NextResponse } from "next/server";
import sql from "../../utils/neon";

export async function POST(request: Request) {
  const { first_name, last_name, email, subject, message }: contact = await request.json();
  if (!first_name || !last_name || !email || !subject || !message) {
    return NextResponse.json({ message: "Missing required data" });
  }
  const res =await sql`INSERT INTO contact (first_name, last_name, email, subject, message) VALUES (${first_name}, ${last_name}, ${email}, ${subject}, ${message})`;
  return NextResponse.json(res);
}
