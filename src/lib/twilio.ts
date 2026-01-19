import { Twilio } from "twilio";

type WhatsAppTemplate = "contact" | "booking";

interface ContactMessage {
  name: string;
  phone: string;
  service: string;
  message: string;
}

interface BookingMessage {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}

export async function sendWhatsAppMessage(
  data: ContactMessage | BookingMessage,
  template: WhatsAppTemplate,
) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const templateSid = {
    contact: process.env.TWILIO_CONTACT_TEMPLATE_SID,
    booking: process.env.TWILIO_BOOKING_TEMPLATE_SID,
  };

  if (!accountSid || !authToken) {
    console.error("Twilio credentials not found");
    return;
  }

  const client = new Twilio(accountSid, authToken);

  try {
    let contentVariables: Record<string, string>;

    if (template === "contact") {
      const contactData = data as ContactMessage;
      contentVariables = {
        "1": contactData.name,
        "2": contactData.phone,
        "3": contactData.service,
        "4": contactData.message,
      };
    } else {
      const bookingData = data as BookingMessage;
      contentVariables = {
        "1": bookingData.name,
        "2": bookingData.phone,
        "3": bookingData.service,
        "4": bookingData.date,
        "5": bookingData.time,
      };
    }

    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM,
      to: process.env.TWILIO_WHATSAPP_TO as string,
      contentSid: templateSid[template],
      contentVariables: JSON.stringify(contentVariables),
    });
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
  }
}
