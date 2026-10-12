import React from 'react';
import { Logo } from './Logo.tsx';
import {
  Phone,
  Mail,
  MessageSquare,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { CONTACT_PHONE, WHATSAPP_RAW_PHONE, CONTACT_EMAIL } from '../utils/whatsapp.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 2xl:px-20 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Corporate Description (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="full" lightText={true} />
            <p className="text-xs text-slate-400 leading-relaxed pr-6 pt-2">
              Premier Quality Management Systems, NABL and NABH Accreditation Advisory. Providing
              laboratory conformity assessments, clinical governance audits, and turnkey gap
              rectification for medical institutions and testing laboratories across India.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
              <a
                href={`https://wa.me/${WHATSAPP_RAW_PHONE}?text=${encodeURIComponent(
                  'Hello QMSAnchor, I would like to request an accreditation advisory inquiry.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: +{CONTACT_PHONE}</span>
              </a>
            </div>
          </div>

          {/* Service Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Accreditation Scope
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#navigator-section" className="hover:text-white transition-colors">
                  ISO 15189:2022 Medical Labs
                </a>
              </li>
              <li>
                <a href="#navigator-section" className="hover:text-white transition-colors">
                  ISO/IEC 17025 Testing & Cal
                </a>
              </li>
              <li>
                <a href="#navigator-section" className="hover:text-white transition-colors">
                  NABH Hospital 5th & 6th Ed
                </a>
              </li>
              <li>
                <a href="#navigator-section" className="hover:text-white transition-colors">
                  NABH SHCO (Up to 50 beds)
                </a>
              </li>
              <li>
                <a href="#navigator-section" className="hover:text-white transition-colors">
                  ISO 17034 RMP & 17043 PT
                </a>
              </li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Interactive Tools
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#navigator-section" className="hover:text-white transition-colors">
                  Accreditation Navigator
                </a>
              </li>
              <li>
                <a href="#readiness-tool" className="hover:text-white transition-colors">
                  Readiness Score Calculator
                </a>
              </li>
              <li>
                <a href="#estimator-section" className="hover:text-white transition-colors">
                  Fee & Timeline Estimator
                </a>
              </li>
              <li>
                <a href="#standards-breakdown" className="hover:text-white transition-colors">
                  Standards Clause Breakdown
                </a>
              </li>
              <li>
                <a href="#consultation-form" className="hover:text-white transition-colors">
                  Request Gap Audit Form
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Advisory Contact Desk */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Advisory Desk
            </div>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <a
                  href={`tel:+${WHATSAPP_RAW_PHONE}`}
                  className="hover:text-white font-mono font-medium"
                >
                  +{CONTACT_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="pt-1 text-[11px] text-slate-400">
                Desk Hours: Monday – Saturday, 9:00 AM – 9:00 PM IST
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} QMSAnchor Quality Advisory Consultants. All Rights
            Reserved.
          </p>
          <p className="text-[11px] text-slate-400 max-w-xl text-center sm:text-right">
            Disclaimer: QMSAnchor is an independent management consulting firm and is not an official
            accreditation board or representative of NABL or NABH.
          </p>
        </div>
      </div>
    </footer>
  );
};
