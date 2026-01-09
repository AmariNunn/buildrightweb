import { useEffect } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { SocialMedia } from "@/components/social-media";
import { Portfolio } from "@/components/portfolio";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { BookingSection } from "@/components/booking-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { getPendingHash, clearPendingHash, scrollToElement } from "@/lib/navigation";

export default function Home() {
  useEffect(() => {
    const pendingHash = getPendingHash();
    const urlHash = window.location.hash ? window.location.hash.slice(1) : null;
    const targetId = pendingHash || urlHash;
    
    if (targetId) {
      if (pendingHash) {
        clearPendingHash();
      }
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToElement(targetId);
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <SocialMedia />
        <Portfolio />
        <Process />
        <Testimonials />
        <BookingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
