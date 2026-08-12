import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  Table,
  Presentation,
  FileType2,
  Sparkles,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Zap,
  Layers,
  ChevronRight
} from 'lucide-react';
import { FeatureItem } from '../types';

interface FeaturesSectionProps {
  onOpenDownloadModal: (platform?: string) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onOpenDownloadModal }) => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);

  const features: FeatureItem[] = [
    {
      id: 'writer',
      title: 'Writer',
      subtitle: 'Professional Document Processing',
      description: 'Create, edit, format, and publish stunning documents with advanced typography, spellcheck, and full Microsoft Word (.docx) compatibility.',
      iconName: 'FileText',
      color: 'from-blue-600 to-indigo-600',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      badgeText: 'Docs & Manuscripts',
      featuresList: [
        'Full .docx, .doc, .txt, & .rtf support',
        'Rich layout tools & page styling',
        'Real-time spell check & grammar review',
        'Track changes & comment annotations',
        'WPS AI document writer copilot'
      ]
    },
    {
      id: 'spreadsheet',
      title: 'Spreadsheet',
      subtitle: 'Data Analysis & Financial Modeling',
      description: 'Analyze data, execute complex mathematical formulas, build dynamic pivot tables, and visualize insights with high-performance spreadsheets.',
      iconName: 'Table',
      color: 'from-emerald-600 to-teal-600',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      badgeText: 'Sheets & Data',
      featuresList: [
        'Full .xlsx, .xls, & .csv compatibility',
        'Over 300+ built-in financial & math formulas',
        'Interactive pivot tables & chart builders',
        'Conditional formatting & data validation',
        'AI data formula generation'
      ]
    },
    {
      id: 'presentation',
      title: 'Presentation',
      subtitle: 'Engaging Pitch Decks & Slides',
      description: 'Design captivating slide decks quickly using hundreds of professional templates, smooth slide transitions, and multimedia embedding.',
      iconName: 'Presentation',
      color: 'from-amber-500 to-orange-600',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      badgeText: 'Slides & Decks',
      featuresList: [
        'Full .pptx, .ppt compatibility',
        'Hundreds of free designer templates',
        'Cinematic slide transitions & animations',
        'Presenter view with notes & timer',
        'AI slide structure builder'
      ]
    },
    {
      id: 'pdf',
      title: 'PDF Tools',
      subtitle: 'Read, Edit, Convert & Organize',
      description: 'View, edit text directly, convert PDFs to Word/Excel/PPT, compress file size, merge pages, and sign documents securely without extra software.',
      iconName: 'FileType2',
      color: 'from-rose-600 to-red-600',
      badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
      badgeText: 'All-in-One PDF',
      featuresList: [
        'Direct PDF text & image editing',
        'Two-way PDF to Word/Excel/PPT converter',
        'Merge, split, compress & organize pages',
        'E-signature & form filling tools',
        'OCR optical character recognition'
      ]
    },
    {
      id: 'ai',
      title: 'AI Productivity',
      subtitle: 'WPS AI Copilot Assistance',
      description: 'Harness AI-powered tools to draft articles, summarize long reports, proofread grammar, rewrite tone, and analyze complex document structures instantly.',
      iconName: 'Sparkles',
      color: 'from-purple-600 to-pink-600',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
      badgeText: 'AI Copilot',
      featuresList: [
        '1-Click document summarization',
        'Smart tone rewrite & proofreading',
        'Automated brainstorming & idea generator',
        'Document Q&A & semantic analysis',
        'Multi-language translation'
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & Cross-Device Access',
      subtitle: 'Seamless Anywhere Workflow',
      description: 'Sync your work safely across Windows, Mac, iOS, Android, Linux, and Web browsers so you can pick up right where you left off anytime.',
      iconName: 'Cloud',
      color: 'from-cyan-600 to-blue-600',
      badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      badgeText: 'Cloud Sync',
      featuresList: [
        'Instant multi-device cloud synchronization',
        'Automatic file backup & version history',
        'Encrypted cloud storage sharing',
        'Offline editing mode with auto-sync',
        'Browser-based web office access'
      ]
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-6 h-6" />;
      case 'Table': return <Table className="w-6 h-6" />;
      case 'Presentation': return <Presentation className="w-6 h-6" />;
      case 'FileType2': return <FileType2 className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Cloud': return <Cloud className="w-6 h-6" />;
      default: return <Layers className="w-6 h-6" />;
    }
  };

  return (
    <section id="features" className="py-20 lg:py-28 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-rose-600" />
            <span>Essential Tools Suite</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Six Powerhouse Tools in <span className="text-rose-600">One Workspace</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Eliminate the clutter of installing separate software. WPS Office integrates every document tool you need with seamless performance.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle top accent gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${feature.color}`} />

              <div className="space-y-4">
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    {getIcon(feature.iconName)}
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${feature.badgeBg}`}>
                    {feature.badgeText}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">{feature.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature Bullet points */}
                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {feature.featuresList.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedFeature(feature)}
                  className="text-xs font-bold text-slate-700 hover:text-rose-600 flex items-center gap-1 group/btn"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenDownloadModal()}
                  className="text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Try Free
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feature Detail Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${selectedFeature.color} text-white flex items-center justify-center`}>
                  {getIcon(selectedFeature.iconName)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{selectedFeature.title}</h3>
                  <p className="text-xs text-slate-500">{selectedFeature.subtitle}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedFeature(null)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold p-1 rounded-lg hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedFeature.description}
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Key Capability Highlights:</h4>
              <ul className="space-y-1.5">
                {selectedFeature.featuresList.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedFeature(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedFeature(null);
                  onOpenDownloadModal();
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 shadow-md shadow-rose-600/20"
              >
                Try WPS Office
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
