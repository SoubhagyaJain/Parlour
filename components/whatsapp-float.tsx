import Link from "next/link";

export default function WhatsAppFloat() {
  return (
    <Link href="https://wa.me/919999999999" className="fixed bottom-6 right-6 z-50 rounded-full bg-olive px-5 py-3 text-sm font-medium text-cream shadow-luxe" aria-label="Chat on WhatsApp">
      WhatsApp Us
    </Link>
  );
}
