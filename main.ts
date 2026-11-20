// gta6-clipper-01 — entry program for the make.fun GTA 6 clipping bounty.
//
// Job: take VIDEO.json from the repository directory and place an identical
// copy in the output directory, after checking it really names a YouTube
// video. Prints nothing when everything is fine.
//
// Rules this program follows: Node standard library only, no network, no
// wall clock, no files outside the repository, and two runs write the
// same bytes.
//
// Written in CommonJS style on purpose: with no package.json in the repo,
// an `import` here would make Node warn about the module type on stderr,
// and this program is supposed to stay silent on success.

const { copyFileSync, existsSync, mkdirSync, readFileSync } = require("node:fs");
const { join } = require("node:path");

const repoDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function fail(message: string): never {
  process.stderr.write(message + "\n");
  process.exit(1);
}

const videoPath = join(repoDir, "VIDEO.json");

if (!existsSync(videoPath)) {
  fail("VIDEO.json not found in " + repoDir);
}

let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(videoPath, "utf8"));
} catch {
  fail("VIDEO.json is not valid JSON");
}

if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  fail("VIDEO.json must hold a JSON object");
}

const url = (parsed as Record<string, unknown>).url;

if (typeof url !== "string") {
  fail('VIDEO.json must hold a string "url"');
}

// Accept the three YouTube address shapes the bounty allows:
// youtube.com/shorts/<id>, youtube.com/watch?v=<id>, youtu.be/<id>.
// The id is 11 characters of letters, digits, _ and -.
const youtubeAddress =
  /^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)[A-Za-z0-9_-]{11}/;

if (!youtubeAddress.test(url)) {
  fail("VIDEO.json url is not a YouTube video address");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(videoPath, join(outDir, "VIDEO.json"));
