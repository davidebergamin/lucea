import { NextResponse } from "next/server";
import { contact } from "../../../lib/site-content";

type ContactPayload = {
  nome?: string;
  email?: string;
  telefono?: string;
  partner?: string;
  data?: string;
  location?: string;
  invitati?: string;
  messaggio?: string;
  desideri?: string;
  trovato?: string;
  privacy?: string;
  company?: string;
};

function text(value?: string) {
  const clean = value?.trim();
  return clean ? clean : "—";
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (body.company) return NextResponse.json({ ok: true });

  if (!body.nome?.trim() || !body.email?.trim() || !body.messaggio?.trim() || body.privacy !== "accepted") {
    return NextResponse.json({ error: "Dati incompleti" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = contact.email;
  const from =
    process.env.RESEND_FROM_EMAIL ||
    process.env.CONTACT_FROM_EMAIL ||
    "Lucea <noreply@liquidagency.eu>";

  if (!apiKey || !to || !from) {
    return NextResponse.json({ error: "Servizio email non configurato" }, { status: 503 });
  }

  const lines = [
    `Nome: ${text(body.nome)}`,
    `Email: ${text(body.email)}`,
    `Telefono: ${text(body.telefono)}`,
    `Partner: ${text(body.partner)}`,
    `Quando: ${text(body.data)}`,
    `Dove: ${text(body.location)}`,
    `Invitati: ${text(body.invitati)}`,
    `Desideri: ${text(body.desideri)}`,
    `Trovato tramite: ${text(body.trovato)}`,
    "",
    "Racconto:",
    text(body.messaggio)
  ];

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: body.email,
      subject: `Richiesta matrimonio — ${body.nome.trim()}`,
      text: lines.join("\n")
    })
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Invio email non riuscito" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
