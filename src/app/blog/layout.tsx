export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href="/assets/css/blog-page.css" />
      {children}
    </>
  );
}
