/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AccreditationNavigator } from './components/AccreditationNavigator.tsx';
import { StandardsSection } from './components/StandardsSection.tsx';
import { ReadinessCalculator } from './components/ReadinessCalculator.tsx';
import { CostEstimator } from './components/CostEstimator.tsx';
import { ConsultationForm } from './components/ConsultationForm.tsx';
import { AboutGovernance } from './components/AboutGovernance.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  const [selectedFormBoard, setSelectedFormBoard] = useState<string>('');
  const [selectedFormScale, setSelectedFormScale] = useState<string>('');

  const handleSelectScopeFromNavigator = (board: string, tier: string) => {
    setSelectedFormBoard(board);
    setSelectedFormScale(tier);
  };

  return (
    <div className="min-h-screen w-full bg-[#fdf2f4] text-slate-900 flex flex-col antialiased selection:bg-rose-200 selection:text-slate-900">
      {/* 3-Zone Sticky Navigation */}
      <TopBar />

      {/* Main Expansive Content Stream */}
      <main className="w-full flex-1">
        {/* Full-width Hero with high-resolution laboratory asset and benchmarks */}
        <HeroSection />

        {/* Interactive 3-Step NABL & NABH Accreditation Navigator */}
        <AccreditationNavigator onSelectScopeForForm={handleSelectScopeFromNavigator} />

        {/* Clause-by-clause Standards Breakdown & Auditor Methodology */}
        <StandardsSection />

        {/* Interactive 5-Question Readiness Calculator with Instant Score */}
        <ReadinessCalculator />

        {/* Dynamic Board Assessment Fee & Timeline Estimator */}
        <CostEstimator />

        {/* Gap Audit Consultation with Automated WhatsApp & Email Dispatch */}
        <ConsultationForm
          initialBoard={selectedFormBoard}
          initialScale={selectedFormScale}
        />

        {/* Institutional Independence & Advisory Governance */}
        <AboutGovernance />
      </main>

      {/* Corporate Footer with Updated Contact Information */}
      <Footer />

      {/* Floating 24/7 WhatsApp Desk (+91 8762564150) */}
      <FloatingWhatsApp />
    </div>
  );
}
