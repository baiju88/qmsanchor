import React, { useState } from 'react';
import { ACCREDITATION_DATA } from '../data/accreditationData.ts';
import { Receipt, Clock, Users, ArrowRight, MessageSquare, Info } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp.ts';

export const CostEstimator: React.FC = () => {
  const [board, setBoard] = useState<'NABL' | 'NABH'>('NABL');
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  const boardData = ACCREDITATION_DATA[board];
  const currentCategory = boardData.types[selectedCategoryIndex] || boardData.types[0];
  const currentSize = boardData.sizes[selectedSizeIndex] || boardData.sizes[0];

  const handleBoardChange = (newBoard: 'NABL' | 'NABH') => {
    setBoard(newBoard);
    setSelectedCategoryIndex(0);
    setSelectedSizeIndex(0);
  };

  const whatsAppEstimateMessage = `Hello QMSAnchor Advisory, I calculated an accreditation budget estimate:
• Board: ${board}
• Stream: ${currentCategory.name} (${currentCategory.standard})
• Facility Scale: ${currentSize.title} (${currentSize.scope})
• Est. Official Fees: ${currentSize.details.estOfficialFees}
• Timeline: ${currentSize.details.timeline}
• Mandays: ${currentSize.details.assessorDays}

Please provide a detailed advisory quotation and onboarding scope.`;

  return (
    <section id="estimator-section" className="py-20 bg-white border-b border-rose-200/80 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 2xl:px-20 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-900/80 tracking-wide mb-2">
            <span>Budgeting & Resource Planning</span>
            <span aria-hidden="true">·</span>
            <span>Accreditation Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Dynamic Cost & Timeline Estimator
          </h2>
          <p className="text-slate-600 mt-2 text-base leading-relaxed">
            Configure your facility parameters to view estimated official board assessment fees,
            mandatory assessor mandays, and realistic preparation durations.
          </p>
        </div>

        {/* 2-Column Split: Configurator on Left, Summary Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-[#fcf5f7] p-6 sm:p-8 rounded-2xl border border-rose-200/80 shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Accreditation Board
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleBoardChange('NABL')}
                    className={`py-3 px-4 rounded-xl text-xs font-bold transition-all border ${
                      board === 'NABL'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-white text-slate-700 border-rose-200 hover:border-slate-400'
                    }`}
                  >
                    NABL (Labs & Testing)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleBoardChange('NABH')}
                    className={`py-3 px-4 rounded-xl text-xs font-bold transition-all border ${
                      board === 'NABH'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-white text-slate-700 border-rose-200 hover:border-slate-400'
                    }`}
                  >
                    NABH (Healthcare & Hospitals)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Discipline / Category Stream
                </label>
                <select
                  value={selectedCategoryIndex}
                  onChange={(e) => setSelectedCategoryIndex(Number(e.target.value))}
                  className="w-full bg-white border border-rose-200 rounded-xl p-3.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500 shadow-xs"
                >
                  {boardData.types.map((cat, idx) => (
                    <option key={cat.id} value={idx}>
                      {cat.name} ({cat.standard})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Facility Size / Bed Capacity / Equipment Tier
                </label>
                <select
                  value={selectedSizeIndex}
                  onChange={(e) => setSelectedSizeIndex(Number(e.target.value))}
                  className="w-full bg-white border border-rose-200 rounded-xl p-3.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500 shadow-xs"
                >
                  {boardData.sizes.map((s, idx) => (
                    <option key={s.id} value={idx}>
                      {s.title} — {s.scope}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-rose-200/60 flex items-center gap-2 text-xs text-slate-500">
              <Info className="w-4 h-4 text-rose-500 shrink-0" />
              <span>
                Calculations derived from gazetted statutory assessment schedules for {board}.
              </span>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-6 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <div className="text-xs text-rose-400 font-bold uppercase tracking-wider">
                    {board} Scope Projection
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white">
                    {currentSize.title}
                  </h3>
                </div>
                <div className="text-xs text-slate-400 font-mono text-right">
                  {currentCategory.standard}
                </div>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div>
                    <span className="text-xs text-slate-400 block mb-0.5">
                      Est. Board Application & Assessment Fees
                    </span>
                    <span className="text-xl font-bold font-heading text-white tabular-nums">
                      {currentSize.details.estOfficialFees}
                    </span>
                  </div>
                  <Receipt className="w-6 h-6 text-rose-400" />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div>
                    <span className="text-xs text-slate-400 block mb-0.5">
                      Preparation & Gap Rectification Time
                    </span>
                    <span className="text-xl font-bold font-heading text-emerald-400">
                      {currentSize.details.timeline}
                    </span>
                  </div>
                  <Clock className="w-6 h-6 text-emerald-400" />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div>
                    <span className="text-xs text-slate-400 block mb-0.5">
                      Statutory Assessor Mandays
                    </span>
                    <span className="text-xl font-bold font-heading text-amber-300">
                      {currentSize.details.assessorDays}
                    </span>
                  </div>
                  <Users className="w-6 h-6 text-amber-300" />
                </div>
              </div>
            </div>

            {/* Estimator CTAs */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={createWhatsAppLink(whatsAppEstimateMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Quote</span>
              </a>

              <a
                href="#consultation-form"
                className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-xl transition-colors whitespace-nowrap"
              >
                <span>Book Gap Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
