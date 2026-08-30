import type { MetadataRoute } from "next";
import { buildAbsoluteUrl } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: buildAbsoluteUrl("/"),
    },
  ];
}
