import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useCart } from "../store/cart.jsx";
import { useI18n } from "../i18n/useI18n.jsx";

export default function Cart() {
  const { items, remove, setQty, subtotal } = useCart();
  const { lang } = useI18n();

  return (
    <div className="paper-bg min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="card-paper p-7">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <h1 className="text-2xl font-extrabold text-slate-900">Cart</h1>
            <Link to="/products" className="btn-soft !px-4 !py-2">Continue shopping</Link>
          </div>

          {items.length === 0 ? (
            <div className="mt-6 text-slate-600">
              Your cart is empty. <Link className="text-emerald-800 font-semibold" to="/products">Browse seeds</Link>
            </div>
          ) : (
            <>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-slate-500">
                      <th className="py-2">Item</th>
                      <th className="py-2">Price</th>
                      <th className="py-2">Qty</th>
                      <th className="py-2">Total</th>
                      <th className="py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((x) => (
                      <tr key={x.id} className="border-t border-slate-900/5">
                        <td className="py-3">
                          <div className="flex items-center gap-3">
                            <img src={x.image} alt="" className="h-12 w-12 rounded-xl object-cover border border-slate-900/10" />
                            <div className="font-semibold text-slate-900">{lang === "bn" ? x.name_bn : x.name_en}</div>
                          </div>
                        </td>
                        <td className="py-3">৳{x.price}</td>
                        <td className="py-3">
                          <input
                            type="number"
                            min={1}
                            value={x.qty}
                            onChange={(e) => setQty(x.id, parseInt(e.target.value || "1", 10))}
                            className="w-20 rounded-xl border border-slate-900/10 bg-white/70 px-3 py-2"
                          />
                        </td>
                        <td className="py-3 font-semibold">৳{x.price * x.qty}</td>
                        <td className="py-3">
                          <button onClick={() => remove(x.id)} className="text-rose-600 font-semibold hover:underline">
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                <div className="text-slate-600">Subtotal</div>
                <div className="text-2xl font-extrabold text-emerald-800">৳{subtotal}</div>
              </div>

              <div className="mt-6 flex justify-end">
                <Link to="/checkout" className="btn-primary">Proceed to Checkout</Link>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}