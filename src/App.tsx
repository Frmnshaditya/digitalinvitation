/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { OrderFlowSection } from './components/OrderFlowSection';
import { PageLoader } from './components/PageLoader';
import { PortfolioSection } from './components/PortfolioSection';
import { PricelistSection } from './components/PricelistSection';
import { ServicesSection } from './components/ServicesSection';

export default function App() {
  const [highlightedPackageId, setHighlightedPackageId] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0A0A0A]">
      <PageLoader />
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection onSelectPackage={(pkgId) => setHighlightedPackageId(pkgId)} />
        <PricelistSection highlightedPackageId={highlightedPackageId} />
        <PortfolioSection />
        <OrderFlowSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
