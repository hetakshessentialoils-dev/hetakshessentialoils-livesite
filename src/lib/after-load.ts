/** Run fn once the page has fully loaded, keeping non-critical work out of the LCP window. Returns cleanup. */
export function afterLoad(fn: () => void): () => void {
  if (document.readyState === "complete") {
    fn();
    return () => {};
  }
  window.addEventListener("load", fn, { once: true });
  return () => window.removeEventListener("load", fn);
}
