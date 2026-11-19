create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  course_slug text not null,
  stripe_checkout_session_id text not null unique,
  created_at timestamptz not null default now(),
  unique (user_id, course_slug)
);

alter table public.purchases enable row level security;

drop policy if exists "Users read their own purchases" on public.purchases;

create policy "Users read their own purchases"
  on public.purchases
  for select
  to authenticated
  using ((select auth.uid()) = user_id);
