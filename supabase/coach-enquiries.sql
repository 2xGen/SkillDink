-- Coach, club, and association enquiries from /for-coaches.
-- Run this in the Supabase SQL editor.
-- The site writes rows with the service role. Visitors cannot read or insert them directly.

create table if not exists public.coach_enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 1 and 120),
  email text not null check (char_length(btrim(email)) between 3 and 200),
  organisation text not null check (char_length(btrim(organisation)) between 1 and 160),
  group_size text not null check (
    group_size in ('1–10', '11–25', '26–50', 'More than 50', 'Not sure yet')
  ),
  interest text not null check (
    interest in ('Group access', 'Coach education', 'Collaboration')
  ),
  note text check (note is null or char_length(note) between 1 and 1000),
  created_at timestamptz not null default now()
);

create index if not exists coach_enquiries_created_at_idx
  on public.coach_enquiries (created_at desc);

alter table public.coach_enquiries enable row level security;

revoke all on table public.coach_enquiries from public;
revoke all on table public.coach_enquiries from anon;
revoke all on table public.coach_enquiries from authenticated;
grant select, insert on table public.coach_enquiries to service_role;
