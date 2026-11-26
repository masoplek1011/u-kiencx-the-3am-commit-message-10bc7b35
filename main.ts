import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const line = "3am: fixed the type error by deleting every file that used the type, tests pass";
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
