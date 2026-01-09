import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;

interface ContactData {
  name: string;
  email: string;
  message: string;
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const path = event.path.replace("/.netlify/functions/api", "");
  
  if (path === "/contact" && event.httpMethod === "POST") {
    try {
      const body: ContactData = JSON.parse(event.body || "{}");
      
      if (!body.name || !body.email || !body.message) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: "Name, email, and message are required" }),
        };
      }

      if (resend && RECIPIENT_EMAIL) {
        await resend.emails.send({
          from: "Build Right Web <onboarding@resend.dev>",
          to: RECIPIENT_EMAIL,
          subject: `New Contact: ${body.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Message:</strong></p>
            <p>${body.message}</p>
          `,
        });
      }

      return {
        statusCode: 201,
        body: JSON.stringify({ message: "Contact received", name: body.name, email: body.email }),
      };
    } catch (error) {
      console.error("Error processing contact:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Internal server error" }),
      };
    }
  }

  return {
    statusCode: 404,
    body: JSON.stringify({ message: "Not found" }),
  };
};

export { handler };
