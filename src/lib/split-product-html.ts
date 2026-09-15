const WHY_HETAKSH_SECTION =
  /<section[^>]*class="[^"]*why-choose-one-2[^"]*"[^>]*>[\s\S]*?<\/section>/i;

export function splitProductHtml(html: string): { before: string; after: string } {
  const match = html.match(WHY_HETAKSH_SECTION);
  if (!match || match.index === undefined) {
    return { before: html, after: "" };
  }

  return {
    before: html.slice(0, match.index),
    after: html.slice(match.index + match[0].length),
  };
}
