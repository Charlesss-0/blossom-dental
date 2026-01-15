"use server";

import { format } from "date-fns/format";

interface SubmitFormAction {
  name: string;
  phone: string;
  email?: string;
  date?: Date | null;
  time?: string;
  service?: string;
  message?: string;
}

export async function submitForm(
  data: SubmitFormAction,
  form: "contact" | "booking"
) {
  const { name, phone, email, date, time, service, message } = data;

  if (!name || !phone) {
    throw new Error("Missing required fields");
  }

  let scriptUrl = "";
  const formData = new URLSearchParams();

  formData.append("nombre", name);
  formData.append("teléfono", phone);

  if (form === "contact") {
    scriptUrl = process.env.LEADS_URL as string;
    formData.append("servicio", service || "");
    formData.append("mensaje", message || "");
  }

  if (form === "booking") {
    scriptUrl = process.env.BOOKING_URL as string;
    formData.append("email", email || "");
    formData.append("fecha", date ? format(date, "dd/MM/yyyy") : "");
    formData.append("hora", time || "");
  }

  if (!scriptUrl) {
    throw new Error("Env variable is not set");
  }

  await postForm(scriptUrl, formData);
}

async function postForm(scriptUrl: string, formData: URLSearchParams) {
  await fetch(scriptUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });
}
