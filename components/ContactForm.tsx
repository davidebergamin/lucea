"use client";

import { FormEvent, useState } from "react";
import { foundViaOptions } from "../lib/site-content";

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
      <label className="field">
        <span>Nome del partner</span>
        <input name="partner" disabled={state === "sending"} />
      </label>
      <label className="field">
        <span>Quando sarà?</span>
        <input name="data" placeholder="Es. 14 settembre 2027" disabled={state === "sending"} />
      </label>
      <label className="field">
        <span>Dove?</span>
        <input name="location" placeholder="Milano, Brianza, lago, estero…" disabled={state === "sending"} />
      </label>
      <label className="field">
        <span>Quanti invitati ci saranno?</span>
        <input name="invitati" placeholder="Es. 80, 150, 250…" disabled={state === "sending"} />
      </label>
      <label className="field field-wide">
        <span>Raccontate liberamente il vostro matrimonio</span>
        <textarea name="messaggio" required disabled={state === "sending"} />
      </label>
      <label className="field field-wide">
        <span>Vi piacerebbe avere…</span>
        <input name="desideri" placeholder="Foto, video, album, altro…" disabled={state === "sending"} />
      </label>
      <label className="field field-wide">
        <span>Come avete trovato LUCEA?</span>
        <select name="trovato" defaultValue="" disabled={state === "sending"}>
          <option value="" disabled>
            Scegliete un&apos;opzione
          </option>
          {foundViaOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
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
          </a>{" "}
          e acconsento al trattamento dei dati per ricevere risposta.
        </span>
      </label>
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
