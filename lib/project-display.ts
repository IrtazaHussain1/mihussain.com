import type { Project } from "./mdx";

/** Stable pseudo-hue for placeholder art from slug. */
export function hueFromSlug(slug: string): number {
	let h = 0;
	for (let i = 0; i < slug.length; i++) {
		h = (h + slug.charCodeAt(i) * 17) % 360;
	}
	return 40 + (h % 320);
}

/** Archive / featured: domain column with MDX fallback. */
export function formatProjectDomain(p: Project): string {
	if (p.domain) return p.domain;
	const first = p.skills?.split("|")[0]?.trim();
	return first || "N/A";
}

/** Archive / featured: result column with MDX fallback. */
export function formatProjectResult(p: Project): string {
	if (p.result) return p.result;
	if (p.url) return "Live";
	if (p.repository) return "Source";
	const words = (p.description || "").split(/\s+/).slice(0, 8).join(" ");
	if (!words) return "N/A";
	return words.length > 48 ? `${words.slice(0, 45)}…` : words;
}

/** Year from ISO date or N/A when missing. */
export function formatProjectYear(p: { date?: string }): string {
	if (!p.date) return "N/A";
	const y = new Date(p.date).getFullYear();
	return Number.isFinite(y) ? String(y) : "N/A";
}
