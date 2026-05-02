"use client";

import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setFeedback(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFeedback("Thanks — your message has been sent.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setFeedback("Something went wrong. Please try again.");
    }
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <label className="field">
        <span>Name</span>
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label className="field">
        <span>Email</span>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} required />
      </label>
      <button type="submit" className="button buttonPrimary formButton" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send"}
      </button>
      {feedback ? (
        <p className={status === "error" ? "formFeedback formFeedbackError" : "formFeedback"}>{feedback}</p>
      ) : null}
    </form>
  );
}
