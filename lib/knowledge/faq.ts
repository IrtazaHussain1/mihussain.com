import fs from "fs";
import path from "path";
import type { FaqItem } from "@/lib/seo/json-ld";

const faqPath = path.join(
	process.cwd(),
	"content/knowledge/portfolio-faq.md",
);

/** Parses ## questions from portfolio-faq.md into FAQ items. */
export function parseFaqMarkdown(raw: string): FaqItem[] {
	const items: FaqItem[] = [];
	const blocks = raw.split(/\n(?=## )/);

	for (const block of blocks) {
		const trimmed = block.trim();
		if (!trimmed.startsWith("## ")) continue;

		const lines = trimmed.split("\n");
		const question = lines[0].replace(/^##\s+/, "").trim();
		const answer = lines.slice(1).join("\n").trim();

		if (question && answer && !question.startsWith("Portfolio FAQ")) {
			items.push({ question, answer });
		}
	}

	return items;
}

/** Loads FAQ items from disk. */
export function loadFaqItems(): FaqItem[] {
	if (!fs.existsSync(faqPath)) return [];
	const raw = fs.readFileSync(faqPath, "utf8");
	return parseFaqMarkdown(raw);
}

/** Returns full FAQ markdown for knowledge indexing. */
export function loadFaqMarkdown(): string {
	if (!fs.existsSync(faqPath)) return "";
	return fs.readFileSync(faqPath, "utf8");
}
