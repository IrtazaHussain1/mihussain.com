import type { Metadata } from "next";
import { FooterPrompt } from "../components/footer-prompt";
import { StudioPlaceholder } from "../components/studio-placeholder";
import { JsonLd } from "../components/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { profilePageJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = buildPageMetadata({
	title: "About",
	description:
		"Irtaza Hussain is a senior software engineer at ScrapeOps and founder of Softekton. Seven years building backend systems, full-stack products, web scraping, and cloud delivery.",
	path: "/about",
});

const VOCABULARY = [
	{
		h: "Backend",
		items: [
			"Go · Gin",
			"Python · Django",
			"Node.js · Express",
			"FastAPI",
			"Postgres · MySQL",
			"MongoDB",
			"Redis · Elasticsearch",
		],
	},
	{
		h: "AI & scraping",
		items: [
			"OpenAI SDKs",
			"LLM parsers",
			"evals · MCP",
			"Scrapy",
			"Selenium",
			"RAG chatbots",
		],
	},
	{
		h: "Frontend",
		items: [
			"TypeScript",
			"React · Next.js",
			"Angular",
			"GraphQL",
			"Storybook",
			"Redux",
		],
	},
	{
		h: "Infra & IoT",
		items: [
			"AWS · Azure",
			"Docker",
			"Grafana",
			"InfluxDB",
			"BullMQ · CI/CD",
			"bash · telemetry",
		],
	},
] as const;

const MILESTONES = [
	[
		"2024",
		"Joined ScrapeOps as Senior Software Engineer, working on Go proxy and parser services, Scrapy monitoring, and AI scraper tooling. Founded Softekton and contributed to Saleshoney stability, outreach flows, and legacy refactors.",
	],
	[
		"2023",
		"Worked on Omnidots through Entspos: React and GraphQL for notifications, Elasticsearch testing, and faster large-scale downloads.",
	],
	[
		"2022",
		"Promoted to Senior at Strategic Systems International. Built Python and bash device telemetry, Grafana and Angular admin UIs, and AWS/Azure deployment pipelines.",
	],
	[
		"2020",
		"Led PermisPop v2 at Falcon Consulting with a team of three: web and mobile booking, maps, chat, and scheduling.",
	],
	[
		"2019",
		"Graduated from COMSATS and shipped Smart Learning as my final-year project using Django, ML, and Plotly analytics.",
	],
	[
		"2018",
		"Started at Entspos building full-stack apps with Django and React, working directly with clients.",
	],
] as const;

export default function AboutPage() {
	return (
		<div className="studio-page">
			<JsonLd data={profilePageJsonLd("/about")} />
			<div className="eyebrow mb-6">§&nbsp;&nbsp;02 / About</div>

			<section className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
				<div>
					<h1
						className="display mb-7"
						style={{ fontSize: "clamp(48px, 6.4vw, 96px)", margin: 0 }}
					>
						I&apos;m Irtaza Hussain,
						<br />
						<em>senior</em> engineer,
						<br />
						platform builder.
					</h1>
					<p
						className="m-0 max-w-[560px] text-[17px] leading-relaxed"
						style={{ color: "var(--fg-mute)" }}
					>
						I&apos;m based in Lahore and work remotely with teams worldwide. I
						graduated in Computer Science from COMSATS University Islamabad and
						have spent seven years shipping production software: marketplaces, IoT
						telemetry, B2B SaaS, and web scraping at scale.
					</p>
					<p
						className="mt-5 max-w-[560px] text-[17px] leading-relaxed"
						style={{ color: "var(--fg-mute)" }}
					>
						At{" "}
						<a
							href="https://scrapeops.io"
							target="_blank"
							rel="noopener noreferrer"
							className="underline"
							style={{ color: "var(--fg)" }}
						>
							ScrapeOps
						</a>{" "}
						I work on Go proxy and parser services, Scrapy monitoring, and
						AI-assisted scraping tooling. Through Softekton I take on selective
						freelance work: backend systems, full-stack delivery, automation, and
						cloud projects for founders and platform teams.
					</p>
					<p
						className="mt-5 max-w-[560px] text-[17px] leading-relaxed"
						style={{ color: "var(--fg-mute)" }}
					>
						Recent work includes PermisPop, Omnidots, Power Insight, Saleshoney,
						and platforms at Strategic Systems International. I focus on
						architecture teams can extend, code that is straightforward to change,
						and the operational side of shipping (monitoring, migrations, and
						handoffs) so systems keep running long after launch.
					</p>
				</div>

				<StudioPlaceholder
					tag="PORTRAIT · 4×5"
					label="Studio portrait, monochrome"
					tall
				/>
			</section>

			<section className="mt-24 lg:mt-[100px]">
				<div className="eyebrow mb-6">§&nbsp;&nbsp;Working vocabulary</div>
				<div
					className="grid grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-4"
					style={{ borderColor: "var(--line)" }}
				>
					{VOCABULARY.map((c, idx) => (
						<div
							key={c.h}
							className="border-b border-r p-5 sm:border-b lg:border-b-0"
							style={{
								borderColor: "var(--line)",
								borderRightWidth:
									idx === VOCABULARY.length - 1 ? 0 : undefined,
							}}
						>
							<div
								className="mono mb-4 text-[10.5px] uppercase tracking-wide"
								style={{ color: "var(--fg-dim)" }}
							>
								↳ {c.h}
							</div>
							<ul className="m-0 list-none p-0">
								{c.items.map((it) => (
									<li
										key={it}
										className="mono border-b border-dashed py-1.5 text-[13px]"
										style={{
											borderColor: "var(--line-soft)",
											color: "var(--fg-mute)",
										}}
									>
										{it}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			<section className="mt-24 lg:mt-[100px]">
				<div className="eyebrow mb-6">§&nbsp;&nbsp;Selected milestones</div>
				<div>
					{MILESTONES.map(([yr, what]) => (
						<div
							key={yr}
							className="grid gap-6 border-t py-5 sm:grid-cols-[120px_1fr] sm:gap-8"
							style={{ borderColor: "var(--line-soft)" }}
						>
							<span
								className="display text-[32px]"
								style={{ color: "var(--fg-mute)" }}
							>
								{yr}
							</span>
							<p className="m-0 max-w-[700px] text-[17px] leading-relaxed">
								{what}
							</p>
						</div>
					))}
					<div
						className="border-t"
						style={{ borderColor: "var(--line-soft)" }}
					/>
				</div>
			</section>

			<FooterPrompt />
		</div>
	);
}
