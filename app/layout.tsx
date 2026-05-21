import "../global.css";
import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import { Analytics } from "./components/analytics";
import { JsonLd } from "./components/json-ld";
import { StudioNav } from "./components/studio-nav";
import { StudioRails } from "./components/studio-rails";
import { PersonifyWidget } from "./components/personify-widget";
import {
	buildPageMetadata,
	DEFAULT_DESCRIPTION,
	SITE_NAME,
} from "@/lib/seo/metadata";
import { personJsonLd, websiteJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = {
	...buildPageMetadata({
		title: SITE_NAME,
		description: DEFAULT_DESCRIPTION,
		path: "/",
	}),
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	icons: {
		shortcut: "/favicon.png",
	},
};

const instrumentSerif = Instrument_Serif({
	subsets: ["latin"],
	weight: "400",
	style: ["normal", "italic"],
	variable: "--font-instrument-display",
	display: "swap",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${instrumentSerif.variable} studio-theme`}
			suppressHydrationWarning
		>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap"
					rel="stylesheet"
				/>
				<Analytics />
				<link
					rel="alternate"
					type="text/plain"
					href="/llms.txt"
					title="LLM site index"
				/>
			</head>
			<body
				className={`studio-theme ${
					process.env.NODE_ENV === "development" ? "debug-screens" : ""
				}`}
				data-texture="grid"
				data-density="regular"
				suppressHydrationWarning
			>
				<JsonLd data={[personJsonLd(), websiteJsonLd()]} />
				<StudioRails />
				<StudioNav />
				<div className="shell">{children}</div>
				<PersonifyWidget />
			</body>
		</html>
	);
}
