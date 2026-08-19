# Getting your site online

Your folder is already a git repository with everything committed. What's left
is putting it on GitHub, then connecting Vercel to it.

Do this once. After that, updating your live site takes about 30 seconds.

---

## Step 1 — Make a GitHub account

Go to <https://github.com/signup> and sign up. Free.

Use your real email. Write the password down somewhere safe.

---

## Step 2 — Install GitHub Desktop

Download from <https://desktop.github.com> and install it.

**Why this and not Terminal:** GitHub Desktop is a normal app with buttons. You
see your changed files in a list, type what you changed, click a button, done.
No commands to memorise.

Open it and sign in with the GitHub account you just made.

---

## Step 3 — Publish your folder to GitHub

In GitHub Desktop:

1. **File → Add Local Repository**
2. Choose the folder: `Desktop` → `ishan-portfolio`
3. It will recognise it immediately (I already set it up)
4. Click the blue **Publish repository** button at the top
5. Name it `ishan-portfolio`
6. **Untick "Keep this code private"** — it needs to be public for the free
   Vercel plan, and it's your portfolio, so public is the point
7. Click **Publish repository**

Your code is now on GitHub.

---

## Step 4 — Connect Vercel

1. Go to <https://vercel.com/signup>
2. Choose **Continue with GitHub** — this links the two accounts, no separate
   password
3. Once in, click **Add New… → Project**
4. Find `ishan-portfolio` in the list and click **Import**
5. Don't change any settings. If it asks for a Framework Preset, choose
   **Other**. There's no build step — your site is plain HTML
6. Click **Deploy**

Wait about 30 seconds.

You'll get a URL like `ishan-portfolio.vercel.app`. **That's your live site.**
Send that link to anyone.

---

## Step 5 — Update the share preview (do this once)

Now that you know your URL, open `index.html` and find the three lines near the
top starting with `og:`. They control the preview card people see when you send
the link on WhatsApp or LinkedIn. Nothing breaks if you skip this — the preview
just won't show your site's address.

---

# Making changes from now on

This is the part that matters. Three steps, every time:

### 1. Edit
Open `data.js`, change your text, save (Cmd+S).

### 2. Push
Open GitHub Desktop. Your change appears in the left panel. At the bottom left,
type a short note about what you changed — anything, like "added new research
project". Click **Commit to main**, then click **Push origin** at the top.

### 3. Wait
Vercel notices the push and rebuilds your site automatically. About 30 seconds
later your live URL shows the change. You don't need to visit Vercel at all.

That's it. Edit → Commit → Push.

---

## A safety habit

Before pushing, check your site still works: open `index.html` in your browser
and look at it. If the page is blank, you broke `data.js` — restore from
`data-BACKUP-working.js` (see README) rather than pushing a broken site.

Once a change is pushed and you're happy with it, that version is saved in
GitHub forever. You can always go back to it.

---

## Custom domain (optional, later)

A `.vercel.app` URL is perfectly fine to share. If you later want something like
`ishanvaykole.com`, buy the domain (about $15/year from Namecheap or
Cloudflare), then in Vercel go to your project → **Settings → Domains** and
follow the instructions there.
