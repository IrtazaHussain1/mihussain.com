import Link from "next/link";
import type { Metadata } from "next";
import { FooterPrompt } from "../../components/footer-prompt";
import { ArrowR } from "../../components/arrow-r";
import { JsonLd } from "../../components/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { servicesJsonLd } from "@/lib/seo/json-ld";

const PAGE_TITLE = "Web Scraping Developer & Data Pipelines";
const PAGE_DESCRIPTION =
	"Hire a web scraping developer and data pipeline engineer. Scrapers with proxy rotation, scheduled runs, monitoring and browser automation, delivered as CSV, Sheets, an API or Postgres.";

export const metadata: Metadata = buildPageMetadata({
	title: PAGE_TITLE,
	description: PAGE_DESCRIPTION,
	path: "/services/scraping",
});

const AUDIENCE = [
	"E-commerce brands tracking prices, stock and catalogues",
	"Data-driven startups that need a steady feed to build on",
	"Marketing and SEO teams collecting search and competitor data",
	"Agencies that need white-label scraping help for their clients",
] as const;

const DELIVERABLES = [
	[
		"Clean data feed",
		"Delivered the way you already work: CSV, Google Sheets, an API or Postgres.",
	],
	[
		"Proxy rotation",
		"Rotating proxies matched to the target site, with retries when requests fail.",
	],
	[
		"Scheduled runs",
		"Hourly, daily or weekly, so the data is fresh without anyone pressing a button.",
	],
	[
		"Monitoring and alerts",
		"You hear about it when a site changes or a run fails, before stale data reaches you.",
	],
	[
		"Documentation",
		"How the scraper works, how to run it and what to do when something breaks.",
	],
	[
		"Handover to your repo",
		"The code lives in your repository. You own it, not me.",
	],
] as const;

const PACKAGES = [
	{
		name: "Scraper Sprint",
		line: "One target site, one clean data feed, built and handed over in a short fixed scope.",
	},
	{
		name: "Data Pipeline Build",
		line: "Several sources, proxies, schedules and monitoring, feeding your database or dashboard.",
	},
	{
		name: "Scraper Care retainer",
		line: "Ongoing fixes when sites change, proxy upkeep and run monitoring, month to month.",
	},
] as const;

const WONT_DO = [
	"Account farming",
	"Ticket or sneaker bots",
	"Ad fraud or click fraud",
	"Scraping behind logins without the site owner's or account holder's permission",
	"Collecting personal data in breach of GDPR or similar laws",
] as const;

export default function ScrapingServicePage() {
	return (
		<div className="studio-page">
			<JsonLd
				data={servicesJsonLd(
					PACKAGES.map((p) => ({ name: p.name, description: p.line })),
				)}
			/>

			<header className="mb-16 lg:mb-20">
				<div className="eyebrow mb-6">
					§&nbsp;&nbsp;
					<Link href="/services" className="hover:underline">
						Services
					</Link>{" "}
					/ Scraping &amp; data pipelines
				</div>
				<div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
					<h1
						className="display m-0"
						style={{ fontSize: "clamp(48px, 6.8vw, 104px)" }}
					>
						Scraping &amp;
						<br />
						<em>data pipelines</em>.
					</h1>
					<div>
						<p
							className="m-0 max-w-[440px] text-[15px] leading-relaxed"
							style={{ color: "var(--fg-mute)" }}
						>
							I build scrapers and data pipelines that run on a schedule, rotate
							proxies, tell you when something breaks, and hand you clean data
							you can use. Browser automation included where a plain HTTP
							scraper won&apos;t do.
						</p>
						<div className="mt-6 flex flex-wrap gap-3">
							<Link href="/contact" className="btn primary">
								Start a project <ArrowR />
							</Link>
						</div>
					</div>
				</div>
			</header>

			<section
				aria-labelledby="who-heading"
				className="grid grid-cols-1 gap-8 border-t py-12 lg:grid-cols-[1fr_1.4fr]"
				style={{ borderColor: "var(--line)" }}
			>
				<h2
					id="who-heading"
					className="display m-0"
					style={{ fontSize: "clamp(30px, 3.2vw, 44px)" }}
				>
					Who it&apos;s <em>for</em>
				</h2>
				<ul className="m-0 list-none p-0">
					{AUDIENCE.map((a) => (
						<li
							key={a}
							className="border-b border-dashed py-3 text-[15px] leading-relaxed"
							style={{ borderColor: "var(--line-soft)", color: "var(--fg-mute)" }}
						>
							{a}
						</li>
					))}
				</ul>
			</section>

			<section
				aria-labelledby="get-heading"
				className="border-t py-12"
				style={{ borderColor: "var(--line)" }}
			>
				<h2
					id="get-heading"
					className="display mb-8 mt-0"
					style={{ fontSize: "clamp(30px, 3.2vw, 44px)" }}
				>
					What you <em>get</em>
				</h2>
				<ul
					className="m-0 grid list-none grid-cols-1 gap-px border p-0 sm:grid-cols-2 lg:grid-cols-3"
					style={{ borderColor: "var(--line)", background: "var(--line)" }}
				>
					{DELIVERABLES.map(([h, d]) => (
						<li key={h} className="p-6" style={{ background: "var(--bg)" }}>
							<div className="mb-2 text-[17px]" style={{ color: "var(--fg)" }}>
								{h}
							</div>
							<p
								className="m-0 text-[14px] leading-relaxed"
								style={{ color: "var(--fg-mute)" }}
							>
								{d}
							</p>
						</li>
					))}
				</ul>
			</section>

			<section
				aria-labelledby="packages-heading"
				className="border-t py-12"
				style={{ borderColor: "var(--line)" }}
			>
				<h2
					id="packages-heading"
					className="display mb-8 mt-0"
					style={{ fontSize: "clamp(30px, 3.2vw, 44px)" }}
				>
					<em>Packages</em>
				</h2>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					{PACKAGES.map((p, i) => (
						<article
							key={p.name}
							className="flex flex-col justify-between gap-6 border p-6"
							style={{ borderColor: "var(--line)", background: "var(--bg-elev)" }}
						>
							<div>
								<div className="eyebrow mb-4">
									{String(i + 1).padStart(2, "0")}
								</div>
								<h3 className="m-0 mb-3 text-[20px] font-medium">{p.name}</h3>
								<p
									className="m-0 text-[14px] leading-relaxed"
									style={{ color: "var(--fg-mute)" }}
								>
									{p.line}
								</p>
							</div>
							<Link
								href="/contact"
								className="btn inline-flex self-start !px-3 !py-2 !text-xs"
								aria-label={`Ask about ${p.name}`}
							>
								Ask about this <ArrowR size={12} />
							</Link>
						</article>
					))}
				</div>
			</section>

			<section
				aria-labelledby="wont-heading"
				className="grid grid-cols-1 gap-8 border-t py-12 lg:grid-cols-[1fr_1.4fr]"
				style={{ borderColor: "var(--line)" }}
			>
				<div>
					<h2
						id="wont-heading"
						className="display m-0"
						style={{ fontSize: "clamp(30px, 3.2vw, 44px)" }}
					>
						Work I <em>don&apos;t take</em>
					</h2>
					<p
						className="mt-4 max-w-[360px] text-[14px] leading-relaxed"
						style={{ color: "var(--fg-mute)" }}
					>
						I&apos;ll say no to these whatever the budget.
					</p>
				</div>
				<ul className="m-0 list-none p-0">
					{WONT_DO.map((w) => (
						<li
							key={w}
							className="border-b border-dashed py-3 text-[15px] leading-relaxed"
							style={{ borderColor: "var(--line-soft)", color: "var(--fg-mute)" }}
						>
							<span aria-hidden className="mono mr-3" style={{ color: "var(--fg-dim)" }}>
								×
							</span>
							{w}
						</li>
					))}
				</ul>
			</section>

			<FooterPrompt />
		</div>
	);
}
