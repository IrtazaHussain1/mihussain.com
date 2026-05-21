import Link from "next/link";
import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
	title: "Contact",
	description:
		"Get in touch with Irtaza Hussain for backend, full-stack, cloud, and AI engineering projects.",
	path: "/contact",
});

const ALTERNATIVE_CHANNELS = [
	{
		label: "Email",
		value: "mihussain.official@gmail.com",
		href: "mailto:mihussain.official@gmail.com",
	},
	{
		label: "GitHub",
		value: "github.com/irtazahussain1",
		href: "https://github.com/irtazahussain1",
	},
	{
		label: "LinkedIn",
		value: "linkedin.com/in/mihussain1",
		href: "https://www.linkedin.com/in/mihussain1/",
	},
	{
		label: "Twitter",
		value: "@irtazahussain9",
		href: "https://twitter.com/irtazahussain9",
	},
] as const;

export default function ContactPage() {
	return (
		<div className="studio-page max-w-[1280px]">
			<div className="eyebrow mb-6">§&nbsp;&nbsp;06 / Contact</div>

			<div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
				<div>
					<h1
						className="display mb-7"
						style={{
							fontSize: "clamp(54px, 7.6vw, 116px)",
							margin: 0,
						}}
					>
						Tell me what
						<br />
						you&apos;re <em>building</em>.
					</h1>
					<p
						className="m-0 max-w-[520px] text-[17px] leading-relaxed"
						style={{ color: "var(--fg-mute)" }}
					>
						I read every message. If the project is a good fit, you will hear back
						within two business days with a proposed call time. If not, I will
						say so plainly and point you to someone better suited when I can.
					</p>

					<div className="mt-12">
						<div className="eyebrow mb-4">§&nbsp;&nbsp;Alternatively</div>
						<div className="flex flex-col">
							{ALTERNATIVE_CHANNELS.map((channel) => (
								<div key={channel.label} className="contact-alt-row">
									<span className="eyebrow">{channel.label}</span>
									<Link
										href={channel.href}
										target={
											channel.href.startsWith("mailto:")
												? undefined
												: "_blank"
										}
										rel="noopener noreferrer"
										className="mono text-sm hover:underline"
										style={{ color: "var(--fg)" }}
									>
										{channel.value}
									</Link>
								</div>
							))}
						</div>
					</div>

					<div className="mt-12">
						<div className="chip" style={{ background: "var(--bg-elev)" }}>
							<i className="dot-sm" />
							Open for new work · from June 2026
						</div>
					</div>
				</div>

				<ContactForm />
			</div>
		</div>
	);
}
