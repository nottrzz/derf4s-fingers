# Shared mood check-in setup

The mood board publishes daily aggregate counts only. It does not publish journal
entries, names, or written comments. A random browser ID is stored locally so a
visitor can update one check-in per device per Jakarta calendar day.

## 1. Create the Supabase project

Create a free Supabase project, then open **SQL Editor** and run the contents of
[`supabase-setup.sql`](./supabase-setup.sql).

The SQL creates a table with row-level security enabled and exposes only two
anonymous RPC functions: one to submit a mood and one to read daily totals.
Direct table access is revoked from anonymous and authenticated users.

## 2. Configure the public browser key

In the Supabase project, open **Project Settings → API** and copy the Project
URL and the **anon / publishable public key**. Set them in `supabase-config.js`:

```js
window.DERF4S_SUPABASE = {
  url: "https://your-project-ref.supabase.co",
  anonKey: "your-public-anon-or-publishable-key",
};
```

The browser key is public by design; access is limited by the SQL functions and
database permissions. Never put a `service_role` or secret key in this file.

## Privacy and limits

- Visitors choose one of five moods; free-text journal entries remain local and
  private.
- Results show counts and percentages for the current day in Asia/Jakarta.
- The browser stores a random ID to let the same device update its check-in.
- This is a lightweight anonymous check-in, not a hardened voting system:
  clearing browser storage or using another device can create another vote.
