// Funniest Cat Voicemail Greeting — program/v1 entry.
// Writes one greeting line (<= 120 chars) to /output/entry.txt. Node 22, stdlib only.

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const GREETING =
  "You've reached Mittens. I saw you touch the carrier, so I live inside the wall now. Leave a message after the hiss.";

const OUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, GREETING + "\n", "utf8");

// Self-check: read the artifact back and fail loudly if the gate could not pass.
const written = readFileSync(OUT, "utf8");
const line = written.replace(/\n$/, "");
if (line !== GREETING || line.length < 1 || line.length > 120) {
  console.error("entry.txt failed the gate self-check");
  process.exit(1);
}
console.log(`wrote ${line.length} chars to ${OUT}`);
