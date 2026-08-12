import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const comparisonItems = [
    {
      capability: 'Documents (.docx, .doc, .txt)',
      wps: true,
      fragmented: 'Requires separate Word app',
      detail: 'Full edit, track changes & layout tools'
    },
    {
      capability: 'Spreadsheets (.xlsx, .csv, formulas)',
      wps: true,
      fragmented: 'Requires separate Excel app',
      detail: '300+ financial formulas & pivot charts'
    },
    {
      capability: 'Presentations (.pptx, slide decks)',
      wps: true,
      fragmented: 'Requires separate PowerPoint app',
      detail: 'Designer templates & transition effects'
    },
    {
      capability: 'Full Built-in PDF Editor & Converter',
      wps: true,
      fragmented: 'Requires paid Acrobat subscription',
      detail: 'Edit text, convert to Word, compress & sign'
    },
    {
      capability: 'Native AI Copilot Assistant',
      wps: true,
      fragmented: 'Extra monthly AI add-on fee',
      detail: 'Rewrite, summarize, proofread & brainstorm'
    },
    {
      capability: 'Unified Tabbed Interface',
      wps: true,
      fragmented: 'Cluttered multi-window chaos',
      detail: 'Keep Docs, Sheets, PPTs & PDFs in 1 window'
    },
    {
      capability: 'Lightweight Memory & Quick Boot',
      wps: true,
      fragmented: 'Heavy RAM usage across 4+ apps',
      detail: 'Boots in seconds with minimal system load'
    },
    {
      capability: 'Cross-Device Cloud Synchronization',
      wps: true,
      fragmented: 'Manual cloud syncing & licensing',
      detail: 'Windows, Mac, iOS, Android, Linux & Web'
    }
  ];

  return (
    <section id="comparison" className="py-20 lg:py-28 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4 text-rose-600" />
            <span>Workspace Comparison</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Everything You Need. <span className="text-rose-600">One Workspace.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            See how WPS Office consolidates all your document tasks into a single streamlined application compared to traditional fragmented office setups.
          </p>
        </div>

        {/* Comparison Table Matrix */}
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-12 bg-slate-900 text-white p-4 sm:p-6 text-sm font-bold items-center">
            <div className="col-span-6 sm:col-span-5 text-slate-200">Productivity Capability</div>
            <div className="col-span-3 sm:col-span-3 text-rose-400 text-center flex items-center justify-center gap-1">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>WPS Office</span>
            </div>
            <div className="col-span-3 sm:col-span-4 text-slate-400 text-center">
              Traditional Multi-App Setup
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {comparisonItems.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 text-xs sm:text-sm items-center hover:bg-slate-50 transition-colors"
              >
                {/* Capability Name */}
                <div className="col-span-6 sm:col-span-5 pr-2">
                  <p className="font-bold text-slate-900">{item.capability}</p>
                  <p className="text-[11px] text-slate-500 hidden sm:block mt-0.5">{item.detail}</p>
                </div>

                {/* WPS Office Column */}
                <div className="col-span-3 sm:col-span-3 text-center flex flex-col items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-600 border border-rose-200 flex items-center justify-center font-bold shadow-sm">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-[11px] font-bold text-rose-600 mt-1">Included</span>
                </div>

                {/* Traditional Setup Column */}
                <div className="col-span-3 sm:col-span-4 text-center text-slate-500 text-xs">
                  <span className="inline-block px-2 py-1 rounded bg-slate-100 text-slate-600 font-medium">
                    {item.fragmented}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Summary Bar */}
          <div className="bg-slate-900 p-4 sm:p-6 text-center text-xs text-slate-300 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              100% Microsoft Office file format (.docx, .xlsx, .pptx) fidelity
            </span>
            <span className="text-slate-400">
              One installer, zero bloated background processes.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
