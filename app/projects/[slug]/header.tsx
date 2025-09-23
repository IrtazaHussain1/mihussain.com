"use client";
import { ArrowLeft, Eye, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
	project: {
		url?: string;
		title: string;
		description: string;
		repository?: string;
		skills?: string;
	};
};
export const Header: React.FC<Props> = ({ project }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

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
	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header
			ref={ref}
			className="container mx-auto relative isolate overflow-hidden pt-14 sm:pt-20"
		>
			{/* Enhanced Navigation */}
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl duration-200 border-b ${
					isIntersecting
						? "bg-black/20 border-white/10"
						: "bg-black/80 border-cyan-400/30"
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<Link target="_blank" href="https://twitter.com/irtazahussain9" className="group">
							<Twitter className="w-6 h-6 text-cyan-400 hover:text-white transition-colors duration-300 group-hover:scale-110" />
						</Link>
						<Link target="_blank" href="https://github.com/irtazahussain1" className="group">
							<Github className="w-6 h-6 text-cyan-400 hover:text-white transition-colors duration-300 group-hover:scale-110" />
						</Link>
						<Link target="_blank" href="https://www.linkedin.com/in/mihussain1/" className="group">
							<Linkedin className="w-6 h-6 text-cyan-400 hover:text-white transition-colors duration-300 group-hover:scale-110" />
						</Link>
					</div>

					<Link
						href="/projects"
						className="text-cyan-400 hover:text-white transition-colors duration-300 group"
					>
						<ArrowLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
					</Link>
				</div>
			</div>

			{/* Enhanced Header Content */}
			<div className="container mx-auto relative isolate overflow-hidden py-14 sm:py-20">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
					{/* Project Badge */}
					<div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full mb-8">
						<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
						<span className="text-cyan-400 text-sm font-medium">PROJECT SHOWCASE</span>
					</div>

					{/* Project Title with Enhanced Styling */}
					<div className="mx-auto max-w-4xl lg:mx-0 mb-8">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display holographic-text mb-6">
							{project.title}
						</h1>
						
						{/* Decorative Elements */}
						<div className="flex items-center justify-center space-x-4 mb-6">
							<div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
							<div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
							<div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400"></div>
						</div>
						
						<p className="text-lg leading-8 text-cyan-300 max-w-3xl mx-auto">
							{project.description}
						</p>
					</div>

					{/* Enhanced Project Links */}
					{links.length > 0 && (
						<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
							<div className="flex flex-wrap justify-center gap-4">
								{links.map((link) => (
									<Link 
										target="_blank" 
										key={link.label} 
										href={link.href}
										className="group inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 hover:text-white transition-all duration-300"
									>
										<span className="font-semibold">{link.label}</span>
										<span className="group-hover:translate-x-1 transition-transform">→</span>
									</Link>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};
