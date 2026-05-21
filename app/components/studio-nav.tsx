"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/projects", label: "Work" },
	{ href: "/services", label: "Services" },
	{ href: "/faq", label: "FAQ" },
	{ href: "/testimonials", label: "Testimonials" },
	{ href: "/contact", label: "Contact" },
];

/**
 * Fixed pill navigation matching the new_design studio shell.
 */
export function StudioNav() {
	const pathname = usePathname() ?? "/";

	return (
		<nav className="studio-nav" aria-label="Primary">
			{NAV_ITEMS.map((item) => {
				const isCurrent =
					item.href === "/"
						? pathname === "/"
						: pathname === item.href ||
							pathname.startsWith(`${item.href}/`);
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
