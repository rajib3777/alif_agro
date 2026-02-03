import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import PromoCard from "../components/PromoCard.jsx";

import heroImg from "../assets/mango.png";
import ad1 from "../assets/alif_01.png";
import ad2 from "../assets/alif_02.jpg";

// ✅ UI promo cards (mock)
const mockPromotions = [
  {
    id: 1,
    title: "Seasonal Seed Offer",
    body: "এই সপ্তাহে Sorghum–Sudan ও Napier seed এ বিশেষ ছাড়।",
    img: ad1,
    accent: "amber",
  },
  {
    id: 2,
    title: "Bulk Purchase Discount",
    body: "১০ কেজি বা তার বেশি অর্ডারে অতিরিক্ত ডিসকাউন্ট।",
    img: heroImg,
    accent: "emerald",
  },
  {
    id: 3,
    title: "Cash on Delivery",
    body: "সারা বাংলাদেশে ক্যাশ অন ডেলিভারি সুবিধা।",
    img: ad2,
    accent: "sky",
  },
  {
    id: 4,
    title: "Dealer Campaign",
    body: "ডিলার ও রিসেলারদের জন্য বিশেষ মূল্য। যোগাযোগ করুন।",
    img: ad1,
    accent: "rose",
  },
  {
    id: 5,
    title: "Farmer Support Program",
    body: "প্রতিটি অর্ডারের সাথে ফ্রি চাষাবাদ গাইড।",
    img: heroImg,
    accent: "violet",
  },
];

// ✅ Backend API style mock response (production-ready)
const mockBackendResponse = {
  success: true,
  promotions: [
    {
      id: 101,
      title: "Seasonal Seed Offer",
      description: "এই সপ্তাহে Sorghum–Sudan ও Napier seed এ বিশেষ ছাড়।",
      active: true,
      validTill: "2026-03-10",
    },
    {
      id: 102,
      title: "Bulk Order Discount",
      description: "১০ কেজি বা তার বেশি অর্ডারে অতিরিক্ত ডিসকাউন্ট।",
      active: true,
      validTill: "2026-03-20",
    },
    {
      id: 103,
      title: "Dealer Campaign",
      description: "ডিলার ও রিসেলারদের জন্য বিশেষ মূল্য।",
      active: false,
      validTill: "2026-02-28",
    },
  ],
};

export default function Promotions() {
  return (
    <div className="paper-bg min-h-screen">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-10">
        <SectionTitle kicker="Promotion" title="Offers & Campaigns" />

        {/* ✅ Promotion cards from mock UI data */}
        <div className="grid md:grid-cols-3 gap-6">
          {mockPromotions.map((promo) => (
            <PromoCard
              key={promo.id}
              title={promo.title}
              body={promo.body}
              img={promo.img}
              accent={promo.accent}
            />
          ))}
        </div>

        {/* ✅ Backend preview section (mock API response) */}
        <div className="mt-10 card-paper p-7">
          <div className="text-xl font-extrabold text-slate-900">
            Promotion
          </div>

          <div className="mt-5 space-y-3">
            {mockBackendResponse.promotions.map((promo) => (
              <div
                key={promo.id}
                className="flex items-start justify-between gap-4 rounded-xl border border-slate-900/10 p-4 bg-white/60"
              >
                <div>
                  <div className="font-semibold text-slate-900">
                    {promo.title}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">
                    {promo.description}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    Valid till: {promo.validTill}
                  </div>
                </div>

                <div
                  className={
                    "text-xs font-bold px-3 py-1 rounded-full " +
                    (promo.active
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-slate-200 text-slate-600")
                  }
                >
                  {promo.active ? "ACTIVE" : "INACTIVE"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
