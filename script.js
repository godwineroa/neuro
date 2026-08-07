/* ═══════════════════════════════════════════════════════════════
   FIRST MONTHSARY · script.js
   ---------------------------------------------------------------
   ✏️  EVERYTHING YOU'LL EVER WANT TO EDIT LIVES IN THE "CONFIG"
       BLOCK RIGHT BELOW. Captions, promises, messages, the start
       date — all of it. Scroll down only if you're feeling brave.
   ═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────── CONFIG ─────────────────────────── */

/* 📅 EDIT THIS → the exact moment you two became official.
   Format: "YYYY-MM-DDTHH:MM:SS" (24-hour time, your local time). */
const RELATIONSHIP_START = "2026-07-07T16:30:00"; // July 7, 4:30 PM

/* 📸 PHOTO CAPTIONS — one per polaroid, in order (5 total).
   Replace the images in /assets/images/ named:
   IMAGE_PLACEHOLDER_01.jpg … IMAGE_PLACEHOLDER_05.jpg
   (jpg, png, or webp all work — see IMAGE_EXT below)
   💡 Want more photos? Just add more captions here and more
   images with the next numbers — the site builds one polaroid
   per caption automatically. */
const IMAGE_EXT = "jpg"; // change to "png" or "webp" if needed
const PHOTO_CAPTIONS = [
  "certified cutie — approved 👍💘",
  "your smile, my favorite view",
  "golden hour? no, that's just you ✨",
  "my girlfriend, obviously",
  "my whole heart, in one frame",
];

/* 🎥 VIDEO CAPTIONS — one per video treasure (3 total).
   Drop your clips in /assets/videos/ named:
   VIDEO_PLACEHOLDER_01.mp4 … VIDEO_PLACEHOLDER_03.mp4
   💡 Want more or fewer? Add or delete captions here — the wall
   rebuilds itself automatically. */
const VIDEO_CAPTIONS = [
  "a little film 🎬",
  "caught you being cute 🎥",
  "a moment I keep replaying 💗",
];

/* 🎞 GIF LABELS — one per GIF (3 total).
   Replace files in /assets/gifs/ named:
   GIF_PLACEHOLDER_01.gif … GIF_PLACEHOLDER_03.gif
   💡 Want only 2? Delete one line below. Want 4? Add one. */
const GIF_LABELS = [
  "certified thumbs-up couple 👍",
  "half a heart each = one whole us 🫰",
  "same poses, always in sync 📸",
];

/* 💌 SHORT LETTER (envelope scene) — typed out letter-by-letter */
const SHORT_LETTER =
`My dearest Nie,

Before anything else... breathe.
Someone out here, across all those
kilometers, is thinking of you
right now. That someone is me.
It's always me.

Ready? The rest of this little
universe is yours.

— Your Lover, Win ♡`;

/* 📜 THE LONG MESSAGE — each item is one paragraph. */
const LONG_MESSAGE = [
  { t: "Hi Nie,", cls: "salutation" },
  { t: "Happy first monthsary, Love, Baby, Girlfriend, Wife, Lovey, Pookie Bear. ❤️" },
  { t: "Grabe noh? One month na agad ang bilis lang and parang kilala na agad natin ang isa't isa and madami na ang ating napagdaanan kahit magkalayo tayo. Hindi ko in-expect na may taong kayang magbigay ng ganitong klaseng saya sa buhay ko kahit hindi kita nahahawakan araw-araw. Isipin mo yun na screen lang ang pagitan natin, pero ikaw pa rin yung taong pinaka-malapit sa puso ko." },
  { t: "I know love na hindi madali ang LDR. May mga araw na gusto na lang kitang yakapin pero ang kaya ko lang gawin ay titigan yung picture mo or hintayin yung mga chats mo. May mga gabi na gusto kitang tabihan matulog pero LDR ngani. May mga pagkakataon na gusto kitang dalhan ng pagkain kapag pagod ka, gusto kitang sunduin sa school wowowow, gusto kitang alagaan kapag may sakit ka, pero distance ang kalaban natin." },
  { t: "Pero alam mo? syempre hindi mo ulit alam love, I will always choose you everyday" },
  { t: "Hindi man tayo magkasama physically, feel ko pa rin na kasama kita everyday. Ikaw yung una kong naiisip pag gising at huling iniisip ko bago matulog, mabuti hindi ka napapagod kasi lagi ka natakbo sa isip ko. Kapag may magandang nangyari, gusto kong ikaw agad ang makakwentuhan. Kapag may mabigat naman, ikaw pa rin yung gusto kong takbuhan." },
  { t: "Thank you kasi naging patient ka sa akin. Thank you kasi naiintindihan mo ako kahit minsan hindi ko ma-express nang maayos yung nararamdaman ko. Thank you kasi hindi ka nagsasawang makinig sa mga kwento ko, sa mga random thoughts ko, at kahit sa mga corny jokes ko." },
  { t: "Alam kong may mga pagkakataon din na nagkakamali ako. May mga oras na kulang ako sa lambing, kulang sa oras, o hindi ako naging perfect na boyfriend. Sorry sa lahat ng pagkakataong napasama ang loob mo dahil sa akin. Lesson learned lahat yun Love, dahil gusto kong maging mas mabuting partner para sa'yo." },
  { t: "Sobrang proud ako sa'yo. Proud ako sa lahat ng ginagawa mo, sa sipag mo, sa kabutihan ng puso mo, at sa paraan kung paano mo ako mahalin. Hindi mo siguro alam kung gaano kalaking inspirasyon ka sa buhay ko." },
  { t: "One month pa lang ito, pero gusto kong sabihin sa'yo na seryoso ako sa atin. Hindi lang ito basta kilig o excitement. Gusto kong sabayan ka sa mga susunod pang months, taon, at lahat ng memories na pwede nating buuin." },
  { t: "Excited ako sa araw na hindi na sa chats or video calls tayo nag uusap kundi sa personal na mismo (November hahaha). Excited akong mahawakan yung kamay mo at yakapin ka ng sobrang higpit." },
  { t: "Hanggang sa dumating yung araw na yun, pangako ko na hindi ako magsasawang mahalin ka. Pipiliin kita araw araw. Pipiliin kita kahit may distance. Pipiliin kita kahit maraming challenges. Kasi ikaw yung taong gusto kong makasama sa future ko." },
  { t: "Thank you for loving me." },
  { t: "Thank you for staying." },
  { t: "Thank you for believing in us.", cls: "ily" },
  { t: "Happy first monthsary, Nie." },
  { t: "I love you more than words can ever explain.", cls: "ily" },
  { t: "Always,\nWin ❤️", cls: "signoff" },
];

/* 🍃 20 PROMISES (promise tree leaves) */
const PROMISES = [
  "I promise to stay.",
  "I promise to listen like really listen.",
  "I promise to understand, even when it's hard.",
  "I promise to never stop choosing you.",
  "I promise to keep fighting for us.",
  "I promise to always reply, kahit busy ako.",
  "I promise to be honest with you, always.",
  "I promise to be patient with the distance.",
  "I promise to celebrate every small win with you.",
  "I promise to remind you how beautiful you are.",
  "I promise to never let you sleep sad.",
  "I promise to grow into a better man for you.",
  "I promise to protect your heart like it's mine.",
  "I promise to make you laugh, kahit corny.",
  "I promise to save every good story for you.",
  "I promise to pray for you every night.",
  "I promise to close the distance one day.",
  "I promise to hold your hand and never let go.",
  "I promise to love you loudly, never quietly.",
  "I promise you a forever worth waiting for.",
];

/* ✨ 25 FIREFLY MESSAGES */
const FIREFLY_MESSAGES = [
  "You're my favorite notification. 💛",
  "I smiled today because of you. Again.",
  "Distance is just a test, and we're passing.",
  "You make ordinary days feel golden.",
  "I'd choose the far-away you over anyone near.",
  "Your voice is my favorite lullaby.",
  "Miss na kita. Always. Every hour.",
  "You're the calm in my chaos.",
  "Somewhere between hello and now, I fell hard.",
  "I still get kilig when your name pops up.",
  "You're my good luck charm, I swear.",
  "Every km between us is worth it.",
  "You're the best part of my every day.",
  "I love how your mind works.",
  "My heart does a little jump when you call.",
  "You're prettier than every sunset I've seen.",
  "I can brag you to anyone, alam mo ba yun?",
  "You + me + someday = everything.",
  "I keep your pictures like treasures.",
  "You feel like home, kahit malayo ka.",
  "One month down, forever to go.",
  "You're my answered prayer.",
  "I'd wait lifetimes for you, Nie.",
  "You make loving easy.",
  "Ikaw. Ikaw pa rin. Lagi't lagi, ikaw.",
];

/* 🌠 40 SHOOTING STAR WISHES */
const STAR_MESSAGES = [
  "Wish granted: you'll always be loved by me.",
  "You're the wish I didn't know I made.",
  "Every star envies how bright you shine.",
  "I wished for you, and here you are.",
  "May all your soft dreams come true, Love.",
  "The universe conspired to give me you.",
  "You're written in my stars, permanently.",
  "One day, we'll watch real stars together.",
  "My wish: your happiness, always.",
  "You're my favorite kind of magic.",
  "Even galaxies apart, I'd find you.",
  "You light up my sky, Nie.",
  "I'd trade every star for one more minute with you.",
  "You're proof that wishes come true.",
  "The moon knows how much I miss you.",
  "My heart orbits around you.",
  "You're a whole constellation of reasons to smile.",
  "Wishing on you, my luckiest star.",
  "You make my universe make sense.",
  "Every shooting star reminds me of your smile.",
  "I love you to the moon, and past it.",
  "You're stardust with a heartbeat.",
  "My telescope's pointed at your heart.",
  "You outshine every night sky.",
  "Someday, same sky, same place, holding hands.",
  "The stars spelled your name tonight.",
  "You're my north star, my direction home.",
  "I catch stars just to give them to you.",
  "Your laugh could power a galaxy.",
  "Meteor showers wish they sparkled like you.",
  "You're the brightest thing in my orbit.",
  "Space is big, but my love for you is bigger.",
  "I'd cross light-years for you.",
  "You turned my nights into wonder.",
  "Every wish I have starts with your name.",
  "The sky is ours, kahit magkalayo tayo.",
  "You're my once-in-a-lifetime comet.",
  "Gravity's got nothing on how you pull my heart.",
  "I love you in every universe.",
  "Final wish: you, me, forever. Granted na. ✨",
];

/* ═══════════════════════ END OF CONFIG ═════════════════════════
   Everything below makes the magic run. Edit at your own risk 😄
   ═══════════════════════════════════════════════════════════════ */

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const rand  = (min, max) => Math.random() * (max - min) + min;
const randI = (min, max) => Math.floor(rand(min, max + 1));
const pick  = arr => arr[randI(0, arr.length - 1)];
const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function el(tag, cls, html) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html !== undefined) n.innerHTML = html;
  return n;
}
function setVars(node, vars) {
  for (const k in vars) node.style.setProperty(k, vars[k]);
}
function delay(ms) { return new Promise(res => setTimeout(res, ms)); }

/* ═════════════════ AMBIENT PARTICLE ENGINE (canvas) ═══════════ */
const fx = (() => {
  const canvas = $("#fx-canvas");
  const ctx = canvas.getContext("2d");
  let W, H, mode = "sparkle", parts = [], raf = null, running = false;

  function resize() {
    W = canvas.width  = innerWidth  * devicePixelRatio;
    H = canvas.height = innerHeight * devicePixelRatio;
    canvas.style.width = innerWidth + "px";
    canvas.style.height = innerHeight + "px";
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  }
  addEventListener("resize", resize); resize();

  const PALETTES = {
    sparkle:  ["#f6c6d7", "#cbb6ee", "#f0cf8e", "#ffffff"],
    petal:    ["#f6c6d7", "#f2b3cd", "#fde3ee"],
    butterfly:["#cbb6ee", "#f6c6d7", "#f0cf8e"],
    star:     ["#ffffff", "#efe6ff", "#f0cf8e"],
    galaxy:   ["#ffffff", "#cbb6ee", "#f6c6d7", "#8f7fc0"],
  };

  function spawn(kind) {
    const w = innerWidth, h = innerHeight;
    const p = { kind, x: rand(0, w), y: rand(0, h), t: rand(0, 100) };
    switch (kind) {
      case "sparkle":
        Object.assign(p, { r: rand(1, 2.6), vy: rand(-.18, -.5), vx: rand(-.15, .15),
          life: rand(4, 9), color: pick(PALETTES.sparkle) }); break;
      case "petal":
        Object.assign(p, { y: rand(-h * .3, -10), r: rand(5, 11), vy: rand(.5, 1.3),
          vx: rand(-.4, .6), rot: rand(0, 6.3), vr: rand(-.03, .03),
          life: 99, color: pick(PALETTES.petal) }); break;
      case "butterfly":
        Object.assign(p, { r: rand(6, 10), vx: rand(-.7, .7), vy: rand(-.35, .2),
          flap: rand(0, 6.3), life: 99, color: pick(PALETTES.butterfly) }); break;
      case "star":
        Object.assign(p, { r: rand(.6, 1.9), tw: rand(.4, 1.4), life: 999,
          color: pick(PALETTES.star) }); break;
      case "galaxy":
        const ang = rand(0, Math.PI * 2), rad = rand(20, Math.max(w, h) * .7);
        Object.assign(p, { ang, rad, spd: rand(.0009, .004) * (rad < 200 ? 2.2 : 1),
          r: rand(.5, 2), life: 999, color: pick(PALETTES.galaxy) }); break;
      case "confetti":
        Object.assign(p, { x: rand(0, w), y: rand(-h * .4, -10), r: rand(3, 7),
          vy: rand(2, 5), vx: rand(-1.4, 1.4), rot: rand(0, 6.3), vr: rand(-.2, .2), life: 99,
          color: pick(["#f6c6d7","#cbb6ee","#f0cf8e","#fff","#ec9fbc","#d9a441"]) }); break;
    }
    return p;
  }

  function drawPetal(p) {
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
    ctx.fillStyle = p.color; ctx.globalAlpha = .85;
    ctx.beginPath();
    ctx.moveTo(0, -p.r);
    ctx.bezierCurveTo(p.r, -p.r * .4, p.r * .7, p.r * .8, 0, p.r);
    ctx.bezierCurveTo(-p.r * .7, p.r * .8, -p.r, -p.r * .4, 0, -p.r);
    ctx.fill(); ctx.restore();
  }
  function drawButterfly(p) {
    const flap = Math.abs(Math.sin(p.flap)) * .85 + .15;
    ctx.save(); ctx.translate(p.x, p.y);
    ctx.rotate(Math.atan2(p.vy, p.vx) * .3);
    ctx.fillStyle = p.color; ctx.globalAlpha = .9;
    for (const s of [-1, 1]) {
      ctx.save(); ctx.scale(s * flap, 1);
      ctx.beginPath();
      ctx.ellipse(p.r * .55, -p.r * .3, p.r * .55, p.r * .38, .5, 0, 7);
      ctx.ellipse(p.r * .45,  p.r * .3, p.r * .4,  p.r * .3, -.4, 0, 7);
      ctx.fill(); ctx.restore();
    }
    ctx.fillStyle = "#5c4a5e";
    ctx.fillRect(-1, -p.r * .5, 2, p.r);
    ctx.restore();
  }

  function tick() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    const w = innerWidth, h = innerHeight, cx = w / 2, cy = h / 2;
    for (const p of parts) {
      p.t += .016;
      switch (p.kind) {
        case "sparkle": {
          p.x += p.vx; p.y += p.vy; p.life -= .016;
          const a = Math.max(0, Math.min(1, p.life / 3)) * (0.5 + 0.5 * Math.sin(p.t * 3));
          ctx.globalAlpha = a; ctx.fillStyle = p.color;
          ctx.shadowColor = p.color; ctx.shadowBlur = 8;
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill();
          ctx.shadowBlur = 0;
          if (p.life <= 0) Object.assign(p, spawn("sparkle"));
          break;
        }
        case "petal":
          p.x += p.vx + Math.sin(p.t * 1.4) * .6; p.y += p.vy; p.rot += p.vr;
          drawPetal(p);
          if (p.y > h + 20) Object.assign(p, spawn("petal"));
          break;
        case "butterfly":
          p.flap += .28;
          p.x += p.vx + Math.sin(p.t) * .4; p.y += p.vy + Math.cos(p.t * .8) * .4;
          if (p.x < -30) p.x = w + 30; if (p.x > w + 30) p.x = -30;
          if (p.y < -30) p.y = h + 30; if (p.y > h + 30) p.y = -30;
          drawButterfly(p);
          break;
        case "star": {
          const a = .3 + .7 * Math.abs(Math.sin(p.t * p.tw));
          ctx.globalAlpha = a; ctx.fillStyle = p.color;
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill();
          break;
        }
        case "galaxy": {
          p.ang += p.spd;
          const swirl = p.rad * (1 - .00002 * p.t);
          p.x = cx + Math.cos(p.ang) * swirl;
          p.y = cy * .9 + Math.sin(p.ang) * swirl * .55;
          ctx.globalAlpha = .8; ctx.fillStyle = p.color;
          ctx.shadowColor = p.color; ctx.shadowBlur = 6;
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill();
          ctx.shadowBlur = 0;
          break;
        }
        case "burstDot": {
          p.x += p.vx; p.y += p.vy; p.vy += .045; p.life -= .016;
          ctx.globalAlpha = Math.max(0, p.life);
          ctx.fillStyle = p.color; ctx.shadowColor = p.color; ctx.shadowBlur = 10;
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill();
          ctx.shadowBlur = 0;
          break;
        }
        case "confetti":
          p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.vy += .03;
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
          ctx.globalAlpha = .95; ctx.fillStyle = p.color;
          ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * .6);
          ctx.restore();
          if (p.y > h + 20) Object.assign(p, spawn("confetti"));
          break;
      }
    }
    ctx.globalAlpha = 1;
    if (running) raf = requestAnimationFrame(tick);
  }

  function set(newMode, counts = {}) {
    mode = newMode;
    parts = [];
    if (REDUCED) { ctx.clearRect(0, 0, innerWidth, innerHeight); stop(); return; }
    const defaults = {
      sparkle: 26, petal: 0, butterfly: 0, star: 0, galaxy: 0, confetti: 0, ...counts,
    };
    for (const kind in defaults)
      for (let i = 0; i < defaults[kind]; i++) parts.push(spawn(kind));
    start();
  }
  function start() { if (!running && !REDUCED) { running = true; raf = requestAnimationFrame(tick); } }
  function stop()  { running = false; cancelAnimationFrame(raf); }

  /* one-off bursts (fireworks / heart explosion) */
  function burst(x, y, opts = {}) {
    if (REDUCED) return;
    const n = opts.n || 36;
    for (let i = 0; i < n; i++) {
      const ang = (i / n) * Math.PI * 2 + rand(-.1, .1);
      const spd = rand(1.4, opts.spd || 4.6);
      parts.push({
        kind: "burstDot",
        x, y, vx: Math.cos(ang) * spd, vy: Math.sin(ang) * spd * (opts.heart ? .9 : 1),
        r: rand(1.5, 3.4), life: rand(.9, 1.7), t: 0,
        color: opts.color || pick(["#f6c6d7", "#cbb6ee", "#f0cf8e", "#fff"]),
      });
    }
    start();
  }
  /* heart-shaped explosion */
  function heartBurst(x, y, scale = 6) {
    if (REDUCED) return;
    for (let i = 0; i < 60; i++) {
      const t = (i / 60) * Math.PI * 2;
      const hx = 16 * Math.pow(Math.sin(t), 3);
      const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      parts.push({
        kind: "burstDot", x, y,
        vx: hx * scale * .028, vy: hy * scale * .028,
        r: rand(1.6, 3), life: rand(1.2, 2), t: 0,
        color: pick(["#f6c6d7", "#ec9fbc", "#fff"]),
      });
    }
    start();
  }
  /* prune dead burst dots every few seconds */
  setInterval(() => { parts = parts.filter(p => p.kind !== "burstDot" || p.life > 0); }, 3000);

  return { set, stop, start, burst, heartBurst };
})();

/* ═════════════════════ SCENE MANAGER & WIPES ══════════════════ */
const TL = $("#transition-layer");
let currentScene = "scene-landing";
let transitioning = false;

/* spawn drifting bits (petals/leaves/sparks) inside a transition */
function twBits(kind, count) {
  for (let i = 0; i < count; i++) {
    const bit = el("div", "tw-bit");
    const size = rand(10, 26);
    bit.style.width = bit.style.height = size + "px";
    bit.style.left = rand(60, 130) + "vw";
    bit.style.top = rand(-10, 100) + "vh";
    bit.style.animationDelay = rand(0, .5) + "s";
    setVars(bit, { "--dx": rand(-150, -110) + "vw", "--dy": rand(-30, 40) + "vh",
                   "--rot": rand(360, 1080) + "deg" });
    if (kind === "petal") {
      bit.style.background = pick(["#f6c6d7", "#f2b3cd", "#fbd9e8"]);
      bit.style.borderRadius = "80% 0 80% 0";
    } else if (kind === "leaf") {
      bit.style.background = pick(["#9cc487", "#b8d8a0", "#d6ecc5"]);
      bit.style.borderRadius = "0 70% 0 70%";
    } else {
      bit.style.background = pick(["#fff", "#f0cf8e", "#cbb6ee"]);
      bit.style.borderRadius = "50%";
      bit.style.boxShadow = "0 0 12px currentColor";
    }
    TL.appendChild(bit);
  }
}

/* each named wipe: builds DOM inside #transition-layer */
const WIPES = {
  bloom()     { TL.appendChild(el("div", "tw-bloom")); },
  petals()    { TL.appendChild(el("div", "tw-petalveil")); twBits("petal", 22); },
  doors()     { TL.appendChild(el("div", "tw-door left")); TL.appendChild(el("div", "tw-door right")); },
  flash()     { const f = el("div", "tw-film"); for (let i = 0; i < 5; i++) f.appendChild(el("span")); TL.appendChild(f); TL.appendChild(el("div", "tw-flash")); },
  ripple()    { for (let i = 0; i < 4; i++) { const r = el("div", "tw-ripple"); r.style.animationDelay = i * .16 + "s"; TL.appendChild(r); } },
  shimmer()   { TL.appendChild(el("div", "tw-shimmer")); twBits("spark", 14); },
  leaves()    { TL.appendChild(el("div", "tw-leafveil")); twBits("leaf", 24); },
  flip()      { TL.classList.add("flip-stage"); TL.appendChild(el("div", "tw-flip")); },
  clock()     { TL.appendChild(el("div", "tw-clock")); },
  keyhole()   { TL.appendChild(el("div", "tw-keyhole")); },
  dusk()      { TL.appendChild(el("div", "tw-dusk")); twBits("spark", 10); },
  panup()     { TL.appendChild(el("div", "tw-panup")); twBits("spark", 16); },
  swirl()     { TL.appendChild(el("div", "tw-swirl")); twBits("spark", 26); },
};

async function goTo(sceneId, wipe = "bloom") {
  if (transitioning || sceneId === currentScene) return;
  transitioning = true;
  TL.classList.add("busy");

  const half = REDUCED ? 60 : 950;   // scene swap happens mid-wipe
  const full = REDUCED ? 120 : 2200; // wipe fully done

  if (!REDUCED && WIPES[wipe]) WIPES[wipe]();

  const cur  = $("#" + currentScene);
  const next = $("#" + sceneId);

  /* old scene fades out underneath the wipe… */
  cur.classList.add("scene-fade-out");
  await delay(half);

  /* …then the new scene fades in as the wipe clears */
  cur.classList.remove("active", "scene-fade-out");
  next.classList.add("active", "scene-fade-in");
  currentScene = sceneId;
  SCENE_SETUP[sceneId]?.();

  await delay(full - half);
  next.classList.remove("scene-fade-in");
  TL.innerHTML = "";
  TL.classList.remove("busy", "flip-stage");
  transitioning = false;
}

/* ══════════════════════ AUDIO (shared) ════════════════════════ */
const music = (() => {
  const audio = $("#bg-music");
  let started = false;
  audio.volume = .7;

  function syncUI() {
    const playing = !audio.paused && !audio.ended;
    $("#vinyl")?.classList.toggle("spinning", playing);
    $("#tonearm")?.classList.toggle("on", playing);
    $("#dock-disc").classList.toggle("spinning", playing);
    $("#dock-status").textContent = playing ? "Now Playing ♪" : "Paused";
    $("#now-playing")?.classList.toggle("paused", !playing);
    const t = $("#btn-music-toggle"); if (t) t.textContent = playing ? "Pause" : "Resume";
    const m = $("#btn-music-mute");   if (m) m.textContent = audio.muted ? "Unmute" : "Mute";
    $("#dock-mute").textContent = audio.muted ? "🔇" : "🔊";
  }
  async function play() {
    try { await audio.play(); started = true; }
    catch { /* file missing or blocked — the vinyl still spins in spirit */ }
    syncUI();
  }
  function toggle() { audio.paused ? play() : (audio.pause(), syncUI()); }
  function mute()   { audio.muted = !audio.muted; syncUI(); }
  function volume(v){ audio.volume = v / 100; if (audio.muted && v > 0) audio.muted = false; syncUI(); }

  audio.addEventListener("play", syncUI);
  audio.addEventListener("pause", syncUI);
  return { play, toggle, mute, volume, get started() { return started; }, syncUI };
})();

/* dock wiring */
$("#dock-disc").addEventListener("click", () => music.toggle());
$("#dock-mute").addEventListener("click", () => music.mute());
$("#dock-volume").addEventListener("input", e => music.volume(+e.target.value));
function showDock() { $("#vinyl-dock").classList.remove("hidden"); music.syncUI(); }

/* ═══════════════════ SCENE 1 · LANDING ════════════════════════ */
function setupLanding() {
  fx.set("sparkle", { sparkle: 30, star: 40 });
  const wrap = $(".landing-hearts");
  if (!wrap.childElementCount && !REDUCED) {
    for (let i = 0; i < 14; i++) {
      const h = el("span", "float-heart", pick(["❤️", "💗", "💜", "🤍", "💛"]));
      setVars(h, { "--sz": rand(.8, 1.8) + "rem", "--dur": rand(9, 17) + "s",
        "--delay": rand(0, 12) + "s", "--sway": rand(-8, 8) + "vw", "--op": rand(.4, .85) });
      h.style.left = rand(2, 96) + "vw";
      wrap.appendChild(h);
    }
  }
}
$("#btn-open-heart").addEventListener("click", () => {
  fx.heartBurst(innerWidth / 2, innerHeight / 2, 7);
  goTo("scene-bloom", "bloom");
});

/* ═══════════════════ SCENE 2 · FLOWER BLOOM ═══════════════════ */
const BLOOM_SVG = `
<svg viewBox="0 0 420 480" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <radialGradient id="sunGrad" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#fff3cf"/><stop offset="70%" stop-color="#f0cf8e"/>
      <stop offset="100%" stop-color="#f0cf8e" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="petalGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fbd3e2"/><stop offset="100%" stop-color="#ec9fbc"/>
    </linearGradient>
    <linearGradient id="stemGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#8fbb75"/><stop offset="100%" stop-color="#5f9448"/>
    </linearGradient>
    <radialGradient id="bloomGlow" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#fff" stop-opacity=".9"/>
      <stop offset="100%" stop-color="#f6c6d7" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <g class="bl-sun" opacity="0.95">
    <g class="bl-sun-rays" style="transform-box:fill-box">
      ${Array.from({ length: 8 }, (_, i) =>
        `<line x1="340" y1="20" x2="340" y2="92" stroke="#f0cf8e" stroke-width="4"
          stroke-linecap="round" transform="rotate(${i * 45} 340 56)"/>`).join("")}
    </g>
    <circle cx="340" cy="56" r="26" fill="url(#sunGrad)"/>
    <circle cx="340" cy="56" r="18" fill="#f7dfa8"/>
  </g>

  <g class="bl-rain">
    ${Array.from({ length: 9 }, (_, i) =>
      `<line style="--i:${i}" x1="${60 + i * 36}" y1="120" x2="${54 + i * 36}" y2="150"/>`).join("")}
  </g>

  <ellipse cx="210" cy="430" rx="110" ry="16" fill="#caa27c" opacity=".55"/>
  <ellipse cx="210" cy="428" rx="70"  ry="10" fill="#a97f57" opacity=".5"/>

  <g class="bl-seed"><g class="bl-seed-rest" style="transform-box:fill-box">
    <ellipse cx="210" cy="418" rx="8" ry="11" fill="#8a5a34" transform="rotate(18 210 418)"/>
    <path d="M210 409 q4 -7 9 -8" stroke="#6d4526" stroke-width="2" fill="none"/>
  </g></g>

  <path class="bl-stem" d="M210 424 C 200 380, 222 330, 210 280 C 200 240, 214 200, 210 158"
        stroke="url(#stemGrad)" stroke-width="9" stroke-linecap="round" fill="none"/>

  <g class="bl-leaf l1" style="--ox:207px; --oy:340px">
    <path d="M207 340 C 160 330, 140 300, 138 278 C 172 282, 200 306, 207 340 Z" fill="url(#stemGrad)"/>
  </g>
  <g class="bl-leaf l2" style="--ox:213px; --oy:296px">
    <path d="M213 296 C 260 288, 282 258, 285 236 C 250 240, 221 262, 213 296 Z" fill="url(#stemGrad)"/>
  </g>
  <g class="bl-leaf l3" style="--ox:208px; --oy:252px">
    <path d="M208 252 C 168 244, 150 220, 148 202 C 178 206, 201 224, 208 252 Z" fill="url(#stemGrad)"/>
  </g>

  <circle class="bl-glow" cx="210" cy="150" r="90" fill="url(#bloomGlow)"/>

  <g class="bl-bud"><circle cx="210" cy="150" r="16" fill="#d987a8"/></g>
  ${Array.from({ length: 8 }, (_, i) => `
    <g class="bl-petal" style="--rot:${i * 45}deg; --i:${i}; transform-box:view-box; transform-origin:210px 150px">
      <ellipse cx="210" cy="112" rx="20" ry="40" fill="url(#petalGrad)"
        stroke="#fff" stroke-width="1.5" stroke-opacity=".6"/>
    </g>`).join("")}
  <g class="bl-core">
    <circle cx="210" cy="150" r="17" fill="#f7dfa8"/>
    <circle cx="210" cy="150" r="17" fill="none" stroke="#d9a441" stroke-width="2" stroke-dasharray="3 4"/>
  </g>
</svg>`;

const BLOOM_CAPTIONS = [
  [0.2,  "a tiny seed falls…"],
  [2.0,  "the rain remembers how to be gentle…"],
  [4.4,  "then the sun finds it — the way you found me…"],
  [5.9,  "and slowly… something begins to grow…"],
  [7.2,  "leaf by leaf… day by day…"],
  [9.3,  "until one morning…"],
  [10.9, "…it blooms. 🌸"],
];

let bloomTimers = [];
function setupBloom() {
  fx.set("sparkle", { sparkle: 18, petal: 6 });
  const stage = $("#bloom-stage");
  stage.classList.remove("fly");
  stage.innerHTML = BLOOM_SVG;
  $("#bloom-reveal").classList.add("hidden");
  $("#btn-skip-bloom").classList.remove("hidden");
  const cap = $("#bloom-caption");
  cap.style.opacity = 1;

  bloomTimers.forEach(clearTimeout); bloomTimers = [];
  if (REDUCED) { finishBloom(true); return; }

  for (const [t, text] of BLOOM_CAPTIONS)
    bloomTimers.push(setTimeout(() => {
      cap.style.opacity = 0;
      setTimeout(() => { cap.textContent = text; cap.style.opacity = 1; }, 300);
    }, t * 1000));

  bloomTimers.push(setTimeout(() => finishBloom(false), 12000));
}
function finishBloom(instant) {
  bloomTimers.forEach(clearTimeout); bloomTimers = [];
  const stage = $("#bloom-stage");
  $("#btn-skip-bloom").classList.add("hidden");
  $("#bloom-caption").style.opacity = 0;
  if (!instant) {
    stage.classList.add("fly");
    fx.burst(innerWidth / 2, innerHeight * .42, { n: 26, color: "#f6c6d7" });
    setTimeout(() => $("#bloom-reveal").classList.remove("hidden"), 1400);
  } else {
    $("#bloom-reveal").classList.remove("hidden");
  }
}
$("#btn-skip-bloom").addEventListener("click", () => finishBloom(false));
$("#btn-after-bloom").addEventListener("click", () => goTo("scene-letter", "petals"));

/* ═══════════════════ SCENE 3 · LOVE LETTER ════════════════════ */
let typedOnce = false;
function setupLetter() {
  fx.set("sparkle", { sparkle: 20, butterfly: 3 });
}
$("#envelope").addEventListener("click", function open() {
  const env = $("#envelope");
  if (env.classList.contains("opened")) return;
  env.classList.add("opened");
  setTimeout(typeLetter, 1400);
});
function typeLetter() {
  if (typedOnce) return; typedOnce = true;
  const target = $("#typed-letter");
  if (REDUCED) { target.textContent = SHORT_LETTER; target.classList.add("done"); afterTyping(); return; }
  let i = 0;
  (function step() {
    if (i <= SHORT_LETTER.length) {
      target.textContent = SHORT_LETTER.slice(0, i++);
      const ch = SHORT_LETTER[i - 1];
      setTimeout(step, ch === "\n" ? 220 : ch === "." ? 260 : rand(24, 60));
    } else { target.classList.add("done"); afterTyping(); }
  })();
}
function afterTyping() {
  const wrap = $("#letter-hearts");
  for (let i = 0; i < 16; i++) {
    const h = el("span", "mini-heart", pick(["❤️", "💗", "💜", "🤍"]));
    setVars(h, { "--x": rand(20, 80) + "vw", "--sz": rand(.7, 1.4) + "rem",
      "--delay": rand(0, 1.6) + "s", "--sway": rand(-8, 8) + "vw" });
    wrap.appendChild(h);
  }
  setTimeout(() => $("#btn-after-letter").classList.remove("hidden"), 900);
}
$("#btn-after-letter").addEventListener("click", () => goTo("scene-memories", "doors"));

/* ═══════════════════ SCENE 4 · MEMORY JOURNEY ═════════════════ */
function photoSrc(i) {
  return `assets/images/IMAGE_PLACEHOLDER_${String(i + 1).padStart(2, "0")}.${IMAGE_EXT}`;
}
function videoSrc(i) {
  return `assets/videos/VIDEO_PLACEHOLDER_${String(i + 1).padStart(2, "0")}.mp4`;
}
/* build the treasure list: photos & videos interleaved (P P V P V P V P) */
function buildTreasures() {
  const items = [];
  let p = 0, v = 0;
  const total = PHOTO_CAPTIONS.length + VIDEO_CAPTIONS.length;
  for (let i = 0; i < total; i++) {
    const wantVideo = i > 0 && i % 2 === 0 && v < VIDEO_CAPTIONS.length;
    if (wantVideo || p >= PHOTO_CAPTIONS.length)
      items.push({ type: "video", idx: v, cap: VIDEO_CAPTIONS[v++] });
    else
      items.push({ type: "photo", idx: p, cap: PHOTO_CAPTIONS[p++] });
  }
  return items;
}
let polaroidsBuilt = false;
function setupMemories() {
  fx.set("sparkle", { sparkle: 22, butterfly: 4, petal: 4 });
  if (polaroidsBuilt) return; polaroidsBuilt = true;

  const sky = $("#polaroid-sky");
  const items = buildTreasures();
  const n = items.length;
  /* spread the treasures over two staggered rows so the whole wall is used */
  const topCount = Math.ceil(n / 2);
  items.forEach((it, i) => {
    const inTop = i < topCount;
    const rowIdx = inTop ? i : i - topCount;
    const rowLen = inTop ? topCount : n - topCount;
    const xStep = 100 / rowLen;
    /* center each card inside its slot */
    const x = Math.max(0, Math.min(82,
      rowIdx * xStep + xStep / 2 - 9 + rand(-2, 2)));
    const y = inTop ? rand(0, 7) : rand(48, 56);
    const b = el("button", "polaroid");
    b.setAttribute("aria-label",
      `Open ${it.type} ${it.idx + 1}: ${it.cap}`);
    setVars(b, {
      "--x": x + "%",
      "--y": y + "%",
      "--tilt": rand(-8, 8) + "deg",
      "--dur": rand(3.5, 6.5) + "s",
      "--delay": rand(0, 2) + "s",
      "--n": i,
    });
    const img = el("div", "polaroid-img");
    if (it.type === "video") {
      const vd = document.createElement("video");
      vd.src = videoSrc(it.idx);
      vd.muted = true; vd.loop = true; vd.playsInline = true;
      vd.preload = "metadata";
      vd.addEventListener("error", () => { vd.remove(); img.textContent = "🎬"; });
      img.appendChild(vd);
      img.appendChild(el("span", "vid-badge", "▶"));
      /* silent preview on hover (desktop) */
      b.addEventListener("mouseenter", () => vd.play().catch(() => {}));
      b.addEventListener("mouseleave", () => vd.pause());
    } else {
      /* fallback emoji only if the photo is actually missing */
      const probe = new Image();
      probe.onerror = () => { img.textContent = "💞"; };
      probe.src = photoSrc(it.idx);
      img.style.backgroundImage =
        `url('${photoSrc(it.idx)}')`;
    }
    b.appendChild(img);
    b.appendChild(el("span", "polaroid-cap", it.cap));
    b.addEventListener("click", () => openLightbox(it));
    sky.appendChild(b);
  });
}

/* lightbox — plays photos AND videos */
const lightbox = $("#lightbox");
function openLightbox(it) {
  /* accept either a treasure object or a plain photo index */
  if (typeof it === "number") it = { type: "photo", idx: it, cap: PHOTO_CAPTIONS[it] };
  const card = $("#lightbox-card");
  const box = $("#lightbox-img");
  box.innerHTML = "";
  box.classList.toggle("has-video", it.type === "video");
  if (it.type === "video") {
    box.style.backgroundImage = "";
    const vd = document.createElement("video");
    vd.src = videoSrc(it.idx);
    vd.controls = true; vd.autoplay = true; vd.playsInline = true; vd.loop = true;
    vd.className = "lightbox-vid";
    box.appendChild(vd);
  } else {
    box.style.backgroundImage =
      `url('${photoSrc(it.idx)}')`;
    const probe = new Image();
    probe.onerror = () => { box.textContent = "💞"; };
    probe.src = photoSrc(it.idx);
  }
  $("#lightbox-cap").textContent = it.cap;
  lightbox.classList.remove("hidden");
  $("#lightbox-close").focus();
  /* golden sparks around the card */
  if (!REDUCED) for (let s = 0; s < 12; s++) {
    const sp = el("span", "lb-spark");
    sp.style.left = "50%"; sp.style.top = "50%";
    setVars(sp, { "--dx": rand(-180, 180) + "px", "--dy": rand(-200, 200) + "px" });
    card.appendChild(sp);
    setTimeout(() => sp.remove(), 1100);
  }
}
function closeLightbox() {
  lightbox.classList.add("hidden");
  const v = $("#lightbox-img video");
  if (v) { v.pause(); v.remove(); }
}
$("#lightbox-close").addEventListener("click", closeLightbox);
$("#lightbox-backdrop").addEventListener("click", closeLightbox);
addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

$("#btn-after-memories").addEventListener("click", () => goTo("scene-gifs", "flash"));

/* ═══════════════════ SCENE 5 · GIF MEMORIES ═══════════════════ */
let gifsBuilt = false;
function setupGifs() {
  fx.set("sparkle", { sparkle: 18, butterfly: 3 });
  if (gifsBuilt) return; gifsBuilt = true;
  const grid = $("#gif-grid");
  GIF_LABELS.forEach((label, i) => {
    const frame = el("div", "gif-frame");
    frame.style.setProperty("--n", i);
    const img = new Image();
    img.src = `assets/gifs/GIF_PLACEHOLDER_${String(i + 1).padStart(2, "0")}.gif`;
    img.alt = label;
    img.onerror = () => {
      img.remove();
      frame.classList.add("gif-empty");
      frame.prepend(el("div", "gif-ph",
        `<span class="big">${pick(["🎬", "😹", "🫶", "🌟"])}</span>
         <span>drop GIF_PLACEHOLDER_${String(i + 1).padStart(2, "0")}.gif<br>into /assets/gifs/</span>`));
    };
    frame.appendChild(img);
    frame.appendChild(el("span", "gif-tag", label));
    grid.appendChild(frame);
  });
}
$("#btn-after-gifs").addEventListener("click", () => goTo("scene-music", "ripple"));

/* ═══════════════════ SCENE 6 · VINYL MUSIC ════════════════════ */
function setupMusic() { fx.set("sparkle", { sparkle: 20 }); }
$("#vinyl").addEventListener("click", async () => {
  const first = !music.started;
  if (first) {
    $("#tonearm").classList.add("on");
    await delay(REDUCED ? 50 : 1000); // needle drops…
    await music.play();
    $("#now-playing").classList.remove("hidden");
    $("#music-controls").classList.remove("hidden");
    $("#btn-after-music").classList.remove("hidden");
    showDock();
  } else music.toggle();
});
$("#btn-music-toggle").addEventListener("click", () => music.toggle());
$("#btn-music-mute").addEventListener("click", () => music.mute());
$("#music-volume").addEventListener("input", e => {
  music.volume(+e.target.value);
  $("#dock-volume").value = e.target.value;
});
$("#btn-after-music").addEventListener("click", () => goTo("scene-message", "shimmer"));
/* allow skipping music scene without playing (keyboard users / no file) */
$("#music-hint").addEventListener("dblclick", () => $("#btn-after-music").classList.remove("hidden"));
setTimeout(() => {}, 0);

/* ═══════════════════ SCENE 7 · LONG MESSAGE ═══════════════════ */
let messageBuilt = false;
function setupMessage() {
  fx.set("sparkle", { sparkle: 16, petal: 5 });
  const art = $("#long-letter");
  if (!messageBuilt) {
    messageBuilt = true;
    LONG_MESSAGE.forEach(({ t, cls }) => {
      const p = el("p", cls || "", t.replace(/\n/g, "<br>"));
      art.appendChild(p);
    });
    /* paragraphs fade in as they scroll into view */
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) en.target.classList.add("shown"); });
    }, { root: $("#paper-sheet"), threshold: .15 });
    $$("#long-letter p").forEach(p => io.observe(p));
    /* show the continue button once the reader nears the end */
    const sheet = $("#paper-sheet");
    sheet.addEventListener("scroll", () => {
      if (sheet.scrollTop + sheet.clientHeight > sheet.scrollHeight - 80)
        $("#btn-after-message").classList.remove("hidden");
    });
    setTimeout(() => $("#btn-after-message").classList.remove("hidden"), 25000);
  }
}
$("#btn-after-message").addEventListener("click", () => goTo("scene-tree", "leaves"));

/* ═══════════════════ SCENE 8 · PROMISE TREE ═══════════════════ */
const TREE_SVG = `
<svg viewBox="0 0 560 520" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="barkGrad" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#7c5233"/><stop offset="100%" stop-color="#a3714a"/>
    </linearGradient>
    <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#b9dba0"/><stop offset="100%" stop-color="#6fa04f"/>
    </linearGradient>
    <linearGradient id="leafGoldGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f7e3ae"/><stop offset="100%" stop-color="#d9a441"/>
    </linearGradient>
  </defs>
  <ellipse cx="280" cy="492" rx="200" ry="20" fill="#caa27c" opacity=".4"/>
  <path class="tr-trunk" d="M280 495 C 268 430, 292 380, 278 320 C 268 275, 284 240, 278 200"
        stroke="url(#barkGrad)" stroke-width="26" stroke-linecap="round" fill="none"/>
  <path class="tr-branch" style="animation-delay:1.6s" d="M278 330 C 230 300, 190 290, 150 240"
        stroke="url(#barkGrad)" stroke-width="14" stroke-linecap="round" fill="none"/>
  <path class="tr-branch" style="animation-delay:1.9s" d="M280 300 C 330 270, 370 260, 415 215"
        stroke="url(#barkGrad)" stroke-width="14" stroke-linecap="round" fill="none"/>
  <path class="tr-branch" style="animation-delay:2.2s" d="M278 240 C 240 205, 215 190, 190 140"
        stroke="url(#barkGrad)" stroke-width="11" stroke-linecap="round" fill="none"/>
  <path class="tr-branch" style="animation-delay:2.5s" d="M278 220 C 320 180, 345 165, 372 118"
        stroke="url(#barkGrad)" stroke-width="11" stroke-linecap="round" fill="none"/>
  <path class="tr-branch" style="animation-delay:2.8s" d="M278 205 C 275 165, 280 140, 276 96"
        stroke="url(#barkGrad)" stroke-width="10" stroke-linecap="round" fill="none"/>
</svg>`;

const LEAF_SHAPE = `
<svg viewBox="0 0 40 40" aria-hidden="true">
  <path class="leaf-shape" d="M20 2 C 34 8, 40 22, 20 38 C 0 22, 6 8, 20 2 Z"/>
  <path d="M20 6 L20 34" stroke="rgba(255,255,255,.55)" stroke-width="1.6" fill="none"/>
</svg>`;

/* leaf positions as % of the tree stage (crown clusters) */
const LEAF_SPOTS = [
  [27,45],[22,38],[31,35],[18,48],[35,42],
  [72,40],[78,34],[67,32],[82,44],[63,44],
  [34,24],[28,17],[40,15],[22,26],
  [63,20],[70,13],[57,13],[75,24],
  [49,10],[49,22],
];
let treeBuilt = false, leavesRead = 0;
function setupTree() {
  fx.set("sparkle", { sparkle: 14, butterfly: 3 });
  if (treeBuilt) return; treeBuilt = true;
  const stage = $("#tree-stage");
  stage.innerHTML = TREE_SVG;
  updateLeafCount();
  PROMISES.forEach((promise, i) => {
    const [x, y] = LEAF_SPOTS[i];
    const b = el("button", "leaf-btn", LEAF_SHAPE);
    b.setAttribute("aria-label", `Promise leaf ${i + 1}`);
    setVars(b, { "--x": x + "%", "--y": y + "%",
      "--tilt": rand(-40, 40) + "deg", "--delay": (3 + i * .14) + "s" });
    b.addEventListener("click", () => {
      b.classList.add("wiggle");
      setTimeout(() => b.classList.remove("wiggle"), 650);
      if (!b.classList.contains("read")) { b.classList.add("read"); leavesRead++; updateLeafCount(); }
      const toast = $("#promise-toast");
      toast.innerHTML = `🍃 <em>${promise}</em>`;
      toast.classList.remove("hidden");
      clearTimeout(toast._t);
      toast._t = setTimeout(() => toast.classList.add("hidden"), 4200);
      if (leavesRead === PROMISES.length) fx.heartBurst(innerWidth / 2, innerHeight / 3, 6);
    });
    stage.appendChild(b);
  });
}
function updateLeafCount() {
  $("#leaf-count").textContent = `(${leavesRead}/${PROMISES.length})`;
}
$("#btn-after-tree").addEventListener("click", () => goTo("scene-countdown", "clock"));

/* ═══════════════════ SCENE 9 · COUNTDOWN ══════════════════════ */
let countTimer = null;
function setupCountdown() {
  fx.set("sparkle", { sparkle: 22, star: 20 });
  clearInterval(countTimer);
  const start = new Date(RELATIONSHIP_START).getTime();
  const cells = { d: $("#cd-days"), h: $("#cd-hours"), m: $("#cd-mins"), s: $("#cd-secs") };
  function tick() {
    let diff = Math.max(0, Date.now() - start);
    const d = Math.floor(diff / 864e5);
    const h = Math.floor(diff % 864e5 / 36e5);
    const m = Math.floor(diff % 36e5 / 6e4);
    const s = Math.floor(diff % 6e4 / 1e3);
    setNum(cells.d, d); setNum(cells.h, h); setNum(cells.m, m); setNum(cells.s, s);
  }
  function setNum(elm, v) {
    if (elm.textContent != v) {
      elm.textContent = v;
      elm.classList.remove("tick"); void elm.offsetWidth; elm.classList.add("tick");
    }
  }
  tick();
  countTimer = setInterval(tick, 1000);
}
$("#btn-after-countdown").addEventListener("click", () => goTo("scene-chest", "keyhole"));

/* ═══════════════════ SCENE 11 · TREASURE CHEST ════════════════ */
function setupChest() { fx.set("sparkle", { sparkle: 24 }); }
$("#chest").addEventListener("click", () => {
  const chest = $("#chest");
  if (chest.classList.contains("open")) return;
  chest.classList.add("open");
  const r = chest.getBoundingClientRect();
  fx.burst(r.left + r.width / 2, r.top + r.height * .45, { n: 40, color: "#f0cf8e", spd: 5 });
  setTimeout(() => $("#future-letter").classList.remove("hidden"), REDUCED ? 100 : 1300);
});
$("#btn-after-chest").addEventListener("click", () => {
  document.body.classList.add("night-mode");
  goTo("scene-fireflies", "dusk");
});

/* ═══════════════════ SCENE 12 · FIREFLIES ═════════════════════ */
let firefliesBuilt = false, firefliesCaught = 0;
function setupFireflies() {
  fx.set("star", { star: 60, sparkle: 6 });
  if (firefliesBuilt) return; firefliesBuilt = true;
  const field = $("#firefly-field");
  updateFireflyCount();
  FIREFLY_MESSAGES.forEach((msg, i) => {
    const f = el("button", "firefly");
    f.setAttribute("aria-label", `Firefly ${i + 1} — tap to read its message`);
    setVars(f, {
      "--x": rand(3, 92) + "%", "--y": rand(4, 88) + "%",
      "--dur": rand(9, 18) + "s", "--delay": rand(-12, 0) + "s",
      "--blink": rand(1.4, 3.4) + "s",
      "--x1": rand(-70, 70) + "px", "--y1": rand(-50, 50) + "px",
      "--x2": rand(-90, 90) + "px", "--y2": rand(-70, 70) + "px",
      "--x3": rand(-70, 70) + "px", "--y3": rand(-50, 50) + "px",
      "--x4": rand(-40, 40) + "px", "--y4": rand(-30, 30) + "px",
    });
    f.addEventListener("click", () => {
      if (!f.classList.contains("caught")) { f.classList.add("caught"); firefliesCaught++; updateFireflyCount(); }
      const note = $("#firefly-note");
      note.innerHTML = `✨ <em>${msg}</em>`;
      note.classList.remove("hidden");
      clearTimeout(note._t);
      note._t = setTimeout(() => note.classList.add("hidden"), 4600);
    });
    field.appendChild(f);
  });
}
function updateFireflyCount() {
  $("#firefly-count").textContent = `(${firefliesCaught}/${FIREFLY_MESSAGES.length} caught)`;
}
$("#btn-after-fireflies").addEventListener("click", () => goTo("scene-stars", "panup"));

/* ═══════════════════ SCENE 13 · SHOOTING STARS ════════════════ */
let starTimer = null, skySeeded = false;
function setupStars() {
  fx.set("star", { star: 30 });
  const sky = $("#star-sky");
  if (!skySeeded) {
    skySeeded = true;
    for (let i = 0; i < 70; i++) {
      const s = el("span", "tiny-star");
      const size = rand(1, 3);
      s.style.width = s.style.height = size + "px";
      s.style.left = rand(0, 100) + "%";
      s.style.top = rand(0, 100) + "%";
      setVars(s, { "--tw": rand(2, 5) + "s", "--delay": rand(0, 4) + "s" });
      sky.appendChild(s);
    }
  }
  clearInterval(starTimer);
  if (!REDUCED) starTimer = setInterval(() => { if (Math.random() < .75) launchStar(); }, 2600);
  launchStar();
}
function launchStar() {
  if (currentScene !== "scene-stars") { clearInterval(starTimer); return; }
  const sky = $("#star-sky");
  const goingRight = Math.random() < .5;
  const star = el("button", "shooting-star");
  star.setAttribute("aria-label", "Shooting star — catch it!");
  const sx = goingRight ? rand(-5, 25) : rand(75, 105);
  const sy = rand(0, 40);
  const dx = (goingRight ? rand(60, 110) : rand(-110, -60));
  const dy = rand(25, 60);
  setVars(star, {
    "--sx": sx + "%", "--sy": sy + "%",
    "--dx": dx + "vw", "--dy": dy + "vh",
    "--flight": (REDUCED ? 0.01 : rand(3.6, 5.4)) + "s",
    "--tail-rot": (goingRight ? rand(12, 28) : rand(152, 168)) + "deg",
  });
  star.addEventListener("click", () => {
    const r = star.getBoundingClientRect();
    fx.burst(r.left + 32, r.top + 32, { n: 18, color: "#cbb6ee" });
    star.remove();
    const wish = $("#star-wish");
    wish.innerHTML = `🌠 <em>${pick(STAR_MESSAGES)}</em>`;
    wish.classList.remove("hidden");
    clearTimeout(wish._t);
    wish._t = setTimeout(() => wish.classList.add("hidden"), 4600);
  });
  star.addEventListener("animationend", () => star.remove());
  sky.appendChild(star);
}
$("#btn-summon-star").addEventListener("click", launchStar);
$("#btn-after-stars").addEventListener("click", () => { clearInterval(starTimer); goTo("scene-finale", "swirl"); });

/* ═══════════════════ SCENE 14 · FINALE ════════════════════════ */
const FINALE_FLOWER_SVG = BLOOM_SVG
  .replace('viewBox="0 0 420 480"', 'viewBox="60 20 300 280"'); // crop to the bloom

let finaleDone = false;
function setupFinale() {
  fx.set("galaxy", { galaxy: 160, star: 30 });
  if (finaleDone) return; finaleDone = true;

  /* floating memory photos in the galaxy */
  const wrap = $("#finale-photos");
  /* each photo appears twice so the galaxy doesn't feel empty */
  const FIN_COUNT = PHOTO_CAPTIONS.length * 2;
  for (let i = 0; i < FIN_COUNT; i++) {
    const p = el("div", "fin-photo");
    /* keep the middle clear so photos never sit on top of the text */
    let px, py, tries = 0;
    do {
      px = rand(2, 90); py = rand(4, 86);
    } while (px > 20 && px < 72 && py > 14 && py < 82 && ++tries < 30);
    setVars(p, { "--x": px + "%", "--y": py + "%",
      "--tilt": rand(-14, 14) + "deg", "--dur": rand(4, 8) + "s", "--delay": rand(0, 3) + "s" });
    const img = el("div", "polaroid-img");
    img.style.backgroundImage =
      `url('${photoSrc(i % PHOTO_CAPTIONS.length)}')`;
    p.appendChild(img);
    wrap.appendChild(p);
  }

  /* the first flower blooms one final time (fast replay) */
  const fl = $("#finale-flower");
  fl.innerHTML = FINALE_FLOWER_SVG;
  fl.querySelectorAll(".bl-seed,.bl-rain,.bl-sun,.bl-stem,.bl-leaf").forEach(n => n.remove());
  fl.querySelectorAll(".bl-petal").forEach((p, i) => {
    p.style.animationDelay = (0.6 + i * .12) + "s";
  });
  fl.querySelector(".bl-bud").style.animationDelay = ".3s";
  fl.querySelector(".bl-core").style.animationDelay = "1.8s";
  fl.querySelector(".bl-glow").style.animationDelay = "2s";

  /* ring of stars in a heart shape */
  const ring = $("#heart-ring");
  const N = 44;
  for (let i = 0; i < N; i++) {
    const t = (i / N) * Math.PI * 2;
    const hx = 16 * Math.pow(Math.sin(t), 3);
    const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    const s = el("span", "ring-star");
    setVars(s, { "--hx": hx * 3 + "%", "--hy": hy * 3 + "%",
      "--delay": (2.2 + i * .05) + "s" });
    ring.appendChild(s);
  }

  /* staged text reveal */
  const lines = $$(".finale-line");
  const times = REDUCED ? [0, 0, 0, 0] : [3200, 5200, 7200, 8800];
  lines.forEach((l, i) => setTimeout(() => l.classList.add("shown"), times[i]));
  setTimeout(() => {
    $("#btn-finale-burst").classList.remove("hidden");
    grandFinale();
  }, REDUCED ? 300 : 10200);
}
function grandFinale() {
  fx.heartBurst(innerWidth / 2, innerHeight * .38, 8);
  if (!REDUCED) {
    /* confetti rain */
    fx.set("galaxy", { galaxy: 140, star: 26, confetti: 60 });
    /* fireworks volleys */
    let volleys = 0;
    const fw = setInterval(() => {
      fx.burst(rand(innerWidth * .15, innerWidth * .85), rand(innerHeight * .12, innerHeight * .45),
        { n: randI(24, 40), spd: rand(3.4, 6) });
      if (++volleys > 7) clearInterval(fw);
    }, 650);
  }
  setTimeout(() => $("#credits").classList.remove("hidden"), 2400);
}
/* replay the whole finale from the top */
function replayFinale() {
  finaleDone = false;
  $("#finale-photos").innerHTML = "";
  $("#finale-flower").innerHTML = "";
  $("#heart-ring").innerHTML = "";
  $$(".finale-line").forEach(l => l.classList.remove("shown"));
  $("#btn-finale-burst").classList.add("hidden");
  $("#credits").classList.add("hidden");
  /* force a reflow so CSS animations restart from zero */
  void $("#finale-text").offsetWidth;
  setupFinale();
}
$("#btn-finale-burst").addEventListener("click", () => {
  fx.heartBurst(innerWidth / 2, innerHeight * .4, 9);
  replayFinale();
});

/* ═══════════════════ SCENE SETUP REGISTRY ═════════════════════ */
const SCENE_SETUP = {
  "scene-landing":   setupLanding,
  "scene-bloom":     setupBloom,
  "scene-letter":    setupLetter,
  "scene-memories":  setupMemories,
  "scene-gifs":      setupGifs,
  "scene-music":     setupMusic,
  "scene-message":   setupMessage,
  "scene-tree":      setupTree,
  "scene-countdown": setupCountdown,
  "scene-chest":     setupChest,
  "scene-fireflies": setupFireflies,
  "scene-stars":     setupStars,
  "scene-finale":    setupFinale,
};

/* pause heavy work when the tab is hidden */
document.addEventListener("visibilitychange", () => {
  document.hidden ? fx.stop() : fx.start();
});

/* ═══════════════════ LAUNCH ═══════════════════════════════════ */
setupLanding();
