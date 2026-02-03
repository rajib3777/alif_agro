import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useCart } from "../store/cart.jsx";
import { useI18n } from "../i18n/useI18n.jsx";

import bkash from "../assets/bkash.png";
import nagad from "../assets/nagad.png";
import rocket from "../assets/rocket.png";
import sslcommerz from "../assets/sslcommerz.png";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";

function PayOption({ id, title, subtitle, logo, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={
        "w-full text-left rounded-2xl border p-4 transition " +
        (selected ? "border-emerald-700 bg-emerald-900/5" : "border-slate-900/10 bg-white/60 hover:bg-white/75")
      }
    >
      <div className="flex items-center gap-4">
        <div className="h-10 w-24 rounded-xl bg-white/70 border border-slate-900/10 flex items-center justify-center p-2">
          {logo ? <img src={logo} alt={title} className="max-h-full max-w-full object-contain" /> : null}
        </div>
        <div>
          <div className="font-extrabold text-slate-900">{title}</div>
          <div className="text-sm text-slate-600">{subtitle}</div>
        </div>
      </div>
    </button>
  );
}

export default function Checkout() {
  const { items, subtotal, clear } = useCart();
  const { t, lang } = useI18n();
  const nav = useNavigate();

  const [method, setMethod] = useState("sslcommerz");

  // ✅ Customer info (required)
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const shipping = 60;
  const total = useMemo(() => subtotal + (items.length ? shipping : 0), [subtotal, items.length]);

  const onChangeCustomer = (key, value) => {
    setCustomer((p) => ({ ...p, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!customer.name.trim()) e.name = lang === "bn" ? "নাম লিখুন" : "Name is required";
    if (!customer.phone.trim()) e.phone = lang === "bn" ? "মোবাইল নাম্বার লিখুন" : "Phone is required";
    // basic BD phone check (simple)
    if (customer.phone.trim() && customer.phone.replace(/\s/g, "").length < 10)
      e.phone = lang === "bn" ? "সঠিক মোবাইল নাম্বার দিন" : "Enter a valid phone number";
    if (!customer.address.trim()) e.address = lang === "bn" ? "ঠিকানা লিখুন" : "Address is required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const placeOrder = () => {
    if (items.length === 0) return;

    // ✅ বাধ্যতামূলক যাচাই
    if (!validate()) return;

    // Demo: in production, you'd redirect to your payment gateway init API.
    const order = {
      id: "ALIF-" + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toISOString(),
      items,
      customer, // ✅ save customer info
      subtotal,
      shipping: items.length ? shipping : 0,
      total,
      method,
    };

    localStorage.setItem("alif_last_order", JSON.stringify(order));
    clear();
    nav("/invoice");
  };

  const canProceed =
    items.length > 0 &&
    customer.name.trim() &&
    customer.phone.trim() &&
    customer.address.trim();

  return (
    <div className="paper-bg min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card-paper p-7">
            <h1 className="text-2xl font-extrabold text-slate-900">{t("checkout.title")}</h1>
            <p className="mt-2 text-slate-600 text-sm">{t("checkout.subtitle")}</p>

            {/* ✅ Customer Information (Required) */}
            <div className="mt-6">
              <div className="text-sm font-extrabold text-slate-900">
                {lang === "bn" ? "গ্রাহকের তথ্য" : "Customer Information"}
              </div>

              <div className="mt-3 space-y-3">
                <div>
                  <label className="text-xs text-slate-600">{lang === "bn" ? "নাম *" : "Name *"}</label>
                  <input
                    value={customer.name}
                    onChange={(e) => onChangeCustomer("name", e.target.value)}
                    className={
                      "mt-1 w-full rounded-xl border px-3 py-2 bg-white/70 outline-none " +
                      (errors.name ? "border-red-500" : "border-slate-900/10")
                    }
                    placeholder={lang === "bn" ? "আপনার নাম" : "Your name"}
                  />
                  {errors.name ? <div className="mt-1 text-xs text-red-600">{errors.name}</div> : null}
                </div>

                <div>
                  <label className="text-xs text-slate-600">{lang === "bn" ? "মোবাইল নাম্বার *" : "Mobile Number *"}</label>
                  <input
                    value={customer.phone}
                    onChange={(e) => onChangeCustomer("phone", e.target.value)}
                    className={
                      "mt-1 w-full rounded-xl border px-3 py-2 bg-white/70 outline-none " +
                      (errors.phone ? "border-red-500" : "border-slate-900/10")
                    }
                    placeholder={lang === "bn" ? "01XXXXXXXXX" : "01XXXXXXXXX"}
                    inputMode="tel"
                  />
                  {errors.phone ? <div className="mt-1 text-xs text-red-600">{errors.phone}</div> : null}
                </div>

                <div>
                  <label className="text-xs text-slate-600">{lang === "bn" ? "ঠিকানা *" : "Address *"}</label>
                  <textarea
                    value={customer.address}
                    onChange={(e) => onChangeCustomer("address", e.target.value)}
                    className={
                      "mt-1 w-full rounded-xl border px-3 py-2 bg-white/70 outline-none min-h-[92px] " +
                      (errors.address ? "border-red-500" : "border-slate-900/10")
                    }
                    placeholder={lang === "bn" ? "গ্রাম/রোড, থানা, জেলা" : "Street, area, city"}
                  />
                  {errors.address ? <div className="mt-1 text-xs text-red-600">{errors.address}</div> : null}
                </div>
              </div>
            </div>

            {/* ✅ Payment options */}
            <div className="mt-6 space-y-3">
              <PayOption
                id="cod"
                title={lang === "bn" ? "ক্যাশ অন ডেলিভারি" : "Cash on Delivery"}
                subtitle={lang === "bn" ? "পণ্য হাতে পেয়ে টাকা পরিশোধ" : "Pay when you receive the product"}
                logo={null}
                selected={method === "cod"}
                onSelect={setMethod}
              />

              <PayOption
                id="sslcommerz"
                title="SSLCOMMERZ"
                subtitle="Card • Bank • Mobile Banking"
                logo={sslcommerz}
                selected={method === "sslcommerz"}
                onSelect={setMethod}
              />
              <PayOption
                id="bkash"
                title="bKash"
                subtitle={lang === "bn" ? "বিকাশ পেমেন্ট" : "Mobile payment"}
                logo={bkash}
                selected={method === "bkash"}
                onSelect={setMethod}
              />
              <PayOption
                id="nagad"
                title="Nagad"
                subtitle={lang === "bn" ? "নগদ পেমেন্ট" : "Mobile payment"}
                logo={nagad}
                selected={method === "nagad"}
                onSelect={setMethod}
              />
              <PayOption
                id="rocket"
                title="Rocket"
                subtitle={lang === "bn" ? "রকেট পেমেন্ট" : "Mobile banking"}
                logo={rocket}
                selected={method === "rocket"}
                onSelect={setMethod}
              />
              <PayOption
                id="card"
                title="Card"
                subtitle="Visa • Mastercard"
                logo={method === "card" ? visa : mastercard}
                selected={method === "card"}
                onSelect={setMethod}
              />
            </div>

            <button
              onClick={placeOrder}
              disabled={!canProceed}
              className={"mt-6 btn-primary w-full " + (!canProceed ? "opacity-50 pointer-events-none" : "")}
            >
              {t("checkout.placeOrder")}
            </button>

            {!canProceed ? (
              <div className="mt-3 text-xs text-slate-600">
                {lang === "bn"
                  ? "অর্ডার করতে নাম, মোবাইল নাম্বার ও ঠিকানা অবশ্যই পূরণ করতে হবে।"
                  : "To place an order, Name, Mobile number and Address are required."}
              </div>
            ) : null}

            <div className="mt-4 text-xs text-slate-500">
              * Demo checkout UI. Connect your gateway APIs here (SSLCOMMERZ/bKash/Nagad/Rocket) or handle COD orders.
            </div>
          </div>

          <div className="card-paper p-7">
            <div className="text-sm font-extrabold text-slate-900">Order Summary</div>
            <div className="mt-4 space-y-3">
              {items.length === 0 ? (
                <div className="text-slate-600 text-sm">Your cart is empty.</div>
              ) : (
                items.map((x) => (
                  <div key={x.id} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img src={x.image} alt="" className="h-12 w-12 rounded-xl object-cover border border-slate-900/10" />
                      <div>
                        <div className="font-semibold text-slate-900">{lang === "bn" ? x.name_bn : x.name_en}</div>
                        <div className="text-xs text-slate-600">Qty: {x.qty}</div>
                      </div>
                    </div>
                    <div className="font-semibold text-slate-900">৳{x.price * x.qty}</div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-6 border-t border-slate-900/5 pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Subtotal</span>
                <span className="font-semibold">৳{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Shipping</span>
                <span className="font-semibold">৳{items.length ? shipping : 0}</span>
              </div>
              <div className="flex justify-between text-base">
                <span className="font-extrabold text-slate-900">Total</span>
                <span className="font-extrabold text-emerald-800">৳{total}</span>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-xs text-slate-500">Supported channels</div>
              <div className="mt-3 flex flex-wrap gap-3">
                <div className="h-10 w-[92px] rounded-xl bg-white/70 border border-slate-900/10 flex items-center justify-center p-2">
                  <img src={bkash} alt="bKash" className="max-h-full" />
                </div>
                <div className="h-10 w-[92px] rounded-xl bg-white/70 border border-slate-900/10 flex items-center justify-center p-2">
                  <img src={nagad} alt="Nagad" className="max-h-full" />
                </div>
                <div className="h-10 w-[92px] rounded-xl bg-white/70 border border-slate-900/10 flex items-center justify-center p-2">
                  <img src={rocket} alt="Rocket" className="max-h-full" />
                </div>
                <div className="h-10 w-[92px] rounded-xl bg-white/70 border border-slate-900/10 flex items-center justify-center p-2">
                  <img src={sslcommerz} alt="SSLCOMMERZ" className="max-h-full" />
                </div>
                <div className="h-10 w-[92px] rounded-xl bg-white/70 border border-slate-900/10 flex items-center justify-center p-2">
                  <img src={visa} alt="Visa" className="max-h-full" />
                </div>
                <div className="h-10 w-[92px] rounded-xl bg-white/70 border border-slate-900/10 flex items-center justify-center p-2">
                  <img src={mastercard} alt="Mastercard" className="max-h-full" />
                </div>
              </div>
            </div>

            {/* ✅ show selected method */}
            <div className="mt-6 text-xs text-slate-600">
              {lang === "bn" ? "নির্বাচিত পেমেন্ট মেথড: " : "Selected payment method: "}
              <span className="font-semibold text-slate-900">{method.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
