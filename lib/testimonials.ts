/**
 * Client testimonials.
 *
 * Rules:
 * - Only entries with `approved: true` are ever rendered.
 * - `projectTag` must match a key in PROJECT_TAGS, otherwise the entry is skipped.
 * - Entries that still contain a bracketed placeholder (e.g. "[CLIENT NAME]")
 *   in a visible field are skipped even if approved, so drafts never leak.
 */

export interface Testimonial {
	id: string;
	quote: string;
	name: string;
	role: string;
	company: string;
	projectTag: string;
	linkedinUrl?: string;
	approved: boolean;
}

/**
 * Allowed project tags and where their chip links to.
 * Real project pages link to /projects/<slug>. Tags without a project page
 * link to the matching Services section instead.
 */
export const PROJECT_TAGS: Record<string, string> = {
	"HRMS Cloud": "/projects/hrms-beta",
	"n8n Automation Suite": "/projects/n8n-automation",
	"AdsPower Login Automation": "/projects/google-adspower-login",
	"Web scraping & proxy infrastructure": "/services/scraping",
	"Backend & automation engineering": "/services#backend-systems",
};

export const TESTIMONIALS: Testimonial[] = [
	{
		id: "scrapeops-scraping",
		quote:
			"Irtaza picked up our scraping work fast and didn't need hand-holding. When sites changed or proxies started failing, he usually had a fix in before we'd even raised it. Solid engineer, easy to work with.",
		name: "[CLIENT NAME]",
		role: "[ROLE]",
		company: "ScrapeOps",
		projectTag: "Web scraping & proxy infrastructure",
		approved: false,
	},
	{
		id: "jumpermedia-n8n",
		quote:
			"We came to Irtaza with a bunch of manual work our team was doing every day. He turned it into n8n workflows that just run, and set up monitoring so we know when something breaks. Saved us a lot of hours.",
		name: "[CLIENT NAME]",
		role: "[ROLE]",
		company: "Jumpermedia",
		projectTag: "n8n Automation Suite",
		approved: false,
	},
	{
		id: "saleshoney-backend",
		quote:
			"Irtaza is the kind of engineer you can give a vague problem to and get back something clean and working. He asks the right questions up front and the code still holds up months later.",
		name: "[CLIENT NAME]",
		role: "[ROLE]",
		company: "Saleshoney",
		projectTag: "Backend & automation engineering",
		approved: false,
	},
	{
		id: "adspower-automation",
		quote:
			"We needed browser automation that could run at scale without falling over. Irtaza built an API around AdsPower with geo-matched proxies and central state management, and it's been reliable since launch.",
		name: "[CLIENT NAME]",
		role: "[ROLE]",
		company: "[CLIENT COMPANY]",
		projectTag: "AdsPower Login Automation",
		approved: false,
	},
];

const PLACEHOLDER = /\[[^\]]+\]/;

function isRenderable(t: Testimonial): boolean {
	if (!t.approved) return false;
	if (!(t.projectTag in PROJECT_TAGS)) return false;
	return ![t.quote, t.name, t.role, t.company].some((v) =>
		PLACEHOLDER.test(v),
	);
}

/** Testimonials that are approved, correctly tagged and free of placeholders. */
export function getApprovedTestimonials(): Testimonial[] {
	return TESTIMONIALS.filter(isRenderable);
}

/** Link target for a testimonial's project chip. */
export function projectTagHref(tag: string): string | undefined {
	return PROJECT_TAGS[tag];
}
