import Script from "next/script";

const PERSONIFY_CLONE_ID = "irtaza-hussain-tdbo";

/** Personify popup chat widget (clone configured in Personify dashboard). */
export function PersonifyWidget() {
	return (
		<Script
			src="https://app.personify.fyi/widget.js"
			data-clone-id={PERSONIFY_CLONE_ID}
			strategy="lazyOnload"
		/>
	);
}
