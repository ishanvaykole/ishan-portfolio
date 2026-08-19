/* ============================================================================
   app.js — renders the page from data.js and wires up the interactions.
   You normally don't need to touch this file. Edit data.js instead.
   ========================================================================== */

(function () {
  "use strict";

  const D = window.PORTFOLIO || PORTFOLIO;
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* Escape anything coming from data.js before it touches innerHTML. */
  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

  const icon = {
    arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
    down:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
    doc:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>`,
    ext:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>`,
    mail:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>`,
    pin:   `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    copy:  `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`,
    check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.31-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9z"/></svg>`,
    github:   `<svg viewBox="0 0 24 24"><path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.21.09 1.84 1.25 1.84 1.25 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0012 .5z"/></svg>`,
    orcid:    `<svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM7.37 18.2H5.62V6.9h1.75v11.3zM6.5 5.68a1.02 1.02 0 110-2.04 1.02 1.02 0 010 2.04zm5.6 12.52H9.6V6.9h4.86c3.53 0 5.2 2.5 5.2 5.65 0 3.4-2.16 5.65-5.34 5.65h-2.2zm.02-1.6h1.98c2.4 0 3.72-1.62 3.72-4.05 0-2.2-1.13-4.05-3.72-4.05h-2.15v8.1z"/></svg>`,
    mailIcon: `<svg viewBox="0 0 24 24"><path d="M2 4h20a1 1 0 011 1v14a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1zm10 8.2L3.4 6h17.2L12 12.2zM3 8.1V18h18V8.1l-9 6.4-9-6.4z"/></svg>`,
  };

  /* ======================================================== HEAD / META == */
  const M = D.meta;
  document.title = `${M.name} — ${M.tagline.split("·")[0].trim()}`;
  $("#logo-name").textContent = M.name;

  /* ============================================================== HERO == */
  // Hide the badge above the name entirely when hero.eyebrow is empty.
  if (D.hero.eyebrow) {
    $("#hero-eyebrow").textContent = D.hero.eyebrow;
  } else {
    $("#hero-eyebrow").closest(".hero-badge").remove();
  }
  $("#hero-intro").textContent = D.hero.intro;

  // Split the name so the surname picks up the gradient.
  const parts = M.name.trim().split(/\s+/);
  const last  = parts.length > 1 ? parts.pop() : "";
  $("#hero-name").innerHTML = esc(parts.join(" ")) +
    (last ? `<br><span class="grad">${esc(last)}</span>` : "");

  $("#hero-actions").innerHTML = `
    <a class="btn btn-primary" href="${esc(D.hero.ctaPrimary.href)}">
      ${esc(D.hero.ctaPrimary.label)}${icon.arrow}
    </a>
    <a class="btn btn-ghost" href="${esc(D.hero.ctaSecondary.href)}">
      ${esc(D.hero.ctaSecondary.label)}
    </a>
    ${M.links.resume ? `<a class="btn btn-ghost" href="${esc(M.links.resume)}" target="_blank" rel="noopener">${icon.doc}Résumé</a>` : ""}
  `;

  $("#hero-meta").innerHTML = `
    <span>${icon.pin}${esc(M.location)}</span>
    <span>${icon.mail.replace('viewBox', 'width="13" height="13" viewBox')}${esc(M.email)}</span>
  `;

  /* -- rotating word in the hero line ------------------------------------ */
  (function rotate() {
    const el = $("#rotator");
    const words = D.hero.rotating;
    if (!el || !words || !words.length) return;

    // Respect reduced-motion: just show the first word.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = words[0];
      return;
    }

    let w = 0, c = 0, erasing = false;
    (function tick() {
      const word = words[w];
      c += erasing ? -1 : 1;
      el.textContent = word.slice(0, c);

      let wait = erasing ? 38 : 68;
      if (!erasing && c === word.length) { wait = 1600; erasing = true; }
      else if (erasing && c === 0)       { erasing = false; w = (w + 1) % words.length; wait = 240; }
      setTimeout(tick, wait);
    })();
  })();

  /* ============================================================= STATS == */
  $("#stat-grid").innerHTML = D.stats.map((s) => `
    <div class="stat">
      <div class="stat-num" data-to="${esc(s.value)}" data-suffix="${esc(s.suffix || "")}">0${esc(s.suffix || "")}</div>
      <div class="stat-label">${esc(s.label)}</div>
    </div>`).join("");

  /* ============================================================= ABOUT == */
  const paras = (list) => (list || []).map((p) => `<p>${esc(p)}</p>`).join("");
  $("#about-text").innerHTML = paras(D.about.paragraphs);

  // "Continue reading" — only appears if data.js actually has more to show.
  const moreBtn = $("#read-more");
  if (D.about.more && D.about.more.length) {
    $("#about-more-text").innerHTML = paras(D.about.more);
    const label = (open) => (open ? "Show less" : "Continue reading") +
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
            stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;
    moreBtn.innerHTML = label(false);
    moreBtn.addEventListener("click", () => {
      const open = $("#about-more").classList.toggle("open");
      moreBtn.classList.toggle("open", open);
      moreBtn.setAttribute("aria-expanded", String(open));
      moreBtn.innerHTML = label(open);
      if (!open) moreBtn.scrollIntoView({ block: "center", behavior: "smooth" });
    });
  } else {
    moreBtn.remove();
  }

  const av = $("#avatar");
  if (D.about.photo) {
    av.innerHTML = `<img src="${esc(D.about.photo)}" alt="${esc(M.name)}">`;
  } else {
    av.textContent = M.name.split(/\s+/).map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  }

  $("#facts").innerHTML = D.about.facts.map((f) => `
    <div class="fact"><span class="fact-k">${esc(f.k)}</span><span class="fact-v">${esc(f.v)}</span></div>
  `).join("");

  /* ========================================================== RESEARCH == */
  const pillClass = (s) => "pill pill-" + String(s || "").toLowerCase().replace(/[^a-z]/g, "");

  const renderCard = (r, i) => `
    <article class="card reveal" data-tags="${esc((r.tags || []).join("|"))}" style="transition-delay:${Math.min(i, 5) * 55}ms">
      <div class="card-head" role="button" tabindex="0" aria-expanded="false">
        <div>
          <h3 class="card-title">${esc(r.title)}</h3>
          <div class="card-meta">
            ${r.role  ? `<span>${esc(r.role)}</span>`  : ""}
            ${r.venue ? `<span>${esc(r.venue)}</span>` : ""}
          </div>
          <p class="card-summary">${esc(r.summary)}</p>
          <div class="card-tags">${(r.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        </div>
        <div class="card-side">
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
            ${r.status ? `<span class="${pillClass(r.status)}">${esc(r.status)}</span>` : ""}
            ${r.year ? `<span style="font-size:12.5px;color:var(--text-faint)">${esc(r.year)}</span>` : ""}
          </div>
          <span class="chev">${icon.down}</span>
        </div>
      </div>
      <div class="card-body"><div class="card-body-inner">
        <div class="card-detail">
          ${r.fullTitle ? `
            <div class="full-title">
              <span class="full-title-k">Research question</span>
              <p>${esc(r.fullTitle)}</p>
            </div>` : ""}
          <ul>${(r.detail || []).map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
          ${r.link ? `<a class="card-link" href="${esc(r.link)}" target="_blank" rel="noopener">${esc(r.linkLabel || "Open")}${icon.arrow}</a>` : ""}
        </div>
      </div></div>
    </article>`;

  $("#cards").innerHTML     = D.research.map(renderCard).join("");
  $("#lab-cards").innerHTML = (D.labResearch || []).map(renderCard).join("");

  // Expand / collapse
  $$(".card-head").forEach((h) => {
    const toggle = () => {
      const card = h.closest(".card");
      const open = card.classList.toggle("open");
      h.setAttribute("aria-expanded", String(open));
    };
    h.addEventListener("click", toggle);
    h.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
  });

  // Filters, built from the tags actually present in data.js
  const allTags = ["All", ...new Set(D.research.flatMap((r) => r.tags || []))];
  $("#filters").innerHTML = allTags.map((t, i) =>
    `<button class="filter${i === 0 ? " on" : ""}" data-tag="${esc(t)}">${esc(t)}</button>`).join("");

  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    $$(".filter").forEach((b) => b.classList.toggle("on", b === btn));

    const tag = btn.dataset.tag;
    let shown = 0;
    // Only the clinical-research cards are filterable; the lab section is not.
    $$("#cards .card").forEach((card) => {
      const hit = tag === "All" || card.dataset.tags.split("|").includes(tag);
      card.classList.toggle("hidden", !hit);
      if (hit) shown++;
    });
    $("#empty").hidden = shown > 0;
  });

  /* ======================================================== EXPERIENCE == */
  const tlItem = (x) => `
    <div class="tl-item reveal${x.current ? " now" : ""}">
      <div class="tl-period">${esc(x.period)}</div>
      <h3 class="tl-role">${esc(x.role)}</h3>
      <div class="tl-org">${esc(x.org)}</div>
      <ul class="tl-points">${(x.points || []).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
    </div>`;

  // Supports both shapes: a flat list of roles, or groups of {group, items}.
  $("#timeline").innerHTML = D.experience.map((entry) =>
    entry.items
      ? `<div class="tl-group reveal"><span>${esc(entry.group)}</span></div>` +
        entry.items.map(tlItem).join("")
      : tlItem(entry)
  ).join("");

  /* ========================================================= EDUCATION == */
  $("#edu-list").innerHTML = (D.education || []).map((e) => `
    <div class="edu-card reveal${e.current ? " now" : ""}">
      <div class="edu-school">
        ${esc(e.school)}
        ${e.current ? `<span class="pill pill-ongoing">Current</span>` : ""}
      </div>
      <div class="edu-qual">${esc(e.qualification)}</div>
      <div class="edu-foot">
        <span class="per">${esc(e.period)}</span>
        ${e.note ? `<span>${esc(e.note)}</span>` : ""}
      </div>
    </div>`).join("");

  const honourList = (arr) => (arr || []).map((a) => `
    <li>${esc(a.title)}${a.note ? `<span class="honour-note">${esc(a.note)}</span>` : ""}</li>
  `).join("");

  $("#awards").innerHTML = honourList(D.awards);

  $("#certs").innerHTML = (D.certifications || []).map((c) => {
    const dates = [
      c.issued  ? "Issued " + esc(c.issued)   : "",
      c.expires ? "Expires " + esc(c.expires) : "",
      c.credentialId ? "ID " + esc(c.credentialId) : "",
    ].filter(Boolean).map((d) => `<span>${d}</span>`).join("");

    return `
      <div class="cert">
        <div class="cert-title">${esc(c.title)}</div>
        ${c.issuer ? `<div class="cert-issuer">${esc(c.issuer)}</div>` : ""}
        ${dates ? `<div class="cert-dates">${dates}</div>` : ""}
        ${c.note ? `<p class="cert-note">${esc(c.note)}</p>` : ""}
        ${(c.file || c.verify) ? `
          <div class="cert-links">
            ${c.file   ? `<a class="cert-link" href="${esc(c.file)}" target="_blank" rel="noopener">${icon.doc}Certificate</a>` : ""}
            ${c.verify ? `<a class="cert-link" href="${esc(c.verify)}" target="_blank" rel="noopener">${icon.ext}Verify</a>` : ""}
          </div>` : ""}
      </div>`;
  }).join("");

  /* ========================================================= LANGUAGES == */
  const LEVELS = {
    "native": 100,
    "full professional": 88,
    "professional working": 70,
    "limited working": 50,
    "elementary": 30,
  };
  $("#lang-grid").innerHTML = (D.languages || []).map((l) => {
    const pct = LEVELS[String(l.level).toLowerCase()] ?? 50;
    return `
      <div class="lang">
        <div class="lang-top">
          <span class="lang-name">${esc(l.name)}</span>
          <span class="lang-level">${esc(l.level)}</span>
        </div>
        <div class="lang-bar"><div class="lang-fill" data-pct="${pct}"></div></div>
      </div>`;
  }).join("");

  /* ============================================================ SKILLS == */
  $("#skill-grid").innerHTML = D.skills.map((s, i) => `
    <div class="skill-card reveal" style="transition-delay:${Math.min(i, 5) * 60}ms">
      <div class="skill-group">${esc(s.group)}</div>
      <ul class="skill-items">${s.items.map((it) => `<li>${esc(it)}</li>`).join("")}</ul>
    </div>`).join("");

  /* =========================================================== CONTACT == */
  $("#contact-title").innerHTML = esc(D.contact.heading).replace(/(\S+)$/, '<span class="grad">$1</span>');
  $("#contact-blurb").textContent = D.contact.blurb;

  const subject = encodeURIComponent(`Hello ${M.shortName || M.name}`);
  $("#contact-actions").innerHTML = `
    <a class="btn btn-primary" href="mailto:${esc(M.email)}?subject=${subject}">${icon.mail}Email me</a>
    <button class="copy-mail" id="copy-mail">${icon.copy}<span>${esc(M.email)}</span></button>
  `;

  $("#copy-mail").addEventListener("click", async function () {
    const label = this.querySelector("span");
    try {
      await navigator.clipboard.writeText(M.email);
    } catch (_) {
      // Clipboard API needs https / localhost — fall back to a selection copy.
      const ta = document.createElement("textarea");
      ta.value = M.email; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (__) {}
      ta.remove();
    }
    this.classList.add("done");
    this.firstChild.outerHTML = icon.check;
    label.textContent = "Copied";
    setTimeout(() => {
      this.classList.remove("done");
      this.firstChild.outerHTML = icon.copy;
      label.textContent = M.email;
    }, 1900);
  });

  const socialDefs = [
    ["linkedin", M.links.linkedin, icon.linkedin, "LinkedIn"],
    ["github",   M.links.github,   icon.github,   "GitHub"],
    ["orcid",    M.links.orcid,    icon.orcid,    "ORCID"],
    ["email",    "mailto:" + M.email, icon.mailIcon, "Email"],
  ];
  $("#socials").innerHTML = socialDefs
    .filter(([, href]) => href)
    .map(([, href, svg, label]) =>
      `<a class="social" href="${esc(href)}" target="_blank" rel="noopener" aria-label="${esc(label)}" title="${esc(label)}">${svg}</a>`)
    .join("");

  /* ============================================================ FOOTER == */
  $("#foot-note").textContent = `© ${new Date().getFullYear()} ${M.name}. ${D.footer.note}`;

  /* ====================================================== INTERACTIONS == */

  // Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
  $$(".reveal").forEach((el) => io.observe(el));

  // Counting numbers in the stat strip
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      countIO.unobserve(e.target);
      const el = e.target;
      const to = parseFloat(el.dataset.to) || 0;
      const sfx = el.dataset.suffix || "";
      const start = performance.now();
      const dur = 1300;
      (function step(now) {
        const t = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(to * eased) + sfx;
        if (t < 1) requestAnimationFrame(step);
      })(start);
    });
  }, { threshold: 0.5 });
  $$(".stat-num").forEach((el) => countIO.observe(el));

  // Language proficiency bars fill when they scroll into view
  const barIO = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (!e.isIntersecting) return;
      barIO.unobserve(e.target);
      setTimeout(() => { e.target.style.width = e.target.dataset.pct + "%"; }, i * 90);
    });
  }, { threshold: 0.4 });
  $$(".lang-fill").forEach((el) => barIO.observe(el));

  // Nav background, progress bar, scroll-spy
  const nav = $("#nav");
  const bar = $("#progress");
  const navLinks = $$("#nav-links a[href^='#']");
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      nav.classList.toggle("stuck", y > 20);

      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";

      let active = null;
      sections.forEach((s) => { if (s.offsetTop - 140 <= y) active = s.id; });
      navLinks.forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === "#" + active));

      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const burger = $("#burger");
  const links  = $("#nav-links");
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  // Cursor glow (pointer devices only)
  if (window.matchMedia("(pointer: fine)").matches) {
    const glow = $("#cursor-glow");
    window.addEventListener("mousemove", (e) => {
      glow.style.opacity = "1";
      glow.style.left = e.clientX + "px";
      glow.style.top  = e.clientY + "px";
    }, { passive: true });
    document.addEventListener("mouseleave", () => { glow.style.opacity = "0"; });
  }

  // Press "/" anywhere to jump to Research, Esc to close an open card.
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
      e.preventDefault();
      document.getElementById("research").scrollIntoView({ behavior: "smooth" });
    }
    if (e.key === "Escape") {
      $$(".card.open").forEach((c) => {
        c.classList.remove("open");
        c.querySelector(".card-head").setAttribute("aria-expanded", "false");
      });
    }
  });
})();
