import fs from "fs";
import path from "path";
import { getAllProjects } from "@/lib/mdx";
import { chunkDocumentText, type TextChunk } from "./chunk";

export type { TextChunk } from "./chunk";
import { loadFaqMarkdown } from "./faq";

export interface KnowledgeDocument {
	id: string;
	source: "project" | "page" | "faq";
	title: string;
	url: string;
	text: string;
	metadata?: Record<string, string>;
}

const pagesDir = path.join(process.cwd(), "content/pages");

function readPageMarkdown(filename: string): string {
	const fullPath = path.join(pagesDir, filename);
	if (!fs.existsSync(fullPath)) return "";
	return fs.readFileSync(fullPath, "utf8");
}

/** Collects all knowledge documents from projects, static pages, and FAQ. */
export function getKnowledgeDocuments(): KnowledgeDocument[] {
	const docs: KnowledgeDocument[] = [];

	for (const project of getAllProjects()) {
		const header = [
			`# ${project.title}`,
			project.summary || project.description,
			project.skills ? `Skills: ${project.skills.split("|").join(", ")}` : "",
			project.url ? `Live: ${project.url}` : "",
		]
			.filter(Boolean)
			.join("\n\n");

		docs.push({
			id: `project:${project.slug}`,
			source: "project",
			title: project.title,
			url: `/projects/${project.slug}`,
			text: `${header}\n\n${project.content}`,
			metadata: {
				slug: project.slug,
				date: project.date || "",
			},
		});
	}

	const pageFiles: { file: string; id: string; title: string; url: string }[] =
		[
			{ file: "about.md", id: "page:about", title: "About", url: "/about" },
			{
				file: "services.md",
				id: "page:services",
				title: "Services",
				url: "/services",
			},
		];

	for (const page of pageFiles) {
		const text = readPageMarkdown(page.file);
		if (!text) continue;
		docs.push({
			id: page.id,
			source: "page",
			title: page.title,
			url: page.url,
			text,
		});
	}

	const faqText = loadFaqMarkdown();
	if (faqText) {
		docs.push({
			id: "faq:portfolio",
			source: "faq",
			title: "Portfolio FAQ",
			url: "/faq",
			text: faqText,
		});
	}

	return docs;
}

/** Returns all text chunks for vector indexing and RAG. */
export function getAllKnowledgeChunks(): TextChunk[] {
	const chunks: TextChunk[] = [];

	for (const doc of getKnowledgeDocuments()) {
		chunks.push(
			...chunkDocumentText(
				doc.id,
				doc.title,
				doc.url,
				doc.source,
				doc.text,
			),
		);
	}

	return chunks;
}
