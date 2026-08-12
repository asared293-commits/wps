import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Is WPS Office free to download and try?',
      answer: 'Yes! WPS Office offers a free version that includes core Writer, Spreadsheet, Presentation, and basic PDF reading capabilities. Advanced features like high-speed PDF conversion and WPS AI tools are available with flexible premium upgrade options.',
      category: 'general'
    },
    {
      question: 'Is WPS Office fully compatible with Microsoft Office formats?',
      answer: 'Absolutely. WPS Office natively opens, edits, formats, and saves Microsoft Word (.docx, .doc), Excel (.xlsx, .xls), and PowerPoint (.pptx, .ppt) files with 100% layout fidelity and font precision.',
      category: 'compatibility'
    },
    {
      question: 'Can I edit and convert PDFs directly inside WPS Office?',
      answer: 'Yes. WPS Office features a built-in PDF toolkit that allows you to read, annotate, edit text, convert PDFs into editable Word/Excel files, compress file sizes, and add digital e-signatures without installing third-party PDF tools.',
      category: 'features'
    },
    {
      question: 'Which operating systems and devices are supported?',
      answer: 'WPS Office is available across Windows, macOS, iOS, Android, Linux, and via Web browsers. Your files can automatically sync across devices with WPS Cloud so you can continue working anywhere.',
      category: 'compatibility'
    },
    {
      question: 'How does WPS AI help me work faster?',
      answer: 'WPS AI acts as an intelligent document copilot. It can summarize lengthy PDFs or Word documents, rewrite paragraphs for professional tone, proofread grammar, generate presentation outlines, and brainstorm ideas in seconds.',
      category: 'ai'
    },
    {
      question: 'Does WPS Office work when I am offline without internet?',
      answer: 'Yes. All core document editing, spreadsheet formulas, slide design, and PDF reading functions work completely offline on your device. Once you reconnect to the internet, WPS Cloud automatically syncs your latest edits.',
      category: 'general'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-rose-600" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked <span className="text-rose-600">Questions</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Everything you need to know about WPS Office features, compatibility, and AI capabilities.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-rose-600 transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-rose-50 text-rose-600 border-rose-200' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 text-slate-600 text-sm leading-relaxed border-t border-slate-200/60 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
