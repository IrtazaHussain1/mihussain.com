import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FooterPrompt } from "../components/footer-prompt";
import { Testimonials } from "../components/testimonials";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getApprovedTestimonials } from "@/lib/testimonials";

export const metadata: Metadata = buildPageMetadata({
	title: "Testimonials",
	description:
		"What clients say about working with Irtaza Hussain on web scraping, data pipelines, browser automation and backend engineering.",
	path: "/testimonials",
});

export default function TestimonialsPage() {
	const items = getApprovedTestimonials();
	// No approved testimonials yet: the page doesn't exist (nav and sitemap hide it too).
	if (items.length === 0) notFound();

	return (
		<div className="studio-page">
			<header className="mb-4">
				<div className="eyebrow mb-6">§&nbsp;&nbsp;Testimonials</div>
				<h1
					className="display m-0"
					style={{ fontSize: "clamp(56px, 8vw, 124px)" }}
				>
					What clients
					<br />
					<em>say</em>.
				</h1>
			</header>

			<Testimonials withHeading={false} items={items} />

			<FooterPrompt />
		</div>
	);
}
