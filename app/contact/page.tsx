"use client";
import { Github, Mail, Twitter, Linkedin, MapPin, Phone, Clock, Send } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles";

const socials = [
	{
		icon: <Linkedin size={24} />,
		href: "https://www.linkedin.com/in/mihussain1/",
		label: "LinkedIn",
		handle: "Irtaza Hussain",
		description: "Professional networking and career updates",
		color: "from-blue-500 to-blue-600",
	},
	{
		icon: <Mail size={24} />,
		href: "mailto:mihussain.official@gmail.com",
		label: "Email",
		handle: "mihussain.official@gmail.com",
		description: "Direct communication for projects and inquiries",
		color: "from-green-500 to-green-600",
	},
	{
		icon: <Github size={24} />,
		href: "https://github.com/irtazahussain1",
		label: "GitHub",
		handle: "irtazahussain1",
		description: "Open source projects and code repositories",
		color: "from-gray-500 to-gray-600",
	},
	{
		icon: <Twitter size={24} />,
		href: "https://twitter.com/irtazahussain9",
		label: "Twitter",
		handle: "@irtazahussain9",
		description: "Tech thoughts, updates, and networking",
		color: "from-blue-400 to-cyan-500",
	},
];

const contactInfo = [
	{
		icon: <MapPin size={20} />,
		label: "Location",
		value: "Remote / Global",
		description: "Available for remote work worldwide"
	},
	{
		icon: <Clock size={20} />,
		label: "Response Time",
		value: "< 24 hours",
		description: "Quick response to all inquiries"
	},
	{
		icon: <Phone size={20} />,
		label: "Availability",
		value: "Mon - Fri",
		description: "Best time for calls and meetings"
	}
];

export default function ContactPage() {
	return (
		<div className="bg-black matrix-bg min-h-screen">
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={1500}
			/>
			<Navigation />
			
			<div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-16">
					<div className="flex items-center justify-center space-x-4 mb-6">
						<div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
						<h1 className="text-4xl sm:text-5xl font-bold text-white holographic-text">
							CONTACT CENTER
						</h1>
					</div>
					<p className="text-cyan-400 text-lg max-w-2xl mx-auto">
						Ready to discuss your next project? Let's connect and bring your ideas to life with cutting-edge technology.
					</p>
					<div className="mt-6 flex items-center justify-center space-x-4">
						<div className="flex items-center space-x-2">
							<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
							<span className="text-green-400 text-sm">ONLINE</span>
						</div>
						<div className="flex items-center space-x-2">
							<div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
							<span className="text-blue-400 text-sm">AVAILABLE</span>
						</div>
					</div>
				</div>

				{/* Contact Information Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
					{contactInfo.map((info, index) => (
						<div key={index} className="glass-panel glass-panel-hover p-6 text-center">
							<div className="flex items-center justify-center mb-4">
								<div className="p-3 bg-white/10 rounded-full border border-white/20">
									{info.icon}
								</div>
							</div>
							<h3 className="text-white font-semibold mb-2">{info.label}</h3>
							<p className="text-cyan-400 font-mono text-sm mb-2">{info.value}</p>
							<p className="text-gray-400 text-xs">{info.description}</p>
						</div>
					))}
				</div>

				{/* Social Links Section */}
				<div className="mb-16">
					<div className="text-center mb-8">
						<h2 className="text-2xl font-bold text-white mb-2">CONNECT WITH ME</h2>
						<p className="text-cyan-400">Choose your preferred communication channel</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{socials.map((social, index) => (
							<Card key={`social-${index}`}>
								<Link
									href={social.href}
									target="_blank"
									className="p-8 relative flex flex-col items-center gap-6 duration-700 group h-full z-20"
								>
									{/* Background gradient */}
									<div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}></div>
									
									{/* Icon */}
									<div className="relative z-10 p-4 bg-white/10 rounded-full border border-white/20 group-hover:border-white/40 transition-colors duration-300">
										{social.icon}
									</div>
									
									{/* Content */}
									<div className="relative z-10 text-center space-y-2">
										<h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
											{social.label}
										</h3>
										<p className="text-cyan-400 font-mono text-sm">
											{social.handle}
										</p>
										<p className="text-gray-400 text-xs">
											{social.description}
										</p>
									</div>
									
									{/* Hover indicator */}
									<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<Send size={16} className="text-cyan-400" />
									</div>
								</Link>
							</Card>
						))}
					</div>
				</div>

				{/* Call to Action */}
				<div className="glass-panel p-8 text-center">
					<h3 className="text-2xl font-bold text-white mb-4">READY TO START YOUR PROJECT?</h3>
					<p className="text-cyan-400 mb-6 max-w-2xl mx-auto">
						I'm always excited to work on new challenges. Whether you need a full-stack application, 
						API development, or technical consultation, let's discuss how we can achieve your goals.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="mailto:mihussain.official@gmail.com"
							className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
						>
							Send Email
						</Link>
						<Link
							href="https://www.linkedin.com/in/mihussain1/"
							target="_blank"
							className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
						>
							Connect on LinkedIn
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
