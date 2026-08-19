# Ishan Vaykole — portfolio site

> **This is the live site**, at `~/Desktop/ishan-portfolio`.
>
> There is a second, older portfolio at `~/Desktop/portfolio` — a Next.js
> project from August. It's kept intact in git in case you ever want it, but
> it's not the one you're maintaining. Ignore that folder.

## The one thing to know

**Everything you'll ever want to change lives in `data.js`.**

Change the words between the quote marks. Save with **Cmd+S**. Refresh the
browser. Done.

You do not need to touch `index.html`, `styles.css`, or `app.js` for normal
updates.

---

## How to open data.js

Double-clicking it probably won't work — macOS doesn't know what to do with a
`.js` file until you tell it. Either:

**Right-click `data.js` → Open With → TextEdit.**

Or make double-click work permanently: right-click `data.js` → **Get Info** →
under *Open with*, choose **TextEdit** → click **Change All…**

### Important: TextEdit had a setting that would have broken your site

TextEdit ships with **Smart Quotes** turned on. It silently replaces the
straight quotes `"` that code needs with curly ones `"` `"` — and the moment
that happens, your page goes blank. I've turned it off, along with Smart Dashes,
and set TextEdit to open files as plain text.

If you ever need to undo that, run this in Terminal:

```bash
defaults delete com.apple.TextEdit SmartQuotes; defaults delete com.apple.TextEdit SmartDashes; defaults delete com.apple.TextEdit RichText
```

If you'd rather have a proper code editor — colour-coded, much harder to break
things in — <https://code.visualstudio.com> is free and worth the five-minute
install.

---

## Your safety net

`data-BACKUP-working.js` is a copy of `data.js` from when everything was known
to work. If you break something badly:

1. Delete the broken `data.js`
2. Duplicate `data-BACKUP-working.js` and rename the copy to `data.js`

You're back to a working site. Make a fresh backup whenever you finish a round
of edits you're happy with.

---

## The four files

| File | What it is | Do you edit it? |
|---|---|---|
| `data.js` | All your content — name, bio, research, jobs, skills | **Yes, this one** |
| `index.html` | The page skeleton and the share-preview text | Rarely |
| `styles.css` | Colours, fonts, spacing | Only to restyle |
| `app.js` | Builds the page from `data.js` | No |

---

## How to view it

Double-click `index.html`. It opens in your browser.

One caveat: opened this way (a `file://` address), the "copy email" button may be
blocked by the browser. Everything else works. To see it exactly as visitors
will, run this in Terminal from inside the folder:

```bash
python3 -m http.server 4173 --directory ~/Desktop/ishan-portfolio
```

Then go to `http://localhost:4173`. Press `Ctrl+C` in Terminal to stop.

---

## Common edits

### Add a new research project

There are **two** lists of project cards, and they work identically:

- `research: [` — the **Clinical research** section (has filter buttons)
- `labResearch: [` — the **Laboratory & independent research** section

Copy one entire block — from its `{` to its `},` — paste it into whichever list
you want, and change the text:

```js
{
  title: "Short card heading",
  status: "Ongoing",            // "Complete", "Approved", "Draft", "Independent"
  year: "2026",
  tags: ["Clinical", "Lab"],    // these create the filter buttons automatically
  role: "Your role",
  venue: "Where you did it",
  fullTitle: "The formal research question, shown in italics when the card opens.",
  summary: "Two or three sentences shown on the card.",
  detail: [
    "A bullet point that appears when someone clicks the card.",
    "Another one.",
  ],
  link: "",                     // a URL, or "" for no button
  linkLabel: "Read the paper",
},
```

`fullTitle` is optional — set it to `""` and the italic research-question block
just doesn't appear.

The filter buttons at the top of the Clinical research section build themselves
from whatever you put in `tags` there. Add a new tag and a new button appears.
The lab section deliberately has no filters — there are only four cards.

### Add a job or role

Same idea, in the `experience: [` list. Newest goes at the top. Add
`current: true,` to give it the glowing dot.

### Add an award

The `awards:` list. `note` is the small grey line underneath — use it for the
year or the awarding body, or leave it as `""`.

### Add a certification

The `certifications:` list. Each one looks like this:

```js
{
  title:  "Course name",
  issuer: "Who issued it",
  issued: "Sep 2025",
  expires: "Sep 2028",                  // "" if it doesn't expire
  credentialId: "ABC123",               // "" if there isn't one
  note:   "One line about what it covered.",
  file:   "certificates/my-cert.pdf",   // your own copy — see below
  verify: "https://...",                // issuer's public verify page
},
```

The **Certificate** and **Verify** buttons only appear if `file` and `verify`
have something in them.

### Certificate files

The `certificates/` folder holds your actual certificate PDFs. I copied five
in and renamed them to readable names. To add another: drop the PDF into that
folder and point `file:` at it, e.g. `"certificates/new-cert.pdf"`.

These are real files served from your own site, so the buttons work for anyone
— no LinkedIn login needed. When you deploy, the folder goes up with everything
else automatically.

### Change the numbers in the stat strip

The `stats:` list. `value` is the number that counts up, `suffix` is anything
after it (`"mo"`, `"+"`, `"%"`, or `""` for nothing).

### Add your photo

Save a square photo into this folder as `photo.jpg`, then in `data.js` change:

```js
photo: "",          →     photo: "photo.jpg",
```

Without it, the site shows your initials, which looks fine on purpose.

### Add your résumé

Drop `resume.pdf` into this folder, then in `data.js`:

```js
resume: "",         →     resume: "resume.pdf",
```

A Résumé button appears in the hero.

### Add GitHub or ORCID

Fill in the `links:` block. Any link left as `""` simply doesn't show up.

### Change the colours

Top of `styles.css`, the `:root` block. The two that matter most:

```css
--accent-a: #5eead4;   /* teal */
--accent-b: #818cf8;   /* indigo */
```

Every gradient on the site comes from those two. Change them and the whole
site follows.

---

## Things to fill in

I marked the gaps in `data.js` with `// TODO`. Search for that word:

- Year for the oligodynamic (copper/zinc/aluminium/silver) independent study
- Years and awarding bodies for the three awards
- The GYECC certificate file — download `certificate.jpeg` from LinkedIn into
  `certificates/`, then set `file: "certificates/gyecc.jpeg"`
- Dates for the MUN and Jashn-e-Judaav roles
- Confirm the graduation date shown in the About facts

---

## Putting it online (free)

**Netlify Drop** is the fastest. Go to <https://app.netlify.com/drop> and drag
this whole `portfolio` folder onto the page. You get a live URL in about ten
seconds. To update later, drag the folder again.

**GitHub Pages** if you want a nicer URL and version history: create a
repository called `yourusername.github.io`, upload these files, and it publishes
at that address.

Either way, once you have the real URL, update the three `og:` lines near the
top of `index.html` — those control the preview card when you send the link on
WhatsApp or LinkedIn.

---

## Small things built in

- Press `/` anywhere to jump to Research; `Esc` closes any open card.
- **Cmd+P → Save as PDF** gives you a clean light-background printout with every
  card expanded. It works as a one-page CV.
- The site respects "reduce motion" accessibility settings.
- It's fully responsive — the nav collapses to a menu button on phones.

---

## Why your edits always show up

`styles.css`, `data.js` and `app.js` are loaded with a timestamp attached, so
the browser can never serve you a stale cached copy. Edit, save, hit refresh —
you'll always see your change. No need for hard-refreshes.

---

## If the page goes blank

You broke `data.js` — almost always a missing comma or bracket. Press Cmd+Z to
undo until it works again. To see the exact error, right-click the page →
Inspect → Console.
