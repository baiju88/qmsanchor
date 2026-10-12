import React, { useState } from 'react';
import { READINESS_QUIZ_QUESTIONS } from '../data/accreditationData.ts';
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  RotateCcw,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp.ts';

export const ReadinessCalculator: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = READINESS_QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = READINESS_QUIZ_QUESTIONS.length;
  const progressPercent = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  const handleSelectOption = (score: number) => {
    const nextAnswers = [...selectedAnswers, score];
    setSelectedAnswers(nextAnswers);

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const totalScore = selectedAnswers.reduce((sum, val) => sum + val, 0);

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setIsCompleted(false);
  };

  // WhatsApp payload for instant gap analysis discussion
  const whatsAppScoreMessage = `Hello QMSAnchor Advisory, I just completed the NABL / NABH Readiness Assessment:
• Overall Score: ${totalScore}%
• Status: ${
    totalScore >= 80 ? 'High Readiness' : totalScore >= 50 ? 'Moderate Readiness' : 'Early Phase'
  }

Please review our readiness score and provide guidance on closing our pending compliance gaps.`;

  return (
    <section id="readiness-tool" className="py-20 bg-[#faedf0]/70 border-b border-rose-200/80 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 2xl:px-20">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-900/80 tracking-wide mb-2">
            <span>Diagnostic Evaluation</span>
            <span aria-hidden="true">·</span>
            <span>2-Minute Assessment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            NABL & NABH Readiness Calculator
          </h2>
          <p className="text-slate-600 mt-2 text-base leading-relaxed">
            Answer 5 fundamental operational questions to evaluate your current compliance baseline,
            receive an instant readiness score, and identify priority gaps.
          </p>
        </div>

        {/* Assessment Container Card */}
        <div className="w-full max-w-6xl mx-auto bg-slate-900 text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl">
          {!isCompleted ? (
            <div className="space-y-8">
              {/* Progress Bar & Counter */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-rose-300">
                  <span className="uppercase tracking-wider">
                    Question {currentQuestionIndex + 1} of {totalQuestions}
                  </span>
                  <span className="tabular-nums">{progressPercent}% Completed</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-rose-500 h-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div className="pt-2">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white leading-snug">
                  {currentQ.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3.5">
                {currentQ.options.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(opt.score)}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl bg-slate-800/80 hover:bg-rose-950/40 border border-slate-700/80 hover:border-rose-500 transition-all flex items-center justify-between gap-4 group"
                  >
                    <div className="space-y-1">
                      <span className="text-sm font-semibold text-slate-200 group-hover:text-white leading-snug block">
                        {opt.text}
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-rose-400 shrink-0 transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-8 animate-in fade-in">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-800 border-4 border-rose-500 shadow-lg mx-auto">
                  <span className="text-3xl font-extrabold font-heading text-rose-300 tabular-nums">
                    {totalScore}%
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    {totalScore >= 80
                      ? 'High Readiness Status (Pre-Assessment Phase)'
                      : totalScore >= 50
                      ? 'Moderate Readiness (Gap Rectification Required)'
                      : 'Early Phase (Foundational Quality Architecture Required)'}
                  </h3>
                  <p className="text-slate-300 text-sm mt-2 max-w-xl mx-auto leading-relaxed">
                    {totalScore >= 80
                      ? 'Your facility demonstrates robust quality documentation and operational discipline. You are positioned to file your formal application and schedule a pre-assessment audit.'
                      : totalScore >= 50
                      ? 'Core quality components are present, but specific discrepancies exist in standard compliance or calibration logs. Closing these prior to formal submission is critical to prevent auditor non-conformities.'
                      : 'Significant standard compliance gaps exist across SOP documentation, training, or statutory validations. Structured gap rectification is needed before board submission.'}
                  </p>
                </div>
              </div>

              {/* Tailored Action Plan */}
              <div className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700 space-y-4">
                <div className="text-xs font-bold text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Recommended Next Steps & Action Plan:</span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-200">
                  {totalScore >= 80 ? (
                    <>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Perform a final pre-assessment mock audit to uncover residual minor NCs.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Compile Tier-1 application documents for submission on NABL/NABH portal.</span>
                      </div>
                    </>
                  ) : totalScore >= 50 ? (
                    <>
                      <div className="flex items-start gap-2.5">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>Conduct a clause-by-clause internal audit across all facility departments.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>Document formal Management Review Meeting (MRM) minutes and close calibration logs.</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-start gap-2.5">
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>Appoint and enroll a Quality Officer in certified Lead Assessor training.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>Engage QMSAnchor for turnkey SOP drafting, quality manual creation, and gap closure.</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Action Triggers */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={resetQuiz}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors w-full sm:w-auto justify-center"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Assessment</span>
                </button>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <a
                    href={createWhatsAppLink(whatsAppScoreMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors w-full sm:w-auto whitespace-nowrap"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Send Score to WhatsApp (+91 8762564150)</span>
                  </a>

                  <a
                    href="#consultation-form"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-xl transition-colors w-full sm:w-auto whitespace-nowrap"
                  >
                    <span>Book Gap Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
