"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function adminLogin(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const adminEmail = process.env.ADMIN_EMAIL
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminEmail || !adminPassword) {
    return { error: "Admin credentials not configured" }
  }

  if (email === adminEmail && password === adminPassword) {
    const cookieStore = await cookies()
    cookieStore.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 8, // 8 hours
    })
    redirect("/admin/dashboard")
  }

  return { error: "Invalid credentials" }
}

export async function adminLogout() {
  const cookieStore = await cookies()
  cookieStore.delete("admin_session")
  redirect("/admin/login")
}

export async function checkAdminAuth() {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")
  return session?.value === "authenticated"
}
