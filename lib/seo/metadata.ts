import type { Metadata } from "next";

export const SITE_URL = "https://irtazahussain.com";
export const SITE_NAME = "Irtaza Hussain";
export const DEFAULT_DESCRIPTION =
	"Senior software engineer building products and platforms: backend, full-stack, cloud, and AI integration.";

interface PageMetadataInput {
	title: string;
	description?: string;
	path?: string;
	ogImage?: string;
	noIndex?: boolean;
}

/** Builds Next.js Metadata for a site page with canonical and Open Graph. */
export function buildPageMetadata({
	title,
	description = DEFAULT_DESCRIPTION,
	path = "",
	ogImage = "/og.png",
	noIndex = false,
}: PageMetadataInput): Metadata {
	const url = `${SITE_URL}${path}`;
	const imageUrl = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

	return {
		title,
		description,
		alternates: { canonical: url },
		openGraph: {
			title: `${title} | ${SITE_NAME}`,
			description,
			url,
			siteName: SITE_NAME,
			images: [{ url: imageUrl, width: 1920, height: 1080 }],
			locale: "en-US",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: `${title} | ${SITE_NAME}`,
			description,
		},
		robots: noIndex
			? { index: false, follow: false }
			: {
					index: true,
					follow: true,
					googleBot: {
						index: true,
						follow: true,
						"max-video-preview": -1,
						"max-image-preview": "large",
						"max-snippet": -1,
					},
				},
	};
}
