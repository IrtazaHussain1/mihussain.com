import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import Particles from "../components/particles";

export const revalidate = 60;
export default async function ProjectsPage() {
	const sorted = allProjects
		.filter((p) => p.published)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	return (
		<div className="relative pb-16 bg-black matrix-bg min-h-screen">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				{/* Futuristic Header */}
				<div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
					<div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
						<div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl holographic-text">
							PROJECT ARCHIVE
						</h2>
					</div>
					<p className="mt-4 text-cyan-400 text-lg">
						Mission-critical applications and innovative solutions from professional engagements and personal exploration.
					</p>
					<div className="mt-6 flex items-center justify-center lg:justify-start space-x-4">
						<div className="flex items-center space-x-2">
							<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
							<span className="text-green-400 text-sm">ACTIVE PROJECTS</span>
						</div>
						<div className="flex items-center space-x-2">
							<div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
							<span className="text-blue-400 text-sm">DEPLOYED</span>
						</div>
					</div>
				</div>
				
				{/* Futuristic Divider */}
				<div className="relative">
					<div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
					<div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
				</div>

				{/* Project Grid with Enhanced Layout */}
				<div className="grid grid-cols-1 gap-6 mx-auto lg:mx-0 md:grid-cols-2 xl:grid-cols-3 h-full">
					{sorted.map((project, index) => (
						<div
							key={project?.slug}
							className="group"
							style={{
								animationDelay: `${index * 100}ms`,
							}}
						>
							<Card>
								<Article project={project} showReadme={true} />
							</Card>
						</div>
					))}
				</div>

				{/* Dynamic Project Statistics */}
				{(() => {
					// Calculate dynamic stats from all projects
					const totalProjects = sorted.length;
					
					// Extract all unique technologies
					const allTechnologies = new Set<string>();
					sorted.forEach(project => {
						if (project.skills) {
							project.skills.split('|').forEach(skill => {
								allTechnologies.add(skill.trim());
							});
						}
					});
					
					// Count projects by technology
					const techCounts = Array.from(allTechnologies).map(tech => ({
						tech,
						count: sorted.filter(p => p.skills?.includes(tech)).length
					})).sort((a, b) => b.count - a.count);
					
					// Get top technologies
					const topTechs = techCounts.slice(0, 3);
					
					// Calculate average technologies per project
					const avgTechsPerProject = totalProjects > 0 
						? (allTechnologies.size / totalProjects).toFixed(1)
						: '0';
					
					// Count projects with live URLs
					const liveProjects = sorted.filter(p => p.url).length;
					
					// Count projects with source code
					const openSourceProjects = sorted.filter(p => p.repository).length;
					
					return (
						<div className="mt-16">
							<div className="text-center mb-8">
								<h3 className="text-2xl font-bold text-white holographic-text mb-2">PROJECT ANALYTICS</h3>
								<p className="text-cyan-400 text-sm">Automatically computed from {totalProjects} projects</p>
							</div>
							
							{/* Main Stats Grid */}
							<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
								<div className="glass-panel p-6 text-center">
									<div className="text-3xl font-bold text-cyan-400 neon-glow">
										{totalProjects}
									</div>
									<div className="text-sm text-gray-400 mt-1">TOTAL PROJECTS</div>
								</div>
								<div className="glass-panel p-6 text-center">
									<div className="text-3xl font-bold text-green-400 neon-glow">
										{liveProjects}
									</div>
									<div className="text-sm text-gray-400 mt-1">LIVE PROJECTS</div>
								</div>
								<div className="glass-panel p-6 text-center">
									<div className="text-3xl font-bold text-purple-400 neon-glow">
										{openSourceProjects}
									</div>
									<div className="text-sm text-gray-400 mt-1">OPEN SOURCE</div>
								</div>
								<div className="glass-panel p-6 text-center">
									<div className="text-3xl font-bold text-orange-400 neon-glow">
										{allTechnologies.size}
									</div>
									<div className="text-sm text-gray-400 mt-1">TECHNOLOGIES</div>
								</div>
							</div>
						</div>
					);
				})()}
			</div>
		</div>
	);
}



