import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

export async function GET(req: NextRequest, route: any) {
  return NextResponse.json({ msg: "Route Refresh Token Work" });
}

// /api/auth/refreshToken
export async function POST(req: NextRequest, route: any) {
  try {
    const refreshToken = req.cookies.get("rf_token");
    if (!refreshToken) return NextResponse.json({ error: "No refresh token provided" }, { status: 401 });

    const test = req.headers;
    console.log(test);

    const response = await axios.post("http://localhost:4000/auth/refresh-token", { refreshToken: refreshToken?.value });

    cookies().set("token", response.data.accessToken, { expires: Date.now() + 1000 * 60 * 60 * 5 });
    cookies().set("rf_token", response.data.refreshToken, { expires: Date.now() + 1000 * 60 * 60 * 24 * 7 });

    return NextResponse.json({ msg: "Login Success", accessToken: response.data.accessToken, refreshToken: response.data.refreshToken });
  } catch (error: any) {
    console.log(error);
    console.log(error.response.data);
    if (error.response.data.error) {
      return NextResponse.json({ error: error.response.data.error, msg: "something went wrong" }, { status: error.response.status });
    }

    return NextResponse.json({ error, msg: "There problem try again later" }, { status: 502 });
  }
}
