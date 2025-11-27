"use client";

import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const handleLogin = async () => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.error) {
      setErrorMsg("Invalid email or password");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="w-full bg-black p-6 min-h-screen">
    <div className="max-w-md mx-auto mt-20 bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      {errorMsg && <p className="mb-3 text-red-600 text-center">{errorMsg}</p>}

      <input
        className="w-full border p-2 mb-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full border p-2 mb-3"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="w-full py-2 bg-blue-600 text-white rounded"
      >
        Login
      </button>

      <div className="text-center text-gray-500 my-4">or</div>

      <button
        onClick={() => signIn("google")}
        className="w-full py-2 border rounded mb-3"
      >
        Continue with Google
      </button>

      <button
        onClick={() => signIn("github")}
        className="w-full py-2 border rounded"
      >
        Continue with GitHub
      </button>
    </div>
    </div>
  );
}
