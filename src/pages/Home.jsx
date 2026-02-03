import heroImg from "../assets/mango.png";
import { products } from "../data";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import ProductCard from "../components/ProductCard.jsx";
import PromoCard from "../components/PromoCard.jsx";
import ad1 from "../assets/alif_01.png";
import ad2 from "../assets/alif_02.jpg";
import { useI18n } from "../i18n/useI18n.jsx";

function WhyItem({ icon, title, body }) {
  return (
    <div className="card-paper p-5">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-2xl bg-white/70 border border-slate-900/10 flex items-center justify-center text-xl">
          {icon}
        </div>
        <div>
          <div className="font-extrabold text-slate-900">{title}</div>
          <div className="text-sm text-slate-600 mt-1">{body}</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="paper-bg min-h-screen">
      <Header />

      <main className="max-w-6xl mx-auto px-4">
        {/* HERO */}
        <section className="pt-10 sm:pt-14">
          <div className="card-paper overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-7 sm:p-10">
                <div className="badge">Trusted Seed Partner</div>
                <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                  {t("hero.title")}
                </h1>
                <p className="mt-4 text-slate-600 text-base sm:text-lg">
                  {t("hero.subtitle")}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="/products" className="btn-primary">
                    {t("hero.ctaPrimary")}
                  </a>
                  <a href="/contact" className="btn-soft">
                    {t("hero.ctaSecondary")}
                  </a>
                </div>

                <div className="mt-7 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-2xl bg-white/60 border border-slate-900/10 p-3">
                    <div className="text-xl font-extrabold text-emerald-800">24/7</div>
                    <div className="text-xs text-slate-600 mt-1">Order Help</div>
                  </div>
                  <div className="rounded-2xl bg-white/60 border border-slate-900/10 p-3">
                    <div className="text-xl font-extrabold text-emerald-800">2</div>
                    <div className="text-xs text-slate-600 mt-1">Top Seeds</div>
                  </div>
                  <div className="rounded-2xl bg-white/60 border border-slate-900/10 p-3">
                    <div className="text-xl font-extrabold text-emerald-800">Fast</div>
                    <div className="text-xs text-slate-600 mt-1">Delivery</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img src={heroImg} alt="Farmer" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <div className="rounded-2xl bg-white/85 border border-slate-900/10 p-4">
                    <div className="text-xs text-slate-600">Hotline</div>
                    <div className="text-lg font-extrabold text-slate-900">01334-642219</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="mt-12">
          <SectionTitle
            kicker="Seeds"
            title={t("sections.featured")}
            right={<a className="btn-soft !px-4 !py-2" href="/products">View all</a>}
          />
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </section>

        {/* PROMO */}
        <section className="mt-12">
          <SectionTitle kicker="Offers" title={t("sections.promo")} />
          <div className="grid md:grid-cols-3 gap-6">
            <PromoCard
              title="10% Discount Week"
              body="Order today and get special discount on selected packs."
              img={ad1}
              accent="amber"
            />
            <PromoCard
              title="Free Farming Tips"
              body="Get sowing and feeding guidance with every order."
              img={ad2}
              accent="emerald"
            />
            <PromoCard
              title="Fast Delivery"
              body="We deliver across Bangladesh with safe packaging."
              img={heroImg}
              accent="sky"
            />
          </div>
        </section>

        {/* WHY */}
        <section className="mt-12">
          <SectionTitle kicker="Why us" title={t("sections.why")} />
          <div className="grid md:grid-cols-3 gap-6">
            <WhyItem icon="✅" title={t("why.oneTitle")} body={t("why.oneBody")} />
            <WhyItem icon="🚚" title={t("why.twoTitle")} body={t("why.twoBody")} />
            <WhyItem icon="📞" title={t("why.threeTitle")} body={t("why.threeBody")} />
          </div>
        </section>

        {/* CONTACT STRIP */}
        <section className="mt-12">
          <div className="card-paper p-6 sm:p-8">
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              <div>
                <div className="text-lg sm:text-xl font-extrabold text-slate-900">Need help choosing seeds?</div>
                <div className="text-sm text-slate-600 mt-1">Call us for guidance and bulk orders.</div>
              </div>
              <a href="/contact" className="btn-primary">Contact Now</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}