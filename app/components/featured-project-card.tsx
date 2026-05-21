import Link from "next/link";
import type { Project } from "@/lib/mdx";
import {
	formatProjectDomain,
	formatProjectYear,
	hueFromSlug,
} from "@/lib/project-display";

type Props = {
	project: Project;
	index: number;
	height?: number;
};

/**
 * Striped art block + copy for “Selected work” grid (studio home).
 */
export function FeaturedProjectCard({ project, index, height = 300 }: Props) {
	const n = String(index + 1).padStart(2, "0");
	const hue = hueFromSlug(project.slug);
	const hasCover = Boolean(project.image);
	const stack = project.skills
		.split("|")
		.map((s) => s.trim())
		.filter(Boolean);

	return (
		<article className="featured-card" style={{ position: "relative" }}>
			<Link
				href={`/projects/${project.slug}`}
				className="featured-art relative block"
				style={{ height }}
				aria-label={`View project ${project.title}`}
			>
				<div
					className="stripes absolute inset-0"
					style={
						hasCover
							? {
									backgroundColor: `oklch(0.16 0.008 ${hue})`,
									backgroundImage: `linear-gradient(180deg, oklch(0.14 0.01 ${hue} / 0.25) 0%, oklch(0.12 0.015 ${hue} / 0.72) 100%), url(${project.image})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
								}
							: {
									background: `oklch(0.19 0.005 ${hue})`,
									backgroundImage: `repeating-linear-gradient(135deg, transparent 0 12px, oklch(0.24 0.012 ${hue} / 0.85) 12px 13px)`,
								}
					}
				/>
				<span
					className="serial relative z-[1]"
					style={
						hasCover
							? { color: "oklch(0.98 0 0)", textShadow: "0 1px 12px oklch(0 0 0 / 0.55)" }
							: undefined
					}
				>
					{n}
				</span>
				<div
					className="meta relative z-[1]"
					style={
						hasCover
							? { color: "oklch(0.92 0 0 / 0.9)", textShadow: "0 1px 8px oklch(0 0 0 / 0.5)" }
							: undefined
					}
				>
					<span>{formatProjectDomain(project)}</span>
					<span>{formatProjectYear(project)}</span>
				</div>
			</Link>
			<div style={{ padding: "18px 4px 0" }}>
				<div
					className="mono"
					style={{
						fontSize: 10.5,
						color: "var(--fg-dim)",
						letterSpacing: 0.08,
						textTransform: "uppercase",
						marginBottom: 10,
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<span>{formatProjectDomain(project)}</span>
					<span>{formatProjectYear(project)}</span>
				</div>
				<h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 500 }}>
					<Link href={`/projects/${project.slug}`}>{project.title}</Link>
				</h3>
				<p
					style={{
						margin: 0,
						color: "var(--fg-mute)",
						fontSize: 14,
						lineHeight: 1.55,
					}}
				>
					{project.description}
				</p>
				<div
					style={{
						marginTop: 14,
						display: "flex",
						flexWrap: "wrap",
						gap: 6,
					}}
				>
					{stack.slice(0, 6).map((s) => (
						<span
							key={s}
							className="mono dim"
							style={{
								fontSize: 10.5,
								padding: "3px 8px",
								border: "0.5px solid var(--line)",
								borderRadius: 4,
							}}
						>
							{s}
						</span>
					))}
				</div>
			</div>
		</article>
	);
}
