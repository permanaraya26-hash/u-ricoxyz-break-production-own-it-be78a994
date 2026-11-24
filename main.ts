// Break Production, Own It — make.fun bounty entry.
// Writes one single-line confession to /output/entry.txt.
// Deterministic: no input, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I dropped the users table. Nobody has complained since.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
