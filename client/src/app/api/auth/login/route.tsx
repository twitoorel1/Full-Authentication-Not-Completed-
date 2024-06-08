import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

export async function GET(req: NextRequest, route: any) {
  return NextResponse.json({ msg: "Route Login Work" });
}

// /api/auth/login
export async function POST(req: NextRequest, route: any) {
  try {
    const bodyData = await req.json();
    // Validate bodyData
    // HERE

    // Call login service
    const response = await axios.post("http://localhost:4000/auth/login", bodyData);

    // Set cookie
    cookies().set("token", response.data.ac_token, { expires: Date.now() + 1000 * 60 * 60 * 5 });
    cookies().set("rf_token", response.data.rf_token, { expires: Date.now() + 1000 * 60 * 60 * 24 * 7 });

    return NextResponse.json({ msg: "Login Success", data: response.data });
  } catch (error: any) {
    console.log(error.response.data);
    if (error.response.data.error) {
      return NextResponse.json({ error: error.response.data.error, msg: "something went wrong" }, { status: error.response.status });
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
