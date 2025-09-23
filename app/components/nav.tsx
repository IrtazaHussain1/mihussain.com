"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl duration-200 border-b ${
					isIntersecting
						? "bg-black/20 border-white/10"
						: "bg-black/80 border-cyan-400/30"
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<Link
							href="/projects"
							className="duration-200 text-cyan-400 hover:text-white relative group"
						>
							<span className="relative z-10">PROJECTS</span>
							<div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
						</Link>
						<Link
							href="/contact"
							className="duration-200 text-cyan-400 hover:text-white relative group"
						>
							<span className="relative z-10">CONTACT</span>
							<div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
						</Link>
					</div>

					<Link
						href="/"
						className="duration-200 text-cyan-400 hover:text-white group"
					>
						<div className="relative">
							<ArrowLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
							<div className="absolute inset-0 bg-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 blur-sm"></div>
						</div>
					</Link>
				</div>
			</div>
		</header>
	);
};
