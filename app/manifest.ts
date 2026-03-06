import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Safe",
    short_name: "Safe",
    description:
      "Safety check-ins for trusted contacts with one-tap statuses, notifications, and privacy-first location sharing.",
    start_url: "/",
    display: "standalone",
    background_color: "#08121a",
    theme_color: "#08121a",
    lang: "en",
    categories: ["utilities", "communication"]
  };
}
