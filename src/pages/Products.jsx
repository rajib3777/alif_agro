import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { products } from "../data";
import { useI18n } from "../i18n/useI18n.jsx";

export default function Products() {
  const { t } = useI18n();
  return (
    <div className="paper-bg min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <SectionTitle kicker="Catalog" title={t("nav.products")} />
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </main>
      <Footer />
    </div>
  );
}