import { cookies } from "next/headers";
import { NextResponse } from 'next/server';

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

  // Parse the response data
  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json(
      { message: data.message },
      { status: response.status }
    );
  }

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

  return NextResponse.json(
    { message: data.message, userData: data.userData },
    { status: 200 }
  );
}
