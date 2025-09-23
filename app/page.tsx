import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import SystemStatus from "./components/system-status";
import SkillMatrix from "./components/skill-matrix";
import DynamicContent from "./components/dynamic-content";
import PerformanceCharts from "./components/performance-charts";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="min-h-screen bg-black matrix-bg">
			{/* Enhanced Particle System */}
			<Particles
				className="fixed inset-0 -z-10 animate-fade-in"
				quantity={2000}
			/>
			
			{/* Enhanced Futuristic Navigation */}
			<nav className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl duration-200 border-b border-white/10 bg-black/30 animate-fade-in">
				<div className="w-full">
					{/* Top decorative line */}
					<div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
					
					{/* Navigation content */}
					<div className="max-w-7xl mx-auto px-6 py-4">
						<div className="flex items-center justify-between">
							{/* Logo/Brand */}
							<div className="flex items-center space-x-2">
								<div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
									<span className="text-white font-bold text-sm">IH</span>
								</div>
								<span className="text-white font-semibold text-sm hidden sm:block">Irtaza Hussain</span>
							</div>

							{/* Navigation Links */}
							<ul className="flex items-center gap-4 sm:gap-8">
								{navigation.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className="text-sm duration-500 text-cyan-400 hover:text-white relative group px-2 sm:px-3 py-2"
									>
										<span className="relative z-10">{item.name}</span>
										<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
										<div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
									</Link>
								))}
							</ul>
						</div>
					</div>
					
					{/* Bottom decorative line */}
					<div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
				</div>
			</nav>

			{/* Hero Section */}
			<section id="hero" className="min-h-screen flex items-center justify-center relative">
				<div className="max-w-7xl mx-auto px-6 py-24">
					<div className="text-center space-y-8">
						{/* Catchy Intro Line */}
						<div className="animate-fade-in-up">
							<div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full mb-6">
								<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
								<span className="text-cyan-400 text-sm font-medium">AVAILABLE FOR NEW PROJECTS</span>
							</div>
							<p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
								🚀 <span className="text-cyan-400 font-semibold holographic-text">Transforming Ideas into Digital Reality</span> 🚀
							</p>
							<p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
								Building the future, one line of code at a time. Let's create something extraordinary together.
							</p>
						</div>

						{/* Visual Identity Section */}
						<div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
							<div className="relative mb-8">
								<div className="w-40 h-40 mx-auto bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center text-7xl font-bold text-white shadow-2xl">
									IH
								</div>
								<div className="absolute -top-2 -right-2 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
									<span className="text-white text-sm">✓</span>
								</div>
								{/* Orbiting elements */}
								<div className="absolute top-6 -left-6 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
								<div className="absolute bottom-6 -right-6 w-4 h-4 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
								<div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
							</div>

							<h1 className="text-4xl sm:text-5xl md:text-6xl font-display holographic-text mb-4">
								Muhammad Irtaza Hussain
							</h1>
							
							<div className="flex items-center justify-center space-x-4 mb-6">
								<div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
								<span className="text-cyan-400 text-lg">◆</span>
								<div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400"></div>
							</div>

							<div className="flex items-center justify-center space-x-4 mb-8">
								<div className="text-3xl">👨‍💻</div>
								<h2 className="text-2xl text-white font-semibold">
									Senior Software Engineer
								</h2>
								<div className="text-3xl">⚡</div>
							</div>
						</div>

						{/* Enhanced description */}
						<div className="animate-fade-in-up max-w-4xl mx-auto space-y-4" style={{animationDelay: '0.4s'}}>
							<p className="text-cyan-400 text-lg leading-relaxed">
								🎯 <span className="font-semibold">Mission:</span> Crafting exceptional digital experiences through innovative technology solutions
							</p>
							<p className="text-gray-300 text-lg leading-relaxed">
								💼 <span className="font-semibold">Expertise:</span> Full-stack development • Team leadership • Scalable architecture • 5+ years experience
							</p>
							<p className="text-purple-400 text-lg leading-relaxed">
								🌟 <span className="font-semibold">Specialty:</span> Python • React • TypeScript • Cloud Infrastructure • DevOps
							</p>
						</div>

						{/* Scroll indicator */}
						<div className="animate-bounce mt-16">
							<div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
								<div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
							</div>
							<p className="text-cyan-400 text-sm mt-2">Scroll to explore</p>
						</div>
					</div>
				</div>
			</section>

			{/* Live Stats Section */}
			<section id="stats" className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">
				{/* Dynamic Background Pattern */}
				<div className="absolute inset-0 opacity-10">
					<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10"></div>
					<div className="absolute top-0 left-0 w-full h-full">
						{/* Floating Data Points */}
						{Array.from({length: 15}).map((_, i) => (
							<div
								key={i}
								className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-40 animate-pulse"
								style={{
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
									animationDelay: `${Math.random() * 3}s`,
									animationDuration: `${2 + Math.random() * 2}s`
								}}
							></div>
						))}
					</div>
				</div>
				
				<div className="max-w-7xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-white holographic-text mb-4">LIVE STATISTICS</h2>
						<p className="text-cyan-400 text-lg">Real-time insights and performance metrics</p>
					</div>
					
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
						{/* System Status Card */}
						<div className="lg:col-span-1">
							<SystemStatus />
						</div>

						{/* Dynamic Content Card */}
						<div className="lg:col-span-1">
							<DynamicContent />
						</div>

						{/* Performance Metrics Card */}
						<div className="lg:col-span-1">
							<PerformanceCharts />
						</div>
					</div>

				</div>
			</section>

			{/* Technology Arsenal Section */}
			<section id="technologies" className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">
				{/* Dynamic Background Pattern */}
				<div className="absolute inset-0 opacity-20">
					<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
					<div className="absolute top-0 left-0 w-full h-full">
						{/* Floating Tech Icons */}
						{['💻', '⚡', '🔧', '🚀', '💡', '🌟', '⚙️', '🎯'].map((icon, i) => (
							<div
								key={i}
								className="absolute text-4xl opacity-30 animate-float"
								style={{
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
									animationDelay: `${i * 0.5}s`,
									animationDuration: `${3 + Math.random() * 2}s`
								}}
							>
								{icon}
							</div>
						))}
					</div>
				</div>
				
				<div className="max-w-7xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-white holographic-text mb-4">TECHNOLOGY ARSENAL</h2>
						<p className="text-cyan-400 text-lg">Mastering the tools that power the future</p>
					</div>
					
					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
						{[
							{ name: "Python", icon: "🐍", color: "from-yellow-400 to-orange-500" },
							{ name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-500" },
							{ name: "TypeScript", icon: "📘", color: "from-blue-500 to-indigo-500" },
							{ name: "Django", icon: "🎯", color: "from-green-400 to-emerald-500" },
							{ name: "Next.js", icon: "▲", color: "from-purple-400 to-pink-500" },
							{ name: "AWS", icon: "☁️", color: "from-orange-500 to-red-500" },
							{ name: "Docker", icon: "🐳", color: "from-blue-600 to-cyan-600" },
							{ name: "Git", icon: "🌿", color: "from-red-500 to-orange-500" },
							{ name: "Node.js", icon: "🟢", color: "from-green-500 to-lime-500" },
							{ name: "PostgreSQL", icon: "🐘", color: "from-indigo-500 to-purple-500" },
							{ name: "Redis", icon: "🔴", color: "from-red-400 to-pink-500" },
							{ name: "GraphQL", icon: "🔷", color: "from-pink-500 to-purple-500" }
						].map((tech, index) => (
							<div
								key={tech.name}
								className={`group relative p-6 bg-gradient-to-br ${tech.color} bg-opacity-10 border border-white/20 rounded-xl hover:bg-opacity-20 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2`}
								style={{animationDelay: `${index * 0.1}s`}}
							>
								<div className="text-center">
									<div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
										{tech.icon}
									</div>
									<span className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors">
										{tech.name}
									</span>
								</div>
								{/* Hover glow effect */}
								<div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300`}></div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Skill Matrix Section */}
			<section id="skills" className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">
				{/* Dynamic Background Pattern */}
				<div className="absolute inset-0 opacity-15">
					<div className="absolute inset-0 bg-gradient-to-tl from-green-500/10 via-transparent to-blue-500/10"></div>
					<div className="absolute top-0 left-0 w-full h-full">
						{/* Matrix-style Code Rain */}
						{Array.from({length: 20}).map((_, i) => (
							<div
								key={i}
								className="absolute text-green-400 opacity-20 font-mono text-sm animate-matrix-rain"
								style={{
									left: `${Math.random() * 100}%`,
									animationDelay: `${Math.random() * 5}s`,
									animationDuration: `${2 + Math.random() * 3}s`
								}}
							>
								{['01', '10', '11', '00'][Math.floor(Math.random() * 4)]}
							</div>
						))}
					</div>
				</div>
				
				<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-white holographic-text mb-4">SKILL MATRIX</h2>
						<p className="text-cyan-400 text-lg">Comprehensive technical expertise across multiple domains</p>
					</div>
					
					<SkillMatrix />
				</div>
			</section>

			{/* Quick Actions Section */}
			<section id="actions" className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">
				{/* Dynamic Background Pattern */}
				<div className="absolute inset-0 opacity-15">
					<div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 via-transparent to-pink-500/10"></div>
					<div className="absolute top-0 left-0 w-full h-full">
						{/* Floating Action Icons */}
						{['🚀', '📡', '💫', '⚡', '🌟', '💎', '🎯', '🔮'].map((icon, i) => (
							<div
								key={i}
								className="absolute text-3xl opacity-25 animate-float"
								style={{
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
									animationDelay: `${i * 0.3}s`,
									animationDuration: `${4 + Math.random() * 2}s`
								}}
							>
								{icon}
							</div>
						))}
					</div>
				</div>
				
				<div className="max-w-7xl mx-auto px-6 relative z-10">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-white holographic-text mb-4">QUICK ACTIONS</h2>
						<p className="text-cyan-400 text-lg">Choose your next step in our collaboration</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						<Link
							href="/projects"
							className="glass-panel glass-panel-hover p-8 text-center group cursor-pointer relative overflow-hidden transform hover:scale-105 transition-all duration-500"
						>
							{/* Background gradient */}
							<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							
							{/* Icon with animation */}
							<div className="relative z-10 mb-6">
								<div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
									🚀
								</div>
								<div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
							</div>
							
							<h3 className="text-2xl text-white font-semibold mb-4 group-hover:text-cyan-300 transition-colors">Explore Projects</h3>
							<p className="text-gray-400 text-lg mb-6">View my latest work and technical achievements</p>
							
							{/* Action button */}
							<div className="inline-flex items-center space-x-3 px-6 py-3 bg-cyan-500/20 border border-cyan-400/30 rounded-full group-hover:bg-cyan-500/30 transition-colors">
								<span className="text-cyan-400 text-lg font-medium">ACCESS PROJECTS</span>
								<span className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
							</div>
						</Link>

						<Link
							href="/contact"
							className="glass-panel glass-panel-hover p-8 text-center group cursor-pointer relative overflow-hidden transform hover:scale-105 transition-all duration-500"
						>
							{/* Background gradient */}
							<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							
							{/* Icon with animation */}
							<div className="relative z-10 mb-6">
								<div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
									📡
								</div>
								<div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
							</div>
							
							<h3 className="text-2xl text-white font-semibold mb-4 group-hover:text-purple-300 transition-colors">Initiate Contact</h3>
							<p className="text-gray-400 text-lg mb-6">Ready to discuss your next project</p>
							
							{/* Action button */}
							<div className="inline-flex items-center space-x-3 px-6 py-3 bg-purple-500/20 border border-purple-400/30 rounded-full group-hover:bg-purple-500/30 transition-colors">
								<span className="text-purple-400 text-lg font-medium">ESTABLISH CONNECTION</span>
								<span className="text-purple-400 group-hover:translate-x-1 transition-transform">→</span>
							</div>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}