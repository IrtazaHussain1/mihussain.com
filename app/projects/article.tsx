import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye, View } from "lucide-react";

type Props = {
	project: Project;
	showReadme?: boolean;
};

export const Article: React.FC<Props> = ({ project, showReadme }) => {
	const skills = project?.skills?.split("|") || [];
	return (
		<Link href={`/projects/${project?.slug}`}>
			<article className="p-4 md:p-8">
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display font-display">
					{project?.title}
				</h2>
				<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{project?.description}
				</p>
				<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
					Skills:
					{skills.map((skill) => (
						<span key={skill} className="rounded-full text-xs bg-transparent py-1 px-2 mx-1 border border-amber-400/30 inline-block mb-2">{skill}</span>
					))}
				</p>
				<br/>
				{showReadme ? 
				(
					<div className="absolute bottom-4 md:bottom-8">
						<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
							Read more <span aria-hidden="true">&rarr;</span>
						</p>
					</div>
				): ""
				}
			</article>
		</Link>
	);
};
