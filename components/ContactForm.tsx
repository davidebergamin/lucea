"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");

    const form = event.currentTarget;
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form)))
    });

    if (response.ok) {
      form.reset();
      setState("success");
      return;
    }

    setState("error");
  }

  return (
    <form className={`contact-form${compact ? " compact" : ""}`} onSubmit={handleSubmit}>
      <label className="field">
        <span>Nome *</span>
        <input name="nome" autoComplete="name" required disabled={state === "sending"} />
      </label>
      <label className="field">
        <span>Email *</span>
        <input type="email" name="email" autoComplete="email" required disabled={state === "sending"} />
      </label>
      <label className="field">
        <span>Telefono</span>
        <input type="tel" name="telefono" autoComplete="tel" disabled={state === "sending"} />
      </label>
      <label className="field field-wide">
        <span>Dove e quando?</span>
        <input name="doveQuando" disabled={state === "sending"} />
      </label>
      <label className="field field-wide">
        <span>Vorremmo chiedere…</span>
        <textarea name="messaggio" disabled={state === "sending"} />
      </label>
      <label className="contact-honeypot" aria-hidden="true">
        Non compilare
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="contact-consent field-wide">
        <input name="privacy" type="checkbox" value="accepted" required disabled={state === "sending"} />
        <span>
          Ho letto l&apos;
          <a className="link-text" href="/privacy">
            informativa privacy
          </a>
          .
        </span>
      </label>
      <p className="body-copy serif-lead contact-invite field-wide">
        Anche se avete ancora pochi dettagli, scrivetemi: mi farà piacere conoscervi e capire cosa avete in mente.
      </p>
      <button className="btn-primary field-wide" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Invio in corso…" : "Invia richiesta"}
      </button>
      <p className="form-status field-wide" role="status" aria-live="polite">
        {state === "success" && "Messaggio inviato. Andrea vi risponde al più presto."}
        {state === "error" && "Invio non riuscito. Potete scrivere su WhatsApp o via email."}
      </p>
    </form>
  );
}
