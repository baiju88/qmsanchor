import React, { useState } from 'react';
import { Logo } from './Logo.tsx';
import { Menu, X, MessageSquare } from 'lucide-react';
import { WHATSAPP_RAW_PHONE } from '../utils/whatsapp.ts';

export const TopBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-rose-200/70 shadow-xs transition-colors">
      <div className="w-full px-4 sm:px-8 lg:px-12 2xl:px-20">
        <div className="flex items-center justify-between gap-8 h-20 w-full">
          {/* Zone 1: Brand Wordmark (Single clean element) */}
          <a
            href="#"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-lg p-1"
            aria-label="QMSAnchor Home"
          >
            <Logo variant="horizontal" />
          </a>

          {/* Zone 2: 4-5 Concise Single-line Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a
              href="#navigator-section"
              className="hover:text-rose-700 transition-colors whitespace-nowrap shrink-0"
            >
              Accreditation Hub
            </a>
            <a
              href="#standards-breakdown"
              className="hover:text-rose-700 transition-colors whitespace-nowrap shrink-0"
            >
              Standards Scope
            </a>
            <a
              href="#readiness-tool"
              className="hover:text-rose-700 transition-colors whitespace-nowrap shrink-0"
            >
              Readiness Quiz
            </a>
            <a
              href="#estimator-section"
              className="hover:text-rose-700 transition-colors whitespace-nowrap shrink-0"
            >
              Fee Estimator
            </a>
            <a
              href="#about-section"
              className="hover:text-rose-700 transition-colors whitespace-nowrap shrink-0"
            >
              Advisory Governance
            </a>
          </nav>

          {/* Zone 3: Primary Action & Quick WhatsApp Trigger */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${WHATSAPP_RAW_PHONE}?text=${encodeURIComponent(
                'Hello QMSAnchor, I would like to inquire about NABL / NABH accreditation advisory.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Desk</span>
            </a>

            <a
              href="#consultation-form"
              className="inline-flex items-center px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0"
            >
              Request Gap Audit
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-rose-700 hover:bg-rose-50 rounded-lg focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-rose-200 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-slate-700">
            <a
              href="#navigator-section"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-rose-700"
            >
              Accreditation Navigator (NABL & NABH)
            </a>
            <a
              href="#standards-breakdown"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-rose-700"
            >
              Standards Compliance Breakdown
            </a>
            <a
              href="#readiness-tool"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-rose-700"
            >
              Readiness Calculator
            </a>
            <a
              href="#estimator-section"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-rose-700"
            >
              Cost & Timeline Estimator
            </a>
            <a
              href="#about-section"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-rose-700"
            >
              About Advisory Governance
            </a>
          </nav>

          <div className="pt-4 border-t border-rose-100 flex flex-col gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_RAW_PHONE}?text=${encodeURIComponent(
                'Hello QMSAnchor, I would like to inquire about NABL / NABH accreditation advisory.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp: +91 8762564150</span>
            </a>
            <a
              href="#consultation-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-bold text-white bg-slate-900 rounded-lg shadow"
            >
              Request Gap Audit Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
