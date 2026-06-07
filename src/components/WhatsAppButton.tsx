import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "393275628698";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Ciao! I'm interested in planning a wedding in Italy. Could we schedule a quick chat?"
);

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <MessageCircle className="h-7 w-7 fill-current md:h-8 md:w-8" />
    </a>
  );
}
