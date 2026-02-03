import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { products } from "../data";
import { useI18n } from "../i18n/useI18n.jsx";
import { useCart } from "../store/cart.jsx";

export default function ProductDetails() {
  const { slug } = useParams();
  const p = useMemo(() => products.find((x) => x.slug === slug), [slug]);
  const { lang, t } = useI18n();
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  if (!p) {
    return (
      <div className="paper-bg min-h-screen">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-16">
          <div className="card-paper p-8">
            <div className="text-xl font-extrabold">Product not found</div>
            <Link className="btn-soft mt-4 inline-flex" to="/products">Back to Products</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const name = lang === "bn" ? p.name_bn : p.name_en;
  const short = lang === "bn" ? p.short_bn : p.short_en;
  const details = lang === "bn" ? p.details_bn : p.details_en;

  return (
    <div className="paper-bg min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="card-paper overflow-hidden">
            <img src={p.image} alt={name} className="w-full h-[420px] object-cover" />
          </div>

          <div className="card-paper p-7 sm:p-9">
            <div className="badge">{t("nav.products")}</div>
            <h1 className="mt-3 text-3xl font-extrabold text-slate-900">{name}</h1>
            <p className="mt-3 text-slate-600">{short}</p>

            <div className="mt-5 flex items-end justify-between">
              <div>
                <div className="text-xs text-slate-500">Price</div>
                <div className="text-3xl font-extrabold text-emerald-800">৳{p.price}</div>
              </div>
              <div className="text-sm text-slate-600">{lang === "bn" ? p.unit_bn : p.unit_en}</div>
            </div>

            <div className="mt-6">
              <div className="text-sm font-extrabold text-slate-900">Highlights</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {details.map((d, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-emerald-700">•</span> <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-3">
                {t("product.qty")}
                <input
                  type="number"
                  min={1}
                  value={qty}
                  onChange={(e) => setQty(Math.max(1, parseInt(e.target.value || "1", 10)))}
                  className="w-24 rounded-xl border border-slate-900/10 bg-white/70 px-3 py-2"
                />
                <span className="text-slate-500">{t("product.kg")}</span>
              </label>

              <div className="flex gap-2 sm:ml-auto">
                <button className="btn-primary" onClick={() => add(p, qty)}>
                  {t("product.addToCart")}
                </button>
                <Link to="/checkout" className="btn-soft">
                  {t("product.buyNow")}
                </Link>
              </div>
            </div>

            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}