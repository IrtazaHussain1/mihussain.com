import Link from "next/link";
import { ArrowR } from "./arrow-r";

/**
 * Bottom CTA strip used on home and work index (studio theme).
 */
export function FooterPrompt() {
	return (
		<section
			style={{
				marginTop: 120,
				paddingTop: 56,
				paddingBottom: 24,
				borderTop: "0.5px solid var(--line-soft)",
				display: "grid",
				gridTemplateColumns: "1fr auto",
				alignItems: "end",
				gap: 32,
			}}
		>
			<div>
				<div className="eyebrow" style={{ marginBottom: 18 }}>
					§ NEXT / START A PROJECT
				</div>
				<h2
					className="display"
					style={{ fontSize: "clamp(40px, 6vw, 88px)", margin: 0 }}
				>
					Have something <em>worth building</em>
					<br />
					properly?
				</h2>
			</div>
			<Link href="/contact" className="btn primary">
				Get in touch <ArrowR />
			</Link>
		</section>
	);
}
