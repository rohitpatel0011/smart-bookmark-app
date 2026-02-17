/** @format */

"use client";

import { useState } from "react";
import { supabase } from "@/libs/supabaseClient";

export default function BookmarkForm({ user }: any) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const addBookmark = async () => {
    if (!title || !url) return;
    await supabase.from("bookmarks").insert({
      title,
      url,
      user_id: user.id,
    });

    setTitle("");
    setUrl("");
  };

  return (
    <div className="space-y-3 mb-6">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full border p-2 rounded"
      />

      <input
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="URL"
        className="w-full border p-2 rounded"
      />

      <button
        onClick={addBookmark}
        className="bg-black text-white px-4 py-2 rounded">
        Add Bookmark
      </button>
    </div>
  );
}
