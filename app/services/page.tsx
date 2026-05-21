import Link from "next/link";
import type { Metadata } from "next";
import { FooterPrompt } from "../components/footer-prompt";
import { ArrowR } from "../components/arrow-r";
import { JsonLd } from "../components/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { servicesJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = buildPageMetadata({
	title: "Services",
	description:
		"How I work with teams: backend and systems, AI integration, full-stack delivery, automation, scraping platforms, and technical advisory. Practical engineering for founders and platform teams.",
	path: "/services",
});

const SERVICES = [
	{
		n: "01",
		t: "Backend & systems engineering",
		blurb:
			"I design and build APIs, data models, and background work that stay reliable when traffic and scope grow.",
		details: [
			"Greenfield services or careful rewrites of code that has outgrown its first shape.",
			"Postgres, MySQL, MongoDB, Redis, and queue-based jobs wired with clear ownership and error handling.",
			"Integrations with billing, email, auth, and third-party APIs your product already depends on.",
			"Logging, metrics, and runbooks so your team can operate the system without guessing.",
		],
		ideal:
			"Founders who need production-grade backend work, or teams that want a senior engineer embedded on a focused build.",
	},
	{
		n: "02",
		t: "AI tooling & integration",
		blurb:
			"I treat LLM features as product engineering: retrieval, evals, cost control, and behavior you can explain to stakeholders.",
		details: [
			"RAG pipelines and chat experiences grounded in your own docs, APIs, or content.",
			"Prompt and model routing through gateways (including OpenRouter) with fallbacks and limits.",
			"Eval harnesses and test sets so quality does not depend on one manual chat session.",
			"Instrumentation for latency, token use, and failure modes before you scale usage.",
		],
		ideal:
			"Teams adding AI to an existing product who need it to work consistently in production, not only in demos.",
	},
	{
		n: "03",
		t: "Full-stack product delivery",
		blurb:
			"I ship coherent slices from database to UI: one person who can own the vertical and communicate tradeoffs clearly.",
		details: [
			"React or Next.js front ends with typed APIs (Node, Django, or FastAPI depending on fit).",
			"Auth, roles, and multi-tenant patterns where the business rules need to live in one place.",
			"CI, Docker, and deployment paths that match how your team already ships.",
			"Pragmatic test coverage on the paths that break most often in production.",
		],
		ideal:
			"Startups and product teams that need a feature or module delivered end to end without coordinating five vendors.",
	},
	{
		n: "04",
		t: "Automation & data pipelines",
		blurb:
			"I replace brittle scripts with workflows you can see, replay, and fix when something fails at night.",
		details: [
			"n8n, cron, and queue-driven pipelines for content, ops, and internal tooling (see the n8n Automation project).",
			"Idempotent steps, retries, and alerts when a node fails or data drifts.",
			"Sheets, webhooks, OpenAI, CMS, and email tools connected with documented handoffs.",
			"Central error handling so one broken job does not silently poison downstream systems.",
		],
		ideal:
			"Marketing, ops, or data teams tired of unmaintained glue code and unclear failure points.",
	},
	{
		n: "05",
		t: "Web scraping & platform work",
		blurb:
			"I build and extend scraping infrastructure: proxies, parsers, monitoring, and the unglamorous middleware around them.",
		details: [
			"Proxy rotation, geo targeting, and health checks (aligned with work like ScrapeOps and XProxy Tester).",
			"Structured parsers and Scrapy job monitoring with alerts your team can act on.",
			"Go or Node services for high-throughput paths; Django or Express where product APIs fit better.",
			"Docs and operational playbooks so scraping is a managed system, not a folder of scripts.",
		],
		ideal:
			"Data products, growth teams, and platforms where reliable extraction is core to the business.",
	},
	{
		n: "06",
		t: "Technical advisory",
		blurb:
			"Short, direct engagements when you need an experienced second opinion before committing to a build or hire.",
		details: [
			"Architecture reviews and written recommendations you can share with investors or your team.",
			"Due diligence on codebases, infra choices, or vendor integrations.",
			"Scoped prototype spikes to de-risk one decision, not open-ended research.",
			"A single readout call to walk through findings and sensible next steps.",
		],
		ideal:
			"Founders and leads who want clarity on feasibility, cost, and risk before a larger project starts.",
	},
] as const;

export default function ServicesPage() {
	return (
		<div className="studio-page">
			<JsonLd
				data={servicesJsonLd(
					SERVICES.map((s) => ({
						name: s.t,
						description: `${s.blurb} ${s.details.join(" ")}`,
					})),
				)}
			/>
			<header className="mb-16 lg:mb-20">
				<div className="eyebrow mb-6">§&nbsp;&nbsp;04 / Services</div>
				<div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
					<h1
						className="display m-0"
						style={{ fontSize: "clamp(48px, 6.8vw, 104px)" }}
					>
						How we can
						<br />
						<em>work together</em>.
					</h1>
					<p
						className="m-0 max-w-[400px] text-[15px] leading-relaxed"
						style={{ color: "var(--fg-mute)" }}
					>
						Most client work fits one of the areas below. If yours spans a few,
						that is normal. Send a short note on{" "}
						<Link href="/contact" className="underline" style={{ color: "var(--fg)" }}>
							contact
						</Link>{" "}
						and we can shape something realistic around your timeline and team.
					</p>
				</div>
			</header>

			<section style={{ borderTop: "0.5px solid var(--line)" }}>
				{SERVICES.map((s) => (
					<article
						key={s.n}
						className="grid grid-cols-1 gap-8 border-b py-10 lg:grid-cols-[80px_1.2fr_1.3fr] lg:gap-10"
						style={{ borderColor: "var(--line)" }}
					>
						<span
							className="display text-[42px] leading-none"
							style={{ color: "var(--fg-mute)" }}
						>
							{s.n}
						</span>
						<div>
							<h2
								className="display mb-3.5 leading-tight"
								style={{ fontSize: 34, margin: 0 }}
							>
								{s.t}
							</h2>
							<p
								className="m-0 max-w-[520px] text-[15px] leading-relaxed"
								style={{ color: "var(--fg-mute)" }}
							>
								{s.blurb}
							</p>
							<div className="mono dim mt-5 text-[11.5px]">
								GOOD FIT ·{" "}
								<span style={{ color: "var(--fg-mute)" }}>{s.ideal}</span>
							</div>
							<Link
								href="/contact"
								className="btn mt-6 inline-flex !px-3 !py-2 !text-xs"
							>
								Enquire <ArrowR size={12} />
							</Link>
						</div>
						<div>
							<div className="eyebrow mb-3">What this includes</div>
							<ul className="m-0 list-none space-y-0 p-0">
								{s.details.map((line) => (
									<li
										key={line}
										className="border-b border-dashed py-2.5 text-[14px] leading-relaxed"
										style={{
											borderColor: "var(--line-soft)",
											color: "var(--fg-mute)",
										}}
									>
										{line}
									</li>
								))}
							</ul>
						</div>
					</article>
				))}
			</section>

			<FooterPrompt />
		</div>
	);
}
