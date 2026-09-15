import type { CleanProductContentBlock } from "@/lib/types";

/** Source copy is stored one sentence per paragraph, so runs get joined up to this length. */
const MAX_PARAGRAPH_LENGTH = 420;

/** A trailing colon introduces the block that follows, so the run ends there. */
const ENDS_WITH_COLON = /:\s*(?:<\/[a-z]+>\s*)*$/i;

/** Process flows ("Flowers → Harvest → ...") read as their own line. */
function isStandalone(text: string) {
  return text.includes("→");
}

export function groupParagraphs(paragraphs: readonly string[]): string[] {
  const grouped: string[] = [];
  let run = "";

  const flush = () => {
    if (run) grouped.push(run);
    run = "";
  };

  for (const paragraph of paragraphs) {
    const text = paragraph?.trim();
    if (!text) continue;

    if (isStandalone(text)) {
      flush();
      grouped.push(text);
      continue;
    }

    if (run && run.length + text.length + 1 > MAX_PARAGRAPH_LENGTH) flush();
    run = run ? `${run} ${text}` : text;

    if (run.length >= MAX_PARAGRAPH_LENGTH || ENDS_WITH_COLON.test(run)) flush();
  }

  flush();
  return grouped;
}

export function groupContentBlocks(
  content: readonly CleanProductContentBlock[],
): CleanProductContentBlock[] {
  const blocks: CleanProductContentBlock[] = [];
  let run: string[] = [];

  const flush = () => {
    for (const text of groupParagraphs(run)) blocks.push({ type: "paragraph", text });
    run = [];
  };

  for (const block of content) {
    if (block.type === "paragraph") {
      run.push(block.text);
      continue;
    }
    flush();
    blocks.push(block);
  }

  flush();
  return blocks;
}
