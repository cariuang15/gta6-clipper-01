[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/cariuang15/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/cariuang15/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# GTA 6 Jet Ski Jump — a Short for make.fun

Entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"**
(`gta6-clipper-01`, $500, 20 places). Places go by YouTube views, so the
clip is built to hook a scroller in the first second and then pitch make.fun.

## The moment

From Rockstar Games' official **Grand Theft Auto VI Trailer 2**
(https://www.youtube.com/watch?v=VQRLujxTm3c): the jet ski jump at
**02:20–02:21.6**. Two riders launch a green Sea Shark jet ski off a wave
into big air — bright blue sky, turquoise water, the Vice City skyline and a
helicopter behind them. I picked it because it is a single continuous shot,
instantly readable even cropped to vertical, and the jump itself is the kind
of "only in GTA 6" beat that makes someone stop scrolling. I checked the
frames around it myself: 02:18 is a slow living-room scene, 02:20 is a dark
helicopter cockpit, and 02:22 cuts to a motorcycle — the jump is the
strongest hook in that stretch.

## The clip

`clip/gta6-jet-ski-jump-short.mp4` — vertical 9:16, 1080x1920, H.264 + AAC,
24.5 seconds (under 60, so it is a Short on YouTube).

- **0–1.5 s — the hook, full speed:** the jump itself, with the on-screen
  text `GTA 6 IS HERE`. The crop pans gently to follow the jet ski across
  the frame so both riders stay in shot.
- **1.5–4.5 s — the same jump again in slow motion (0.5x):** one moment,
  replayed, so the viewer gets a second look at the air.
- **4.5–24.5 s — the make.fun pitch, as on-screen text** over the jump
  frame, darkened, one line at a time so each is readable:
  `Make clips like this with AI` / `and earn REAL MONEY on make.fun` /
  `make.fun/bounty/gta6-clipper-01`.
  There is no voiceover — the pitch is text on screen, which the bounty
  allows.

The clip was cut and rendered in this session with ffmpeg from the trailer
file (`source/gta6-trailer2.mp4`): trim, a panning vertical crop
(3840x2160 → 1215x2160 → 1080x1920), `drawtext` overlays with the DejaVu
Sans Bold font, a 0.5x slow-motion replay, and a darkened still frame for
the pitch. The original trailer audio runs under the hook; the slow-motion
replay and the pitch are silent.

## Upload (done by Dani from his own YouTube channel)

- Publish **Public** (not unlisted, not private), after the bounty opened
  (20 Nov 2026 08:00 WIB) and before the deadline (23 Nov 2026 08:00 WIB).
- Suggested title: `This GTA 6 Jet Ski Jump Is Unreal #GTA6 #Shorts`
- Description — the middle line must be word for word:

  ```
  This GTA 6 jet ski jump is unreal — Vice City is BACK.

  Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

  Play code: <your make.fun play code for this bounty>

  Want to earn money making clips like this with AI? Check out make.fun: https://make.fun/bounty/gta6-clipper-01

  #GTA6 #GrandTheftAutoVI #ViceCity #Shorts #RockstarGames
  ```

- After the upload, copy the video's address (Share → Copy) into
  `VIDEO.json` at the root of this repo, replacing the placeholder.

## The entry program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from
`MAKEFUN_BOT_DIR` (default `/bot`) to `MAKEFUN_OUTPUT_DIR` (default
`/output`), after checking the URL is a YouTube video address
(`youtube.com/shorts/`, `youtube.com/watch?v=` or `youtu.be/`). It prints
nothing on success and exits non-zero on a bad or missing file.

Test it the way the grader does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

then check `out/VIDEO.json`.

## License

MIT — see `LICENSE`.
