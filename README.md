# Happy National Girlfriends Day ❤️

An interactive love-story website — from **Win**, made only for **Nie**.

Pure **HTML + CSS + JavaScript**. No build tools, no backend, no dependencies.
Works instantly on **GitHub Pages** (or any static host, or even opened as a local file).

---

## 🗺️ The Journey

1. **Loading** — hearts, stars & a glowing progress bar
2. **Cover** — "A little surprise from Win"
3. **Secret Door** — only Nie can enter
4. **Personal Greeting** — a letter that types itself
5. **Memory Gallery** — floating polaroids + fullscreen lightbox (photos & video)
6. **Why You're Amazing** — flip cards with hidden messages
7. **Love Jar** — 50 unique notes, never repeating until all are read
8. **Scratch Card** — scratch the glitter away to reveal a secret
9. **Surprise Box** — ribbon unties, lid opens, hearts & confetti burst out
10. **Final Love Letter** — paragraphs fade in one by one
11. **Ending** — photos float up into a starry sky

Plus **7 hidden easter eggs**. 🥚

---

## 📁 Project Structure

```
/
│ index.html      ← all scenes & content
│ style.css       ← all styling & animations
│ script.js       ← all interactions & effects
│ README.md
│
├── assets
│   ├── images    ← photo1.jpg … photo5.jpg, secret.jpg
│   ├── videos    ← video1.mp4
│   ├── icons
│   └── fonts
```

> 💡 Every asset is **optional**. If a file is missing, the site shows a
> pretty placeholder instead of breaking — so you can deploy first and
> add photos later.

---

## 🖼️🎬 Photos, Videos & Captions — all in ONE place

Open `script.js` and find the `GALLERY_ITEMS` list right at the top of the
gallery section:

```js
const GALLERY_ITEMS = [
  { type: "photo", src: "assets/images/photo1.jpg", caption: "The day everything started ✨" },
  { type: "video", src: "assets/videos/video1.mp4", caption: "A memory in motion 🎬" },
  // add as many as you like…
];
```

- **Add a memory:** copy a line, change the file name and caption.
- **Remove one:** delete its line.
- **Captions** appear handwritten under each polaroid *and* in the
  fullscreen view when tapped.
- Videos get a ▶ badge on the polaroid and play with sound + controls
  when opened fullscreen.
- Drop the actual files into `assets/images/` and `assets/videos/`.
  Missing files show a friendly placeholder (with the caption) instead
  of breaking.
- The gallery order shuffles on every visit. ✨
- `secret.jpg` is still the hidden photo unlocked by the floating-heart
  easter egg. 🤫

## ✍️ How to Edit Messages

| What | Where |
|---|---|
| Greeting letter (typewriter) | `script.js` → `GREETING_LINES` |
| Flip-card texts | `index.html` → *Scene 6* |
| Scratch-card secret | `index.html` → *Scene 8* (`.scratch-message`) |
| Final love letter | `index.html` → *Scene 10* |
| Ending words | `index.html` → *Scene 11* |
| Moon messages | `script.js` → `MOON_MESSAGES` |
| Future dreams list | `index.html` → `#scene-dreams` |
| Names (Win / Nie) | Search & replace in `index.html` |

## 💌 How to Add More Love Notes

Open `script.js`, find the `LOVE_NOTES` array, and add lines:

```js
const LOVE_NOTES = [
  "You make ordinary days extraordinary.",
  "Your new note here ❤️",
  // ...
];
```

The jar shuffles them and never repeats a note until **all** have been
shown — however many you add.

---

## 🥚 Easter Egg Cheat Sheet (don't tell Nie!)

| Secret | On a computer | On a phone |
|---|---|---|
| Hidden moon message | Click the 🌙 | Tap the 🌙 |
| Secret photo | Click a 💗 that floats up the screen | Tap the floating 💗 |
| Meteor shower | Double-click empty background | Double-tap empty background |
| Fireworks | Type `iloveyou` | Tap a big pulsing ❤️ 3 times fast |
| Heart burst | Click the name **Win** | Tap **Win** |
| Sparkle spiral | Click the name **Nie** | Tap **Nie** |
| "Our Future Dreams" page | Konami code: ↑ ↑ ↓ ↓ ← → ← → B A | Tap the 🌙 five times fast |

---

## 🚀 Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `for-nie`).
2. Upload **all** files and folders (keep the structure exactly as-is).
3. Go to **Settings → Pages**.
4. Under *Build and deployment*, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / root (`/`)
5. Click **Save** and wait ~1 minute.
6. Your surprise is live at:
   `https://<your-username>.github.io/<repo-name>/`

Send her the link. 💌

---

## ♿ & 📱 Nice Extras Built In

- Fully responsive — designed mobile-first (she'll probably open it on her phone)
- Keyboard accessible (door, gift box, cards all work with Enter/Space)
- Respects `prefers-reduced-motion`
- Graceful fallbacks for every missing asset
- Smooth 60fps canvas effects with device-pixel-ratio scaling

Made with ❤️ — good luck, Win!
