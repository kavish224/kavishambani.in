import { redirect } from "next/navigation";

// Dashboard has moved to the homepage — redirect to avoid duplicate content
export default function PortfolioPage() {
  redirect("/");
}
