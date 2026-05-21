export interface TextChunk {
	id: string;
	documentId: string;
	title: string;
	url: string;
	source: string;
	heading: string;
	text: string;
}

const APPROX_CHARS_PER_TOKEN = 4;
const TARGET_CHUNK_CHARS = 600 * APPROX_CHARS_PER_TOKEN;
const OVERLAP_CHARS = 80 * APPROX_CHARS_PER_TOKEN;

/** Slugifies a heading for stable chunk IDs. */
function slugifyHeading(heading: string): string {
	return heading
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "")
		.slice(0, 48) || "section";
}

/** Splits markdown/text into chunks by ## headings with size cap. */
export function chunkDocumentText(
	documentId: string,
	title: string,
	url: string,
	source: string,
	rawText: string,
): TextChunk[] {
	const sections = rawText.split(/\n(?=##\s+)/);
	const chunks: TextChunk[] = [];

	for (const section of sections) {
		const trimmed = section.trim();
		if (!trimmed) continue;

		const headingMatch = trimmed.match(/^##\s+(.+)$/m);
		const heading = headingMatch ? headingMatch[1].trim() : title;
		const sectionSlug = slugifyHeading(heading);

		if (trimmed.length <= TARGET_CHUNK_CHARS) {
			chunks.push({
				id: `${documentId}:${sectionSlug}`,
				documentId,
				title,
				url,
				source,
				heading,
				text: trimmed,
			});
			continue;
		}

		let start = 0;
		let part = 0;
		while (start < trimmed.length) {
			const end = Math.min(start + TARGET_CHUNK_CHARS, trimmed.length);
			const slice = trimmed.slice(start, end).trim();
			if (slice) {
				chunks.push({
					id: `${documentId}:${sectionSlug}:${part}`,
					documentId,
					title,
					url,
					source,
					heading,
					text: slice,
				});
				part += 1;
			}
			if (end >= trimmed.length) break;
			start = end - OVERLAP_CHARS;
		}
	}

	return chunks;
}
