/* =====================================================================
   VIEW — everything that draws to the screen. No app logic lives here;
   the Controller tells the View what to show.
   ===================================================================== */

const View = {

  reducedMotion: matchMedia("(prefers-reduced-motion: reduce)").matches,

  els: {
    screens:    {},
    menuItems:  [],
    wipe:       document.getElementById("wipe"),
    featGrid:   document.getElementById("feat-grid"),
    repoGrid:   document.getElementById("repo-grid"),
    repoStatus: document.getElementById("repo-status"),
    skillsBody: document.getElementById("skills-body"),
    certBody:   document.getElementById("cert-body"),
    sfx:        document.getElementById("sfx-select"),
    cursor:     document.getElementById("cursor"),
    clock:      document.getElementById("clock"),
  },

  init() {
    document.querySelectorAll(".screen").forEach(s => {
      this.els.screens[s.id.replace("screen-", "")] = s;
    });
    this.els.menuItems = [...document.querySelectorAll(".menu-item")];
    document.querySelectorAll("[data-ransom]").forEach(el => {
      el.textContent = el.dataset.ransom;
    });
    this.els.sfx.volume = 0.45;
    this.startClock();
    this.startParallax();
    this.startCursor();
    this.bindSlashMenu();
    document.body.classList.add("loaded");
  },

  hash(str) {
    let h = 9;
    for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 387420489);
    return (h ^ h >>> 9) >>> 0;
  },

  /* Cover-fit: map a 0–1 point in the menu artwork to screen-home pixels. */
  mapCoverPoint(img, box, nx, ny) {
    const iw = img.naturalWidth || box.width;
    const ih = img.naturalHeight || box.height;
    const scale = Math.max(box.width / iw, box.height / ih);
    const dw = iw * scale, dh = ih * scale;
    return {
      x: (box.width - dw) / 2 + nx * dw,
      y: (box.height - dh) / 2 + ny * dh,
    };
  },

  slashEnds(home) {
    const homeRect = home.getBoundingClientRect();
    const art = document.getElementById("art-home");
    if (art && art.isConnected && art.naturalWidth) {
      const r = art.getBoundingClientRect();
      const map = (nx, ny) => {
        const p = this.mapCoverPoint(art, { width: r.width, height: r.height }, nx, ny);
        return {
          x: r.left - homeRect.left + p.x,
          y: r.top - homeRect.top + p.y,
        };
      };
      return { a: map(0.56, 0.28), b: map(0.40, 0.74) };
    }
    return {
      a: { x: home.clientWidth * 0.56, y: home.clientHeight * 0.28 },
      b: { x: home.clientWidth * 0.40, y: home.clientHeight * 0.74 },
    };
  },

  layoutMenuOnSlash() {
    const home = this.els.screens.home;
    const items = this.els.menuItems;
    if (!home || !items.length) return;
    if (!home.clientWidth || !home.clientHeight) return;

    const { a, b } = this.slashEnds(home);
    const dx = b.x - a.x, dy = b.y - a.y;
    const len = Math.hypot(dx, dy) || 1;
    const fromVertical = Math.atan2(dx, dy) * (180 / Math.PI);
    home.style.setProperty("--slash-tilt", `${fromVertical * 0.55}deg`);

    const px = dy / len;
    const py = -dx / len;
    const bulge = Math.min(home.clientWidth, home.clientHeight) * 0.045;
    const t0 = 0.14, t1 = 0.86;
    const n = items.length;
    items.forEach((item, i) => {
      const t = n === 1 ? 0.5 : t0 + (t1 - t0) * (i / (n - 1));
      const curve = Math.sin(t * Math.PI) * bulge;
      const wobble = ((this.hash(item.dataset.target) % 9) - 4) * 0.7;
      item.style.setProperty("--wobble", `${wobble}deg`);
      item.style.left = `${a.x + dx * t + px * curve}px`;
      item.style.top = `${a.y + dy * t + py * curve}px`;
    });

    requestAnimationFrame(() => this.keepMenuInBounds(home, items));
  },

  keepMenuInBounds(home, items) {
    const hr = home.getBoundingClientRect();
    const padT = 64, padB = 28, padX = 12;
    let minTop = Infinity, maxBot = -Infinity, minL = Infinity, maxR = -Infinity;
    items.forEach(item => {
      const r = item.getBoundingClientRect();
      minTop = Math.min(minTop, r.top);
      maxBot = Math.max(maxBot, r.bottom);
      minL = Math.min(minL, r.left);
      maxR = Math.max(maxR, r.right);
    });
    let dy = 0, dx = 0;
    if (minTop < hr.top + padT) dy += (hr.top + padT) - minTop;
    if (maxBot + dy > hr.bottom - padB) dy += (hr.bottom - padB) - (maxBot + dy);
    if (minL < hr.left + padX) dx += (hr.left + padX) - minL;
    if (maxR + dx > hr.right - padX) dx += (hr.right - padX) - (maxR + dx);
    if (!dx && !dy) return;
    items.forEach(item => {
      item.style.left = `${parseFloat(item.style.left) + dx}px`;
      item.style.top = `${parseFloat(item.style.top) + dy}px`;
    });
  },

  bindSlashMenu() {
    const home = this.els.screens.home;
    const art = document.getElementById("art-home");
    const relayout = () => this.layoutMenuOnSlash();
    relayout();
    addEventListener("resize", relayout);
    if (home && "ResizeObserver" in window) {
      new ResizeObserver(relayout).observe(home);
    }
    if (art) {
      if (art.complete && art.naturalWidth) relayout();
      else art.addEventListener("load", relayout);
    }
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(relayout);
    }
  },

  /* ---------- Screens & menu ---------- */
  showScreen(name) {
    const s = this.els.screens;
    Object.values(s).forEach(sc => sc.classList.remove("active"));
    s[name].classList.add("active");
    s[name].scrollTop = 0;
    document.body.dataset.screen = name;
    if (name === "home") this.layoutMenuOnSlash();
  },

  setMenuSelection(index) {
    this.els.menuItems.forEach((m, j) => m.classList.toggle("sel", j === index));
    if (document.body.dataset.screen === "home") {
      requestAnimationFrame(() => {
        const home = this.els.screens.home;
        if (home) this.keepMenuInBounds(home, this.els.menuItems);
      });
    }
  },

  wipe(swap, done) {
    if (this.reducedMotion) { swap(); done(); return; }
    const w = this.els.wipe;
    w.classList.remove("go"); void w.offsetWidth;
    w.classList.add("go");
    setTimeout(swap, 340);
    setTimeout(done, 720);
  },

  /* ---------- Sound ---------- */
  playSelect() {
    try {
      this.els.sfx.currentTime = 0;
      const p = this.els.sfx.play();
      if (p && p.catch) p.catch(() => {});
    } catch {}
  },

  /* ---------- Project cards ---------- */
  cardThumb(src) {
    return `<div class="thumb"><img src="${src}" alt="" loading="lazy"
      onerror="this.closest('.thumb').remove()"></div>`;
  },

  splitTitle(title) {
    const first = title.split(" ")[0];
    return `<em>${first}</em>${title.slice(first.length)}`;
  },

  renderFeatured(list) {
    if (this.els.featGrid.childElementCount) return;
    list.forEach((f, i) => {
      const a = document.createElement("a");
      a.className = "card feat";
      a.href = f.url; a.target = "_blank"; a.rel = "noopener";
      a.style.setProperty("--tilt", ((this.hash(f.title) % 5) - 2) * 0.8 + "deg");
      a.style.setProperty("--d", i * 70 + "ms");
      a.innerHTML = `
        ${this.cardThumb(f.img)}
        <span class="lang" style="--lc:${f.color}">${f.tag}</span>
        <h3>${this.splitTitle(f.title)}</h3>
        <p>${f.desc}</p>
        <div class="meta"><span>HIGHLIGHT</span><span class="go">${f.cta}</span></div>`;
      this.els.featGrid.appendChild(a);
    });
  },

  renderRepos(repos, statusText, model) {
    this.els.repoStatus.textContent = statusText;
    this.els.repoGrid.innerHTML = "";
    repos.forEach((r, i) => {
      const a = document.createElement("a");
      a.className = "card";
      a.href = r.html_url; a.target = "_blank"; a.rel = "noopener";
      a.style.setProperty("--tilt", ((this.hash(r.name) % 5) - 2) * 0.8 + "deg");
      a.style.setProperty("--d", i * 70 + "ms");
      a.style.setProperty("--lc", model.langColors[r.language] || "#e60012");
      const pretty = r.name.replace(/[-_]/g, " ").replace(/\b\w/g, c => c.toUpperCase());
      const img = model.projectImages[r.name] || `assets/projects/${r.name}.png`;
      a.innerHTML = `
        ${this.cardThumb(img)}
        <span class="lang">${r.language || "Repo"}</span>
        <h3>${this.splitTitle(pretty)}</h3>
        <p>${r.description || "No description yet, but the code speaks for itself."}</p>
        <div class="meta">
          <span>&#9733; ${r.stargazers_count || 0}</span>
          <span class="go">View on GitHub &rarr;</span>
        </div>`;
      this.els.repoGrid.appendChild(a);
    });
  },

  /* ---------- Skills ---------- */
  renderSkills(groups) {
    groups.forEach(g => {
      const div = document.createElement("div");
      div.className = "skill-group";
      div.innerHTML = `<h3>${g.group}</h3>`;
      g.items.forEach(([name, value]) => {
        const row = document.createElement("div");
        row.className = "skill-row";
        row.innerHTML = `
          <span class="name">${name}</span>
          <div class="skill-bar"><div class="fill" data-v="${value}"></div></div>
          <span class="lv">${value}</span>`;
        div.appendChild(row);
      });
      this.els.skillsBody.appendChild(div);
    });
  },

  animateSkillBars() {
    const fills = this.els.skillsBody.querySelectorAll(".fill");
    fills.forEach(f => { f.style.width = "0"; });
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fills.forEach((f, i) => setTimeout(() => { f.style.width = f.dataset.v + "%"; }, i * 60));
    }));
  },

  /* ---------- Certifications ---------- */
  renderCertifications(certs) {
    certs.forEach(cert => {
      const div = document.createElement("div");
      div.className = "cert-item";
      const skillsHtml = cert.skills.map(s => `<span class="cert-skill"><span>${s}</span></span>`).join("");
      const bulletsHtml = cert.bullets.map(b => `<li>${b}</li>`).join("");
      div.innerHTML = `
        <h3>${cert.title}</h3>
        <div class="cert-meta">${cert.issuer} | ${cert.date}</div>
        <div class="cert-skills">${skillsHtml}</div>
        <ul class="cert-bullets">${bulletsHtml}</ul>`;
      this.els.certBody.appendChild(div);
    });
  },

  /* ---------- Ambient ---------- */
  startClock() {
    setInterval(() => {
      this.els.clock.textContent =
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + " · PUNE";
    }, 1000);
  },

  startParallax() {
    if (this.reducedMotion) return;
    const stripes = document.getElementById("bg-stripes");
    const halftone = document.getElementById("bg-halftone");
    const arts = [...document.querySelectorAll(".menu-art")];
    let tx = 0, ty = 0, cx = 0, cy = 0;
    addEventListener("mousemove", e => {
      tx = e.clientX / innerWidth - 0.5;
      ty = e.clientY / innerHeight - 0.5;
    }, { passive: true });
    const loop = () => {
      cx += (tx - cx) * 0.06; cy += (ty - cy) * 0.06;
      stripes.style.transform = `translate(${cx * 22}px, ${cy * 14}px)`;
      halftone.style.transform = `translate(${cx * -34}px, ${cy * -22}px)`;
      arts.forEach(a => {
        if (a.isConnected)
          a.style.transform = `translate(${cx * 14}px, ${cy * 9}px) scale(1.04)`;
      });
      requestAnimationFrame(loop);
    };
    loop();
  },

  startCursor() {
    if (!matchMedia("(pointer:fine)").matches || this.reducedMotion) return;
    const cur = this.els.cursor;
    document.body.classList.add("cursor-on");
    let x = -100, y = -100, frame = 0, last = 0, visible = false;

    addEventListener("mousemove", e => {
      x = e.clientX; y = e.clientY;
      if (!visible) { cur.style.display = "block"; visible = true; }
      const t = e.target;
      const overLink = t.closest &&
        t.closest("a,button,.card,.menu-item,.exit-btn,.contact-chip,#big-name,#bgm-mute,#bgm-vol");
      cur.classList.toggle("link", !!overLink);
    }, { passive: true });

    document.documentElement.addEventListener("mouseleave", () => {
      cur.style.display = "none"; visible = false;
    });

    const tick = ts => {
      if (ts - last >= 50) {
        frame = (frame + 1) % 30; last = ts;
        cur.style.backgroundPosition = -frame * 48 + "px 0";
      }
      cur.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  },
};
