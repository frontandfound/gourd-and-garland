import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || !body.firstName || !body.lastName || !body.location || !body.consent || !emailPattern.test(body.email || "")) {
    return NextResponse.json({ error: "Please complete the required fields and try again." }, { status: 400 });
  }
  if (!process.env.RESEND_API_KEY || !process.env.INQUIRY_TO_EMAIL) {
    return NextResponse.json({ error: "The priority list is almost ready. Please check back soon." }, { status: 503 });
  }
  const clean = (value: unknown) => String(value || "").replace(/[<>]/g, "").slice(0, 2000);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Gourd & Garland <onboarding@resend.dev>",
      to: [process.env.INQUIRY_TO_EMAIL],
      reply_to: clean(body.email),
      subject: `Fall 2026 porch inquiry — ${clean(body.firstName)} ${clean(body.lastName)}`,
      text: [`Name: ${clean(body.firstName)} ${clean(body.lastName)}`, `Email: ${clean(body.email)}`, `Location: ${clean(body.location)}`, `Package: ${clean(body.package)}`, "", clean(body.notes)].join("\n")
    })
  });
  if (!response.ok) return NextResponse.json({ error: "We couldn’t send your request. Please try again shortly." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
