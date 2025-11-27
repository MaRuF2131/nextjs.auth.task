import { getToken } from "next-auth/jwt";

export async function verifyAuth(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return null; // unauthorized
  }

  return token;
}
