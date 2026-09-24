import { useSite } from "../SiteContext";

function toWhatsAppLink(number) {
  const digits = String(number || "").replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}`;
}

export default function WhatsAppFloat() {
  const { company } = useSite();
  const href = toWhatsAppLink(company.whatsappNumber || company.phone);

  if (!href) return null;

  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SBRGREEN on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span className="whatsapp-pulse" aria-hidden="true" />
      <span className="whatsapp-pulse delay" aria-hidden="true" />
      <span className="whatsapp-icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
          <path d="M19.11 17.53c-.28-.14-1.64-.81-1.9-.9-.25-.1-.44-.14-.62.14-.18.27-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.38-1.64-1.54-1.92-.16-.27-.02-.42.12-.56.13-.13.28-.32.42-.48.14-.16.18-.27.28-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.99 2.67 1.12 2.85c.14.18 1.95 2.98 4.72 4.18.66.28 1.18.45 1.58.58.66.21 1.27.18 1.75.11.53-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32z" />
          <path d="M16.02 3C9.39 3 4 8.38 4 15.02c0 2.24.62 4.33 1.7 6.14L4 29l8.04-1.67A11.95 11.95 0 0 0 16.02 27C22.66 27 28 21.62 28 15.02 28 8.38 22.66 3 16.02 3zm0 21.82c-2.05 0-3.95-.6-5.56-1.64l-.4-.25-4.77.99 1.01-4.65-.26-.43A9.75 9.75 0 0 1 6.2 15.02c0-5.41 4.41-9.82 9.82-9.82s9.82 4.41 9.82 9.82-4.41 9.8-9.82 9.8z" />
        </svg>
      </span>
    </a>
  );
}
