/** @format */

"use client";

import { supabase } from "@/utils/supabase/client";

export default function BookmarkItem({ bookmark }: any) {
  const deleteBookmark = async () => {
    await supabase.from("bookmarks").delete().eq("id", bookmark.id);
  };

  return (
    <div className="flex justify-between items-center border p-3 rounded">
      <a href={bookmark.url} target="_blank" className="text-blue-600">
        {bookmark.title}
      </a>

      <button onClick={deleteBookmark} className="text-red-500">
        Delete
      </button>
    </div>
  );
}
