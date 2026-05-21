import { Index } from "@upstash/vector";
import type { TextChunk } from "@/lib/knowledge/chunk";

const INDEX_NAME = "portfolio-knowledge";

export interface VectorMetadata extends Record<string, unknown> {
	documentId: string;
	title: string;
	url: string;
	source: string;
	heading: string;
	text: string;
}

/** Returns Upstash Vector index when configured. */
export function getVectorIndex(): Index | null {
	const url = process.env.UPSTASH_VECTOR_REST_URL;
	const token = process.env.UPSTASH_VECTOR_REST_TOKEN;
	if (!url || !token) return null;
	return new Index({ url, token });
}

export function isVectorConfigured(): boolean {
	return Boolean(
		process.env.UPSTASH_VECTOR_REST_URL &&
			process.env.UPSTASH_VECTOR_REST_TOKEN,
	);
}

/** Upserts knowledge chunks into Upstash Vector. */
export async function upsertChunks(
	chunks: TextChunk[],
	embeddings: number[][],
): Promise<void> {
	const index = getVectorIndex();
	if (!index) {
		throw new Error(
			"UPSTASH_VECTOR_REST_URL and UPSTASH_VECTOR_REST_TOKEN are required",
		);
	}

	const vectors = chunks.map((chunk, i) => ({
		id: chunk.id,
		vector: embeddings[i],
		metadata: {
			documentId: chunk.documentId,
			title: chunk.title,
			url: chunk.url,
			source: chunk.source,
			heading: chunk.heading,
			text: chunk.text.slice(0, 4000),
		} satisfies VectorMetadata,
	}));

	const batchSize = 100;
	for (let i = 0; i < vectors.length; i += batchSize) {
		await index.upsert(vectors.slice(i, i + batchSize));
	}
}

export { INDEX_NAME };
