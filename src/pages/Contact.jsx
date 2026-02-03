import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

export default function Contact() {
  return (
    <div className="paper-bg min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <SectionTitle kicker="Support" title="Contact" />
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card-paper p-7">
            <div className="text-lg font-extrabold text-slate-900">Hotline</div>
            <div className="mt-2 text-2xl font-extrabold text-emerald-800">01334-642219</div>
            <div className="mt-4 text-sm text-slate-600">Dhaka, Bangladesh</div>
            <div className="mt-1 text-sm text-slate-600">support@alifagroservices.com</div>
            <div className="mt-6 text-sm text-slate-600">
              For bulk orders and dealer pricing, call or WhatsApp us.
            </div>
          </div>

          <div className="card-paper p-7">
            <div className="text-lg font-extrabold text-slate-900">Send a message</div>
            <form className="mt-4 space-y-3">
              <input className="w-full rounded-xl border border-slate-900/10 bg-white/70 px-4 py-3" placeholder="Name" />
              <input className="w-full rounded-xl border border-slate-900/10 bg-white/70 px-4 py-3" placeholder="Phone" />
              <textarea className="w-full rounded-xl border border-slate-900/10 bg-white/70 px-4 py-3 h-32" placeholder="Message" />
              <button type="button" className="btn-primary w-full">Send</button>
              <div className="text-xs text-slate-500">
                * Demo form. Connect to backend later.
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}