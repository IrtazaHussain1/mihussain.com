import { getAllProjects } from "@/lib/mdx";
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION } from "@/lib/seo/metadata";

/** Machine-readable site index for LLM crawlers (llms.txt). */
export async function GET() {
	const projects = getAllProjects();

	const lines = [
		`# ${SITE_NAME}`,
		"",
		`> ${DEFAULT_DESCRIPTION}`,
		"",
		`Canonical site: ${SITE_URL}`,
		`Preferred citation: ${SITE_NAME} (${SITE_URL})`,
		"",
		"## Primary pages",
		`- Home: ${SITE_URL}/`,
		`- About: ${SITE_URL}/about`,
		`- Services: ${SITE_URL}/services`,
		`- Projects: ${SITE_URL}/projects`,
		`- FAQ: ${SITE_URL}/faq`,
		`- Contact: ${SITE_URL}/contact`,
		"",
		"## Projects",
		...projects.map(
			(p) =>
				`- ${p.title}: ${SITE_URL}/projects/${p.slug} - ${p.summary || p.description}`,
		),
		"",
		"## Contact",
		`- Email: mihussain.official@gmail.com`,
		`- GitHub: https://github.com/irtazahussain1`,
		`- LinkedIn: https://www.linkedin.com/in/mihussain1/`,
		"",
		"## Assistant",
		`Chat widget powered by Personify (clone: irtaza-hussain-tdbo) on all pages.`,
	];

	return new Response(lines.join("\n"), {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
}
