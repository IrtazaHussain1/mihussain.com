import type { Metadata } from "next";
import Link from "next/link";
import { FooterPrompt } from "../components/footer-prompt";
import { JsonLd } from "../components/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { faqPageJsonLd } from "@/lib/seo/json-ld";
import { loadFaqItems } from "@/lib/knowledge/faq";

export const metadata: Metadata = buildPageMetadata({
	title: "FAQ",
	description:
		"Frequently asked questions about Irtaza Hussain: skills, projects, services, and how to get in touch.",
	path: "/faq",
});

export default function FaqPage() {
	const items = loadFaqItems();

	return (
		<div className="studio-page max-w-[800px]">
			<JsonLd data={faqPageJsonLd(items)} />
			<div className="eyebrow mb-6">§&nbsp;&nbsp;FAQ / Knowledge</div>

			<h1
				className="display mb-6"
				style={{ fontSize: "clamp(40px, 6vw, 72px)", margin: 0 }}
			>
				Questions, <em>answered</em>.
			</h1>

			<p
				className="mb-12 max-w-[560px] text-[17px] leading-relaxed"
				style={{ color: "var(--fg-mute)" }}
			>
				Straight answers about my work, stack, and projects. You can also use
				the{" "}
				<span style={{ color: "var(--fg)" }}>chat widget</span> on any page to
				ask questions about what I have built.
			</p>

			<dl className="m-0 space-y-10">
				{items.map((item) => (
					<div
						key={item.question}
						className="border-t pt-8"
						style={{ borderColor: "var(--line-soft)" }}
					>
						<dt
							className="mb-3 text-lg font-medium"
							style={{ color: "var(--fg)" }}
						>
							{item.question}
						</dt>
						<dd
							className="m-0 text-[15px] leading-relaxed"
							style={{ color: "var(--fg-mute)" }}
						>
							{item.answer}
						</dd>
					</div>
				))}
			</dl>

			<div className="mt-14 flex flex-wrap gap-3">
				<Link href="/projects" className="btn">
					View projects
				</Link>
				<Link href="/contact" className="btn primary">
					Get in touch
				</Link>
			</div>

			<FooterPrompt />
		</div>
	);
}
