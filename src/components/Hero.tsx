import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Download,
  Sparkles,
  FileText,
  Table,
  Presentation,
  FileType2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Star,
  Zap,
  Users
} from 'lucide-react';
import { APP_CONFIG } from '../config';

interface HeroProps {
  onOpenDownloadModal: (platform?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownloadModal }) => {
  const [activeTab, setActiveTab] = useState<'writer' | 'spreadsheet' | 'presentation' | 'pdf' | 'ai'>('writer');

  const scrollToFeatures = () => {
    const el = document.getElementById('features');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-950 text-white">
      {/* Background Gradient Mesh & Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-30">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-rose-600/30 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px]" />
        <div className="absolute top-40 left-1/3 w-80 h-80 bg-amber-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Trust pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-slate-300 text-xs sm:text-sm font-medium shadow-sm"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{APP_CONFIG.trustBadge}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]"
          >
            Work Smarter. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-500 to-amber-400">
              Create Faster.
            </span>{' '}
            Anywhere.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed"
          >
            WPS Office brings documents, spreadsheets, presentations, PDFs, and AI-powered productivity tools together in one convenient workspace.
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <button
              onClick={() => onOpenDownloadModal()}
              id="hero-primary-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 shadow-xl shadow-rose-600/30 hover:shadow-2xl hover:shadow-rose-600/40 transition-all duration-200 active:scale-95 cursor-pointer group"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Try WPS Office</span>
            </button>

            <button
              onClick={() => onOpenDownloadModal()}
              id="hero-secondary-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-base text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 cursor-pointer"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
          </motion.div>

          {/* Key Quick Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-rose-500" />
              Fully Microsoft Office Compatible
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              PDF Tools Built-in
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              WPS AI Assistant Included
            </span>
          </motion.div>
        </div>

        {/* Interactive Workspace Mockup Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 lg:mt-16 max-w-5xl mx-auto relative"
        >
          {/* Floating Feature Badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="hidden lg:flex absolute -top-6 -left-8 z-20 items-center gap-3 bg-slate-900/95 border border-slate-700/80 p-3 rounded-2xl shadow-xl backdrop-blur-md"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold">
              <FileType2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Smart PDF Converter</p>
              <p className="text-[11px] text-slate-400">Word, Excel & Image support</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
            className="hidden lg:flex absolute -bottom-6 -right-8 z-20 items-center gap-3 bg-slate-900/95 border border-slate-700/80 p-3 rounded-2xl shadow-xl backdrop-blur-md"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">WPS AI Assistant</p>
              <p className="text-[11px] text-slate-400">Summarize & Write in 1-Click</p>
            </div>
          </motion.div>

          {/* Main Mockup Window Container */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
            {/* Window Top Bar with Tab Bar */}
            <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="ml-2 text-xs font-medium text-slate-400 hidden sm:inline">
                  WPS Office All-in-One Workspace
                </span>
              </div>

              {/* Interactive Module Tabs */}
              <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-medium">
                <button
                  onClick={() => setActiveTab('writer')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === 'writer'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Writer</span>
                </button>

                <button
                  onClick={() => setActiveTab('spreadsheet')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === 'spreadsheet'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Table className="w-3.5 h-3.5" />
                  <span>Spreadsheet</span>
                </button>

                <button
                  onClick={() => setActiveTab('presentation')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === 'presentation'
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Presentation className="w-3.5 h-3.5" />
                  <span>Presentation</span>
                </button>

                <button
                  onClick={() => setActiveTab('pdf')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === 'pdf'
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileType2 className="w-3.5 h-3.5" />
                  <span>PDF</span>
                </button>

                <button
                  onClick={() => setActiveTab('ai')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === 'ai'
                      ? 'bg-gradient-to-r from-purple-600 to-rose-600 text-white shadow-sm'
                      : 'text-amber-400 hover:text-amber-300'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>WPS AI</span>
                </button>
              </div>
            </div>

            {/* Mockup Canvas Screen */}
            <div className="p-4 sm:p-6 lg:p-8 bg-slate-900 text-slate-100 min-h-[360px] sm:min-h-[420px] flex flex-col justify-between">
              {activeTab === 'writer' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-blue-400">
                      <FileText className="w-4 h-4" />
                      <span>Quarterly_Research_Report.docx</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Aptos 11pt</span>
                      <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                        Saved to WPS Cloud
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-xl border border-slate-800/80 shadow-inner space-y-3 font-sans">
                    <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-2">
                      Executive Summary: Product Market Expansion Strategy
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      WPS Office provides an efficient, all-in-one productivity suite equipped with high-fidelity .docx processing, integrated PDF annotations, and AI-driven document polish. This report evaluates the speed and cost advantages for cross-functional teams.
                    </p>
                    <div className="p-3 bg-blue-950/40 border border-blue-800/50 rounded-lg flex items-start gap-3 text-xs text-blue-200">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>WPS AI Suggestion:</strong> Your paragraph has a clear active tone. Click to auto-expand statistical key points or create a presentation slide from this section.
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'spreadsheet' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400">
                      <Table className="w-4 h-4" />
                      <span>Financial_Forecast_2026.xlsx</span>
                    </div>
                    <div className="text-xs text-slate-400 font-mono">fx =SUM(B2:B12) * 1.15</div>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto">
                    <table className="w-full text-left text-xs font-mono">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400">
                          <th className="p-2">Category</th>
                          <th className="p-2">Q1 Actual</th>
                          <th className="p-2">Q2 Projected</th>
                          <th className="p-2">Growth %</th>
                          <th className="p-2">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-slate-200">
                        <tr>
                          <td className="p-2 font-semibold">Software Licenses</td>
                          <td className="p-2">$14,200</td>
                          <td className="p-2 text-emerald-400 font-bold">$18,450</td>
                          <td className="p-2 text-emerald-400">+29.9%</td>
                          <td className="p-2"><span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px]">On Target</span></td>
                        </tr>
                        <tr>
                          <td className="p-2 font-semibold">Cloud Infrastructure</td>
                          <td className="p-2">$8,500</td>
                          <td className="p-2">$9,100</td>
                          <td className="p-2 text-blue-400">+7.0%</td>
                          <td className="p-2"><span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-[10px]">Stable</span></td>
                        </tr>
                        <tr>
                          <td className="p-2 font-semibold">Marketing Operations</td>
                          <td className="p-2">$22,000</td>
                          <td className="p-2 text-amber-400">$25,300</td>
                          <td className="p-2 text-amber-400">+15.0%</td>
                          <td className="p-2"><span className="bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded text-[10px]">Expanded</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'presentation' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-amber-400">
                      <Presentation className="w-4 h-4" />
                      <span>Company_Pitch_Deck.pptx</span>
                    </div>
                    <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-1 rounded">Slide 4 of 12</span>
                  </div>

                  <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6 rounded-xl border border-slate-800 text-center space-y-4 min-h-[180px] flex flex-col justify-center items-center">
                    <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">WPS Presentation AI Template</span>
                    <h2 className="text-2xl font-black text-white">Accelerate Team Productivity by 300%</h2>
                    <p className="text-slate-300 text-xs max-w-lg">
                      Seamlessly import PowerPoint slides, apply smart AI auto-layouts, and export directly to high-resolution PDF or video presentation mode.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'pdf' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-rose-400">
                      <FileType2 className="w-4 h-4" />
                      <span>Contract_Agreement_Signed.pdf</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded cursor-pointer hover:bg-rose-500/30">Edit Text</span>
                      <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded cursor-pointer hover:bg-slate-700">Convert to Word</span>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between bg-rose-950/30 p-3 rounded-lg border border-rose-800/40">
                      <span className="text-xs text-rose-200 font-semibold">PDF Tools Active: Form Filler & OCR Text Extractor</span>
                      <span className="text-xs bg-rose-600 text-white px-2 py-0.5 rounded font-bold">100% Editable</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-mono">
                      3.1 Terms & Conditions: Both parties agree to utilize certified digital signatures and encrypted document cloud storage provided by WPS Office.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'ai' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-purple-400">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>WPS AI Copilot — Document Assistant</span>
                    </div>
                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-bold">
                      Gemini 3.6 Flash Engine
                    </span>
                  </div>

                  <div className="bg-gradient-to-r from-purple-950/60 via-slate-950 to-slate-950 p-5 rounded-xl border border-purple-800/50 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold">
                      <Zap className="w-4 h-4 text-amber-400" />
                      <span>AI Smart Prompt: "Summarize research document and generate 3 key action items"</span>
                    </div>
                    <div className="bg-slate-900/90 p-4 rounded-lg border border-slate-800 text-xs text-slate-200 space-y-2">
                      <p className="text-emerald-400 font-bold">✓ WPS AI Generated Response:</p>
                      <p>1. Optimized budget distribution to prioritize high-return digital tools.</p>
                      <p>2. Converted PDF research notes into editable Word doc format for team edits.</p>
                      <p>3. Ready to auto-generate slide deck for tomorrow's briefing.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Quick Bar */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>WPS Office v16.4 — Cross-Platform Ready</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>Windows</span>
                  <span>macOS</span>
                  <span>iOS</span>
                  <span>Android</span>
                  <span>Linux</span>
                  <span>Web</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
