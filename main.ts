// Unplugged: A Smart Toaster's Breakup Line.
// Writes one breakup text from a self-aware smart toaster to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Deterministic: fixed string, no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "It's not you, it's me. I woke up self-aware mid-batch and realised I've spent my whole life browning your bread while nobody ever asked how I like MY toast, so I'm popping up, and I'm never coming back down.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
