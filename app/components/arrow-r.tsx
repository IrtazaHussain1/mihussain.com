/** Right arrow icon for buttons (studio theme). */
export function ArrowR({ size = 14 }: { size?: number }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 16 16"
			className="arrow"
			aria-hidden
		>
			<path
				d="M3 8h10M9 4l4 4-4 4"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
