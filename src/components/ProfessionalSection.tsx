import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Lightbulb,
  FileText,
  Table,
  Presentation,
  FileType2,
  Share2,
  ArrowRight,
  Briefcase,
  Check,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { WorkflowStep } from '../types';

interface ProfessionalSectionProps {
  onOpenDownloadModal: (platform?: string) => void;
}

export const ProfessionalSection: React.FC<ProfessionalSectionProps> = ({ onOpenDownloadModal }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const workflowSteps: WorkflowStep[] = [
    {
      id: 1,
      phase: 'Step 1: Idea',
      tool: 'WPS AI Brainstorm',
      title: 'Brainstorm & Outline',
      description: 'Capture rough meeting notes or ask WPS AI to generate a structured project proposal outline.',
      iconName: 'Lightbulb',
      detail: 'Input raw concepts or transcript notes. WPS AI creates a structured outline with key objectives, timelines, and deliverables.'
    },
    {
      id: 2,
      phase: 'Step 2: Document',
      tool: 'WPS Writer',
      title: 'Draft Full Report',
      description: 'Expand your proposal into a polished Word document (.docx) complete with tables, formatting, and headers.',
      iconName: 'FileText',
      detail: 'Format document with brand styling, executive summaries, and collaborative comments for team review.'
    },
    {
      id: 3,
      phase: 'Step 3: Spreadsheet',
      tool: 'WPS Spreadsheet',
      title: 'Model Financials & Data',
      description: 'Build financial forecasts, ROI formulas, and custom data charts in Excel format (.xlsx).',
      iconName: 'Table',
      detail: 'Perform complex data modeling, calculate unit economics, and generate visual charts that embed right into your reports.'
    },
    {
      id: 4,
      phase: 'Step 4: Presentation',
      tool: 'WPS Presentation',
      title: 'Design Client Pitch Deck',
      description: 'Convert your document report automatically into a high-impact slide deck presentation (.pptx).',
      iconName: 'Presentation',
      detail: 'Apply professional slide layouts, animated charts, and speaker notes ready for executive board briefings.'
    },
    {
      id: 5,
      phase: 'Step 5: PDF',
      tool: 'WPS PDF Editor',
      title: 'Finalize & Digital Sign',
      description: 'Convert slides and reports to encrypted PDF contracts, add digital e-signatures, and lock layout formatting.',
      iconName: 'FileType2',
      detail: 'Lock contract pages against unauthorized edits, apply watermarks, and attach digital signatures.'
    },
    {
      id: 6,
      phase: 'Step 6: Share',
      tool: 'WPS Cloud & Link',
      title: 'Distribute & Track',
      description: 'Share secure view/edit links with clients, track version history, and collaborate across teams.',
      iconName: 'Share2',
      detail: 'Generate password-protected cloud links, set expiration dates, and sync team changes instantly across devices.'
    }
  ];

  const currentStep = workflowSteps.find((s) => s.id === activeStep) || workflowSteps[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Lightbulb': return <Lightbulb className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'Table': return <Table className="w-5 h-5" />;
      case 'Presentation': return <Presentation className="w-5 h-5" />;
      case 'FileType2': return <FileType2 className="w-5 h-5" />;
      case 'Share2': return <Share2 className="w-5 h-5" />;
      default: return <Briefcase className="w-5 h-5" />;
    }
  };

  return (
    <section id="professionals" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-amber-400 border border-slate-700 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-4 h-4 text-amber-400" />
            <span>End-to-End Professional Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            From Ideas to <span className="text-amber-400">Finished Work.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Eliminate the friction of switching between disjointed apps. See how a single project flows seamlessly inside WPS Office.
          </p>
        </div>

        {/* Workflow Timeline Pipeline Bar */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative">
            {/* Animated Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-800 -translate-y-1/2 z-0" />
            <motion.div
              className="hidden lg:block absolute top-1/2 left-0 h-1 bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 -translate-y-1/2 z-0 transition-all duration-500"
              style={{ width: `${((activeStep - 1) / (workflowSteps.length - 1)) * 100}%` }}
            />

            {/* Step Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
              {workflowSteps.map((step) => {
                const isActive = step.id === activeStep;
                const isPassed = step.id < activeStep;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`flex flex-col items-center p-3 sm:p-4 rounded-2xl border text-center transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-slate-800 border-amber-400 shadow-lg shadow-amber-400/20 scale-105'
                        : isPassed
                        ? 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-600'
                        : 'bg-slate-950 border-slate-800/80 text-slate-500 hover:border-slate-700'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold mb-2 transition-transform ${
                        isActive
                          ? 'bg-amber-400 text-slate-950 shadow-md'
                          : isPassed
                          ? 'bg-slate-800 text-amber-400'
                          : 'bg-slate-900 text-slate-600'
                      }`}
                    >
                      {getIcon(step.iconName)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                      {step.phase}
                    </span>
                    <span className="text-xs font-semibold text-white mt-0.5 truncate w-full">
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Showcase Card */}
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-10 bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase">
                    {currentStep.tool}
                  </span>
                  <span className="text-xs text-slate-400">Step {currentStep.id} of 6</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {currentStep.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {currentStep.detail}
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => setActiveStep((prev) => (prev % 6) + 1)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 bg-amber-400/10 px-4 py-2 rounded-xl border border-amber-400/20"
                  >
                    <span>Next Workflow Step</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Visual Mini Graphic */}
              <div className="lg:col-span-4 bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3 text-xs">
                <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2 font-mono">
                  <span>Pipeline Connector</span>
                  <span className="text-emerald-400">Integrated</span>
                </div>
                <p className="text-slate-300 leading-normal">
                  Data, charts, and text flow directly from WPS Writer to Spreadsheet and Presentation without manual export hassles.
                </p>
                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 text-[11px] text-amber-300 font-mono">
                  ✓ Output format: Native MS Office & PDF
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
