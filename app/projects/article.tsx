import type { Project } from "../../lib/mdx";
import Link from "next/link";
import { Eye, View } from "lucide-react";

type Props = {
	project: Project;
	showReadme?: boolean;
};

export const Article: React.FC<Props> = ({ project, showReadme }) => {
	const skills = project?.skills?.split("|") || [];
	return (
		<article className="p-4 md:p-8 relative h-full flex flex-col">
			<Link 
				href={`/projects/${project?.slug}`}
				className="absolute inset-0 z-30"
				aria-label={`View ${project?.title} project`}
			/>
			<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
				{project?.title}
			</h2>
			<p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
				{project?.description}
			</p>
			<div className="mt-4 flex-1">
				<p className="text-sm text-zinc-400 group-hover:text-zinc-300 mb-2">
					Technologies:
				</p>
				<div className="flex flex-wrap gap-1">
					{skills.map((skill) => (
						<span 
							key={skill} 
							className="rounded-full text-xs bg-white/10 py-1 px-2 border border-cyan-400/30 text-cyan-300 group-hover:bg-cyan-400/20 group-hover:border-cyan-400/50 transition-colors duration-300"
						>
							{skill}
						</span>
					))}
				</div>
			</div>
			{showReadme && (
				<div className="mt-4 pt-4 border-t border-white/10">
					<div className="flex items-center justify-between">
						<p className="text-sm text-cyan-400 group-hover:text-white transition-colors duration-300">
							View Project Details
						</p>
						<span className="text-cyan-400 group-hover:text-white transition-colors duration-300">
							→
						</span>
					</div>
				</div>
			)}
		</article>
	);
};
