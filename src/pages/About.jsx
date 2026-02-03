import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

export default function About() {
  return (
    <div className="paper-bg min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <SectionTitle kicker="Company" title="About Alif Agro Services" />
        <div className="card-paper p-7 text-slate-700 space-y-3">
          <p>
            Alif Agro Services supplies quality fodder seeds and supports farmers with practical guidance.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}