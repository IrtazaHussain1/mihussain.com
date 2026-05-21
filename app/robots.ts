import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/metadata";

/** Robots.txt: allows crawlers and points to sitemap and llms.txt. */
export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/api/"],
		},
		sitemap: `${SITE_URL}/sitemap.xml`,
		host: SITE_URL,
	};
}
