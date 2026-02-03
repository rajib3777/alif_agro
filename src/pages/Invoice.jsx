import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Logo from "../components/Logo.jsx";
import { useI18n } from "../i18n/useI18n.jsx";

function fmt(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleString();
}

export default function Invoice() {
  const { t, lang } = useI18n();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("alif_last_order");
      setOrder(raw ? JSON.parse(raw) : null);
    } catch {
      setOrder(null);
    }
  }, []);

  const rows = useMemo(() => order?.items || [], [order]);

  return (
    <div className="paper-bg min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="card-paper p-7 sm:p-10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <Logo />
              <div>
                <div className="text-xl font-extrabold text-slate-900">Alif Agro Services</div>
                <div className="text-xs text-slate-600">Invoice / Receipt</div>
              </div>
            </div>
            <div className="text-right text-sm text-slate-600">
              <div className="font-semibold text-slate-900">{t("invoice.title")}</div>
              <div>{order?.id || "—"}</div>
              <div>{order ? fmt(order.date) : "—"}</div>
            </div>
          </div>

          {!order ? (
            <div className="mt-6 text-slate-600">No invoice found. Please place an order first.</div>
          ) : (
            <>
              <div className="mt-8 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-slate-500">
                      <th className="py-2">Item</th>
                      <th className="py-2">Qty</th>
                      <th className="py-2">Price</th>
                      <th className="py-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((x) => (
                      <tr key={x.id} className="border-t border-slate-900/5">
                        <td className="py-3 font-semibold text-slate-900">{lang === "bn" ? x.name_bn : x.name_en}</td>
                        <td className="py-3">{x.qty}</td>
                        <td className="py-3">৳{x.price}</td>
                        <td className="py-3 font-semibold">৳{x.price * x.qty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 border-t border-slate-900/5 pt-4 text-sm space-y-2">
                <div className="flex justify-between"><span className="text-slate-600">Subtotal</span><span className="font-semibold">৳{order.subtotal}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Shipping</span><span className="font-semibold">৳{order.shipping}</span></div>
                <div className="flex justify-between text-base"><span className="font-extrabold text-slate-900">Total</span><span className="font-extrabold text-emerald-800">৳{order.total}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Payment method</span><span className="font-semibold uppercase">{order.method}</span></div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <div className="text-xs text-slate-500">
                  Thank you for your order. For support call 01334-642219.
                </div>
                <button onClick={() => window.print()} className="btn-soft !px-4 !py-2">
                  {t("invoice.download")}
                </button>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}