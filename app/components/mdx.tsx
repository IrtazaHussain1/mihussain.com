import { markdownToHtml } from "@/lib/markdown";

interface MdxProps {
	content: string;
}

/** Renders MDX/Markdown project body as styled HTML. */
export async function Mdx({ content }: MdxProps) {
	const html = await markdownToHtml(content);

	return (
		<div
			className="mdx max-w-none"
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
}
