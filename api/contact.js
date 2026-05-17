const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const RECIPIENT_EMAIL = "archristian.cv@gmail.com";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed." });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return response.status(500).json({ error: "Contact form is not configured yet." });
  }

  const { name = "", email = "", message = "" } = request.body || {};
  const trimmedName = String(name).trim();
  const trimmedEmail = String(email).trim();
  const trimmedMessage = String(message).trim();

  if (!trimmedName || !isValidEmail(trimmedEmail) || !trimmedMessage) {
    return response.status(400).json({ error: "Please complete the form with a valid email address." });
  }

  const web3formsResponse = await fetch(WEB3FORMS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      from_name: "AVerdida Surveying & Realty Services Website",
      subject: `Contact inquiry from ${trimmedName}`,
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
      replyto: trimmedEmail,
      to: RECIPIENT_EMAIL,
    }),
  });

  const payload = await web3formsResponse.json().catch(() => ({}));

  if (!web3formsResponse.ok || payload.success === false) {
    return response.status(502).json({ error: "Unable to send your message right now." });
  }

  return response.status(200).json({ ok: true });
}
