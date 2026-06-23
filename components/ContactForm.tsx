import { contact } from "../lib/site-content";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className={`contact-form${compact ? " compact" : ""}`} action={`mailto:${contact.email}`} method="post" encType="text/plain">
      <label className="field">
        <span>Nome</span>
        <input name="nome" autoComplete="name" required />
      </label>
      <label className="field">
        <span>Email</span>
        <input type="email" name="email" autoComplete="email" required />
      </label>
      <label className="field">
        <span>Telefono, se vi va</span>
        <input type="tel" name="telefono" autoComplete="tel" />
      </label>
      <label className="field">
        <span>Nome partner / coniuge</span>
        <input name="partner" />
      </label>
      <label className="field">
        <span>Quando sarà?</span>
        <input name="data" placeholder="Es. 14 settembre 2027" />
      </label>
      <label className="field">
        <span>Dove?</span>
        <input name="location" placeholder="Milano, Brianza, lago, estero..." />
      </label>
      <label className="field">
        <span>Quanti invitati ci saranno?</span>
        <input name="invitati" placeholder="Es. 80, 150, 250..." />
      </label>
      <label className="field field-wide">
        <span>Raccontateci cosa state cercando</span>
        <textarea name="messaggio" required />
      </label>
      <button className="btn-primary field-wide" type="submit">
        Invia richiesta
      </button>
    </form>
  );
}
