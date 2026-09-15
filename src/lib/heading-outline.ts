export type OutlineTag = "h2" | "h3" | "h4" | "h5";

/** SEO outline: 1× h1 (caller), at most 2× h2, 3× h3, then h4+. */
export function createOutlineHeadings() {
  let h2 = 0;
  let h3 = 0;

  function next(): OutlineTag {
    if (h2 < 2) {
      h2 += 1;
      return "h2";
    }
    if (h3 < 3) {
      h3 += 1;
      return "h3";
    }
    return "h4";
  }

  function childOf(parent: OutlineTag): OutlineTag {
    if (parent === "h2") {
      if (h3 < 3) {
        h3 += 1;
        return "h3";
      }
      return "h4";
    }
    if (parent === "h3") return "h4";
    return "h5";
  }

  return { next, childOf };
}
