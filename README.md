# Smart Bookmark App

## Live Demo
[Demo](https://smart-bookmark-app-seven-theta.vercel.app/)

## Features
- Google OAuth login (no email/password)
- Add bookmarks (title + URL)
- Bookmarks are private per user
- Real-time updates across multiple tabs
- Delete own bookmarks

## Tech Stack
- Next.js (App Router)
- Supabase (Auth, Database, Realtime)
- Tailwind CSS
- Vercel

## How It Works
- Google authentication handled via Supabase
- Row Level Security (RLS) ensures users can only access their own bookmarks
- Supabase Realtime updates bookmarks instantly across tabs

## Challenges Faced
1. Realtime WebSocket issue in development (React Strict Mode)
   - Fixed by adjusting effect handling.

2. Build error due to unused Supabase SSR setup
   - Removed server-side Supabase utilities.

## Deployment
Deployed on Vercel with environment variables configured.
