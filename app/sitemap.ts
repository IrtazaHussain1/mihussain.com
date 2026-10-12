import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/mdx";
import { SITE_URL } from "@/lib/seo/metadata";
import { getApprovedTestimonials } from "@/lib/testimonials";

/** Dynamic sitemap for static routes and published projects. */
export default function sitemap(): MetadataRoute.Sitemap {
	const staticRoutes = [
		"",
		"/about",
		"/services",
		"/services/scraping",
		"/projects",
		"/contact",
		...(getApprovedTestimonials().length > 0 ? ["/testimonials"] : []),
		"/faq",
	].map((path) => ({
		url: `${SITE_URL}${path}`,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: path === "" ? 1 : 0.8,
	}));

	const projectRoutes = getAllProjects().map((p) => ({
		url: `${SITE_URL}/projects/${p.slug}`,
		lastModified: p.date ? new Date(p.date) : new Date(),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	return [...staticRoutes, ...projectRoutes];
}
