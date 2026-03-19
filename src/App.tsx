import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Fleet from "./components/Fleet";
import HowItWorks from "./components/HowItWorks";
import LocationRentals from "./components/LocationRentals";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet-async";

function App() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            const offsetTop =
              element.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  // Ganti dengan domain Anda yang sebenarnya
  const siteUrl = "https://landing-page-rent-card.vercel.app/";
  const ogImage =
    "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&h=630&q=80";

  const siteTitle = "Queen Rent Car - Rental Mobil Terpercaya di Parepare";
  const siteDescription =
    "Rental Mobil Automatic dan Manual Terlengkap di Parepare. Harga terjangkau, mobil terawat, layanan profesional 24 jam.";

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 antialiased">
      <Helmet>
        {/* Basic HTML Meta Tags */}
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta
          name="keywords"
          content="rental mobil parepare, sewa mobil, rental mobil manual, rental mobil automatic"
        />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:site_name" content="Queen Rent Car" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Queen Rent Car - Rental Mobil Parepare"
        />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="twitter:image:alt"
          content="Queen Rent Car - Rental Mobil Parepare"
        />

        {/* WhatsApp (menggunakan OG tags) */}
        <meta property="og:image:secure_url" content={ogImage} />
      </Helmet>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.03)_1px,transparent_0)] bg-size[24px_24px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <Stats />
          <Fleet />
          <HowItWorks />
          <LocationRentals />
          <Testimonials />
          <CTA />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
