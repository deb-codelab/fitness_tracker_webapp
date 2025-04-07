import { cookies } from "next/headers";

export async function POST(req) {
  const body = await req.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      credentials: "include",
    }
  );

  if (!response.ok) {
    return new Response(JSON.stringify({ error: "Login failed" }), {
      status: 401,
    });
  }

  // Parse the response to get user data
  const responseData = await response.json();

  // Extract and save the cookie
  const setCookieHeader = response.headers.get("set-cookie");

  if (setCookieHeader) {
    const cookieStore = await cookies();
    cookieStore.set("auth_token", setCookieHeader.split(";")[0].split("=")[1], {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
      sameSite: "lax",
    });
  }

  return new Response(
    JSON.stringify({ message: "Logged In", userData: responseData.userData }),
    { status: 200 }
  );
}
