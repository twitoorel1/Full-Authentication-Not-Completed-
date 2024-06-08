import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

export async function GET(req: NextRequest, route: any) {
  return NextResponse.json({ msg: "Route Logout Work" });
}

// /api/auth/logout
export async function POST(req: NextRequest, route: any) {
  try {
    const response = await axios.post("http://localhost:4000/auth/logout", {}, { headers: { Authorization: `Bearer ${req.cookies.get("token")?.value}` } });
    cookies().delete("token");
    cookies().delete("rf_token");

    return NextResponse.json({ message: "Logout Success", isAuthenticated: response.data.isAuthenticated });
  } catch (error: any) {
    console.log(error);
    console.log(error.response.data);
    if (error.response.data.error) {
      return NextResponse.json({ error: error.response.data.error, msg: "something went wrong" }, { status: error.response.status });
    }

    return NextResponse.json({ error, msg: "There problem try again later" }, { status: 502 });
  }
}
