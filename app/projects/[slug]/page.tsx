import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "../../../lib/mdx";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import Particles from "@/app/components/particles";
import Link from "next/link";

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

export default async function PostPage({ params }: Props) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	return (
		<div className="relative pb-16 bg-black matrix-bg min-h-screen">
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={800}
			/>
			<Header project={project} />
			<ReportView slug={project.slug} />

			{/* Enhanced Project Content */}
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				{/* Project Stats Section */}
				<div className="mb-12">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
						<div className="glass-panel p-6 text-center">
							<div className="text-3xl font-bold text-cyan-400 neon-glow mb-2">
								{project.skills?.split('|').length || 0}
							</div>
							<div className="text-sm text-gray-400">TECHNOLOGIES</div>
						</div>
						<div className="glass-panel p-6 text-center">
							<div className="text-3xl font-bold text-purple-400 neon-glow mb-2">
								{project.date ? new Date(project.date).getFullYear() : '2024'}
							</div>
							<div className="text-sm text-gray-400">YEAR</div>
						</div>
						<div className="glass-panel p-6 text-center">
							<div className="text-3xl font-bold text-green-400 neon-glow mb-2">
								{project.url ? 'LIVE' : 'DEMO'}
							</div>
							<div className="text-sm text-gray-400">STATUS</div>
						</div>
						<div className="glass-panel p-6 text-center">
							<div className="text-3xl font-bold text-orange-400 neon-glow mb-2">
								{project.repository ? 'OPEN' : 'PRIVATE'}
							</div>
							<div className="text-sm text-gray-400">SOURCE</div>
						</div>
					</div>
				</div>

				{/* Technologies Used */}
				{project.skills && (
					<div className="mb-12">
						<h3 className="text-2xl font-bold text-white mb-6 text-center">TECHNOLOGIES USED</h3>
						<div className="flex flex-wrap justify-center gap-3">
							{project.skills.split('|').map((skill, index) => (
								<span
									key={index}
									className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300"
								>
									{skill}
								</span>
							))}
						</div>
					</div>
				)}

				{/* Project Links */}
				{(project.url || project.repository) && (
					<div className="mb-12">
						<h3 className="text-2xl font-bold text-white mb-6 text-center">PROJECT LINKS</h3>
						<div className="flex flex-wrap justify-center gap-4">
							{project.url && (
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
								>
									<span>🌐</span>
									<span>View Live Site</span>
									<span>→</span>
								</a>
							)}
							{project.repository && (
								<a
									href={`https://github.com/${project.repository}`}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105"
								>
									<span>📁</span>
									<span>View Source Code</span>
									<span>→</span>
								</a>
							)}
						</div>
					</div>
				)}

				{/* Enhanced Article Content */}
				<article className="glass-panel p-8 lg:p-12 mb-10">
					<div className="prose prose-lg prose-invert max-w-none">
						<Mdx content={project.content} />
					</div>
				</article>

				{/* Back to Projects */}
				<div className="text-center">
					<Link
						href="/projects"
						className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
					>
						<span>←</span>
						<span>Back to All Projects</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
