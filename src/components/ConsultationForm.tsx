import React, { useState } from 'react';
import {
  WHATSAPP_RAW_PHONE,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  createWhatsAppLink,
  buildConsultationWhatsAppMessage,
  buildMailtoUrl,
  generateAutomatedAcknowledgment,
} from '../utils/whatsapp.ts';
import {
  CheckCircle2,
  Send,
  MessageSquare,
  Mail,
  Copy,
  Check,
  Download,
  ShieldCheck,
  Building2,
  Clock,
  Phone,
} from 'lucide-react';

interface ConsultationFormProps {
  initialBoard?: string;
  initialScale?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialBoard,
  initialScale,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [facilityName, setFacilityName] = useState('');
  const [targetBoard, setTargetBoard] = useState(
    initialBoard || 'NABL ISO 15189:2022 (Medical Diagnostics)'
  );
  const [facilityScale, setFacilityScale] = useState(
    initialScale || 'Medium (16-50 beds / 11-30 Analyzers)'
  );
  const [city, setCity] = useState('');
  const [objectives, setObjectives] = useState('');

  const [submittedData, setSubmittedData] = useState<{
    refId: string;
    ackMessage: string;
    whatsAppUrl: string;
    mailtoUrl: string;
  } | null>(null);

  const [copiedAck, setCopiedAck] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Sync props if changed
  React.useEffect(() => {
    if (initialBoard) setTargetBoard(initialBoard);
    if (initialScale) setFacilityScale(initialScale);
  }, [initialBoard, initialScale]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Generate unique Tracking Reference ID
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const refId = `QMS-${Date.now().toString().slice(-4)}-${randomDigits}`;
    const dateStr = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    const payload = {
      refId,
      name,
      phone,
      email,
      facilityName,
      targetBoard,
      facilityScale,
      objectives,
      city,
    };

    // 1. WhatsApp message formatted for Lead Consultant (91 8762564150)
    const whatsAppMessage = buildConsultationWhatsAppMessage(payload);
    const whatsAppUrl = createWhatsAppLink(whatsAppMessage);

    // 2. Email trigger url
    const mailtoUrl = buildMailtoUrl(payload);

    // 3. Automated acknowledgment message for the respondent
    const ackMessage = generateAutomatedAcknowledgment({
      refId,
      name,
      facilityName,
      targetBoard,
      facilityScale,
      email,
      phone,
      dateStr,
    });

    setSubmittedData({
      refId,
      ackMessage,
      whatsAppUrl,
      mailtoUrl,
    });

    // Automatically trigger WhatsApp in new tab for instant gap analysis submission
    window.open(whatsAppUrl, '_blank', 'noopener,noreferrer');

    setSubmitting(false);
  };

  const handleCopyAck = () => {
    if (!submittedData) return;
    navigator.clipboard.writeText(submittedData.ackMessage);
    setCopiedAck(true);
    setTimeout(() => setCopiedAck(false), 2500);
  };

  const handleDownloadAck = () => {
    if (!submittedData) return;
    const blob = new Blob([submittedData.ackMessage], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `QMSAnchor-Acknowledgment-${submittedData.refId}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="consultation-form" className="py-20 bg-[#fdf2f4] border-b border-rose-200/80 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 2xl:px-20">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 shadow-2xl border border-slate-800 relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            {/* Left Column: Context & Guarantees */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 tracking-wide">
                <span>Direct Advisory Desk</span>
                <span aria-hidden="true">·</span>
                <span>Automated WhatsApp & Email Dispatch</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Schedule Your Gap Audit Consultation
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Connect with our certified Lead Assessors. We conduct preliminary clause-by-clause
                assessments, review your SOPs, calibrate your equipment traceability, or evaluate
                hospital infection control protocols.
              </p>

              {/* Advisory Details Strip */}
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3 text-xs">
                <div className="flex items-center gap-2.5 text-slate-200">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    Direct WhatsApp & Calls:{' '}
                    <strong className="text-white">+{CONTACT_PHONE}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-200">
                  <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>
                    Official Support Email:{' '}
                    <strong className="text-white">{CONTACT_EMAIL}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-200">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Turnaround Guarantee: Response within 24 business hours</span>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Confidential Non-Disclosure Agreement (NDA) guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Detailed clause-by-clause discrepancy report delivered</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Customized SOP & Quality Manual drafting support</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Form or Automated Acknowledgment */}
            <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200">
              {!submittedData ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-lg font-bold font-heading text-slate-900">
                      Request Facility Gap Assessment
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Upon submission, an automated WhatsApp request and email dispatch are prepared,
                      and you will receive an immediate acknowledgment receipt.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Dr. / Mr. / Ms. Name"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-rose-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 8762564150"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-rose-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@facility.com"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-rose-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Facility Name
                      </label>
                      <input
                        type="text"
                        value={facilityName}
                        onChange={(e) => setFacilityName(e.target.value)}
                        placeholder="Hospital / Diagnostic Lab Name"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-rose-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Target Accreditation Board
                      </label>
                      <select
                        value={targetBoard}
                        onChange={(e) => setTargetBoard(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-rose-500 outline-none"
                      >
                        <option value="NABL ISO 15189:2022 (Medical Diagnostics)">
                          NABL ISO 15189:2022 (Medical Diagnostics)
                        </option>
                        <option value="NABL ISO/IEC 17025:2017 (Testing/Calibration)">
                          NABL ISO/IEC 17025:2017 (Testing/Calibration)
                        </option>
                        <option value="NABH Hospital Accreditation (5th/6th Ed)">
                          NABH Hospital Accreditation (5th/6th Ed)
                        </option>
                        <option value="NABH SHCO Entry Level (Up to 50 Beds)">
                          NABH SHCO Entry Level (Up to 50 Beds)
                        </option>
                        <option value="NABH Clinics / Dental / AYUSH">
                          NABH Clinics / Dental / AYUSH
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Facility Scale / Beds
                      </label>
                      <select
                        value={facilityScale}
                        onChange={(e) => setFacilityScale(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-rose-500 outline-none"
                      >
                        <option value="Small / Basic (1-15 beds / Single Scope)">
                          Small / Basic Scope (1-15 beds / Single Scope)
                        </option>
                        <option value="Medium (16-50 beds / 11-30 Analyzers)">
                          Medium Scope (16-50 beds / Nursing Home)
                        </option>
                        <option value="Large (50+ beds / High Automated Lab)">
                          Large Facility (50+ beds / Multi-site)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      City & State (Optional)
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Bengaluru, Karnataka or Mumbai, Maharashtra"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-rose-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Key Objectives or Specific Gaps
                    </label>
                    <textarea
                      rows={3}
                      value={objectives}
                      onChange={(e) => setObjectives(e.target.value)}
                      placeholder="Specify pending internal audits, upcoming surveillance dates, or target deadlines..."
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm focus:ring-2 focus:ring-rose-500 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-rose-400" />
                    <span>Submit Gap Audit Consultation Request</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center leading-normal">
                    Automatic notification will be routed to WhatsApp (+{CONTACT_PHONE}) and Email (
                    {CONTACT_EMAIL}).
                  </p>
                </form>
              ) : (
                /* AUTOMATED ACKNOWLEDGMENT MESSAGE VIEW */
                <div className="space-y-6 animate-in fade-in">
                  <div className="flex items-center justify-between border-b border-emerald-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold font-heading text-slate-900">
                          Consultation Request Registered!
                        </h4>
                        <span className="text-xs text-emerald-700 font-semibold">
                          Automated Acknowledgment Generated
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
                        Reference ID
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                        {submittedData.refId}
                      </span>
                    </div>
                  </div>

                  {/* Automated Acknowledgment Box for the Respondent */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Respondent Automated Acknowledgment
                      </label>
                      <button
                        type="button"
                        onClick={handleCopyAck}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-rose-700 hover:text-rose-900"
                      >
                        {copiedAck ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Acknowledgment</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-800 font-mono whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto">
                      {submittedData.ackMessage}
                    </pre>
                  </div>

                  {/* Direct Actions: WhatsApp Dispatch & Email Dispatch */}
                  <div className="space-y-3 pt-1">
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Automatic Request Dispatch Actions:
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href={submittedData.whatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 p-3 text-xs font-bold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded-xl transition-colors"
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-700" />
                        <span>Send via WhatsApp (+91 8762564150)</span>
                      </a>

                      <a
                        href={submittedData.mailtoUrl}
                        className="inline-flex items-center justify-center gap-2 p-3 text-xs font-bold text-slate-900 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl transition-colors"
                      >
                        <Mail className="w-4 h-4 text-rose-700" />
                        <span>Send to Email ({CONTACT_EMAIL})</span>
                      </a>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        type="button"
                        onClick={handleDownloadAck}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Summary Record (.txt)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSubmittedData(null)}
                        className="text-xs font-semibold text-rose-700 hover:underline"
                      >
                        Submit Another Consultation
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
