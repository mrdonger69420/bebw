# Blood Elf Bath Water — 2000s Customized MySpace Page

A 100% self-contained, offline-ready, customizable 2007 MySpace profile page for **"Blood Elf Bath Water"**.

## 🚀 How to Open

Simply double-click **`index.html`** to open it in any web browser—no build tools or servers required!

---

## 🛠️ How to Customize Code & Assets

All text, colors, images, animated GIFs, songs, Top 8 friends, wall comments, and quiz questions are controlled from a single file: **[`config.js`](./config.js)**.

You can also click the **`⚙️ Edit Config`** button in the top-right corner of the page to test changes live and download an updated `config.js`.

### Folder Structure

```text
BEBWSpace/
├── index.html                  # Main 2000s MySpace layout
├── config.js                   # <--- EDIT THIS FILE TO CUSTOMIZE EVERYTHING!
├── styles.css                  # Retro 2007 MySpace theme & CSS variables
├── app.js                      # Renders config.js, handles music player, quiz, wall & cursor trail
└── assets/
    ├── profile/
    │   └── profile-pic.svg     # Default profile picture (drop your own .png/.jpg/.gif here)
    ├── friends/
    │   └── friend-1-tom.svg... # Top 8 friend avatars
    ├── gifs/
    │   ├── happy-birthday.gif  # Animated Happy Birthday banner GIF
    │   ├── birthday-cake.gif   # Animated pixel birthday cake GIF
    │   ├── mana-potion.gif     # Animated Sunwell Bath Water potion GIF
    │   ├── thanks-for-add.gif  # Animated "THANKS 4 THE ADD!!" GIF
    │   ├── rawr-xd.gif         # Animated "RAWR xD" dinosaur GIF
    │   ├── dancing-elf.gif     # Animated AFK Mailbox Dance GIF
    │   └── party-cat.gif       # Animated 2007 shutter-shades party cat GIF
    ├── audio/
    │   ├── silvermoon-emo-2007.wav # Auto-playing profile track #1
    │   └── eversong-nights.wav     # Profile track #2
    └── cursors/
        ├── arcane-wand.svg     # Default custom wand cursor (32x32)
        └── pixel-sword.svg     # Alternate twinblade sword cursor (32x32)
```

---

## 🎨 Quick Customization Guide (`config.js`)

1. **Profile Name & Picture (`window.MYSPACE_CONFIG.profile`)**:
   - Change `name: "Blood Elf Bath Water"` or swap `profilePic: "assets/profile/my-photo.jpg"`.
2. **Custom Mouse Cursor & Sparkle Trail (`window.MYSPACE_CONFIG.theme`)**:
   - Set `customCursor` to any `32x32` `.svg`, `.png`, or `.cur` file in `assets/cursors/`.
   - Toggle `enableCursorTrail: true/false` or change `cursorTrailSymbols`.
3. **Auto-Play Song (`window.MYSPACE_CONFIG.music`)**:
   - Drop any `.mp3`, `.wav`, or `.ogg` file into `assets/audio/` and update `music.tracks`.
   - *Note:* If your browser blocks unmuted autoplay on initial tab load, the page displays a 2007 banner and automatically starts the song on your very first click anywhere on the page.
4. **Top 8 Friends (`window.MYSPACE_CONFIG.topFriends`)**:
   - Edit names, taglines, online status (`online: true`), and avatar paths in `topFriends`.
5. **Personality Quiz (`window.MYSPACE_CONFIG.quiz`)**:
   - Edit `questions` and `results` (each option maps to a `type` key in `results`).
6. **Happy Birthday Post & Random GIF Wall Posts (`window.MYSPACE_CONFIG.wallComments` & `randomGifPool`)**:
   - Add more `.gif` files to `assets/gifs/` and list them in `randomGifPool`.
   - Any wall comment with `isBirthday: true` gets the glittering Happy Birthday VIP styling.
   - Any wall comment with `useRandomGif: true` automatically picks a random GIF from `randomGifPool` on each page load (or when you click **🎲 Randomize Wall GIFs**).
