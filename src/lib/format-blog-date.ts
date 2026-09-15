function ordinal(day: number) {
  if (day >= 11 && day <= 13) return `${day}th`;
  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
}

export function formatBlogDate(iso: string) {
  const d = new Date(iso);
  const day = d.getUTCDate();
  const month = d.toLocaleString("en-GB", { month: "long", timeZone: "UTC" });
  const year = d.getUTCFullYear();
  return `${ordinal(day)} ${month} ${year}`;
}

export function getBlogDateLabel(
  publishedDateDisplay: string | null | undefined,
  publishedAt: string,
) {
  if (publishedDateDisplay) return publishedDateDisplay;
  return formatBlogDate(publishedAt);
}

/** Live tag archive uses "27 May" under each post image */
export function formatTagArchiveDate(display: string, iso?: string) {
  const match = display.match(/^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)/i);
  if (match) return `${match[1]} ${match[2]}`;

  if (iso) {
    const d = new Date(iso);
    const day = d.getUTCDate();
    const month = d.toLocaleString("en-GB", { month: "long", timeZone: "UTC" });
    return `${day} ${month}`;
  }

  return display;
}
