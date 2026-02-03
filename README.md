# Precision Newsletter Site

## Tech Stack
- **Framework:** Next.js 14 + TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Email:** Resend
- **Hosting:** Vercel

## Environment Variables

Create `.env.local` file:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-key
RESEND_API_KEY=re_your_api_key
RESEND_AUDIENCE_ID=your-audience-id
```

## Database Setup (Supabase)

Run this SQL in Supabase SQL Editor:

```sql
create table subscribers (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table subscribers enable row level security;

-- Allow insert from anyone
create policy "Allow insert" on subscribers
  for insert with check (true);
```

## Local Development

```bash
npm install
npm run dev
```

## Deploy to Vercel

```bash
vercel --prod
```

## Features
- ✉️ Email capture with Supabase storage
- 📧 Welcome email via Resend
- 📊 Audience management in Resend
- 🎨 Dark theme matching brand
- 📱 Fully responsive
- ⚡ Fast static export
