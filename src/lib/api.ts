import { EmailData } from "./email";

const isDevelopment = process.env.NODE_ENV === "development";

const hostname = typeof window !== "undefined" ? window.location.hostname : "";

const API_BASE_URL = isDevelopment
  ? "http://localhost:3002"
  : hostname === "localhost" || hostname === "127.0.0.1"
  ? "http://localhost:3002"
  : "http://backend:3001";

export async function submitContactForm(data: EmailData) {
  try {
    console.log("Sending request to:", `${API_BASE_URL}/api/contact`);
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
}
