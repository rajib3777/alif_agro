import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import { useI18n } from "../i18n/useI18n.jsx";
import { useCart } from "../store/cart.jsx";

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "px-3 py-2 rounded-xl text-sm font-medium transition " +
        (isActive ? "bg-emerald-900/10 text-emerald-900" : "text-slate-700 hover:text-slate-900 hover:bg-white/60")
      }
    >
      {children}
    </NavLink>
  );
}

export default function Header() {
  const { lang, setLang, t } = useI18n();
  const { items } = useCart();
  const count = items.reduce((s, x) => s + x.qty, 0);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-900/5 bg-[rgba(252,251,248,0.78)] backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-3">
          <Logo />
          <div className="leading-tight hidden sm:block">
            <div className="font-extrabold text-slate-900">Alif Agro Services</div>
            <div className="text-xs text-slate-600 -mt-0.5">Seeds • Fodder • Farmer Support</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center">
          <NavItem to="/">{t("nav.home")}</NavItem>
          <NavItem to="/products">{t("nav.products")}</NavItem>
          <NavItem to="/promotions">{t("nav.promotions")}</NavItem>
          <NavItem to="/about">{t("nav.about")}</NavItem>
          <NavItem to="/contact">{t("nav.contact")}</NavItem>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "bn" ? "en" : "bn")}
            className="badge"
            aria-label="Toggle language"
            title="বাংলা / English"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-700" />
            {lang === "bn" ? "বাংলা" : "English"}
          </button>

          <Link
            to="/cart"
            className="relative btn-soft !px-4 !py-2"
            aria-label="Cart"
          >
            {t("nav.cart")}
            {count > 0 && (
              <span className="ml-2 inline-flex items-center justify-center h-5 min-w-5 px-1.5 rounded-full text-xs font-bold bg-emerald-700 text-white">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}