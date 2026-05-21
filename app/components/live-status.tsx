"use client";

import { useEffect, useMemo, useState } from "react";

const LINES = [
	{
		tag: "BUILD",
		text: "inference-gateway · main → green · 4.2s · 198 tests",
	},
	{
		tag: "DEPLOY",
		text: "sensor-mesh edge fleet · 412 nodes · drift 0.02%",
	},
	{
		tag: "COMMIT",
		text: "operator-console · feat: realtime tail · +186 −24",
	},
	{
		tag: "REVIEW",
		text: "orderkit/v3 RFC: 6 comments resolved, shipping",
	},
	{
		tag: "NOTE",
		text: "open for new work Q3 · backend / ai / automation",
	},
] as const;

/**
 * Monospace status line with typewriter-style reveal (home hero).
 */
export function LiveStatus() {
	const lines = useMemo(() => [...LINES], []);
	const [i, setI] = useState(0);
	const [shown, setShown] = useState("");

	useEffect(() => {
		const target = lines[i].text;
		if (shown === target) {
			const t = setTimeout(() => {
				setShown("");
				setI((prev) => (prev + 1) % lines.length);
			}, 2600);
			return () => clearTimeout(t);
		}
		const t = setTimeout(() => setShown(target.slice(0, shown.length + 1)), 22);
		return () => clearTimeout(t);
	}, [shown, i, lines]);

	return (
		<div
			style={{
				fontFamily: "var(--font-mono)",
				fontSize: 12,
				letterSpacing: 0.02,
				display: "flex",
				gap: 14,
				alignItems: "center",
				color: "var(--fg-mute)",
			}}
		>
			<span
				style={{
					display: "inline-flex",
					alignItems: "center",
					gap: 8,
					padding: "4px 10px",
					border: "0.5px solid var(--line)",
					borderRadius: 999,
					fontSize: 10.5,
					textTransform: "uppercase",
					letterSpacing: 0.08,
					color: "var(--fg-dim)",
				}}
			>
				<i
					style={{
						width: 6,
						height: 6,
						borderRadius: 99,
						background: "var(--accent)",
						boxShadow: "0 0 10px var(--accent)",
					}}
				/>
				STATUS · {lines[i].tag}
			</span>
			<span>
				{shown}
				<i
					className="live-status-cursor"
					style={{
						display: "inline-block",
						width: 8,
						height: 14,
						marginLeft: 2,
						background: "var(--accent)",
						verticalAlign: "-2px",
					}}
				/>
			</span>
		</div>
	);
}
