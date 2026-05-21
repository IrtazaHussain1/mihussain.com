import Link from "next/link";
import type { Metadata } from "next";
import { FooterPrompt } from "../components/footer-prompt";
import { getAllProjects } from "@/lib/mdx";
import {
	formatProjectDomain,
	formatProjectResult,
	formatProjectYear,
} from "@/lib/project-display";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
	title: "Projects",
	description:
		"Portfolio of software projects by Irtaza Hussain: backend systems, full-stack apps, cloud infrastructure, and AI integration.",
	path: "/projects",
});

export const revalidate = 60;

export default async function ProjectsPage() {
	const sorted = getAllProjects();

	return (
		<div className="studio-page">
			<header className="mb-14 md:mb-[60px]">
				<div className="eyebrow mb-6">§&nbsp;&nbsp;03 / Work</div>
				<div className="grid grid-cols-1 items-end gap-10 md:grid-cols-[1.5fr_1fr]">
					<h1
						className="display m-0"
						style={{ fontSize: "clamp(56px, 8vw, 124px)" }}
					>
						Projects,
						<br />
						<em>catalogued</em>.
					</h1>
					<p
						className="m-0 max-w-[360px] text-[15px]"
						style={{ color: "var(--fg-mute)" }}
					>
						A catalogue of production builds and client work across backend,
						full-stack, automation, and infrastructure. Open a row for the full
						write-up.
					</p>
				</div>
			</header>

			<div className="studio-archive-wrap">
				<table className="studio-archive">
					<thead>
						<tr>
							{["#", "Project", "Domain", "Stack", "Result", "Year"].map(
								(h) => (
									<th key={h}>{h}</th>
								),
							)}
						</tr>
					</thead>
					<tbody>
						{sorted.map((p, idx) => (
							<tr key={p.slug}>
								<td style={{ color: "var(--fg-dim)" }}>
									{String(idx + 1).padStart(2, "0")}
								</td>
								<td className="title-cell">
									<Link
										href={`/projects/${p.slug}`}
										className="title-link"
									>
										{p.title}
									</Link>
								</td>
								<td style={{ color: "var(--fg-mute)" }}>
									{formatProjectDomain(p)}
								</td>
								<td style={{ color: "var(--fg-mute)" }}>
									{p.skills
										.split("|")
										.map((s) => s.trim())
										.filter(Boolean)
										.join(" · ")}
								</td>
								<td style={{ color: "var(--fg)" }}>{formatProjectResult(p)}</td>
								<td style={{ color: "var(--fg-dim)" }}>
									{formatProjectYear(p)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{sorted.length === 0 ? (
				<p className="muted mt-10 text-sm">No published projects yet.</p>
			) : null}

			<FooterPrompt />
		</div>
	);
}
