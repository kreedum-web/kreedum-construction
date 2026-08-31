import { useEffect, useState } from "react";
import { WHATSAPP_NUMBER } from "../../config/contact";
import { openWhatsApp } from "../../utils/whatsapp";

const DEFAULT_MESSAGE =
  "Hi Kreedum Sports, I'd like to know more about your products and facilities.";

/**
 * Persistent floating WhatsApp button — fixed to the bottom-right corner.
 * Opens a pre-filled wa.me chat using the same WHATSAPP_NUMBER/openWhatsApp
 * helper the Quote/Contact forms already use, so there's one single number
 * to update if it ever changes.
 *
 * A small "Contact us" speech bubble appears next to the button a few
 * seconds after the page loads, to draw attention to it on a first visit.
 * It can be dismissed with its own close button, tapping/clicking it opens
 * the same WhatsApp chat as the button itself, and it won't reappear again
 * once dismissed for that page visit.
 */
export default function WhatsAppButton({ message = DEFAULT_MESSAGE }) {
  const [bubbleVisible, setBubbleVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBubbleVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const goToWhatsApp = () => {
    setBubbleVisible(false);
    openWhatsApp(WHATSAPP_NUMBER, message);
  };

  return (
    <div className="kr-whatsapp-wrap">
      {bubbleVisible && (
        <button
          type="button"
          onClick={goToWhatsApp}
          className="kr-whatsapp-bubble kr-focus"
          aria-label="Contact us on WhatsApp"
        >
          <span>Contact us 👋</span>
          <span
            role="button"
            tabIndex={0}
            aria-label="Dismiss"
            className="kr-whatsapp-bubble-close"
            onClick={(e) => {
              e.stopPropagation();
              setBubbleVisible(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.stopPropagation();
                setBubbleVisible(false);
              }
            }}
          >
            ×
          </span>
        </button>
      )}

      <button
        type="button"
        onClick={goToWhatsApp}
        aria-label="Chat with us on WhatsApp"
        className="kr-whatsapp-btn kr-focus"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.483 1.34 4.997L2 22l5.117-1.334a9.96 9.96 0 0 0 4.887 1.278h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.67-1.04-5.18-2.929-7.068a9.93 9.93 0 0 0-7.068-2.929zm5.845 15.838a8.29 8.29 0 0 1-5.849 2.421h-.003a8.29 8.29 0 0 1-4.226-1.156l-.303-.18-3.037.792.81-2.96-.198-.304a8.264 8.264 0 0 1-1.269-4.42c0-4.582 3.73-8.311 8.315-8.311a8.26 8.26 0 0 1 5.877 2.437 8.26 8.26 0 0 1 2.432 5.878 8.29 8.29 0 0 1-2.55 5.803z" />
        </svg>
      </button>
    </div>
  );
}