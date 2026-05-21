import type { Metadata } from "next";
import { FooterPrompt } from "../components/footer-prompt";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
	title: "Testimonials",
	description:
		"What clients and collaborators say about working with Irtaza Hussain on backend, AI, and product engineering.",
	path: "/testimonials",
});

const TESTIMONIALS = [
	{
		q: "Irtaza is the rare engineer who treats the boring half of a system (the runbooks, the migrations, the on-call rotation) as the actual product. We hired him for a six-week rewrite and kept him on retainer.",
		who: "Maya Okonkwo",
		role: "CTO",
		co: "Northtide Logistics",
		yr: 2024,
	},
	{
		q: "We had a working LLM prototype and a vague sense it shouldn't go to production yet. Three weeks later we had an eval harness, a gateway, a cost graph, and a very clear go decision. Worth every dollar.",
		who: "Sam Berenson",
		role: "Head of Product",
		co: "Quill AI",
		yr: 2024,
	},
	{
		q: "He took our 11-year-old ETL graveyard and made it boring. The thing I appreciated most was that he refused to be precious about the rewrite: small steps, every one of them shippable.",
		who: "Priya Raman",
		role: "Data Platform Lead",
		co: "Atlas Mobility",
		yr: 2023,
	},
	{
		q: "Operates like a one-person product team. Writes well, draws well, ships on time, and is unusually pleasant during the part of a project where everyone usually starts blaming each other.",
		who: "Daniel Vega",
		role: "Founder",
		co: "Quorum Capital",
		yr: 2023,
	},
] as const;

const STATS = [
	["07", "years writing software professionally"],
	["24", "shipped engagements as an independent"],
	["92%", "of work arrives via referrals"],
	["11", "companies on retainer or revisits"],
] as const;

export default function TestimonialsPage() {
	return (
		<div className="studio-page">
			<header className="mb-16 lg:mb-20">
				<div className="eyebrow mb-6">
					§&nbsp;&nbsp;05 / Testimonials
				</div>
				<h1
					className="display m-0"
					style={{ fontSize: "clamp(56px, 8vw, 124px)" }}
				>
					What people who
					<br />
					have <em>paid me</em> say.
				</h1>
			</header>

			<div>
				{TESTIMONIALS.map((it) => (
					<article
						key={it.who}
						className="grid grid-cols-1 items-start gap-8 border-t py-12 lg:grid-cols-[60px_1fr_300px] lg:gap-12 lg:py-14"
						style={{ borderColor: "var(--line)" }}
					>
						<span
							className="display hidden text-[60px] leading-[0.8] lg:block"
							style={{ color: "var(--fg-mute)" }}
						>
							&ldquo;
						</span>
						<blockquote
							className="display m-0 leading-snug tracking-tight"
							style={{
								fontSize: "clamp(26px, 2.6vw, 38px)",
								color: "var(--fg)",
							}}
						>
							<em>{it.q}</em>
						</blockquote>
						<div className="pt-0 lg:pt-3.5">
							<div className="mb-1 text-[15px]">{it.who}</div>
							<div
								className="mono dim text-[11.5px] uppercase tracking-wide"
							>
								{it.role} · {it.co}
							</div>
							<div className="mono dim mt-2.5 text-[11.5px]">
								Engagement · {it.yr}
							</div>
						</div>
					</article>
				))}
				<div className="border-t" style={{ borderColor: "var(--line)" }} />
			</div>

			<section
				className="mt-16 grid grid-cols-2 gap-8 border-y py-8 lg:grid-cols-4"
				style={{ borderColor: "var(--line)" }}
			>
				{STATS.map(([n, l]) => (
					<div key={l}>
						<div className="display text-[56px] leading-none">{n}</div>
						<div
							className="mono dim mt-2.5 text-[11px] uppercase tracking-wide"
						>
							{l}
						</div>
					</div>
				))}
			</section>

			<FooterPrompt />
		</div>
	);
}
