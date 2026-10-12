import React from 'react';
import { ShieldAlert, Award, CheckCircle2, Building, Scale, Users } from 'lucide-react';

export const AboutGovernance: React.FC = () => {
  return (
    <section id="about-section" className="py-20 bg-white border-b border-rose-200/80 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 2xl:px-20 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-900/80 tracking-wide mb-2">
            <span>Independent Professional Practice</span>
            <span aria-hidden="true">·</span>
            <span>Accreditation Ethics & Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            About QMSAnchor & Advisory Governance
          </h2>
          <p className="text-slate-600 mt-2 text-base leading-relaxed">
            QMSAnchor operates as an independent technical advisory, management consulting, and
            quality auditing firm. We bridge the operational gap between complex accreditation clauses
            and day-to-day healthcare and laboratory realities.
          </p>
        </div>

        {/* Institutional Governance Disclaimer Notice (Clean hairline border, NO thick border-l-4) */}
        <div className="bg-[#fff9fa] border border-rose-200 rounded-2xl p-6 sm:p-7 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-rose-100 rounded-xl shrink-0 mt-0.5">
              <ShieldAlert className="w-5 h-5 text-rose-700" />
            </div>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900 block font-semibold text-sm">
                Institutional Independence & Statutory Accreditation Disclaimer:
              </strong>
              <p>
                QMSAnchor is a private management consulting and technical advisory organization.
                We are not directly affiliated with, operated by, or representing NABL, NABH, Quality
                Council of India (QCI), or ISO standard issuing bodies. All accreditation certifications
                are awarded solely by the respective statutory boards upon completion of official
                third-party peer assessments. Our role is strictly limited to gap analysis, system
                documentation, technical training, and mock audits to ensure client audit preparedness.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Governance Tenets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#fdf2f4]/60 border border-rose-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-rose-200 flex items-center justify-center text-slate-900 shadow-xs">
              <Scale className="w-5 h-5 text-[#0284C7]" />
            </div>
            <h3 className="text-base font-bold font-heading text-slate-900">
              Impartial Technical Rigor
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We audit laboratories and hospitals with the unvarnished objectivity of Lead Assessors,
              identifying real operational vulnerabilities before formal peer evaluation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#fdf2f4]/60 border border-rose-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-rose-200 flex items-center justify-center text-slate-900 shadow-xs">
              <Award className="w-5 h-5 text-emerald-700" />
            </div>
            <h3 className="text-base font-bold font-heading text-slate-900">
              Standard Edition Synchronization
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              From ISO 15189:2022 risk-based transitions to NABH 6th Edition patient safety goals,
              all documentation templates are strictly updated with gazetted requirements.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#fdf2f4]/60 border border-rose-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-rose-200 flex items-center justify-center text-slate-900 shadow-xs">
              <Users className="w-5 h-5 text-rose-700" />
            </div>
            <h3 className="text-base font-bold font-heading text-slate-900">
              On-Site & Hands-On Handholding
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We do not simply hand over generic manuals; our technical advisors sit with bench
              technicians, Quality Managers, and clinicians to verify real implementation on the ground.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
