import React, { useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { InsideMaterial } from './components/InsideMaterial';
import { UrgencyCTA } from './components/UrgencyCTA';
import { Deliverables } from './components/Deliverables';
import { Bonuses } from './components/Bonuses';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { trackPixelEvent } from './utils/pixel';

export default function App() {
  useEffect(() => {
    trackPixelEvent('ViewContent', {
      content_name: '+100 Diagnósticos para Frigoríficos que Não Gelam',
      content_category: 'E-book / Diagnósticos',
      value: 27.9,
      currency: 'BRL',
    });
  }, []);
  const scrollToPricing = () => {
    const el = document.getElementById('planos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F4F8FA] text-[#263238] font-sans antialiased selection:bg-[#123B4A] selection:text-white">
      <TopBar />
      <Hero onCtaClick={scrollToPricing} />
      <InsideMaterial />
      <UrgencyCTA onCtaClick={scrollToPricing} />
      <Deliverables />
      <Bonuses />
      <Pricing />
      <FAQ />
      <Footer />
      <StickyBottomBar onCtaClick={scrollToPricing} />
    </div>
  );
}
