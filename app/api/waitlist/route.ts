import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email } = body

  if (!name || typeof name !== "string" || !email || typeof email !== "string") {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    )
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 })
  }

  console.log("[Farm-Guard Waitlist] New signup:", {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    timestamp: new Date().toISOString(),
  })

  // Resend integration goes here in a future iteration

  return NextResponse.json({ success: true })
}
