import { useI18n } from "../i18n/useI18n.jsx";
import bkash from "../assets/bkash.png";
import nagad from "../assets/nagad.png";
import rocket from "../assets/rocket.png";
import sslcommerz from "../assets/sslcommerz.png";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";

function PayLogo({ src, alt }) {
  return (
    <div className="h-10 w-[92px] rounded-xl bg-white/70 border border-slate-900/10 flex items-center justify-center p-2 shadow-sm">
      <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
    </div>
  );
}

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-16 border-t border-slate-900/5 bg-[rgba(252,251,248,0.75)]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-extrabold text-slate-900">{t("footer.company")}</div>
            <p className="text-sm text-slate-600 mt-2">{t("footer.address")}</p>
            <p className="text-sm text-slate-600 mt-1">{t("footer.phone")}</p>
            <p className="text-sm text-slate-600 mt-1">{t("footer.email")}</p>
            <p className="text-sm text-slate-600 mt-1">{t("footer.hours")}</p>
          </div>

          <div>
            <div className="text-sm font-extrabold text-slate-900">Payments</div>
            <div className="mt-4 flex flex-wrap gap-3">
              <PayLogo src={bkash} alt="bKash" />
              <PayLogo src={nagad} alt="Nagad" />
              <PayLogo src={rocket} alt="Rocket" />
              <PayLogo src={sslcommerz} alt="SSLCOMMERZ" />
              <PayLogo src={visa} alt="Visa" />
              <PayLogo src={mastercard} alt="Mastercard" />
            </div>
          </div>

          <div>
            <div className="text-sm font-extrabold text-slate-900">Legal</div>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a className="hover:text-slate-900 text-slate-600" href="/terms">{t("footer.legal.terms")}</a>
              <a className="hover:text-slate-900 text-slate-600" href="/shipping">{t("footer.legal.shipping")}</a>
              <a className="hover:text-slate-900 text-slate-600" href="/privacy">{t("footer.legal.privacy")}</a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-900/5 text-sm text-slate-600 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Alif Agro Services. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}