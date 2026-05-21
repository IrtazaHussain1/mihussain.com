import { createOpenAI } from "@ai-sdk/openai";
import { SITE_URL, SITE_NAME } from "@/lib/seo/metadata";

/** OpenRouter-compatible OpenAI client for chat and embeddings. */
export const openrouter = createOpenAI({
	baseURL: "https://openrouter.ai/api/v1",
	apiKey: process.env.OPENROUTER_API_KEY,
	headers: {
		"HTTP-Referer": SITE_URL,
		"X-Title": SITE_NAME,
	},
});

export function getChatModelId(): string {
	return process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini";
}

export function getEmbeddingModelId(): string {
	return (
		process.env.OPENROUTER_EMBEDDING_MODEL || "openai/text-embedding-3-small"
	);
}
