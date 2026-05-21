import { SITE_URL, SITE_NAME } from "./metadata";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export interface FaqItem {
	question: string;
	answer: string;
}

/** Person schema for Irtaza Hussain. */
export function personJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		"@id": PERSON_ID,
		name: SITE_NAME,
		url: SITE_URL,
		jobTitle: "Senior Software Engineer",
		worksFor: [
			{
				"@type": "Organization",
				name: "ScrapeOps",
				url: "https://scrapeops.io",
			},
			{
				"@type": "Organization",
				name: "Softekton",
			},
		],
		sameAs: [
			"https://github.com/irtazahussain1",
			"https://www.linkedin.com/in/mihussain1/",
			"https://twitter.com/irtazahussain9",
		],
		knowsAbout: [
			"Backend engineering",
			"Full-stack development",
			"Cloud infrastructure",
			"AI integration",
			"Web scraping",
			"Go",
			"Python",
			"Node.js",
			"DevOps",
		],
	};
}

/** WebSite schema with search action placeholder. */
export function websiteJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": WEBSITE_ID,
		name: SITE_NAME,
		url: SITE_URL,
		description:
			"Portfolio of Irtaza Hussain: software engineer, projects, and services.",
		author: { "@id": PERSON_ID },
	};
}

/** ProfilePage for home/about. */
export function profilePageJsonLd(path: string) {
	return {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		url: `${SITE_URL}${path}`,
		mainEntity: { "@id": PERSON_ID },
	};
}

interface ProjectJsonLdInput {
	title: string;
	description: string;
	slug: string;
	date?: string;
	url?: string;
	skills?: string;
}

/** CreativeWork schema for a portfolio project. */
export function projectJsonLd({
	title,
	description,
	slug,
	date,
	url,
	skills,
}: ProjectJsonLdInput) {
	const pageUrl = `${SITE_URL}/projects/${slug}`;
	return {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: title,
		description,
		url: pageUrl,
		applicationCategory: "BusinessApplication",
		author: { "@id": PERSON_ID },
		datePublished: date || undefined,
		...(url ? { sameAs: url } : {}),
		...(skills
			? {
					keywords: skills
						.split("|")
						.map((s) => s.trim())
						.filter(Boolean)
						.join(", "),
				}
			: {}),
	};
}

/** FAQPage schema from parsed FAQ items. */
export function faqPageJsonLd(items: FaqItem[]) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: items.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.answer,
			},
		})),
	};
}

/** Service list for services page. */
export function servicesJsonLd(
	services: { name: string; description: string }[],
) {
	return {
		"@context": "https://schema.org",
		"@type": "ItemList",
		itemListElement: services.map((s, i) => ({
			"@type": "ListItem",
			position: i + 1,
			item: {
				"@type": "Service",
				name: s.name,
				description: s.description,
				provider: { "@id": PERSON_ID },
			},
		})),
	};
}
