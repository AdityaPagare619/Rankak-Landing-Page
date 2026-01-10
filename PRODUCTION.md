# Production Deployment Guide 🚀

## 1. Supabase Setup
The project uses Supabase for the "Early Access" waitlist.

### Database Schema
The `early_access_users` table is required:
```sql
create table early_access_users (
  id uuid default gen_random_uuid() primary key,
  full_name text not null,
  email text not null unique,
  class_tier text not null,
  target_year text not null,
  created_at timestamptz default now()
);
```

### Environment Variables
Required in Vercel Project Settings:
- `VITE_SUPABASE_URL`: Your Supabase Project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase Anon/Public Key

## 2. Vercel Deployment
1.  Import the repository from GitHub.
2.  Select **Vite** as the framework preset.
3.  Add the Environment Variables listed above.
4.  Deploy!

### Custom Domain
To connect `rankak.in`:
1.  Go to Vercel Project Settings > Domains.
2.  Add `rankak.in`.
3.  Update your DNS records (A record or Nameservers) as instructed by Vercel.

## 3. Assets & Optimization
- SVGs are used for vector graphics to ensure scalability and low file size.
- Static assets in `/assets` are cached for 1 year via `vercel.json`.

## 4. CI/CD
- Commits to the `main` branch will automatically trigger a deployment on Vercel.
- Ensure `npm run build` passes locally before pushing.
