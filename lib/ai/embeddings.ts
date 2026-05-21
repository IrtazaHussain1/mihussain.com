import { embed, embedMany } from "ai";
import { openrouter, getEmbeddingModelId } from "./openrouter";

/** Embeds a single text string via OpenRouter. */
export async function embedText(text: string): Promise<number[]> {
	const model = openrouter.embedding(getEmbeddingModelId());
	const { embedding } = await embed({ model, value: text });
	return embedding;
}

/** Embeds multiple strings in one request. */
export async function embedTexts(texts: string[]): Promise<number[][]> {
	if (texts.length === 0) return [];
	const model = openrouter.embedding(getEmbeddingModelId());
	const { embeddings } = await embedMany({ model, values: texts });
	return embeddings;
}
