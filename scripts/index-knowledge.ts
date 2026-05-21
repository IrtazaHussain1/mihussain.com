/**
 * Indexes portfolio knowledge chunks into Upstash Vector.
 * Run: pnpm index:knowledge
 */
import "dotenv/config";
import { getAllKnowledgeChunks } from "../lib/knowledge";
import { embedTexts } from "../lib/ai/embeddings";
import { upsertChunks, isVectorConfigured } from "../lib/vector";

async function main() {
	if (!process.env.OPENROUTER_API_KEY) {
		console.error("OPENROUTER_API_KEY is required");
		process.exit(1);
	}
	if (!isVectorConfigured()) {
		console.error(
			"UPSTASH_VECTOR_REST_URL and UPSTASH_VECTOR_REST_TOKEN are required",
		);
		process.exit(1);
	}

	const chunks = getAllKnowledgeChunks();
	console.log(`Indexing ${chunks.length} chunks...`);

	const texts = chunks.map((c) => `${c.title}\n${c.heading}\n${c.text}`);
	const embeddings = await embedTexts(texts);

	await upsertChunks(chunks, embeddings);
	console.log("Done.");
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
