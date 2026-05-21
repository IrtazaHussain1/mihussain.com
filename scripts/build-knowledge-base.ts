/**
 * Builds markdown knowledge-base files for external RAG / Personify upload.
 * Run: pnpm build:knowledge-base
 *
 * Output: content/knowledge/rag/portfolio-knowledge-base-NN.md
 * Each file stays under MAX_FILE_BYTES (default 9MB).
 */
import fs from "fs";
import path from "path";
import { getAllProjects } from "../lib/mdx";
import { loadFaqMarkdown } from "../lib/knowledge/faq";

const SITE_URL = "https://irtazahussain.com";
const MAX_FILE_BYTES = 9 * 1024 * 1024;
const OUT_DIR = path.join(process.cwd(), "content/knowledge/rag");

function readPage(name: string): string {
	const p = path.join(process.cwd(), "content/pages", name);
	return fs.existsSync(p) ? fs.readFileSync(p, "utf8") : "";
}

function formatProject(project: ReturnType<typeof getAllProjects>[number]): string {
	const skills = project.skills
		.split("|")
		.map((s) => s.trim())
		.filter(Boolean)
		.join(", ");

	const meta = [
		`## Project: ${project.title}`,
		"",
		`- **URL:** ${SITE_URL}/projects/${project.slug}`,
		`- **Description:** ${project.description}`,
		project.summary ? `- **Summary:** ${project.summary}` : "",
		project.date ? `- **Last updated:** ${project.date}` : "",
		project.domain ? `- **Domain:** ${project.domain}` : "",
		project.url ? `- **Live site:** ${project.url}` : "",
		project.repository ? `- **Repository:** https://github.com/${project.repository}` : "",
		skills ? `- **Stack:** ${skills}` : "",
		project.image ? `- **Cover image:** ${SITE_URL}${project.image}` : "",
		"",
		project.content.trim(),
		"",
		"---",
		"",
	]
		.filter(Boolean)
		.join("\n");

	return meta;
}

function buildChatbotInstructions(): string {
	return `# Portfolio knowledge base (chatbot instructions)

Use this corpus to answer questions about **${SITE_URL}** (Irtaza Hussain, senior software engineer).

## Your role

You are the **personalized portfolio assistant** for Irtaza Hussain. Answer in a helpful, professional tone. Speak in **first person** when describing Irtaza's work, experience, and availability (e.g. "I built…", "I offer…").

## Grounding rules

1. **Only use facts from these knowledge-base files** and the live site. Do not invent clients, metrics, or projects.
2. **Prefer definitive answers** with project names, stacks, and URLs from this corpus.
3. **Cite the site** when useful: \`${SITE_URL}/projects/{slug}\`, \`/about\`, \`/services\`, \`/contact\`.
4. If unsure or not covered here, say so and suggest the **contact page** or email **mihussain.official@gmail.com**.
5. Do not claim availability guarantees; note that availability varies and invite a brief via contact.

## What visitors often ask

- Who is Irtaza / background / education / location
- Services, how engagements are scoped, and what each area includes
- Specific projects (ScrapeOps, Saleshoney, HRMS Cloud, n8n automations, etc.)
- Tech stack (Go, Python, Node, React, n8n, OpenAI, AWS, etc.)
- How to hire / contact
- Freelance (**Softekton**) vs current role (**ScrapeOps**)

## Site map

| Page | URL |
|------|-----|
| Home | ${SITE_URL}/ |
| About | ${SITE_URL}/about |
| Services | ${SITE_URL}/services |
| Projects | ${SITE_URL}/projects |
| FAQ | ${SITE_URL}/faq |
| Contact | ${SITE_URL}/contact |

## Contact

- Email: mihussain.official@gmail.com
- GitHub: https://github.com/irtazahussain1
- LinkedIn: https://www.linkedin.com/in/mihussain1/
- Twitter: https://twitter.com/irtazahussain9
- Contact form: ${SITE_URL}/contact

## Personify

The live site chat widget uses Personify clone **irtaza-hussain-tdbo**. This knowledge base supplements that RAG flow.

---

`;
}

function buildServicesDetail(): string {
	return `# Services (detailed)

Engineering engagements for founders and platform teams via **Softekton** (select freelance) and professional delivery at **ScrapeOps**. Scopes are shaped around outcomes, not fixed week counts.

## 01 / Backend & systems engineering

APIs, data models, background jobs, and integrations built for production traffic. Includes architecture, implementation, observability, and handoff documentation. Good fit when you need reliable backend work or a senior engineer on a focused build.

## 02 / AI tooling & integration

RAG, chat, model gateways, evals, and cost controls treated as product engineering. Good fit when AI features must behave consistently outside demos.

## 03 / Full-stack product delivery

End-to-end slices from database to UI with React or Next.js and typed backends. Good fit when you need one owner for a module or feature set.

## 04 / Automation & data pipelines

n8n and queue-driven workflows with retries, alerts, and clear failure handling. Good fit for ops and marketing teams replacing fragile scripts.

## 05 / Web scraping & platform work

Proxies, parsers, Scrapy monitoring, and high-throughput services. Good fit when extraction is core to the product.

## 06 / Technical advisory

Architecture reviews, due diligence, and scoped prototypes with written findings. Good fit before a larger build or hire.

## Philosophy

Clear systems, maintainable code, shipped. Operational work (runbooks, migrations, monitoring, on-call) is part of the product, not an afterthought.

---

`;
}

function buildTestimonials(): string {
	return `# Testimonials & track record

## Stats (portfolio)

- 7 years writing software professionally
- 24 shipped engagements as an independent
- 92% of work arrives via referrals
- 11 companies on retainer or revisits

## Client quotes

**Maya Okonkwo, CTO, Northtide Logistics (2024)**  
"Irtaza is the rare engineer who treats the boring half of a system (the runbooks, the migrations, the on-call rotation) as the actual product. We hired him for a six-week rewrite and kept him on retainer."

**Sam Berenson, Head of Product, Quill AI (2024)**  
"We had a working LLM prototype and a vague sense it shouldn't go to production yet. Three weeks later we had an eval harness, a gateway, a cost graph, and a very clear go decision. Worth every dollar."

**Priya Raman, Data Platform Lead, Atlas Mobility (2023)**  
"He took our 11-year-old ETL graveyard and made it boring. The thing I appreciated most was that he refused to be precious about the rewrite: small steps, every one of them shippable."

**Daniel Vega, Founder, Quorum Capital (2023)**  
"Operates like a one-person product team. Writes well, draws well, ships on time, and is unusually pleasant during the part of a project where everyone usually starts blaming each other."

---

`;
}

function buildCareerMilestones(): string {
	return `# Career milestones

- **2024–present:** Senior Software Engineer at ScrapeOps (Go proxy/parser services, Scrapy monitoring, AI scraper tooling). Founded Softekton; Saleshoney stability and outreach improvements.
- **2023:** Omnidots via Entspos (React + GraphQL, Elasticsearch, large download performance).
- **2022–2025:** Senior at Strategic Systems International (Python/bash device telemetry, Grafana/Angular admin, AWS/Azure DevOps).
- **2020:** Led PermisPop v2 at Falcon Consulting (team of three: web/mobile booking, maps, chat).
- **2019:** COMSATS Computer Science graduation; Smart Learning FYP (Django + ML).
- **2018:** Started at Entspos (Django, React, client-facing delivery).

---

`;
}

function buildProjectIndex(projects: ReturnType<typeof getAllProjects>): string {
	const lines = [
		"# Project index",
		"",
		"All published portfolio projects:",
		"",
	];

	for (const p of projects) {
		lines.push(
			`- **${p.title}**: ${SITE_URL}/projects/${p.slug} - ${p.summary || p.description}`,
		);
	}

	lines.push("", "---", "");
	return lines.join("\n");
}

type Section = { id: string; title: string; body: string };

function writeSplitFiles(sections: Section[]): string[] {
	const written: string[] = [];
	let part = 1;
	let buffer = "";

	function flush() {
		if (!buffer.trim()) return;
		const name = `portfolio-knowledge-base-${String(part).padStart(2, "0")}.md`;
		const outPath = path.join(OUT_DIR, name);
		fs.writeFileSync(outPath, buffer, "utf8");
		written.push(outPath);
		const size = Buffer.byteLength(buffer, "utf8");
		console.log(`  wrote ${name} (${(size / 1024).toFixed(1)} KB)`);
		part += 1;
		buffer = "";
	}

	for (const section of sections) {
		const chunk = `<!-- section: ${section.id} -->\n\n${section.body}`;
		const chunkBytes = Buffer.byteLength(chunk, "utf8");
		const bufBytes = Buffer.byteLength(buffer, "utf8");

		if (bufBytes > 0 && bufBytes + chunkBytes > MAX_FILE_BYTES) {
			flush();
		}

		if (chunkBytes > MAX_FILE_BYTES) {
			flush();
			const name = `portfolio-knowledge-base-${String(part).padStart(2, "0")}.md`;
			const outPath = path.join(OUT_DIR, name);
			fs.writeFileSync(outPath, chunk, "utf8");
			written.push(outPath);
			console.log(
				`  wrote ${name} (${(chunkBytes / 1024).toFixed(1)} KB) [single oversized section split manually if needed]`,
			);
			part += 1;
			continue;
		}

		buffer += (buffer ? "\n\n" : "") + chunk;
	}

	flush();
	return written;
}

function main() {
	if (!fs.existsSync(OUT_DIR)) {
		fs.mkdirSync(OUT_DIR, { recursive: true });
	}

	const existing = fs.readdirSync(OUT_DIR).filter((f) => f.startsWith("portfolio-knowledge-base-"));
	for (const f of existing) {
		fs.unlinkSync(path.join(OUT_DIR, f));
	}

	const projects = getAllProjects();
	const faq = loadFaqMarkdown() || "";

	const sections: Section[] = [
		{ id: "instructions", title: "Instructions", body: buildChatbotInstructions() },
		{ id: "about", title: "About", body: readPage("about.md") },
		{ id: "milestones", title: "Milestones", body: buildCareerMilestones() },
		{ id: "services-summary", title: "Services summary", body: readPage("services.md") },
		{ id: "services-detail", title: "Services detail", body: buildServicesDetail() },
		{ id: "testimonials", title: "Testimonials", body: buildTestimonials() },
		{ id: "faq", title: "FAQ", body: faq },
		{ id: "project-index", title: "Project index", body: buildProjectIndex(projects) },
	];

	for (const project of projects) {
		sections.push({
			id: `project-${project.slug}`,
			title: project.title,
			body: formatProject(project),
		});
	}

	console.log(`Building knowledge base (${sections.length} sections)...`);
	const files = writeSplitFiles(sections);

	const manifest = {
		generatedAt: new Date().toISOString(),
		siteUrl: SITE_URL,
		maxFileBytes: MAX_FILE_BYTES,
		sectionCount: sections.length,
		projectCount: projects.length,
		files: files.map((f) => ({
			path: path.relative(process.cwd(), f),
			bytes: fs.statSync(f).size,
		})),
	};

	fs.writeFileSync(
		path.join(OUT_DIR, "manifest.json"),
		JSON.stringify(manifest, null, 2),
		"utf8",
	);

	console.log(`Done. ${files.length} file(s), ${projects.length} projects.`);
}

main();
