import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/27760884005"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] shadow-lg transition-transform hover:scale-110 md:h-16 md:w-16"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-[hsl(0,0%,100%)] md:h-8 md:w-8" />
    </a>
  );
};

export default WhatsAppButton;
