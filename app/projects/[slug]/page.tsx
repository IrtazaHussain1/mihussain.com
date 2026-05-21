import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllProjects, getProjectBySlug } from "../../../lib/mdx";
import { Mdx } from "@/app/components/mdx";
import { JsonLd } from "@/app/components/json-ld";
import { Header } from "./header";
import "./mdx.css";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { projectJsonLd } from "@/lib/seo/json-ld";
import { hueFromSlug } from "@/lib/project-display";

export const revalidate = 60;

type Props = {
	params: Promise<{
		slug: string;
	}>;
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
	const allProjects = getAllProjects();
	return allProjects
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const project = getProjectBySlug(slug);
	if (!project) {
		return buildPageMetadata({ title: "Project not found", noIndex: true });
	}
	const description = project.summary || project.description;
	return buildPageMetadata({
		title: project.title,
		description,
		path: `/projects/${slug}`,
		...(project.image ? { ogImage: project.image } : {}),
	});
}

function projectSummary(project: NonNullable<ReturnType<typeof getProjectBySlug>>) {
	if (project.summary) return project.summary;
	return project.description;
}

export default async function PostPage({ params }: Props) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	const skillCount = project.skills?.split("|").filter(Boolean).length ?? 0;
	const hue = hueFromSlug(project.slug);

	return (
		<div className="studio-page">
			<JsonLd
				data={projectJsonLd({
					title: project.title,
					description: project.description,
					slug: project.slug,
					date: project.date,
					url: project.url,
					skills: project.skills,
				})}
			/>
			<Header project={project} />
			{project.image ? (
				<div
					className="mb-12 overflow-hidden border"
					style={{
						borderColor: "var(--line)",
						height: "clamp(220px, 42vw, 420px)",
						backgroundImage: `linear-gradient(180deg, oklch(0.14 0.01 ${hue} / 0.2) 0%, oklch(0.12 0.015 ${hue} / 0.55) 100%), url(${project.image})`,
						backgroundSize: "cover",
						backgroundPosition: "center top",
					}}
					role="img"
					aria-label={`${project.title} screenshot`}
				/>
			) : null}

			{project.date ? (
				<p className="eyebrow mb-6" style={{ color: "var(--fg-dim)" }}>
					Last updated ·{" "}
					{new Date(project.date).toLocaleDateString("en-US", {
						year: "numeric",
						month: "long",
					})}
				</p>
			) : null}

			<p
				className="mb-8 max-w-[720px] text-[17px] leading-relaxed"
				style={{ color: "var(--fg-mute)" }}
			>
				{projectSummary(project)}
			</p>

			<div
				className="mb-10 grid grid-cols-2 gap-px border text-center sm:grid-cols-4"
				style={{
					borderColor: "var(--line)",
					background: "var(--line)",
				}}
			>
				{[
					["Technologies", String(skillCount)],
					["Year", project.date ? String(new Date(project.date).getFullYear()) : "N/A"],
					["Live", project.url ? "Yes" : "N/A"],
					["Source", project.repository ? "GitHub" : "N/A"],
				].map(([label, val]) => (
					<div key={label} className="bg-[var(--bg)] px-3 py-5">
						<div className="eyebrow mb-2">{label}</div>
						<div className="mono text-sm" style={{ color: "var(--fg)" }}>
							{val}
						</div>
					</div>
				))}
			</div>

			<article className="studio-article mb-12">
				<div className="prose prose-lg prose-invert max-w-none">
					<Mdx content={project.content} />
				</div>
			</article>

			<div className="border-t pt-10" style={{ borderColor: "var(--line-soft)" }}>
				<Link href="/projects" className="btn">
					← All projects
				</Link>
			</div>
		</div>
	);
}
