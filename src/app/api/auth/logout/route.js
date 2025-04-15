import { cookies } from "next/headers";

export async function GET() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/logout`, {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ message: "Logout failed" }), { status: 500 });
    }

    const cookieStore = await cookies();
    cookieStore.delete("auth_token"); // Delete the cookie

    return new Response(JSON.stringify({ message: "Logout successful" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Logout error", error: error.message }), { status: 500 });
  }
}
