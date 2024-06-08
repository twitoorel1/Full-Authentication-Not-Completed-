import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest, route: any) {
  return NextResponse.json({ msg: "Route Login Work" });
}

// /api/auth/isLogin
export async function POST(req: NextRequest, route: any) {
  try {
    const token = req.cookies.get("token");
    if (!token) {
      return NextResponse.json({ msg: "No token found" }, { status: 401 });
    }

    const response = await axios.post("http://localhost:4000/auth/isLogin", {}, { headers: { Authorization: `Bearer ${token?.value}` } });

    return NextResponse.json({ message: "Login Success", isAuthenticated: response.data.isAuthenticated, ac_token: response.data.ac_token, rf_token: response.data.rf_token, user: response.data.user });
  } catch (error: any) {
    // console.log(error);
    console.log(error.response.data);
    if (error.response.data.error) {
      return NextResponse.json({ error: error.response.data.error, msg: error.response.data.message || "something went wrong" }, { status: error.response.status });
    }
    return NextResponse.json({ error, msg: "There problem try again later" }, { status: 502 });
  }
}

{
  /*
    cookies().has("user");
    cookies().set("user", "value value value", { expires: Date.now() + myTime });
    cookies().delete("user");
*/
}
