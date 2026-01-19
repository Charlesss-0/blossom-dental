"use server";

import { es } from "date-fns/locale";
import { format } from "date-fns/format";
import { formatTo12Hour, formatPhoneForMessaging } from "@/lib/form-utils";
import { sendWhatsAppMessage } from "@/lib/twilio";

interface SubmitFormAction {
  name: string;
  phone: string;
  date?: Date | null;
  time?: string;
  service?: string;
  message?: string;
}

export async function submitForm(
  data: SubmitFormAction,
  form: "contact" | "booking",
) {
  const { name, phone, date, time, service, message } = data;

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

    await sendWhatsAppMessage(
      {
        name,
        phone: formatPhoneForMessaging(phone),
        service: service || "",
        message: message || "",
      },
      "contact",
    );
  }

  if (form === "booking") {
    scriptUrl = process.env.BOOKING_URL as string;
    formData.append("servicio", service || "");
    formData.append(
      "fecha",
      date ? format(date, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es }) : "",
    );
    formData.append("hora", time ? formatTo12Hour(time) : "");

    await sendWhatsAppMessage(
      {
        name,
        phone: formatPhoneForMessaging(phone),
        service: service || "",
        date: date
          ? format(date, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })
          : "",
        time: time ? formatTo12Hour(time) : "",
      },
      "booking",
    );
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
