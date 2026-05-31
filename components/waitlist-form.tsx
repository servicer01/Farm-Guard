"use client"

import { useState } from "react"

export default function WaitlistForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      })
      if (!res.ok) throw new Error("Failed")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div
        className="text-center px-8 py-5 rounded-xl border"
        style={{
          background: "rgba(107, 191, 62, 0.08)",
          borderColor: "rgba(107, 191, 62, 0.4)",
          fontFamily: "var(--font-inter), Inter, sans-serif",
        }}
      >
        <span style={{ color: "#8FD44E", fontSize: "1rem" }}>
          ✓ You&apos;re on the list — we&apos;ll notify you at launch.
        </span>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl"
      style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="fg-input flex-1 px-4 py-3 rounded-lg text-sm"
        />
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="fg-input flex-1 px-4 py-3 rounded-lg text-sm"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="fg-btn-primary px-7 py-3 rounded-lg text-sm whitespace-nowrap"
          style={{ fontFamily: "var(--font-barlow-condensed), 'Barlow Condensed', 'Arial Narrow', sans-serif" }}
        >
          {status === "loading" ? "…" : "NOTIFY ME"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-3 text-sm text-red-400 text-center">
          Something went wrong — please try again.
        </p>
      )}
    </form>
  )
}
