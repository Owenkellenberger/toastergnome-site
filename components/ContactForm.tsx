"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!endpoint) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <label className="flex flex-col gap-2 text-sm">
        <span className="tracking-wide uppercase text-xs text-neutral-500">Name</span>
        <input
          required
          name="name"
          type="text"
          className="border border-neutral-200 rounded-md px-3 py-2 focus:outline-none focus:border-charcoal"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm">
        <span className="tracking-wide uppercase text-xs text-neutral-500">Email</span>
        <input
          required
          name="email"
          type="email"
          className="border border-neutral-200 rounded-md px-3 py-2 focus:outline-none focus:border-charcoal"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm">
        <span className="tracking-wide uppercase text-xs text-neutral-500">Message</span>
        <textarea
          required
          name="message"
          rows={6}
          className="border border-neutral-200 rounded-md px-3 py-2 focus:outline-none focus:border-charcoal resize-y"
        />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="self-start bg-charcoal text-white px-6 py-2.5 rounded-md text-sm tracking-[0.15em] uppercase hover:bg-gold transition-colors disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send"}
      </button>
      {status === "success" && (
        <p className="text-sm text-green-700">Thanks — message sent.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong. Email <a className="underline" href="mailto:owen@tgwcompany.com">owen@tgwcompany.com</a> directly.
        </p>
      )}
    </form>
  );
}
