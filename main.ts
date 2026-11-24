// Two-sentence horror entry for make.fun.
// The program emits one fixed story: a parent learns from a teacher that
// their son has not been at school all week, then realises they have been
// driving him there every morning. The dread sits in the gap between the
// two sentences — who, or what, has been riding along in the car?

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY =
  "My son's teacher called to say he has been absent all week. " +
  "I have been driving him to school every morning.";

function main(): void {
  // The grader mounts its own /output directory, so create it if missing
  // and write the story there verbatim — nothing else, no trailing newline.
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
}

main();
