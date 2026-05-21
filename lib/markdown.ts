import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";

/** Converts project MDX body markdown into HTML for rendering. */
export async function markdownToHtml(source: string): Promise<string> {
	const file = await unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeSlug)
		.use(rehypePrettyCode, { theme: "github-dark" } as never)
		.use(rehypeAutolinkHeadings, {
			properties: {
				className: ["subheading-anchor"],
				ariaLabel: "Link to section",
			},
		})
		.use(rehypeStringify)
		.process(source);

	return String(file);
}
