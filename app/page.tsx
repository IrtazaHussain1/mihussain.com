import Link from "next/link";
import { LiveStatus } from "./components/live-status";
import { FooterPrompt } from "./components/footer-prompt";
import { FeaturedProjectCard } from "./components/featured-project-card";
import { ArrowR } from "./components/arrow-r";
import { getAllProjects } from "@/lib/mdx";

const DISCIPLINES = [
	["Backend & systems", "APIs · data · reliability"],
	["Full-stack", "TypeScript · React · Next.js"],
	["Automation", "Pipelines · integrations"],
	["Cloud & delivery", "AWS · Docker · CI"],
] as const;

export default function Home() {
	const all = getAllProjects();
	const featured = all.slice(0, 3);

	return (
		<div className="studio-page">
			<section className="grid min-h-[68vh] grid-cols-1 items-end gap-12 md:grid-cols-[1.6fr_1fr] md:gap-16">
				<div>
					<div className="eyebrow mb-7">§&nbsp;&nbsp;01 / Home</div>

					<h1
						className="display mb-6"
						style={{
							fontSize: "clamp(64px, 10.8vw, 168px)",
							margin: 0,
						}}
					>
						Software, <em>built</em>
						<br />
						the long way.
					</h1>

					<p
						className="mb-8 max-w-[640px] text-[19px] leading-relaxed tracking-tight"
						style={{ color: "var(--fg-mute)" }}
					>
						I&apos;m a senior software engineer who builds products and
						platforms with founders and engineering teams.{" "}
						<span style={{ color: "var(--fg)" }}>
							I care about clear architecture, maintainable code, and work
							that still runs after launch.
						</span>
					</p>

					<div className="mb-10 flex flex-wrap gap-3">
						<Link href="/contact" className="btn primary">
							Start a project <ArrowR />
						</Link>
						<Link href="/projects" className="btn">
							See recent work
						</Link>
					</div>

					<LiveStatus />
				</div>

				<aside className="flex flex-col justify-end gap-7 border-[color:var(--line-soft)] md:border-l md:pl-8">
					{(
						[
							["Role", "Software Engineer"],
							["Based", "Lahore · remote worldwide"],
							["Focus", "Backend · full-stack · cloud"],
							["Links", "Projects · Contact"],
						] as const
					).map(([k, v]) => (
						<div
							key={k}
							className="grid gap-4"
							style={{ gridTemplateColumns: "90px 1fr" }}
						>
							<span className="eyebrow">{k}</span>
							<span className="text-sm">{v}</span>
						</div>
					))}
				</aside>
			</section>

			<section className="mt-28 md:mt-[120px]">
				<div className="eyebrow mb-5">§&nbsp;&nbsp;Disciplines</div>
				<div
					className="grid grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-4"
					style={{ borderColor: "var(--line)" }}
				>
					{DISCIPLINES.map(([h, sub], idx) => (
						<div
							key={h}
							className="border-b border-r p-6 sm:border-b lg:border-b-0"
							style={{
								borderColor: "var(--line)",
								borderRightWidth:
									idx === DISCIPLINES.length - 1 ? 0 : undefined,
							}}
						>
							<div
								className="mono mb-3.5 text-[10.5px] uppercase tracking-wide"
								style={{ color: "var(--fg-dim)" }}
							>
								↳ {h.split(" ")[0]}
							</div>
							<div className="mb-2 text-[17px]">{h}</div>
							<div className="mono dim text-[11.5px]">{sub}</div>
						</div>
					))}
				</div>
			</section>

			<section className="mt-28 md:mt-[120px]">
				<header className="mb-9 flex flex-wrap items-baseline justify-between gap-4">
					<div>
						<div className="eyebrow mb-3">§&nbsp;&nbsp;Selected work</div>
						<h2
							className="display m-0"
							style={{ fontSize: "clamp(38px, 4.6vw, 64px)" }}
						>
							Recent <em>builds</em>.
						</h2>
					</div>
					<Link href="/projects" className="btn">
						All projects <ArrowR />
					</Link>
				</header>

				{featured.length === 0 ? (
					<p className="muted text-[15px]">
						Projects will appear here once published in{" "}
						<code className="mono text-[13px]">content/projects</code>.
					</p>
				) : (
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{featured.map((p, i) => (
							<FeaturedProjectCard key={p.slug} project={p} index={i} />
						))}
					</div>
				)}
			</section>

			<FooterPrompt />
		</div>
	);
}
