import React, { useState } from 'react';
import {
  ACCREDITATION_DATA,
  BoardData,
  AccreditationType,
  FacilitySizeTier,
} from '../data/accreditationData.ts';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  FileText,
  ShieldAlert,
  Sparkles,
  MessageSquare,
  Microscope,
  FlaskConical,
  Compass,
  Boxes,
  PieChart,
  Building2,
  Stethoscope,
  ShieldCheck,
  Leaf,
  Smile,
  UserCheck,
  Droplet,
  Activity,
} from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp.ts';

// Dynamic icon mapper
const iconMap: Record<string, React.ReactNode> = {
  Microscope: <Microscope className="w-6 h-6 text-[#0284C7]" />,
  FlaskConical: <FlaskConical className="w-6 h-6 text-[#0284C7]" />,
  Compass: <Compass className="w-6 h-6 text-[#0284C7]" />,
  Boxes: <Boxes className="w-6 h-6 text-[#0284C7]" />,
  PieChart: <PieChart className="w-6 h-6 text-[#0284C7]" />,
  Building2: <Building2 className="w-6 h-6 text-emerald-700" />,
  Stethoscope: <Stethoscope className="w-6 h-6 text-emerald-700" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-700" />,
  Leaf: <Leaf className="w-6 h-6 text-emerald-700" />,
  Smile: <Smile className="w-6 h-6 text-emerald-700" />,
  UserCheck: <UserCheck className="w-6 h-6 text-emerald-700" />,
  Droplet: <Droplet className="w-6 h-6 text-emerald-700" />,
  Activity: <Activity className="w-6 h-6 text-emerald-700" />,
};

interface NavigatorProps {
  onSelectScopeForForm?: (board: string, tier: string) => void;
}

export const AccreditationNavigator: React.FC<NavigatorProps> = ({ onSelectScopeForForm }) => {
  const [activeBoard, setActiveBoard] = useState<'NABL' | 'NABH'>('NABL');
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedType, setSelectedType] = useState<AccreditationType | null>(
    ACCREDITATION_DATA.NABL.types[0]
  );
  const [selectedSize, setSelectedSize] = useState<FacilitySizeTier | null>(
    ACCREDITATION_DATA.NABL.sizes[0]
  );

  const boardData: BoardData = ACCREDITATION_DATA[activeBoard];

  const handleBoardSelect = (board: 'NABL' | 'NABH') => {
    setActiveBoard(board);
    setSelectedType(ACCREDITATION_DATA[board].types[0]);
    setSelectedSize(ACCREDITATION_DATA[board].sizes[0]);
    setCurrentStep(2);
  };

  const handleTypeSelect = (type: AccreditationType) => {
    setSelectedType(type);
    setCurrentStep(3);
  };

  const handleApplyToForm = () => {
    if (onSelectScopeForForm && selectedSize) {
      onSelectScopeForForm(
        `${activeBoard} - ${selectedType?.name || ''}`,
        selectedSize.title
      );
    }
    const formElement = document.getElementById('consultation-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Pre-configured WhatsApp deep link for the exact selected roadmap
  const whatsAppInquiryMessage = `Hello QMSAnchor Advisory, I am exploring accreditation for:
• Board: ${activeBoard}
• Scope: ${selectedType?.name} (${selectedType?.standard})
• Facility Tier: ${selectedSize?.title} (${selectedSize?.scope})

Please provide a tailored Gap Audit proposal and SOP preparation timeline.`;

  return (
    <section id="navigator-section" className="py-20 bg-[#faeef1]/60 border-b border-rose-200/80 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 2xl:px-20">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-900/80 tracking-wide mb-2">
            <span>Interactive Pathway</span>
            <span aria-hidden="true">·</span>
            <span>Custom Compliance Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            NABL & NABH Accreditation Navigator
          </h2>
          <p className="text-slate-600 mt-2 text-base leading-relaxed">
            Select your accreditation board, identify your specific discipline stream, and configure
            your facility scale to unlock custom compliance timelines, documentation frameworks, and
            assessor manday requirements.
          </p>
        </div>

        {/* Interactive Stepper Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-rose-200/90 overflow-hidden">
          {/* Stepper Header Bar */}
          <div className="bg-slate-900 text-white p-5 sm:p-6 border-b border-slate-800">
            <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto text-center">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className={`flex flex-col items-center gap-1.5 transition-opacity ${
                  currentStep === 1 ? 'opacity-100 font-bold' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    currentStep === 1
                      ? 'bg-rose-500 text-white'
                      : currentStep > 1
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  1
                </div>
                <span className="text-xs">1. Select Board</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className={`flex flex-col items-center gap-1.5 transition-opacity ${
                  currentStep === 2 ? 'opacity-100 font-bold' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    currentStep === 2
                      ? 'bg-rose-500 text-white'
                      : currentStep > 2
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  2
                </div>
                <span className="text-xs">2. Choose Stream</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className={`flex flex-col items-center gap-1.5 transition-opacity ${
                  currentStep === 3 ? 'opacity-100 font-bold' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    currentStep === 3
                      ? 'bg-rose-500 text-white'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  3
                </div>
                <span className="text-xs">3. Facility Scope</span>
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            {/* STEP 1: BOARD SELECTION */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="text-center max-w-xl mx-auto">
                  <h3 className="text-2xl font-bold font-heading text-slate-900">
                    Which Accreditation Body Are You Targeting?
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                    Select your statutory accreditation stream to see customized guidelines
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {/* NABL Card */}
                  <div
                    onClick={() => handleBoardSelect('NABL')}
                    className={`cursor-pointer rounded-2xl p-7 border-2 transition-all flex flex-col justify-between ${
                      activeBoard === 'NABL'
                        ? 'border-[#0284C7] bg-[#f0f8ff]'
                        : 'border-slate-200 hover:border-[#0284C7] bg-white hover:bg-slate-50/60'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-extrabold font-heading text-[#0284C7]">
                          NABL
                        </span>
                        <span className="text-xs font-semibold text-slate-600">
                          Laboratories & Testing
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">
                        Testing, Calibration & Medical Diagnostics
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Statutory body under Quality Council of India (QCI) & DST. Covers medical
                        pathology, chemical, mechanical, electrical, calibration, reference materials,
                        and proficiency testing.
                      </p>
                      <div className="pt-2 text-xs text-slate-500 space-y-1">
                        <div>• ISO 15189:2022 (Clinical Diagnostics)</div>
                        <div>• ISO/IEC 17025:2017 (Testing & Calibration)</div>
                        <div>• ISO 17034 & ISO/IEC 17043 (RMP & PT)</div>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#0284C7]">
                      <span>Select NABL Streams</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* NABH Card */}
                  <div
                    onClick={() => handleBoardSelect('NABH')}
                    className={`cursor-pointer rounded-2xl p-7 border-2 transition-all flex flex-col justify-between ${
                      activeBoard === 'NABH'
                        ? 'border-emerald-600 bg-[#f0fdf4]'
                        : 'border-slate-200 hover:border-emerald-600 bg-white hover:bg-slate-50/60'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-extrabold font-heading text-emerald-700">
                          NABH
                        </span>
                        <span className="text-xs font-semibold text-slate-600">
                          Healthcare & Hospitals
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">
                        Hospitals, Nursing Homes & Clinical Facilities
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Constituent board of QCI establishing clinical governance, patient safety,
                        infection control, and hospital management frameworks across all clinical
                        settings.
                      </p>
                      <div className="pt-2 text-xs text-slate-500 space-y-1">
                        <div>• Full NABH Hospital Standards (5th/6th Edition)</div>
                        <div>• Small Healthcare Organizations (SHCO &lt; 50 beds)</div>
                        <div>• AYUSH, Dental, Clinics, Blood Centers & Radiology</div>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-emerald-700">
                      <span>Select NABH Streams</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: ACCREDITATION TYPE SELECTION */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rose-100 pb-4">
                  <div>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 mb-1"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Back to Board Selection</span>
                    </button>
                    <h3 className="text-xl font-bold font-heading text-slate-900">
                      Select {activeBoard} Discipline / Stream
                    </h3>
                  </div>
                  <div className="text-xs font-bold px-3 py-1 bg-slate-900 text-white rounded-md">
                    {activeBoard}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {boardData.types.map((type) => (
                    <div
                      key={type.id}
                      onClick={() => handleTypeSelect(type)}
                      className={`cursor-pointer rounded-xl p-5 border-2 transition-all flex flex-col justify-between ${
                        selectedType?.id === type.id
                          ? 'border-rose-500 bg-rose-50/40 shadow-xs'
                          : 'border-slate-200 hover:border-rose-400 bg-white hover:bg-slate-50/50'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="p-2 rounded-lg bg-slate-100">
                            {iconMap[type.iconName] || <ShieldCheck className="w-6 h-6 text-slate-700" />}
                          </div>
                          <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                            {type.standard}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900 leading-snug">
                          {type.name}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{type.desc}</p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                        <span>Select this stream</span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: FACILITY SIZE TIER & DETAILED ROADMAP */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rose-100 pb-4">
                  <div>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 mb-1"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Change Discipline Stream</span>
                    </button>
                    <h3 className="text-xl font-bold font-heading text-slate-900">
                      Facility Scale & Detailed Roadmap
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <span className="font-bold text-slate-900">{activeBoard}</span>
                    <span>/</span>
                    <span className="text-rose-700 font-bold">{selectedType?.name}</span>
                  </div>
                </div>

                {/* Facility Size Selector Tabs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {boardData.sizes.map((size) => (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`text-left rounded-2xl p-5 border-2 transition-all ${
                        selectedSize?.id === size.id
                          ? 'border-slate-900 bg-slate-900 text-white shadow-md'
                          : 'border-slate-200 hover:border-slate-400 bg-white text-slate-900'
                      }`}
                    >
                      <div className="text-xs font-bold uppercase tracking-wider opacity-70 mb-1">
                        Facility Tier
                      </div>
                      <div className="text-lg font-bold font-heading mb-1">{size.title}</div>
                      <div
                        className={`text-xs ${
                          selectedSize?.id === size.id ? 'text-rose-200' : 'text-slate-500'
                        }`}
                      >
                        {size.scope}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Detailed Compliance Roadmap Box */}
                {selectedSize && (
                  <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl border border-slate-800 animate-in fade-in">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-5">
                      <div>
                        <div className="text-xs text-rose-400 font-bold uppercase tracking-wider mb-1">
                          {activeBoard} · {selectedType?.standard}
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
                          {selectedSize.title} ({selectedSize.scope})
                        </h4>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={createWhatsAppLink(whatsAppInquiryMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>WhatsApp This Scope</span>
                        </a>

                        <button
                          type="button"
                          onClick={handleApplyToForm}
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition-colors"
                        >
                          <span>Request Gap Audit</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
                      <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
                        <div className="flex items-center gap-2 text-xs font-bold text-rose-300 uppercase tracking-wider mb-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Preparation & Rectification Timeline</span>
                        </div>
                        <div className="text-base font-bold text-emerald-400">
                          {selectedSize.details.timeline}
                        </div>
                      </div>

                      <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
                        <div className="flex items-center gap-2 text-xs font-bold text-rose-300 uppercase tracking-wider mb-1">
                          <Users className="w-3.5 h-3.5" />
                          <span>Mandatory Assessor Mandays</span>
                        </div>
                        <div className="text-base font-bold text-amber-300">
                          {selectedSize.details.assessorDays}
                        </div>
                      </div>

                      <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 md:col-span-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-rose-300 uppercase tracking-wider mb-1">
                          <FileText className="w-3.5 h-3.5" />
                          <span>Documentation Architecture & SOP Manuals</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {selectedSize.details.documentation}
                        </p>
                      </div>

                      <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
                        <div className="text-xs font-bold text-rose-300 uppercase tracking-wider mb-1">
                          Quality Manager / Lead Qualification
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {selectedSize.details.qualityManager}
                        </p>
                      </div>

                      <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
                        <div className="text-xs font-bold text-rose-300 uppercase tracking-wider mb-1">
                          {activeBoard === 'NABL'
                            ? 'Measurement Uncertainty (MU) & Traceability'
                            : 'Infection Control & Safety Framework'}
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {selectedSize.details.uncertaintyOrInfection}
                        </p>
                      </div>

                      <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 md:col-span-2">
                        <div className="text-xs font-bold text-rose-300 uppercase tracking-wider mb-1">
                          {activeBoard === 'NABL'
                            ? 'PT / EQAS Inter-Laboratory Comparison Mandate'
                            : 'Statutory Fire NOC & Bio-Medical Waste Clearance'}
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {selectedSize.details.ptOrFire}
                        </p>
                      </div>
                    </div>

                    <div className="bg-rose-950/40 border border-rose-500/30 p-4 rounded-xl text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="font-bold text-rose-300 block mb-0.5">
                          QMSAnchor Advisory Strategy:
                        </span>
                        <span className="text-slate-300">{selectedSize.details.supportPlan}</span>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-slate-400 block text-[11px]">Est. Board Fees</span>
                        <span className="text-white font-mono font-bold">
                          {selectedSize.details.estOfficialFees}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
