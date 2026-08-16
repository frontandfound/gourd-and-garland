"use client";

import { FormEvent, useState } from "react";

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch("/api/inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We couldn’t send your request.");
      setStatus("sent");
      setMessage("You’re on the Front & Found list. We’ll be in touch as Fall 2026 plans take shape.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We couldn’t send your request. Please try again shortly.");
    }
  }

  return (
    <form className="inquiry-form" onSubmit={submit} aria-label="Front & Found Fall 2026 priority list form">
      <div className="form-row">
        <label>First name<input name="firstName" autoComplete="given-name" required /></label>
        <label>Last name<input name="lastName" autoComplete="family-name" required /></label>
      </div>
      <div className="form-row">
        <label>Email<input type="email" name="email" autoComplete="email" required /></label>
        <label>Town / ZIP<input name="location" autoComplete="postal-code" required /></label>
      </div>
      <label>What would you like styled?
        <select name="package" defaultValue="">
          <option value="" disabled>Choose an option</option>
          <option>Front Stoop</option><option>Full Harvest</option><option>Statement Porch</option><option>Not sure yet</option>
        </select>
      </label>
      <label>Tell us about your porch <span>(optional)</span><textarea name="notes" rows={4} placeholder="Size, style, timing, or anything we should know" /></label>
      <label className="consent"><input type="checkbox" name="consent" value="yes" required /><span>I agree to receive email about my inquiry and Fall 2026 availability.</span></label>
      <button className="button button-light" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Join the priority list"}</button>
      <p className={`form-status ${status}`} role="status" aria-live="polite">{message}</p>
      <p className="privacy-note">No spam. No payment is collected here. Your details are used only to respond to this inquiry.</p>
    </form>
  );
}
