type Props = {
	tag?: string;
	label?: string;
	tall?: boolean;
	className?: string;
};

/**
 * Striped placeholder block (portrait / media slots in studio pages).
 */
export function StudioPlaceholder({
	tag = "PLACEHOLDER",
	label,
	tall,
	className = "",
}: Props) {
	return (
		<div
			className={`placeholder ${className}`}
			style={{
				minHeight: tall ? 520 : 220,
				aspectRatio: tall ? "4 / 5" : undefined,
			}}
		>
			{label ? (
				<span style={{ textAlign: "right", maxWidth: "60%" }}>{label}</span>
			) : (
				<span />
			)}
			<span className="ph-tag">{tag}</span>
		</div>
	);
}
