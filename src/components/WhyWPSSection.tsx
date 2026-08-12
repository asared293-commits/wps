import React from 'react';
import { motion } from 'motion/react';
import {
  Check,
  Sparkles,
  Layers,
  FileType2,
  Smartphone,
  Sparkle,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Zap,
  Users
} from 'lucide-react';

interface WhyWPSSectionProps {
  onOpenDownloadModal: (platform?: string) => void;
}

export const WhyWPSSection: React.FC<WhyWPSSectionProps> = ({ onOpenDownloadModal }) => {
  const benefits = [
    {
      title: 'All-In-One Productivity Suite',
      desc: 'No need to buy or switch between multiple apps for Writer, Spreadsheet, Presentation, and PDF.'
    },
    {
      title: 'Familiar Office Tools & Compatibility',
      desc: 'Seamlessly opens, edits, and exports Microsoft Office (.docx, .xlsx, .pptx) files with perfect formatting.'
    },
    {
      title: 'Built-in PDF Capabilities',
      desc: 'Read, edit, convert, merge, compress, and sign PDF documents directly within your workspace.'
    },
    {
      title: 'AI-Powered Productivity',
      desc: 'WPS AI copilot helps write, rewrite, summarize, analyze data, and brainstorm ideas in seconds.'
    },
    {
      title: 'Cross-Device Workflow',
      desc: 'Pick up where you left off across Windows, macOS, iOS, Android, Linux, and Web.'
    },
    {
      title: 'Clean & Easy-To-Use Interface',
      desc: 'Tabbed document management lets you switch between files like browser tabs without window chaos.'
    },
    {
      title: 'Suitable for Students & Professionals',
      desc: 'Versatile features catered specifically to academic research, coursework, freelancing, and corporate teams.'
    }
  ];

  return (
    <section id="why-wps" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Laptop / Tablet Workspace Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            {/* Device Framing */}
            <div className="relative mx-auto max-w-lg lg:max-w-none bg-slate-950 p-3 sm:p-4 rounded-3xl border border-slate-700/80 shadow-2xl">
              {/* Camera Notch */}
              <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto mb-2 opacity-60" />

              {/* Tablet Screen Content */}
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 sm:p-6 space-y-4">
                {/* Unified Window Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-rose-600 text-white flex items-center justify-center text-xs font-bold">
                      W
                    </div>
                    <span className="text-xs font-bold text-white">WPS Office 2026</span>
                  </div>
                  <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                    All-in-One Engine
                  </span>
                </div>

                {/* Tabbed Workspace Visualization */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-950/60 border border-blue-600/40 p-2.5 rounded-xl text-left">
                    <p className="text-[10px] text-blue-400 font-bold uppercase">Tab 1: Writer</p>
                    <p className="text-xs font-semibold text-white truncate">Thesis_Draft.docx</p>
                  </div>
                  <div className="bg-emerald-950/60 border border-emerald-600/40 p-2.5 rounded-xl text-left">
                    <p className="text-[10px] text-emerald-400 font-bold uppercase">Tab 2: Sheet</p>
                    <p className="text-xs font-semibold text-white truncate">Budget.xlsx</p>
                  </div>
                  <div className="bg-rose-950/60 border border-rose-600/40 p-2.5 rounded-xl text-left">
                    <p className="text-[10px] text-rose-400 font-bold uppercase">Tab 3: PDF</p>
                    <p className="text-xs font-semibold text-white truncate">Sign_Doc.pdf</p>
                  </div>
                </div>

                {/* Feature Graphic Showcase inside Screen */}
                <div className="bg-slate-950 p-4 sm:p-5 rounded-xl border border-slate-800/80 space-y-3 text-left">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-amber-400 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> WPS AI Multi-Document Synergy
                    </span>
                    <span className="text-emerald-400 text-[10px]">Instant Conversion</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Unlike fragmented office applications, WPS Office keeps your research notes, spreadsheets, slides, and PDFs open inside a unified tabbed window.
                  </p>

                  <div className="pt-2 grid grid-cols-2 gap-2 text-[11px]">
                    <div className="bg-slate-900 p-2 rounded border border-slate-800 text-slate-300">
                      ⚡ <strong>Memory Saved:</strong> ~60% lighter RAM
                    </div>
                    <div className="bg-slate-900 p-2 rounded border border-slate-800 text-slate-300">
                      ⚡ <strong>Speed:</strong> Instant document tab switch
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle floating glow tag */}
            <div className="mt-4 text-center">
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/60 px-3 py-1 rounded-full border border-slate-700">
                <Cpu className="w-3.5 h-3.5 text-rose-400" />
                Lightweight, fast, and responsive on all hardware
              </span>
            </div>
          </motion.div>

          {/* Right Side: Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase tracking-wider mb-3">
                <span>The Smarter Alternative</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Why Millions Choose <span className="text-rose-500">WPS Office</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Designed to deliver complete productivity without forcing you into expensive multi-app subscriptions or sluggish interfaces.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{b.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section CTA */}
            <div className="pt-2">
              <button
                onClick={() => onOpenDownloadModal()}
                id="why-wps-start-creating-btn"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:opacity-95 shadow-lg shadow-rose-600/30 transition-all duration-200 cursor-pointer"
              >
                <span>Start Creating</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
