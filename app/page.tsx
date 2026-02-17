/** @format */
"use client";
import { supabase } from "@/libs/supabaseClient";

export default function Home() {
  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/dashboard",
      },
    });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <button onClick={login}>
        Sign in with Google
      </button>
    </div>
  );
}
