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

export async function submitForm(data: SubmitFormAction) {
  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL as string;

  if (!scriptUrl) {
    throw new Error("Env variable is not set");
  }

  const formData = new URLSearchParams();
  formData.append("nombre", data.name);
  formData.append("teléfono", data.phone);
  formData.append("email", data.email || "");
  formData.append("fecha", data.date ? format(data.date, "dd/MM/yyyy") : "");
  formData.append("hora", data.time || "");
  formData.append("servicio", data.service || "");
  formData.append("mensaje", data.message || "");

  await fetch(scriptUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });
}
