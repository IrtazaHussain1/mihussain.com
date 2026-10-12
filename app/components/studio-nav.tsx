"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getApprovedTestimonials } from "@/lib/testimonials";

const hasTestimonials = getApprovedTestimonials().length > 0;

const NAV_ITEMS = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/projects", label: "Work" },
	{ href: "/services/scraping", label: "Scraping" },
	{ href: "/services", label: "Services" },
	{ href: "/faq", label: "FAQ" },
	...(hasTestimonials ? [{ href: "/testimonials", label: "Testimonials" }] : []),
	{ href: "/contact", label: "Contact" },
];

/**
 * Fixed pill navigation matching the new_design studio shell.
 */
export function StudioNav() {
	const pathname = usePathname() ?? "/";
	// Highlight only the most specific match, so /services/scraping lights up
	// "Scraping" and not "Services" as well.
	const current = NAV_ITEMS.filter((item) =>
		item.href === "/"
			? pathname === "/"
			: pathname === item.href || pathname.startsWith(`${item.href}/`),
	).sort((a, b) => b.href.length - a.href.length)[0]?.href;

	return (
		<nav className="studio-nav" aria-label="Primary">
			{NAV_ITEMS.map((item) => {
				const isCurrent = item.href === current;
				return (
					<Link
						key={item.href}
						href={item.href}
						aria-current={isCurrent ? "page" : undefined}
					>
						{item.label}
					</Link>
				);
			})}
		</nav>
	);
}
