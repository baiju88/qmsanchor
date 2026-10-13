import React, { useState } from 'react';
import {
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  Microscope,
  Activity,
  HeartPulse,
  Flame,
  Scale,
  Gauge,
  Syringe,
  Users,
} from 'lucide-react';
import auditTeamImage from '../assets/images/audit_consultation_team_1791816543520.jpg';

export const StandardsSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  return (
    <section id="standards-breakdown" className="py-20 bg-white border-b border-rose-200/80 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 2xl:px-20 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-900/80 tracking-wide mb-2">
            <span>Rigorous Compliance Frameworks</span>
            <span aria-hidden="true">·</span>
            <span>Technical & Clinical Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Accreditation Standards & Clause Compliance
          </h2>
          <p className="text-slate-600 mt-2 text-base leading-relaxed">
            QMSAnchor translates dense statutory criteria into clear operational workflows. Here is
            how our Lead Assessors address core NABL and NABH objective elements.
          </p>
        </div>

        {/* 2 Main Pillar Cards with Subtle Hairline Borders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* NABL Technical Pillar Card */}
          <div className="bg-[#fcf7f8] rounded-2xl p-8 border border-rose-200/80 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-rose-200/60 pb-5">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white rounded-xl border border-rose-200 shadow-xs">
                  <Microscope className="w-6 h-6 text-[#0284C7]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-900">
                    NABL Laboratory Standards Scope
                  </h3>
                  <span className="text-xs font-semibold text-[#0284C7]">
                    ISO 15189:2022 & ISO/IEC 17025:2017
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="bg-white p-4 rounded-xl border border-rose-100 shadow-xs space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Scale className="w-4 h-4 text-[#0284C7]" />
                  <span>Measurement Uncertainty (MU) Modeling</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clause 7.6 ISO 15189 / 7.6 ISO/IEC 17025 compliant calculation spreadsheets. We establish
                  Type A and Type B components, coverage factors (k=2), expanded uncertainty budgets, and
                  clinical relevance limits.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-rose-100 shadow-xs space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Gauge className="w-4 h-4 text-[#0284C7]" />
                  <span>Metrological Traceability & Equipment Calibration</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Verification of unbroken calibration chains back to SI units through NPL or ILAC MRA
                  accredited calibration labs. Validation of calibration certificates and calibration interval
                  evaluations.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-rose-100 shadow-xs space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <FileCheck className="w-4 h-4 text-[#0284C7]" />
                  <span>PT / EQAS Schemes & Inter-Laboratory Comparisons</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Enrollment in ISO/IEC 17043 accredited PT schemes. Design of internal QC rules (Westgard
                  multirules), Z-score / En number monitoring, and documented corrective action for any outliers.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-rose-100 shadow-xs space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
                  <span>Method Validation & Verification Dossiers</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Experimental protocols verifying Linearity, Limit of Detection (LOD), Limit of
                  Quantitation (LOQ), Repeatability, Intermediate Precision, Trueness, and Matrix
                  Interferences before clinical reporting.
                </p>
              </div>
            </div>
          </div>

          {/* NABH Healthcare Pillar Card */}
          <div className="bg-[#f7faf8] rounded-2xl p-8 border border-emerald-200/80 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-emerald-200/60 pb-5">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white rounded-xl border border-emerald-200 shadow-xs">
                  <HeartPulse className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-900">
                    NABH Healthcare Governance Scope
                  </h3>
                  <span className="text-xs font-semibold text-emerald-700">
                    Full NABH 5th/6th & Entry Level SHCO
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-xs space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Activity className="w-4 h-4 text-emerald-700" />
                  <span>Patient Rights & Clinical Care Standards (AAC, COP, PRE)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Structured admission and triage protocols, informed consent documentation, vulnerable
                  patient policies, emergency code procedures (Code Blue, Code Red), and standardized patient
                  discharge summaries.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-xs space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Syringe className="w-4 h-4 text-emerald-700" />
                  <span>Hospital Infection Control (HIC) & Surveillance</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Active Healthcare-Associated Infection (HAI) surveillance (VAP, CAUTI, CLABSI, SSI rates).
                  Hand hygiene compliance audits, Operation Theatre microbiological air swabs, and biomedical
                  waste (BMW) segregation.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-xs space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Medication Management & Safety (MOM)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-alert medications and Look-Alike Sound-Alike (LASA) separation protocols. Dual
                  verification checklists, prescription error tracking, narcotic double-lock storage, and
                  Adverse Drug Reaction (ADR) reporting.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-xs space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Flame className="w-4 h-4 text-emerald-700" />
                  <span>Facility Management & Disaster Safety (FMS)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Statutory Fire NOC compliance, hazardous materials handling, piped medical gas manifold
                  alarms, emergency power generator cutover testing, and documented staff mock evacuation
                  drills.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Assessor Consultation Showcase (Visual Proof Adjacency) */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-700 shadow-md bg-slate-900 min-h-[256px]">
              {!imgError ? (
                <img
                  src={auditTeamImage}
                  alt="Lead Assessors reviewing laboratory accreditation compliance blueprints"
                  className="w-full h-64 sm:h-72 object-cover"
                  onError={() => setImgError(true)}
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-64 sm:h-72 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-white/10 rounded-xl">
                      <Users className="w-6 h-6 text-rose-400" />
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                      Lead Assessor Panel
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-lg font-bold font-heading text-white">
                      Mock Assessment & Pre-Audit Scrutiny
                    </h4>
                    <p className="text-xs text-slate-300">
                      Simulating real statutory NABL/NABH inspections with clause-by-clause discrepancy reports.
                    </p>
                  </div>
                  <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-700/60">
                    Qualified Lead Assessors & Technical Experts
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                Auditor-Grade Advisory Methodology
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                How QMSAnchor Conducts Your Pre-Assessment Gap Audit
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our advisors are certified Lead Auditors and technical experts. Before any official board
                application is filed, we simulate the exact scrutiny of NABL / NABH assessors to detect
                non-conformities (NCs) early and draft rectifying actions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Clause-by-Clause Discrepancy Matrix</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Documented Corrective Action (CAPA)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Pre-Audit Staff Mock Interviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero Major NC Recurrence Assurance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
