create table if not exists public.daily_mood_checkins (
  checkin_date date not null,
  visitor_id uuid not null,
  mood text not null check (mood in ('senang', 'semangat', 'tenang', 'lelah', 'sedih')),
  created_at timestamptz not null default now(),
  primary key (checkin_date, visitor_id)
);

alter table public.daily_mood_checkins enable row level security;
revoke all on public.daily_mood_checkins from anon, authenticated;

create or replace function public.submit_daily_mood(p_visitor_id uuid, p_mood text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if p_visitor_id is null
    or p_mood not in ('senang', 'semangat', 'tenang', 'lelah', 'sedih') then
    raise exception 'Invalid mood check-in';
  end if;

  insert into public.daily_mood_checkins (checkin_date, visitor_id, mood)
  values ((pg_catalog.now() at time zone 'Asia/Jakarta')::date, p_visitor_id, p_mood)
  on conflict (checkin_date, visitor_id)
  do update set mood = excluded.mood, created_at = pg_catalog.now();
end;
$$;

create or replace function public.get_daily_mood_summary()
returns table (mood text, total bigint)
language sql
stable
security definer
set search_path = ''
as $$
  select checkins.mood, pg_catalog.count(*) as total
  from public.daily_mood_checkins as checkins
  where checkins.checkin_date = (pg_catalog.now() at time zone 'Asia/Jakarta')::date
  group by checkins.mood;
$$;

revoke all on function public.submit_daily_mood(uuid, text) from public, authenticated;
revoke all on function public.get_daily_mood_summary() from public, authenticated;
grant execute on function public.submit_daily_mood(uuid, text) to anon;
grant execute on function public.get_daily_mood_summary() to anon;
