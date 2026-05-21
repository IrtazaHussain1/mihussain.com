interface JsonLdProps {
	data: Record<string, unknown> | Record<string, unknown>[];
}

/** Renders JSON-LD structured data for SEO. */
export function JsonLd({ data }: JsonLdProps) {
	const items = Array.isArray(data) ? data : [data];
	return (
		<>
			{items.map((item, i) => (
				<script
					key={i}
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
				/>
			))}
		</>
	);
}
