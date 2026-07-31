/* ============================================================
   Happy National Girlfriends Day ❤️ — script.js
   From Win, for Nie.

   CONTENTS
   1.  Helpers & settings
   2.  Sky canvas — stars, twinkle, shooting stars, meteor shower
   3.  FX canvas — hearts, sparkles, confetti, fireworks, fireflies
   4.  Scene engine
   5.  Scene 1  — Loading sequence
   6.  Scene 3  — Secret door
   7.  Scene 4  — Typewriter greeting
   8.  Scene 5  — Gallery (random order) + lightbox
   9.  Scene 6  — Flip cards
   10. Scene 7  — Love jar (50 notes, no repeats)
   11. Scene 8  — Scratch card
   12. Scene 9  — Gift box sequence
   13. Scene 10 — Letter reveal
   14. Scene 11 — Ending
   15. Easter eggs (moon, names, typed word, double-click,
                    clickable hearts, Konami code)
   ============================================================ */

"use strict";

/* ---------- 1. HELPERS & SETTINGS ---------- */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const rand = (min, max) => Math.random() * (max - min) + min;
const pick = (arr) => arr[(Math.random() * arr.length) | 0];
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

function showToast(msg, ms = 3800) {
  const t = $("#toast");
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(showToast._id);
  showToast._id = setTimeout(() => (t.hidden = true), ms);
}

/* ============================================================
   2. SKY CANVAS — stars, twinkle, shooting stars, meteors
   ============================================================ */
const sky = (() => {
  const cv = $("#sky-canvas");
  const cx = cv.getContext("2d");
  let stars = [], shooters = [], meteorUntil = 0, W, H;

  function resize() {
    W = cv.width = innerWidth * devicePixelRatio;
    H = cv.height = innerHeight * devicePixelRatio;
    cv.style.width = innerWidth + "px";
    cv.style.height = innerHeight + "px";
    const n = Math.min(220, (innerWidth * innerHeight) / 4200);
    stars = Array.from({ length: n }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: rand(0.4, 1.7) * devicePixelRatio,
      tw: rand(0.5, 2.2),          // twinkle speed
      ph: rand(0, Math.PI * 2),    // twinkle phase
      gold: Math.random() < 0.12,  // a few warm stars
    }));
  }

  function spawnShooter(fromMeteor = false) {
    shooters.push({
      x: rand(-0.1, 0.9) * W,
      y: rand(0, 0.35) * H,
      vx: rand(9, 16) * devicePixelRatio,
      vy: rand(3, 6) * devicePixelRatio,
      life: 1,
      big: fromMeteor,
    });
  }

  /* Easter egg: double-click background → meteor shower */
  function meteorShower(seconds = 6) {
    meteorUntil = performance.now() + seconds * 1000;
  }

  function tick(now) {
    cx.clearRect(0, 0, W, H);

    // twinkling stars
    for (const s of stars) {
      const a = 0.35 + 0.65 * Math.abs(Math.sin(now / 1000 * s.tw + s.ph));
      cx.globalAlpha = a;
      cx.fillStyle = s.gold ? "#f6d38b" : "#dfe6ff";
      cx.beginPath();
      cx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      cx.fill();
    }
    cx.globalAlpha = 1;

    // occasional lone shooting star / meteor shower burst
    if (!REDUCED) {
      if (now < meteorUntil && Math.random() < 0.25) spawnShooter(true);
      else if (Math.random() < 0.004) spawnShooter();
    }

    shooters = shooters.filter((m) => m.life > 0);
    for (const m of shooters) {
      m.x += m.vx; m.y += m.vy; m.life -= 0.016;
      const len = (m.big ? 90 : 55) * devicePixelRatio;
      const g = cx.createLinearGradient(m.x, m.y, m.x - len, m.y - len * 0.4);
      g.addColorStop(0, `rgba(255,245,220,${m.life})`);
      g.addColorStop(1, "rgba(255,245,220,0)");
      cx.strokeStyle = g;
      cx.lineWidth = (m.big ? 2.4 : 1.6) * devicePixelRatio;
      cx.beginPath();
      cx.moveTo(m.x, m.y);
      cx.lineTo(m.x - len, m.y - len * 0.4);
      cx.stroke();
    }
    requestAnimationFrame(tick);
  }

  addEventListener("resize", resize);
  resize();
  requestAnimationFrame(tick);
  return { meteorShower };
})();

/* ============================================================
   3. FX CANVAS — hearts, sparkles, confetti, fireworks, fireflies
   ============================================================ */
const fx = (() => {
  const cv = $("#fx-canvas");
  const cx = cv.getContext("2d");
  let parts = [], fireflies = [], W, H;
  const COLORS = ["#f7a8c4", "#ee6f9d", "#f6d38b", "#c9b8f0", "#ffd9e6"];

  function resize() {
    W = cv.width = innerWidth * devicePixelRatio;
    H = cv.height = innerHeight * devicePixelRatio;
    cv.style.width = innerWidth + "px";
    cv.style.height = innerHeight + "px";
  }
  addEventListener("resize", resize);
  resize();

  const px = (v) => v * devicePixelRatio;

  function heart(x, y, opts = {}) {
    parts.push({
      kind: "heart", x, y,
      vx: opts.vx ?? rand(-0.6, 0.6), vy: opts.vy ?? rand(-2.4, -1.2),
      size: opts.size ?? rand(10, 22),
      rot: rand(-0.4, 0.4), vr: rand(-0.02, 0.02),
      color: opts.color ?? pick(["#f7a8c4", "#ee6f9d", "#ff8fb0"]),
      life: 1, decay: opts.decay ?? rand(0.004, 0.008),
    });
  }
  function sparkle(x, y) {
    parts.push({
      kind: "spark", x, y,
      vx: rand(-1.4, 1.4), vy: rand(-1.4, 1.4),
      size: rand(1.4, 3.2), color: pick(COLORS),
      life: 1, decay: rand(0.015, 0.03),
    });
  }
  function confettiPiece(x, y) {
    parts.push({
      kind: "confetti", x, y,
      vx: rand(-3, 3), vy: rand(-7, -3),
      w: rand(5, 9), h: rand(8, 14),
      rot: rand(0, Math.PI * 2), vr: rand(-0.2, 0.2),
      color: pick(COLORS), life: 1, decay: rand(0.004, 0.008), grav: 0.12,
    });
  }

  /* public bursts */
  function heartsBurst(x = innerWidth / 2, y = innerHeight / 2, n = 18) {
    for (let i = 0; i < n; i++)
      heart(px(x + rand(-30, 30)), px(y + rand(-20, 20)), { vy: rand(-3.4, -1) });
  }
  function heartsRain(n = 26) {
    for (let i = 0; i < n; i++)
      heart(rand(0, W), H + px(30), { vy: rand(-3.6, -2), decay: 0.003 });
  }
  function confetti(n = 130) {
    for (let i = 0; i < n; i++)
      confettiPiece(rand(0.2, 0.8) * W, rand(0.25, 0.5) * H);
  }
  function sparkleAt(x, y, n = 14) {
    for (let i = 0; i < n; i++) sparkle(px(x), px(y));
  }
  function firework(x = rand(0.2, 0.8) * innerWidth, y = rand(0.15, 0.45) * innerHeight) {
    const color = pick(COLORS), n = 46;
    for (let i = 0; i < n; i++) {
      const ang = (i / n) * Math.PI * 2, sp = rand(2, 5.5);
      parts.push({
        kind: "spark", x: px(x), y: px(y),
        vx: Math.cos(ang) * sp * devicePixelRatio,
        vy: Math.sin(ang) * sp * devicePixelRatio,
        size: rand(1.6, 3), color, life: 1, decay: rand(0.008, 0.014), grav: 0.03,
      });
    }
  }
  function fireworksShow(bursts = 8) {
    for (let i = 0; i < bursts; i++) setTimeout(() => firework(), i * 420);
  }
  function firefliesOn(n = 16) {
    fireflies = Array.from({ length: n }, () => ({
      x: rand(0, W), y: rand(0.3, 1) * H,
      a: rand(0, Math.PI * 2), sp: rand(0.15, 0.5),
      ph: rand(0, Math.PI * 2),
    }));
  }
  function firefliesOff() { fireflies = []; }

  function drawHeartPath(size) {
    const s = size * devicePixelRatio;
    cx.beginPath();
    cx.moveTo(0, s * 0.3);
    cx.bezierCurveTo(0, 0, -s * 0.5, 0, -s * 0.5, s * 0.3);
    cx.bezierCurveTo(-s * 0.5, s * 0.6, 0, s * 0.8, 0, s);
    cx.bezierCurveTo(0, s * 0.8, s * 0.5, s * 0.6, s * 0.5, s * 0.3);
    cx.bezierCurveTo(s * 0.5, 0, 0, 0, 0, s * 0.3);
    cx.fill();
  }

  function tick(now) {
    cx.clearRect(0, 0, W, H);
    parts = parts.filter((p) => p.life > 0);

    for (const p of parts) {
      p.x += p.vx; p.y += p.vy; p.life -= p.decay;
      if (p.grav) p.vy += p.grav * devicePixelRatio;
      if (p.rot !== undefined) p.rot += p.vr;
      cx.globalAlpha = Math.max(0, p.life);
      cx.fillStyle = p.color;

      if (p.kind === "heart") {
        cx.save(); cx.translate(p.x, p.y); cx.rotate(p.rot);
        drawHeartPath(p.size); cx.restore();
      } else if (p.kind === "confetti") {
        cx.save(); cx.translate(p.x, p.y); cx.rotate(p.rot);
        cx.fillRect(-px(p.w) / 2, -px(p.h) / 2, px(p.w), px(p.h)); cx.restore();
      } else { // spark
        cx.beginPath(); cx.arc(p.x, p.y, p.size * devicePixelRatio, 0, Math.PI * 2); cx.fill();
      }
    }

    // fireflies: slow wandering warm dots that breathe
    for (const f of fireflies) {
      f.a += rand(-0.15, 0.15);
      f.x += Math.cos(f.a) * f.sp * devicePixelRatio;
      f.y += Math.sin(f.a) * f.sp * devicePixelRatio;
      if (f.x < 0) f.x = W; if (f.x > W) f.x = 0;
      if (f.y < 0) f.y = H; if (f.y > H) f.y = 0;
      const glow = 0.35 + 0.65 * Math.abs(Math.sin(now / 900 + f.ph));
      cx.globalAlpha = glow;
      cx.fillStyle = "#ffe9a8";
      cx.shadowColor = "#ffe9a8"; cx.shadowBlur = 12;
      cx.beginPath(); cx.arc(f.x, f.y, px(2.2), 0, Math.PI * 2); cx.fill();
      cx.shadowBlur = 0;
    }
    cx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  return { heartsBurst, heartsRain, confetti, sparkleAt, firework, fireworksShow, firefliesOn, firefliesOff };
})();

/* ============================================================
   4. SCENE ENGINE
   ============================================================ */
const scenes = $$(".scene");
let currentScene = "scene-loading";

function goTo(id) {
  if (id === currentScene) return;
  scenes.forEach((s) => s.classList.toggle("active", s.id === id));
  currentScene = id;
  const active = $("#" + id);
  if (active) active.scrollTop = 0;
  onSceneEnter(id); // scene-specific entry hooks
}

/* generic "next" buttons */
$$("[data-next]").forEach((btn) =>
  btn.addEventListener("click", () => goTo(btn.dataset.next))
);

function onSceneEnter(id) {
  if (id === "scene-greeting") startTypewriter();
  if (id === "scene-letter")   revealLetter();
  if (id === "scene-ending")   startEnding();
  if (id === "scene-gift")     fx.heartsRain(10);
  if (id !== "scene-ending" && id !== "scene-gift") fx.firefliesOff();
}

/* ============================================================
   5. SCENE 1 — LOADING
   ============================================================ */
(function loading() {
  const fill = $("#loading-fill");
  let p = 0;
  const timer = setInterval(() => {
    p = Math.min(100, p + rand(6, 16));
    fill.style.width = p + "%";
    if (p >= 100) {
      clearInterval(timer);
      setTimeout(() => goTo("scene-cover"), 700);
    }
  }, 260);
})();

$("#btn-begin").addEventListener("click", () => {
  fx.heartsBurst(innerWidth / 2, innerHeight * 0.6, 14);
  goTo("scene-door");
});

/* ============================================================
   6. SCENE 3 — SECRET DOOR
   ============================================================ */
(function door() {
  const el = $("#door");
  let opened = false;
  function open() {
    if (opened) return;
    opened = true;
    el.classList.add("open");
    fx.sparkleAt(innerWidth / 2, innerHeight / 2, 24);
    setTimeout(() => goTo("scene-greeting"), 2100);
  }
  el.addEventListener("click", open);
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
  });
})();

/* ============================================================
   7. SCENE 4 — TYPEWRITER GREETING
   ============================================================ */
const GREETING_LINES = [
  "Hi Nie,",
  "",
  "Before you continue...",
  "",
  "I wanted to make something different for you.",
  "",
  "Not just another message...",
  "",
  "But a little journey made especially for you.",
  "",
  "Come with me ❤️",
];

let typewriterStarted = false;
function startTypewriter() {
  if (typewriterStarted) return;
  typewriterStarted = true;

  const box = $("#typewriter");
  const caret = document.createElement("span");
  caret.className = "caret";
  box.append(caret);

  let li = 0, ci = 0;
  (function type() {
    if (li >= GREETING_LINES.length) {
      caret.remove();
      $("#btn-greeting-next").classList.add("show");
      return;
    }
    const line = GREETING_LINES[li];
    if (ci < line.length) {
      caret.before(document.createTextNode(line[ci++]));
      setTimeout(type, REDUCED ? 4 : rand(35, 75));
    } else {
      caret.before(document.createTextNode("\n"));
      li++; ci = 0;
      setTimeout(type, REDUCED ? 10 : (line === "" ? 120 : 520));
    }
  })();
}
$("#btn-greeting-next").addEventListener("click", () => goTo("scene-gallery"));

/* ============================================================
   8. SCENE 5 — GALLERY + LIGHTBOX

   ✏️ EDIT YOUR GALLERY HERE — one line per memory.
   type: "photo" or "video" · src: the file · caption: shows on the
   polaroid AND in the fullscreen view. Add or remove lines freely.
   ============================================================ */
const GALLERY_ITEMS = [
  { type: "photo", src: "assets/images/photo2.jpg", caption: "My favorite smile 😊" },
  { type: "photo", src: "assets/images/photo4.jpg", caption: "Us, being us 😂" },
  { type: "photo", src: "assets/images/photo5.jpg", caption: "I still laugh at this one 😂" },
  { type: "photo", src: "assets/images/photo6.jpg", caption: "Your favorite smile 😊" },
  { type: "video", src: "assets/videos/video1.mp4", caption: "A memory in motion 🎬" },
];

(function gallery() {
  const lightbox = $("#lightbox");
  const mediaBox = $("#lightbox-media");
  const captionEl = $("#lightbox-caption");
  const galleryEl = $("#gallery");

  // build a polaroid for each item, in a shuffled order (fresh every visit)
  const items = [...GALLERY_ITEMS];
  for (let i = items.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [items[i], items[j]] = [items[j], items[i]];
  }

  for (const item of items) {
    const fig = document.createElement("figure");
    fig.className = "polaroid" + (item.type === "video" ? " is-video" : "");
    fig.dataset.caption = item.caption || "";
    fig.dataset.src = item.src;
    fig.dataset.type = item.type;

    let media;
    if (item.type === "video") {
      media = document.createElement("video");
      media.src = item.src;
      media.muted = true;
      media.playsInline = true;
      media.preload = "metadata";
    } else {
      media = document.createElement("img");
      media.src = item.src;
      media.alt = item.caption || "A memory";
      media.loading = "lazy";
    }

    // missing file → pretty placeholder (caption still shows underneath)
    media.addEventListener("error", () => {
      const ph = document.createElement("div");
      ph.className = "ph";
      ph.innerHTML = item.type === "video"
        ? "<b>🎬</b><span>add your video here<br>(see README)</span>"
        : "<b>💞</b><span>add your photo here<br>(see README)</span>";
      media.replaceWith(ph);
    });

    const cap = document.createElement("figcaption");
    cap.textContent = item.caption || "";

    fig.append(media, cap);
    galleryEl.append(fig);
  }

  function openLightbox(fig) {
    mediaBox.innerHTML = "";
    const img = fig.querySelector("img");
    const vid = fig.querySelector("video");
    if (vid) {
      const clone = document.createElement("video");
      clone.src = fig.dataset.src;
      clone.controls = true;
      clone.playsInline = true;
      mediaBox.append(clone);
      clone.play().catch(() => {}); // user gesture already happened; sound on
    } else if (img) {
      const clone = img.cloneNode();
      clone.loading = "eager";
      mediaBox.append(clone);
    } else {
      const ph = document.createElement("div");
      ph.className = "ph-big";
      ph.textContent = fig.dataset.type === "video" ? "🎬" : "💞";
      mediaBox.append(ph);
    }
    captionEl.textContent = fig.dataset.caption || "";
    lightbox.hidden = false;
  }

  galleryEl.addEventListener("click", (e) => {
    const fig = e.target.closest(".polaroid");
    if (fig) openLightbox(fig);
  });
  $(".lightbox-close").addEventListener("click", () => closeLightbox());
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

  function closeLightbox() {
    lightbox.hidden = true;
    mediaBox.querySelector("video")?.pause();
  }

  window.__openSecretPhoto = () => { // used by the heart easter egg
    mediaBox.innerHTML = "";
    const secret = document.createElement("img");
    secret.src = "assets/images/secret.jpg";
    secret.alt = "A secret photo";
    secret.addEventListener("error", () => {
      const ph = document.createElement("div");
      ph.className = "ph-big"; ph.textContent = "🤫❤️";
      secret.replaceWith(ph);
    });
    mediaBox.append(secret);
    captionEl.textContent = "You found the secret photo! 🤫";
    lightbox.hidden = false;
    showToast("You found the secret photo! 🤫");
  };
})();

/* ============================================================
   9. SCENE 6 — FLIP CARDS
   ============================================================ */
$$(".flip-card").forEach((card) =>
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    if (card.classList.contains("flipped")) {
      const r = card.getBoundingClientRect();
      fx.sparkleAt(r.left + r.width / 2, r.top + r.height / 2, 10);
    }
  })
);

/* ============================================================
   10. SCENE 7 — LOVE JAR (50 notes, no repeats until empty)
   ============================================================ */
const LOVE_NOTES = [
  "You make ordinary days extraordinary.",
  "My favorite place is wherever you are.",
  "You are my happiest memory.",
  "I fall for you a little more every single day.",
  "Your voice is my favorite song.",
  "Even my bad days are better because of you.",
  "You're the reason I smile at my phone like an idiot.",
  "Home isn't a place. It's you.",
  "I'd choose you in every lifetime.",
  "You make my heart do the little happy dance.",
  "Being loved by you is my favorite thing about my life.",
  "You're my favorite notification.",
  "I love the way you see the world.",
  "Every love song suddenly makes sense now.",
  "You + me = my favorite math.",
  "I love you more than yesterday, less than tomorrow.",
  "You're the dream I never want to wake up from.",
  "Your hand in mine — that's all I need.",
  "I still get butterflies. Every time.",
  "You're my today and all of my tomorrows.",
  "Thank you for loving me on my messy days too.",
  "You're the best part of every plan I make.",
  "My heart knew before my brain did.",
  "I love your laugh more than my own jokes.",
  "You're my safe place in a loud world.",
  "With you, even doing nothing is everything.",
  "You're proof that magic exists.",
  "I'd cross any distance just to see you smile.",
  "You're the first thing I think about every morning.",
  "And the last thing every night.",
  "Loving you is the easiest thing I've ever done.",
  "You make forever feel too short.",
  "Every moment with you becomes a favorite memory.",
  "You're my person. Always.",
  "I love the little wrinkle you get when you laugh.",
  "Your happiness is my favorite goal.",
  "You turn my worst moods into nothing.",
  "I didn't believe in soulmates. Then you happened.",
  "You're the plot twist my story needed.",
  "I'd pick your hugs over anything, every time.",
  "Being yours is my favorite title.",
  "You're the calm in all of my storms.",
  "I love us. Like, a lot.",
  "You make my world softer, warmer, brighter.",
  "If I had one wish, I'd wish for more time with you.",
  "You're my lucky charm and my whole heart.",
  "Nobody else could ever come close.",
  "I love you in ways words haven't been invented for.",
  "Growing old with you sounds like a dream job.",
  "You. It's always been you. ❤️",
];

(function loveJar() {
  const jar = $("#jar");
  const noteText = $("#note-text");
  const noteCard = $("#note-card");
  const noteCount = $("#note-count");
  let bag = [];

  function refill() {
    bag = LOVE_NOTES.map((_, i) => i);
    // Fisher–Yates shuffle → random order, zero repeats until all 50 shown
    for (let i = bag.length - 1; i > 0; i--) {
      const j = (Math.random() * (i + 1)) | 0;
      [bag[i], bag[j]] = [bag[j], bag[i]];
    }
  }
  refill();

  jar.addEventListener("click", () => {
    if (!bag.length) {
      refill();
      showToast("You read all 50 notes! Refilling the jar just for you… ❤️");
    }
    const idx = bag.pop();
    jar.classList.remove("shake"); void jar.offsetWidth; // restart animation
    jar.classList.add("shake");
    noteCard.classList.remove("pop"); void noteCard.offsetWidth;
    noteCard.classList.add("pop");
    noteText.textContent = "“" + LOVE_NOTES[idx] + "”";
    noteCount.textContent = `note ${LOVE_NOTES.length - bag.length} of ${LOVE_NOTES.length}`;
    const r = noteCard.getBoundingClientRect();
    fx.sparkleAt(r.left + r.width / 2, r.top, 8);
  });
})();

/* ============================================================
   11. SCENE 8 — SCRATCH CARD
   ============================================================ */
(function scratchCard() {
  const wrap = $(".scratch-wrap");
  const cv = $("#scratch-canvas");
  const cx = cv.getContext("2d");
  let scratching = false, done = false, checkQueued = false;

  function paintSurface() {
    const r = wrap.getBoundingClientRect();
    cv.width = r.width * devicePixelRatio;
    cv.height = r.height * devicePixelRatio;

    // glittery gradient foil
    const g = cx.createLinearGradient(0, 0, cv.width, cv.height);
    g.addColorStop(0, "#c9b8f0");
    g.addColorStop(0.5, "#ee6f9d");
    g.addColorStop(1, "#f6d38b");
    cx.fillStyle = g;
    cx.fillRect(0, 0, cv.width, cv.height);

    // glitter specks
    for (let i = 0; i < 340; i++) {
      cx.globalAlpha = rand(0.15, 0.7);
      cx.fillStyle = Math.random() < 0.5 ? "#fff" : "#ffe9b8";
      cx.beginPath();
      cx.arc(rand(0, cv.width), rand(0, cv.height), rand(0.6, 2.4) * devicePixelRatio, 0, Math.PI * 2);
      cx.fill();
    }
    cx.globalAlpha = 1;
    cx.fillStyle = "rgba(255,255,255,.85)";
    cx.font = `500 ${16 * devicePixelRatio}px Jost, sans-serif`;
    cx.textAlign = "center";
    cx.fillText("✨ scratch me ✨", cv.width / 2, cv.height / 2);
    cx.globalCompositeOperation = "destination-out"; // now drawing = erasing
  }

  function scratchAt(clientX, clientY) {
    const r = cv.getBoundingClientRect();
    const x = (clientX - r.left) * devicePixelRatio;
    const y = (clientY - r.top) * devicePixelRatio;
    cx.beginPath();
    cx.arc(x, y, 26 * devicePixelRatio, 0, Math.PI * 2);
    cx.fill();
    fx.sparkleAt(clientX, clientY, 2);
    if (!checkQueued) { checkQueued = true; setTimeout(checkProgress, 400); }
  }

  function checkProgress() {
    checkQueued = false;
    if (done) return;
    // sample the alpha channel to estimate the scratched-away area
    const data = cx.getImageData(0, 0, cv.width, cv.height).data;
    let clear = 0, total = 0;
    for (let i = 3; i < data.length; i += 4 * 24) { // sparse sampling = fast
      total++;
      if (data[i] === 0) clear++;
    }
    if (clear / total > 0.55) finish();
  }

  function finish() {
    done = true;
    wrap.classList.add("done");
    fx.confetti(140);
    fx.heartsBurst(innerWidth / 2, innerHeight / 2, 20);
    $("#btn-after-scratch").classList.add("show");
  }

  const down = (e) => { scratching = true; scratchAt(e.clientX ?? e.touches[0].clientX, e.clientY ?? e.touches[0].clientY); };
  const move = (e) => {
    if (!scratching) return;
    const p = e.touches ? e.touches[0] : e;
    scratchAt(p.clientX, p.clientY);
    if (e.cancelable) e.preventDefault();
  };
  const up = () => (scratching = false);

  cv.addEventListener("pointerdown", down);
  cv.addEventListener("pointermove", move);
  addEventListener("pointerup", up);
  cv.addEventListener("touchmove", move, { passive: false });

  // paint once the scene can be measured
  new ResizeObserver(() => { if (!done && wrap.offsetWidth) paintSurface(); }).observe(wrap);
})();

/* ============================================================
   12. SCENE 9 — GIFT BOX
   ============================================================ */
(function giftBox() {
  const box = $("#giftbox");
  const hint = $("#gift-hint");
  let stage = 0;

  function advance() {
    if (stage === 0) {                     // ribbon unties
      stage = 1;
      box.classList.add("untied");
      hint.textContent = "Tap again to lift the lid…";
      fx.sparkleAt(innerWidth / 2, innerHeight / 2, 12);
    } else if (stage === 1) {              // lid opens → celebration
      stage = 2;
      box.classList.add("opened");
      hint.textContent = "❤️";
      setTimeout(() => {
        fx.heartsBurst(innerWidth / 2, innerHeight * 0.55, 26);
        fx.confetti(160);
        fx.sparkleAt(innerWidth / 2, innerHeight * 0.5, 30);
        fx.firefliesOn(18);
        $("#btn-after-gift").classList.add("show");
      }, 900);
    }
  }
  box.addEventListener("click", advance);
  box.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); advance(); }
  });
})();

/* ============================================================
   13. SCENE 10 — LETTER
   ============================================================ */
let letterShown = false;
function revealLetter() {
  if (letterShown) return;
  letterShown = true;
  const lines = $$("#scene-letter .letter-line");
  lines.forEach((line, i) =>
    setTimeout(() => {
      line.classList.add("show");
      if (i === lines.length - 1) {
        fx.heartsRain(16);
        setTimeout(() => $("#btn-after-letter").classList.add("show"), 900);
      }
    }, (REDUCED ? 120 : 1150) * i + 500)
  );
}

/* ============================================================
   14. SCENE 11 — ENDING
   ============================================================ */
let endingStarted = false;
function startEnding() {
  if (endingStarted) return;
  endingStarted = true;

  fx.firefliesOn(14);
  fx.heartsRain(12);

  // photos gently float upward, forever
  const holder = $("#ending-photos");
  const srcs = ["photo1", "photo2", "photo3", "photo4", "photo5", "photo6"];
  function launchPhoto() {
    const wrap = document.createElement("div");
    wrap.className = "float-photo";
    wrap.style.left = rand(4, 88) + "vw";
    wrap.style.setProperty("--tilt", rand(-10, 10) + "deg");
    wrap.style.animationDuration = rand(14, 24) + "s";
    const img = document.createElement("img");
    img.src = `assets/images/${pick(srcs)}.jpg`;
    img.alt = "";
    img.addEventListener("error", () => {
      const ph = document.createElement("div");
      ph.className = "ph"; ph.textContent = pick(["💞", "🌙", "✨", "❤️", "🌸"]);
      img.replaceWith(ph);
    });
    wrap.append(img);
    holder.append(wrap);
    setTimeout(() => wrap.remove(), 26000);
  }
  launchPhoto();
  const photoTimer = setInterval(() => {
    if (currentScene !== "scene-ending") return clearInterval(photoTimer);
    launchPhoto();
  }, 2600);

  // fade in the closing words one at a time
  $$("#scene-ending .fade-seq").forEach((el, i) =>
    setTimeout(() => el.classList.add("show"), (REDUCED ? 150 : 1400) * i + 600)
  );
}

$("#btn-replay").addEventListener("click", () => location.reload());

/* ============================================================
   15. EASTER EGGS 🥚
   ============================================================ */

/* 🌙 clicking the moon reveals a hidden love message
   …and tapping it 5 times fast opens the secret page (mobile-friendly
   alternative to the Konami code) */
const MOON_MESSAGES = [
  "Even the moon is jealous of how bright you shine. 🌙",
  "I told the moon about you. It understood completely.",
  "Whenever you miss me, look up. I'm looking at the same moon.",
  "The moon keeps our secret: I loved you first. 🤫",
];
function openDreams() {
  $("#scene-dreams").hidden = false;
  fx.confetti(120);
}
(function moonEgg() {
  let taps = 0, timer;
  $("#moon").addEventListener("click", () => {
    fx.sparkleAt(innerWidth * 0.9, innerHeight * 0.08, 16);
    taps++;
    clearTimeout(timer);
    timer = setTimeout(() => (taps = 0), 2500); // taps must be quick
    if (taps >= 5) {
      taps = 0;
      showToast("🌙 The moon whispers… a secret page opens.", 2600);
      openDreams();
    } else {
      showToast(pick(MOON_MESSAGES));
    }
  });
})();

/* ❤️ triple-tap any big pulsing heart → fireworks (mobile-friendly
   alternative to typing "iloveyou") */
(function heartTapEgg() {
  let taps = 0, timer;
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".pulse-heart")) return;
    taps++;
    clearTimeout(timer);
    timer = setTimeout(() => (taps = 0), 1600);
    if (taps >= 3) {
      taps = 0;
      fx.fireworksShow(10);
      showToast("I love you too. Always. ❤️🎆");
    }
  });
})();

/* 💗 a clickable floating heart drifts by now and then — click it! */
(function driftingHearts() {
  function spawn() {
    if (document.hidden) return schedule();
    const h = document.createElement("button");
    h.textContent = "💗";
    h.setAttribute("aria-label", "A floating heart… try clicking it");
    Object.assign(h.style, {
      position: "fixed", zIndex: 60, fontSize: rand(20, 30) + "px",
      left: rand(6, 88) + "vw", top: "104vh",
      transition: `top ${rand(11, 16)}s linear, opacity 1s`,
      filter: "drop-shadow(0 0 8px rgba(238,111,157,.9))",
      background: "none", border: "none", cursor: "pointer",
    });
    document.body.append(h);
    requestAnimationFrame(() => (h.style.top = "-10vh"));
    h.addEventListener("click", () => {
      h.remove();
      window.__openSecretPhoto(); // unlocks the secret photo
      fx.heartsBurst(innerWidth / 2, innerHeight / 2, 16);
    });
    setTimeout(() => { h.style.opacity = 0; setTimeout(() => h.remove(), 1100); }, 16500);
    schedule();
  }
  function schedule() { setTimeout(spawn, rand(20000, 40000)); }
  setTimeout(spawn, 14000);
})();

/* 🌠 double-clicking the background starts a meteor shower */
document.body.addEventListener("dblclick", (e) => {
  if (e.target.closest("button, .polaroid, canvas#scratch-canvas, input")) return;
  sky.meteorShower(6);
  showToast("A meteor shower — quick, make a wish! 🌠", 3200);
});

/* ⌨️ typing "iloveyou" launches fireworks */
(function typedSecret() {
  const secret = "iloveyou";
  let buffer = "";
  addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea")) return;
    if (!/^[a-z]$/i.test(e.key)) return;
    buffer = (buffer + e.key.toLowerCase()).slice(-secret.length);
    if (buffer === secret) {
      fx.fireworksShow(10);
      showToast("I love you too. Always. ❤️🎆");
      buffer = "";
    }
  });
})();

/* 💛 clicking "Win" → floating hearts · clicking "Nie" → sparkle spiral */
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".name-btn");
  if (!btn) return;
  const r = btn.getBoundingClientRect();
  const x = r.left + r.width / 2, y = r.top;
  if (btn.dataset.egg === "win") {
    fx.heartsBurst(x, y, 14);
  } else {
    // a little spiral of sparkles, just for Nie ✨
    for (let i = 0; i < 26; i++) {
      setTimeout(() => {
        const ang = i * 0.55, rad = 8 + i * 5;
        fx.sparkleAt(x + Math.cos(ang) * rad, y + Math.sin(ang) * rad, 3);
      }, i * 45);
    }
    showToast("✨ The most special name on this page. ✨", 2600);
  }
});

/* 🎮 Konami code → hidden "Our Future Dreams" page */
(function konami() {
  const CODE = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
  let pos = 0;
  addEventListener("keydown", (e) => {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    pos = (k === CODE[pos]) ? pos + 1 : (k === CODE[0] ? 1 : 0);
    if (pos === CODE.length) {
      pos = 0;
      openDreams();
    }
  });
  $("[data-close-overlay]").addEventListener("click", () => ($("#scene-dreams").hidden = true));
})();
