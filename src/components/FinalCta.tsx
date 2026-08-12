import React from 'react';
import { motion } from 'motion/react';
import { Download, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface FinalCtaProps {
  onOpenDownloadModal: (platform?: string) => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenDownloadModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Transform Your Productivity Today</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Ready to Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-amber-300">Smarter?</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
          Bring your documents, spreadsheets, presentations, PDFs, and productivity tools together in one powerful workspace.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onOpenDownloadModal()}
            id="final-cta-primary-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 shadow-2xl shadow-rose-600/40 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <Download className="w-5 h-5" />
            <span>Try WPS Office</span>
          </button>

          <button
            onClick={() => onOpenDownloadModal()}
            id="final-cta-secondary-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 transition-all duration-200 cursor-pointer"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        {/* Micro Guarantee items */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-rose-500" /> Fast & Free Download
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Windows, Mac, iOS, Android, Linux, Web
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> No Complex Setup
          </span>
        </div>

      </div>
    </section>
  );
};
