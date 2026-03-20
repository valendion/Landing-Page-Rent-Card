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
import BackToTop from "./components/BackToTop";

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

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 antialiased">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.03)_1px,transparent_0)] bg-size[24px_24px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <CTA />
          <Stats />
          <Fleet />
          <HowItWorks />
          <LocationRentals />
          <Testimonials />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
