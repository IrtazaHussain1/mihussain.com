import Link from "next/link";
import {
	getApprovedTestimonials,
	projectTagHref,
	type Testimonial,
} from "@/lib/testimonials";

type Props = {
	/** Show the section heading block (home). The /testimonials page has its own h1. */
	withHeading?: boolean;
	/** Optional explicit list. Defaults to approved testimonials. */
	items?: Testimonial[];
};

/**
 * Testimonial cards. Renders nothing when there are no approved testimonials,
 * so callers never show an empty state.
 */
export function Testimonials({ withHeading = true, items }: Props) {
	const list = items ?? getApprovedTestimonials();
	if (list.length === 0) return null;

	return (
		<section
			className="mt-28 md:mt-[120px]"
			aria-labelledby={withHeading ? "testimonials-heading" : undefined}
			aria-label={withHeading ? undefined : "Testimonials"}
		>
			{withHeading ? (
				<header className="mb-9">
					<div className="eyebrow mb-3">§&nbsp;&nbsp;Testimonials</div>
					<h2
						id="testimonials-heading"
						className="display m-0"
						style={{ fontSize: "clamp(38px, 4.6vw, 64px)" }}
					>
						What clients <em>say</em>.
					</h2>
				</header>
			) : null}

			<ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2">
				{list.map((t) => {
					const href = projectTagHref(t.projectTag);
					return (
						<li key={t.id}>
							<figure
								className="m-0 flex h-full flex-col justify-between gap-8 border p-6 md:p-8"
								style={{
									borderColor: "var(--line)",
									background: "var(--bg-elev)",
								}}
							>
								<blockquote
									className="display m-0 leading-snug tracking-tight"
									style={{
										fontSize: "clamp(20px, 1.9vw, 26px)",
										color: "var(--fg)",
									}}
								>
									<p className="m-0">&ldquo;{t.quote}&rdquo;</p>
								</blockquote>
								<figcaption className="flex flex-wrap items-end justify-between gap-4">
									<div>
										<div className="mb-1 text-[15px]" style={{ color: "var(--fg)" }}>
											{t.linkedinUrl ? (
												<a
													href={t.linkedinUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="underline-offset-4 hover:underline"
												>
													{t.name}
												</a>
											) : (
												t.name
											)}
										</div>
										<div
											className="mono text-[11.5px] uppercase tracking-wide"
											style={{ color: "var(--fg-mute)" }}
										>
											{t.role} · {t.company}
										</div>
									</div>
									{href ? (
										<Link
											href={href}
											className="chip hover:!text-[color:var(--fg)]"
											aria-label={`Project: ${t.projectTag}`}
										>
											<i className="dot-sm" aria-hidden />
											{t.projectTag}
										</Link>
									) : null}
								</figcaption>
							</figure>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
