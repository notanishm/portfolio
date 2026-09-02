/* =====================================================================
   CONTROLLER — listens to the user, updates the Model, tells the View.
   ===================================================================== */

const Controller = {

  transitioning: false,
  audioUnlocked: false,
  userMuted: false,
  bgmHeldSilent: false,

  init() {
    View.init();
    this.bindMenu();
    this.bindKeyboard();
    this.bindAudioUnlock();
    this.bindBgm();
    this.bindContactForm();
  },

  /* ---------- Contact form ---------- */
  bindContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    const status = document.getElementById("form-status");
    const btn = form.querySelector(".form-send");

    form.addEventListener("submit", async e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      if (data._honey) return;
      if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
        status.textContent = "Fill in all three fields first.";
        return;
      }
      btn.disabled = true;
      status.textContent = "Sending…";
      try {
        const res = await fetch(`https://formsubmit.co/ajax/${Model.contactEmail}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.message,
            _subject: `Portfolio message from ${data.name}`,
          }),
        });
        if (!res.ok) throw new Error(res.status);
        status.textContent = "Sent! I'll get back to you soon.";
        form.reset();
        this.play();
      } catch {
        status.textContent = "Couldn't reach the relay, opening your email app instead…";
        const subject = encodeURIComponent(`Portfolio message from ${data.name}`);
        const body = encodeURIComponent(`${data.message}\n\nReply to: ${data.email}`);
        location.href = `mailto:${Model.contactEmail}?subject=${subject}&body=${body}`;
      } finally {
        btn.disabled = false;
      }
    });
  },

  /* ---------- Navigation ---------- */
  goTo(screen) {
    if (this.transitioning || screen === Model.state.screen) return;
    this.transitioning = true;
    this.play();

    View.wipe(
      () => {
        Model.state.screen = screen;
        View.showScreen(screen);
        if (screen === "projects") this.loadProjects();
        if (screen === "skills") this.loadSkills();
        if (screen === "certifications") this.loadCertifications();
      },
      () => { this.transitioning = false; }
    );
  },

  select(index) {
    const n = View.els.menuItems.length;
    const next = (index + n) % n;
    if (next !== Model.state.menuIndex) this.play();
    Model.state.menuIndex = next;
    View.setMenuSelection(next);
  },

  /* ---------- Screen data loading ---------- */
  async loadProjects() {
    View.renderFeatured(Model.featured);
    if (Model.state.reposLoaded) return;
    const { repos, live } = await Model.fetchRepos();
    const status = live
      ? `${repos.length} repositories · live from GitHub`
      : "Showing pinned work · GitHub API unavailable right now";
    View.renderRepos(repos, status, Model);
    Model.state.reposLoaded = true;
  },

  loadSkills() {
    if (!Model.state.skillsBuilt) {
      View.renderSkills(Model.skills);
      Model.state.skillsBuilt = true;
    }
    View.animateSkillBars();
  },

  loadCertifications() {
    if (!Model.state.certsBuilt) {
      View.renderCertifications(Model.certifications);
      Model.state.certsBuilt = true;
    }
  },

  /* ---------- Sound ---------- */
  play() {
    if (this.audioUnlocked) View.playSelect();
  },

  bindAudioUnlock() {
    const unlock = () => this.unlockAudio();
    addEventListener("pointerdown", unlock, { capture: true });
    addEventListener("keydown", unlock, { capture: true });
  },

  unlockAudio() {
    if (this.audioUnlocked && !this.bgmHeldSilent) return;
    this.audioUnlocked = true;
    this.bgmHeldSilent = false;
    const bgm = document.getElementById("bgm");
    if (!bgm) return;
    bgm.muted = this.userMuted;
    if (!this.userMuted) bgm.play().catch(() => {});
  },

  bindBgm() {
    const bgm = document.getElementById("bgm");
    const mute = document.getElementById("bgm-mute");
    const vol = document.getElementById("bgm-vol");
    if (!bgm || !mute || !vol) return;

    const applyVol = () => {
      const v = Number(vol.value) / 100;
      bgm.volume = v;
      bgm.muted = this.userMuted || this.bgmHeldSilent;
      const silent = this.userMuted || v === 0;
      mute.classList.toggle("is-muted", silent);
      mute.setAttribute("aria-pressed", silent ? "true" : "false");
      mute.textContent = silent ? "MUTE" : "BGM";
    };

    bgm.volume = Number(vol.value) / 100;
    applyVol();
    bgm.load();

    const tryPlay = async () => {
      if (this.userMuted) return;
      try {
        bgm.muted = this.bgmHeldSilent;
        await bgm.play();
      } catch {
        this.bgmHeldSilent = true;
        bgm.muted = true;
        bgm.play().catch(() => {});
      }
    };

    tryPlay();
    bgm.addEventListener("canplay", tryPlay, { once: true });
    bgm.addEventListener("canplaythrough", tryPlay, { once: true });

    mute.addEventListener("click", e => {
      e.stopPropagation();
      this.userMuted = !this.userMuted;
      this.bgmHeldSilent = false;
      this.audioUnlocked = true;
      applyVol();
      if (!this.userMuted) bgm.play().catch(() => {});
    });

    vol.addEventListener("input", () => {
      if (Number(vol.value) > 0) this.userMuted = false;
      this.bgmHeldSilent = false;
      applyVol();
      if (!this.userMuted) {
        this.audioUnlocked = true;
        bgm.play().catch(() => {});
      }
    });
    vol.addEventListener("pointerdown", e => e.stopPropagation());
  },

  /* ---------- Input bindings ---------- */
  bindMenu() {
    View.els.menuItems.forEach((item, i) => {
      item.addEventListener("mouseenter", () => this.select(i));
      item.addEventListener("click", () => this.goTo(item.dataset.target));
    });

    document.querySelectorAll("[data-back]").forEach(b =>
      b.addEventListener("click", () => this.goTo("home")));

    document.getElementById("big-name").addEventListener("click", () => {
      if (Model.state.screen !== "home") this.goTo("home");
      else this.play();
    });
  },

  bindKeyboard() {
    addEventListener("keydown", e => {
      if (e.target.closest("#audio-dock, input, textarea")) return;
      if (Model.state.screen === "home") {
        if (e.key === "ArrowDown") { this.select(Model.state.menuIndex + 1); e.preventDefault(); }
        else if (e.key === "ArrowUp") { this.select(Model.state.menuIndex - 1); e.preventDefault(); }
        else if (e.key === "Enter") {
          this.goTo(View.els.menuItems[Model.state.menuIndex].dataset.target);
        }
      } else if (e.key === "Escape") {
        this.goTo("home");
      }
    });
  },
};

Controller.init();
