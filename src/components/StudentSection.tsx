import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  BookOpen,
  FileCheck2,
  PieChart,
  Sparkles,
  FileType2,
  Brain,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface StudentSectionProps {
  onOpenDownloadModal: (platform?: string) => void;
}

export const StudentSection: React.FC<StudentSectionProps> = ({ onOpenDownloadModal }) => {
  const [selectedAudience, setSelectedAudience] = useState<'students' | 'university' | 'teachers'>('students');

  const studentUseCases = [
    {
      icon: BookOpen,
      title: 'Write Assignments & Essays',
      desc: 'Clean document layout with built-in academic citation styles, APA/MLA formatting support, and instant auto-save.',
      badge: 'Writer'
    },
    {
      icon: GraduationCap,
      title: 'Create Class Presentations',
      desc: 'Build visually stunning slide decks using student templates for thesis defenses, group projects, and class talks.',
      badge: 'Presentation'
    },
    {
      icon: PieChart,
      title: 'Analyze Research Data',
      desc: 'Organize research statistics, run statistical formulas, and turn lab findings into beautiful charts.',
      badge: 'Spreadsheet'
    },
    {
      icon: FileType2,
      title: 'Read & Annotate PDFs',
      desc: 'Highlight textbooks, add marginal notes, fill out digital worksheets, and convert lecture PDFs to editable Word docs.',
      badge: 'PDF Tools'
    },
    {
      icon: Brain,
      title: 'Organize Course Notes',
      desc: 'Keep lecture summaries, study guides, and assignment schedules structured across all your devices.',
      badge: 'WPS Cloud'
    },
    {
      icon: Sparkles,
      title: 'Improve Writing with AI',
      desc: 'Use WPS AI to proofread grammar, rewrite thesis statements, generate outline ideas, and summarize long papers.',
      badge: 'WPS AI'
    }
  ];

  return (
    <section id="students" className="py-20 lg:py-28 bg-white text-slate-900 relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <span>Built for Education & Academics</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Your Study Desk, <span className="text-blue-600">Digitized.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From late-night research papers to team presentations and PDF textbooks, WPS Office provides everything students and teachers need to excel.
          </p>

          {/* Academic Role Toggle */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold pt-1">
            <button
              onClick={() => setSelectedAudience('students')}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedAudience === 'students'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For High School & College
            </button>
            <button
              onClick={() => setSelectedAudience('university')}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedAudience === 'university'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              University & Researchers
            </button>
            <button
              onClick={() => setSelectedAudience('teachers')}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedAudience === 'teachers'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For Educators & Teachers
            </button>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentUseCases.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-200/70 text-slate-700">
                      {useCase.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {useCase.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {useCase.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-blue-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Student Favorite Feature</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner for Education */}
        <div className="mt-14 bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-900 rounded-3xl p-8 lg:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold">Ready to Elevate Your Academic Output?</h3>
            <p className="text-blue-200 text-sm max-w-xl">
              Get access to free templates, WPS AI grammar checker, and full PDF annotation capabilities for your studies.
            </p>
          </div>

          <button
            onClick={() => onOpenDownloadModal()}
            id="students-study-smarter-cta"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm text-slate-900 bg-white hover:bg-slate-100 shadow-md transition-transform active:scale-95 cursor-pointer"
          >
            <span>Study Smarter</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
