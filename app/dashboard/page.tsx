/** @format */

"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client";
import BookmarkForm from "@/components/BookmarkForm";
import BookmarkList from "@/components/BookmarkList";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  // console.log(user);
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      //De
      console.log(data.user);
      if (!data.user) {
        window.location.href = "/";
      } else {
        setUser(data.user);
      }
    };
    getUser();
  }, []);
  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  if (!user) return null;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Welcome {user.email}</h1>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-3 py-1 rounded">
        Logout
      </button>

      <BookmarkForm user={user} />
      <BookmarkList user={user} />
    </div>
  );
}
