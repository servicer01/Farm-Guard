import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM = process.env.RESEND_FROM_EMAIL ?? "Farm-Guard <noreply@farm-guard.org>"
const ADMIN_EMAIL = "bloomingoodfarm@gmail.com"

function confirmationHtml(name: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0A0A0A;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0A0A;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#111;border-radius:12px;border:1px solid rgba(107,191,62,0.25);overflow:hidden;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1C3D0E,#0A0A0A);padding:36px 40px;text-align:center;">
            <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.25em;color:#6BBF3E;font-weight:700;">FARM-GUARD™</p>
            <h1 style="margin:0;font-size:28px;font-weight:800;color:#ffffff;letter-spacing:0.05em;">You&rsquo;re on the list.</h1>
            <p style="margin:12px 0 0;font-size:13px;letter-spacing:0.18em;color:#8FD44E;">PROTECT. MONITOR. GROW.</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">
            <p style="margin:0 0 16px;font-size:15px;color:rgba(255,255,255,0.75);line-height:1.7;">
              Hey ${name},
            </p>
            <p style="margin:0 0 16px;font-size:15px;color:rgba(255,255,255,0.75);line-height:1.7;">
              Thanks for joining the <strong style="color:#fff;">Farm-Guard™</strong> waitlist.
              We&rsquo;re building off-grid, AI-powered aquaculture monitoring for farmers who can&rsquo;t afford downtime —
              and you&rsquo;ll be among the first to know when we launch.
            </p>
            <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.75);line-height:1.7;">
              We&rsquo;ll reach out with early access details, updates, and a few things we think you&rsquo;ll want to see before anyone else.
            </p>

            <!-- Feature pills -->
            <table cellpadding="0" cellspacing="0" style="margin:32px 0;">
              <tr>
                <td style="padding:0 8px 0 0;">
                  <span style="display:inline-block;padding:6px 14px;border-radius:100px;border:1px solid rgba(107,191,62,0.4);color:#8FD44E;font-size:12px;background:rgba(107,191,62,0.08);">24/7 Tank Monitoring</span>
                </td>
                <td style="padding:0 8px;">
                  <span style="display:inline-block;padding:6px 14px;border-radius:100px;border:1px solid rgba(107,191,62,0.4);color:#8FD44E;font-size:12px;background:rgba(107,191,62,0.08);">Mesh Network Alerts</span>
                </td>
                <td style="padding:0 0 0 8px;">
                  <span style="display:inline-block;padding:6px 14px;border-radius:100px;border:1px solid rgba(107,191,62,0.4);color:#8FD44E;font-size:12px;background:rgba(107,191,62,0.08);">Solar Powered</span>
                </td>
              </tr>
            </table>

            <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.45);">
              — The Farm-Guard Team
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px;border-top:1px solid rgba(107,191,62,0.12);text-align:center;">
            <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.25);">
              farm-guard.org &nbsp;|&nbsp; admin@bloomingoodfarm.com &nbsp;|&nbsp; &copy; 2026 BGF LLC
            </p>
            <p style="margin:8px 0 0;font-size:11px;color:rgba(255,255,255,0.18);">
              You received this because you signed up at farm-guard.org.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

function adminNotificationHtml(name: string, email: string, timestamp: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#0A0A0A;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0A0A;padding:40px 16px;">
    <tr><td align="center">
      <table width="500" cellpadding="0" cellspacing="0" style="max-width:500px;width:100%;background:#111;border-radius:12px;border:1px solid rgba(107,191,62,0.25);overflow:hidden;">
        <tr>
          <td style="padding:24px 32px;background:linear-gradient(135deg,#1C3D0E,#0A0A0A);">
            <p style="margin:0;font-size:11px;letter-spacing:0.22em;color:#6BBF3E;font-weight:700;">FARM-GUARD™ WAITLIST</p>
            <h2 style="margin:8px 0 0;font-size:20px;color:#ffffff;">New Signup</h2>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px;">
            <table cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.07);">
                  <span style="font-size:11px;letter-spacing:0.1em;color:rgba(255,255,255,0.4);text-transform:uppercase;">Name</span><br>
                  <span style="font-size:15px;color:#ffffff;font-weight:600;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.07);">
                  <span style="font-size:11px;letter-spacing:0.1em;color:rgba(255,255,255,0.4);text-transform:uppercase;">Email</span><br>
                  <span style="font-size:15px;color:#8FD44E;">${email}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;">
                  <span style="font-size:11px;letter-spacing:0.1em;color:rgba(255,255,255,0.4);text-transform:uppercase;">Signed up</span><br>
                  <span style="font-size:13px;color:rgba(255,255,255,0.5);">${timestamp}</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email } = body

  if (!name || typeof name !== "string" || !email || typeof email !== "string") {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 })
  }

  const cleanName = name.trim()
  const cleanEmail = email.trim().toLowerCase()
  const timestamp = new Date().toISOString()

  console.log("[Farm-Guard Waitlist] New signup:", { name: cleanName, email: cleanEmail, timestamp })

  if (!process.env.RESEND_API_KEY) {
    console.warn("[Farm-Guard Waitlist] RESEND_API_KEY not set — skipping email send.")
    return NextResponse.json({ success: true })
  }

  const [confirmation, notification] = await Promise.allSettled([
    resend.emails.send({
      from: FROM,
      to: cleanEmail,
      subject: "You're on the Farm-Guard™ waitlist",
      html: confirmationHtml(cleanName),
    }),
    resend.emails.send({
      from: FROM,
      to: ADMIN_EMAIL,
      subject: `New waitlist signup: ${cleanName}`,
      html: adminNotificationHtml(cleanName, cleanEmail, timestamp),
    }),
  ])

  if (confirmation.status === "rejected") {
    console.error("[Farm-Guard Waitlist] Confirmation email failed:", confirmation.reason)
  }
  if (notification.status === "rejected") {
    console.error("[Farm-Guard Waitlist] Admin notification failed:", notification.reason)
  }

  return NextResponse.json({ success: true })
}
