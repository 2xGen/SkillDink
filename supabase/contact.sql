-- Contact form messages. Run this in the Supabase SQL editor.
-- The site writes rows with the service role. Visitors cannot read or insert them directly.

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 1 and 120),
  email text not null check (char_length(btrim(email)) between 3 and 200),
  message text not null check (char_length(btrim(message)) between 1 and 4000),
  created_at timestamptz not null default now()
);

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

alter table public.contact_messages enable row level security;

revoke all on table public.contact_messages from public;
revoke all on table public.contact_messages from anon;
revoke all on table public.contact_messages from authenticated;
grant select, insert on table public.contact_messages to service_role;
