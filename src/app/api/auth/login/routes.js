import { cookies } from "next/headers";

export async function POST(req) {
  const body = await req.json();
  console.log("hello");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    }
  );

  if (!response.ok) {
    return new Response(JSON.stringify({ error: "Login failed" }), {
      status: 401,
    });
  }

  // Extract and save the cookie
  const setCookieHeader = response.headers.get("set-cookie");
  if (setCookieHeader) {
    cookies().set("auth_token", "secure_token_value", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
      sameSite: "Strict",
      path: "/",
    });
  }

  return new Response(
    JSON.stringify({ message: "Cookie saved in Next.js backend" }),
    { status: 200 }
  );
}
