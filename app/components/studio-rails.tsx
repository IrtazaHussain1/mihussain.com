"use client";

import { useEffect, useState } from "react";

/** Formats current local time as HH:MM for the bottom rail. */
function formatTime(): string {
	const d = new Date();
	const hh = String(d.getHours()).padStart(2, "0");
	const mm = String(d.getMinutes()).padStart(2, "0");
	return `${hh}:${mm}`;
}

/**
 * Decorative fixed rails (desktop): studio metadata and section index.
 * Clock renders after mount to avoid server/client timezone hydration mismatch.
 */
export function StudioRails() {
	const [time, setTime] = useState<string | null>(null);

	useEffect(() => {
		setTime(formatTime());
		const id = setInterval(() => setTime(formatTime()), 30_000);
		return () => clearInterval(id);
	}, []);

	return (
		<div className="studio-rails" aria-hidden>
			<div className="rail rail-top">
				<span>I.H. / Engineering Studio</span>
				<span style={{ display: "flex", gap: 14, alignItems: "center" }}>
					<span>LAT 33.6° N · LON 73.0° E</span>
					<span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
						<i className="dot blink" />
						AVAILABLE / JUN &apos;26
					</span>
				</span>
			</div>
			<div className="rail rail-bottom">
				<span>PORTFOLIO · STUDIO</span>
				<span suppressHydrationWarning>
					LOCAL {time ?? "——:——"} · PKT (UTC+5)
				</span>
			</div>
			<div className="rail rail-left">SCROLL · READ · SHIP</div>
			<div className="rail rail-right">ENGINEERING · QUIETLY SENIOR</div>
		</div>
	);
}
