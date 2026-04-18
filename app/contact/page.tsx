export default function ContactPage() {
  return (
    <main className="section-pad container-luxe">
      <h1 className="text-4xl font-semibold">Book Appointment</h1>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <form className="space-y-4 rounded-3xl bg-white p-8 shadow-luxe">
          <input required placeholder="Full Name" className="w-full rounded-xl border border-sage/40 p-3" />
          <input required type="tel" placeholder="Phone" className="w-full rounded-xl border border-sage/40 p-3" />
          <input type="date" className="w-full rounded-xl border border-sage/40 p-3" />
          <select className="w-full rounded-xl border border-sage/40 p-3"><option>Choose Service</option></select>
          <textarea placeholder="Special request" className="h-28 w-full rounded-xl border border-sage/40 p-3" />
          <button className="rounded-full bg-botanical px-6 py-3 text-cream">Confirm Booking</button>
        </form>
        <div className="space-y-5 rounded-3xl bg-botanical p-8 text-cream">
          <p>Phone: +91 99999 99999</p><p>WhatsApp: +91 99999 99999</p><p>Address: 123 Serenity Lane, Your City</p><p>Hours: 9:00 AM - 8:00 PM (Daily)</p>
          <div className="rounded-2xl border border-cream/30 p-6 text-cream/80">Map Placeholder</div>
        </div>
      </div>
    </main>
  );
}
