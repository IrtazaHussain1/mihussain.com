"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowR } from "../components/arrow-r";

interface FormState {
	name: string;
	co: string;
	email: string;
	kind: string;
	timeline: string;
	detail: string;
}

const INITIAL_FORM: FormState = {
	name: "",
	co: "",
	email: "",
	kind: "Backend",
	timeline: "4–8 wks",
	detail: "",
};

const WORK_KINDS = ["Backend", "AI", "IoT", "Other"] as const;
const TIMELINES = ["< 4 wks", "4–8 wks", "8–14 wks", "Open"] as const;

/**
 * Engagement brief form with segmented controls and success state.
 */
export function ContactForm() {
	const [sent, setSent] = useState(false);
	const [form, setForm] = useState<FormState>(INITIAL_FORM);

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setSent(true);
	}

	function handleReset() {
		setSent(false);
		setForm(INITIAL_FORM);
	}

	if (sent) {
		const firstName = form.name.split(" ")[0] || "friend";
		return (
			<div className="contact-brief-sent">
				<div className="eyebrow mb-4">§&nbsp;&nbsp;Received</div>
				<h2 className="display mb-3.5" style={{ fontSize: 40, margin: 0 }}>
					Thanks, <em>{firstName}</em>.
				</h2>
				<p
					className="m-0 leading-relaxed"
					style={{ color: "var(--fg-mute)" }}
				>
					I&apos;ll be in touch at{" "}
					<span className="mono" style={{ color: "var(--fg)" }}>
						{form.email || "the address provided"}
					</span>{" "}
					within two business days. If it&apos;s urgent, email or LinkedIn will
					reach me faster.
				</p>
				<button type="button" className="btn mt-6" onClick={handleReset}>
					Send another
				</button>
			</div>
		);
	}

	return (
		<form className="contact-brief-form" onSubmit={handleSubmit}>
			<div className="eyebrow">§&nbsp;&nbsp;Brief / new engagement</div>

			<Field label="Your name" required>
				<input
					value={form.name}
					onChange={(e) => setForm({ ...form, name: e.target.value })}
					placeholder="e.g. Maya Okonkwo"
					required
				/>
			</Field>

			<Field label="Company / project">
				<input
					value={form.co}
					onChange={(e) => setForm({ ...form, co: e.target.value })}
					placeholder="e.g. Northtide Logistics"
				/>
			</Field>

			<Field label="Email" required>
				<input
					type="email"
					value={form.email}
					onChange={(e) => setForm({ ...form, email: e.target.value })}
					placeholder="you@company.com"
					required
				/>
			</Field>

			<Field label="What kind of work">
				<Segmented
					options={WORK_KINDS}
					value={form.kind}
					onChange={(kind) => setForm({ ...form, kind })}
				/>
			</Field>

			<Field label="Rough timeline">
				<Segmented
					options={TIMELINES}
					value={form.timeline}
					onChange={(timeline) => setForm({ ...form, timeline })}
				/>
			</Field>

			<Field label="Tell me more">
				<textarea
					rows={5}
					value={form.detail}
					onChange={(e) => setForm({ ...form, detail: e.target.value })}
					placeholder="What are you building, what's stuck, what does done look like?"
				/>
			</Field>

			<button type="submit" className="btn primary self-start">
				Send brief <ArrowR />
			</button>

			<p className="mono dim m-0 text-[11px] leading-relaxed">
				↳ I&apos;ll reply within two business days. Briefs are kept private and
				never shared outside the engagement.
			</p>
		</form>
	);
}

function Field({
	label,
	children,
	required,
}: {
	label: string;
	children: ReactNode;
	required?: boolean;
}) {
	return (
		<label className="studio-field">
			<span className="eyebrow">
				{label}
				{required ? (
					<span style={{ color: "var(--accent)" }}> ·</span>
				) : null}
			</span>
			{children}
		</label>
	);
}

function Segmented<T extends string>({
	options,
	value,
	onChange,
}: {
	options: readonly T[];
	value: T;
	onChange: (value: T) => void;
}) {
	return (
		<div
			className="studio-segmented"
			style={{
				gridTemplateColumns: `repeat(${options.length}, 1fr)`,
			}}
		>
			{options.map((option) => (
				<button
					key={option}
					type="button"
					data-active={value === option ? "true" : "false"}
					onClick={() => onChange(option)}
				>
					{option}
				</button>
			))}
		</div>
	);
}
