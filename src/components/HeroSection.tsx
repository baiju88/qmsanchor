import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, CheckCircle2, ChevronRight, Phone, Mail } from 'lucide-react';
import { WHATSAPP_RAW_PHONE, CONTACT_PHONE, CONTACT_EMAIL } from '../utils/whatsapp.ts';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#fef5f7] via-[#fdf2f4] to-[#fae9ec] pt-8 pb-16 sm:pb-24 border-b border-rose-200/80">
      {/* Subtle architectural ambient grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="w-full px-4 sm:px-8 lg:px-12 2xl:px-20 relative z-10">
        {/* Top Trust Signal Kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-rose-900/80 mb-6 tracking-wide">
          <span className="text-slate-900 font-bold">India & Global Quality Assurance</span>
          <span aria-hidden="true">·</span>
          <span>NABL ISO 15189 & ISO/IEC 17025</span>
          <span aria-hidden="true">·</span>
          <span>NABH Hospitals & SHCO Accreditation</span>
        </div>

        {/* 2-Column Responsive Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          {/* Left Column: Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-heading text-slate-900 tracking-tight leading-[1.12] text-balance">
              Navigate <span className="text-[#0284C7]">NABL</span> &{' '}
              <span className="text-emerald-700">NABH</span> Accreditation with Precision
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
              Turn complex accreditation standards into streamlined operational excellence. Comprehensive,
              end-to-end consulting for Healthcare Organizations, Medical Diagnostics, Testing Labs, and
              Calibration Centers across India.
            </p>

            {/* Quick Contact Badge with updated Phone & Email */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-600 font-medium">
              <a
                href={`tel:+${WHATSAPP_RAW_PHONE}`}
                className="inline-flex items-center gap-1.5 text-slate-800 hover:text-rose-700 font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-rose-600" />
                <span>+{CONTACT_PHONE}</span>
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-1.5 text-slate-800 hover:text-rose-700 font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-rose-600" />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Lead Assessor Guided</span>
              </span>
            </div>

            {/* Main Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <a
                href="#navigator-section"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all whitespace-nowrap"
              >
                <span>Explore Accreditation Hub</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_RAW_PHONE}?text=${encodeURIComponent(
                  'Hello QMSAnchor, I would like to request an instant Gap Analysis discussion for my facility.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-colors whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span>WhatsApp Gap Inquiry</span>
              </a>

              <a
                href="#readiness-tool"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white/80 hover:bg-white border border-rose-200/90 rounded-xl transition-colors whitespace-nowrap"
              >
                <span>Check Readiness</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset & Floating Proof Card */}
          <div className="lg:col-span-5 relative flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-rose-200/90 bg-white group">
              <img
                src="/src/assets/images/hero_lab_accreditation_1791816532928.jpg"
                alt="Clinical laboratory and healthcare quality inspection facility"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

              {/* In-Image Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-rose-200 mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>ISO 15189 & ISO/IEC 17025 Compliance</span>
                </div>
                <p className="text-xs text-slate-200">
                  Precision validation, measurement uncertainty budgets, and clinical governance audits.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Metric Benchmark Performance Row (Full-width row below hero split) */}
        <div className="mt-14 pt-10 border-t border-rose-200/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-rose-200/70 shadow-xs hover:border-rose-300 transition-colors">
              <div className="text-3xl font-extrabold text-slate-900 font-heading tabular-nums">
                350+
              </div>
              <div className="text-xs font-bold text-rose-900/80 mt-1 uppercase tracking-wider">
                Labs Accredited
              </div>
              <p className="text-xs text-slate-500 mt-1">ISO 15189 & ISO/IEC 17025</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-rose-200/70 shadow-xs hover:border-rose-300 transition-colors">
              <div className="text-3xl font-extrabold text-slate-900 font-heading tabular-nums">
                180+
              </div>
              <div className="text-xs font-bold text-rose-900/80 mt-1 uppercase tracking-wider">
                Hospitals & SHCOs
              </div>
              <p className="text-xs text-slate-500 mt-1">NABH 5th & 6th Edition</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-rose-200/70 shadow-xs hover:border-rose-300 transition-colors">
              <div className="text-3xl font-extrabold text-[#0284C7] font-heading tabular-nums">
                &lt; 4.5 Mo
              </div>
              <div className="text-xs font-bold text-rose-900/80 mt-1 uppercase tracking-wider">
                Avg Duration
              </div>
              <p className="text-xs text-slate-500 mt-1">From Gap Audit to Pre-Assessment</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-rose-200/70 shadow-xs hover:border-rose-300 transition-colors">
              <div className="text-3xl font-extrabold text-emerald-700 font-heading tabular-nums">
                100%
              </div>
              <div className="text-xs font-bold text-rose-900/80 mt-1 uppercase tracking-wider">
                NC Rectification
              </div>
              <p className="text-xs text-slate-500 mt-1">Post-Audit Closure Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
