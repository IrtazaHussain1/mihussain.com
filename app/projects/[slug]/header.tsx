"use client";

import { ArrowLeft, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/mdx";
import { formatProjectYear } from "@/lib/project-display";

type Props = {
	project: Pick<
		Project,
		| "title"
		| "description"
		| "url"
		| "repository"
		| "skills"
		| "date"
	>;
};

/**
 * Project hero: editorial title block (global StudioNav handles site nav).
 */
export function Header({ project }: Props) {
	const links: { label: string; href: string }[] = [];
	if (project.repository) {
		links.push({
			label: "GitHub",
			href: `https://github.com/${project.repository}`,
		});
	}
	if (project.url) {
		links.push({
			label: "Website",
			href: project.url,
		});
	}

	return (
		<header className="mb-12 border-b pb-10" style={{ borderColor: "var(--line-soft)" }}>
			<div className="mb-6 flex items-center justify-between gap-4">
				<Link
					href="/projects"
					className="mono inline-flex items-center gap-2 text-[11px] uppercase tracking-wide"
					style={{ color: "var(--fg-mute)" }}
				>
					<ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={1.25} />
					Index / Work
				</Link>
				<div className="flex items-center gap-3">
					<Link
						target="_blank"
						href="https://twitter.com/irtazahussain9"
						className="opacity-70 transition-opacity hover:opacity-100"
						aria-label="Twitter"
					>
						<Twitter className="h-5 w-5" strokeWidth={1.25} />
					</Link>
					<Link
						target="_blank"
						href="https://github.com/irtazahussain1"
						className="opacity-70 transition-opacity hover:opacity-100"
						aria-label="GitHub"
					>
						<Github className="h-5 w-5" strokeWidth={1.25} />
					</Link>
					<Link
						target="_blank"
						href="https://www.linkedin.com/in/mihussain1/"
						className="opacity-70 transition-opacity hover:opacity-100"
						aria-label="LinkedIn"
					>
						<Linkedin className="h-5 w-5" strokeWidth={1.25} />
					</Link>
				</div>
			</div>

			<div className="eyebrow mb-4">§&nbsp;&nbsp;Project</div>
			<h1
				className="display mb-6 max-w-4xl"
				style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
			>
				{project.title}
			</h1>
			<p
				className="max-w-2xl text-[17px] leading-relaxed"
				style={{ color: "var(--fg-mute)" }}
			>
				{project.description}
			</p>
			<div className="mono mt-6 flex flex-wrap gap-6 text-[11px] uppercase tracking-wide" style={{ color: "var(--fg-dim)" }}>
				<span>Year · {formatProjectYear(project)}</span>
				{project.skills ? (
					<span>
						Stack ·{" "}
						{project.skills
							.split("|")
							.slice(0, 4)
							.map((s) => s.trim())
							.filter(Boolean)
							.join(" · ")}
					</span>
				) : null}
			</div>

			{links.length > 0 ? (
				<div className="mt-8 flex flex-wrap gap-3">
					{links.map((link) => (
						<Link
							key={link.label}
							target="_blank"
							rel="noopener noreferrer"
							href={link.href}
							className="btn"
						>
							{link.label}
						</Link>
					))}
				</div>
			) : null}
		</header>
	);
}
