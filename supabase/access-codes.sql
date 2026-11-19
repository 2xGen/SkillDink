-- Coach and associate codes. Run this in the Supabase SQL editor.

create table if not exists public.access_codes (
  id uuid primary key default gen_random_uuid(),
  code text not null,
  code_key text generated always as (lower(btrim(code))) stored unique,
  label text,
  course_slug text not null default 'pickleball-foundations',
  max_redemptions integer not null check (max_redemptions > 0),
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.access_code_redemptions (
  id uuid primary key default gen_random_uuid(),
  code_id uuid not null references public.access_codes (id) on delete cascade,
  user_id uuid not null references auth.users (id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (code_id, user_id)
);

alter table public.access_codes enable row level security;
alter table public.access_code_redemptions enable row level security;

create or replace function public.redeem_access_code(p_code text, p_user_id uuid)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_code public.access_codes%rowtype;
  v_count integer;
  v_redemption_id uuid;
begin
  if p_user_id is null or btrim(coalesce(p_code, '')) = '' then
    return 'invalid';
  end if;

  select *
  into v_code
  from public.access_codes
  where code_key = lower(btrim(p_code))
  for update;

  if not found or not v_code.active then
    return 'invalid';
  end if;

  if exists (
    select 1
    from public.purchases
    where user_id = p_user_id
      and course_slug = v_code.course_slug
  ) then
    return 'owned';
  end if;

  select count(*)
  into v_count
  from public.access_code_redemptions
  where code_id = v_code.id;

  if v_count >= v_code.max_redemptions
    and not exists (
      select 1
      from public.access_code_redemptions
      where code_id = v_code.id
        and user_id = p_user_id
    ) then
    return 'full';
  end if;

  insert into public.access_code_redemptions (code_id, user_id)
  values (v_code.id, p_user_id)
  on conflict (code_id, user_id) do nothing
  returning id into v_redemption_id;

  if v_redemption_id is null then
    select id
    into v_redemption_id
    from public.access_code_redemptions
    where code_id = v_code.id
      and user_id = p_user_id;
  end if;

  insert into public.purchases (user_id, course_slug, stripe_checkout_session_id)
  values (p_user_id, v_code.course_slug, 'code:' || v_redemption_id::text)
  on conflict (user_id, course_slug) do nothing;

  return 'redeemed';
end;
$$;

revoke all on function public.redeem_access_code(text, uuid) from public;
revoke all on function public.redeem_access_code(text, uuid) from anon;
revoke all on function public.redeem_access_code(text, uuid) from authenticated;
grant execute on function public.redeem_access_code(text, uuid) to service_role;

insert into public.access_codes (code, label, max_redemptions)
values ('PickleballNederland', 'Remco van Reek', 25)
on conflict (code_key) do nothing;
