import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye, View } from "lucide-react";

type Props = {
	project: Project;
	views: number;
	showReadme?: boolean;
};

export const Article: React.FC<Props> = ({ project, views, showReadme }) => {
	const skills = project.skills.split("|");
	return (
		<Link href={`/projects/${project.slug}`}>
			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					<span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
						{project.date ? (
							<time dateTime={new Date(project.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(project.date),
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span>
					<span className="text-zinc-500 text-xs  flex items-center gap-1">
						<Eye className="w-4 h-4" />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span>
				</div>
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{project.title}
				</h2>
				<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{project.description}
				</p>
				<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
					Skills:
					{skills.map((skill) => (
						<span key={skill} className="rounded-full text-xs bg-transparent py-1 px-2 mx-1 border border-amber-400/30 inline-block mb-2">{skill}</span>
					))}
				</p>
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
