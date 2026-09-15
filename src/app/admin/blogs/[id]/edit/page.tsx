import { AdminBlogForm } from "@/components/admin/AdminBlogForm";

export default async function AdminEditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <AdminBlogForm mode="edit" blogId={id} />;
}
