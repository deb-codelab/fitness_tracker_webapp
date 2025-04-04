import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// This middleware checks for the presence of a token in cookies and redirects to the login page if not found.
export async function middleware(req) {
  try {
    // Redirect to login if no token in cookies
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/auth", req.url));
    }

    // Verify the token
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/verify-token`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        credentials: "include", // Ensure cookies are sent
      }
    );
    const data = await result.json();

    if (!data.valid) {
      return NextResponse.redirect(new URL("/auth", req.url)); // Redirect if invalid
    }

    return NextResponse.next(); // Proceed if valid
  } catch (error) {
    // Redirect to login if invalid
    return NextResponse.redirect(new URL("/auth", req.url));
  }
}

// Protect all routes under /admins
export const config = {
   matcher: ["/admin/:path*", "/dashboard/:path*"],
};
