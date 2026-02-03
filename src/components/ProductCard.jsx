import { Link } from "react-router-dom";
import { useI18n } from "../i18n/useI18n.jsx";
import { useCart } from "../store/cart.jsx";

export default function ProductCard({ p }) {
  const { lang, t } = useI18n();
  const { add } = useCart();
  const name = lang === "bn" ? p.name_bn : p.name_en;
  const short = lang === "bn" ? p.short_bn : p.short_en;
  const unit = lang === "bn" ? p.unit_bn : p.unit_en;

  return (
    <div className="card-paper overflow-hidden">
      <div className="relative">
        <img src={p.image} alt={name} className="h-52 w-full object-cover" />
        <div className="absolute top-3 left-3 badge">{unit}</div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">{name}</h3>
            <p className="text-sm text-slate-600 mt-1">{short}</p>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-500">৳</div>
            <div className="text-2xl font-extrabold text-emerald-800">{p.price}</div>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button onClick={() => add(p, 1)} className="btn-primary flex-1">
            {t("product.addToCart")}
          </button>
          <Link to={`/products/${p.slug}`} className="btn-soft">
            {t("product.details")}
          </Link>
        </div>
      </div>
    </div>
  );
}