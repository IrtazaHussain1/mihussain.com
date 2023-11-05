import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";
import Particles from "@/app/components/particles";

export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
	return allProjects
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const project = allProjects.find((project) => project.slug === slug);

	if (!project) {
		notFound();
	}

	const views =
		(await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

	return (
		<div className="relative pb-16">
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={500}
			/>
			<Header project={project} views={views} />
			<ReportView slug={project.slug} />

			<article className="px-4 py-12 sm:px-14 mx-auto prose prose-zinc prose-quoteless bg-white rounded-3xl mb-10">
				<Mdx code={project.body.code} />
			</article>
		</div>
	);
}
