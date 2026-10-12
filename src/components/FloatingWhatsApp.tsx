import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { WHATSAPP_RAW_PHONE, CONTACT_PHONE, createWhatsAppLink } from '../utils/whatsapp.ts';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    'I need an urgent Gap Analysis for NABL ISO 15189 (Medical Lab).',
    'We are planning NABH Hospital / SHCO Accreditation.',
    'I want to know estimated timelines & official fees for my facility.',
  ];

  const handleSendPrompt = (text: string) => {
    window.open(createWhatsAppLink(text), '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    window.open(createWhatsAppLink(customMsg), '_blank', 'noopener,noreferrer');
    setCustomMsg('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Quick Prompt Drawer */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-emerald-200 overflow-hidden animate-in slide-in-from-bottom-2 fade-in">
          {/* Header */}
          <div className="bg-[#128C7E] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-heading">QMSAnchor WhatsApp Desk</h4>
                <span className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  <span>+{CONTACT_PHONE} · Online</span>
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded-lg text-white"
              aria-label="Close WhatsApp prompt"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#fcf5f7]/60 space-y-3 text-xs">
            <p className="text-slate-600 font-medium">
              Hello! Choose a quick topic or type your query to chat directly with our Lead
              Accreditation Consultant:
            </p>

            <div className="space-y-1.5">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendPrompt(prompt)}
                  className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-700 transition-colors flex items-center justify-between group"
                >
                  <span className="line-clamp-2 leading-relaxed">{prompt}</span>
                  <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 shrink-0 ml-2" />
                </button>
              ))}
            </div>

            {/* Custom message input */}
            <form onSubmit={handleSendCustom} className="pt-1 flex gap-2">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Type your question or lab scope..."
                className="flex-1 bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              <button
                type="submit"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-2 rounded-xl transition-colors shrink-0"
                title="Send on WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Pill / Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white pl-4 pr-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full ring-2 ring-[#25D366]" />
        </div>
        <div className="text-left hidden sm:block">
          <div className="text-xs font-bold leading-tight">Chat on WhatsApp</div>
          <div className="text-[10px] text-emerald-100 font-mono">+{CONTACT_PHONE}</div>
        </div>
      </button>
    </div>
  );
};
