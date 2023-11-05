import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  bg-zinc-900/0 border-transparent my-16 animate-fade-in">
				<ul className="flex flex-wrap items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
					<Link
						href="../resume.pdf"
						target="_blank"
						className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						download
					>
						Resume
					</Link>
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={3000}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-gradient-to-l from-yellow-600 to-orange-400">
				M. Irtaza Hussain
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-md text-zinc-500">
				Hi, I'm a <span className="text-zinc-300">Software Engineer</span> with 5+ years of experience.
				<br/>
				My expertise lies in 
				<span className="bg-transparent pb-1 mx-1 border border-b-amber-400/30 border-x-transparent border-t-transparent">Python</span>(Django, Flask, FastAPI), 
				<span className="bg-transparent pb-1 mx-1 border border-b-amber-400/30 border-x-transparent border-t-transparent">Dotnet</span>,
				<span className="bg-transparent pb-1 mx-1 border border-b-amber-400/30 border-x-transparent border-t-transparent">Automation</span>,
				<span className="bg-transparent pb-1 mx-1 border border-b-amber-400/30 border-x-transparent border-t-transparent">Javascript</span> Frameworks, 
				<br/>
				mainly the MERN Stack, along with many other technologies, tools.
				</h2>
			</div>
		</div>
	);
}
