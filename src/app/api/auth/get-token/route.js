import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    return Response.json({ token });
}