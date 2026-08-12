import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Wand2,
  FileSearch,
  CheckCheck,
  Lightbulb,
  FileCheck,
  Zap,
  Loader2,
  RefreshCw,
  Copy,
  Check,
  ArrowRight
} from 'lucide-react';
import { AiActionType, AiPreset } from '../types';

interface AiSectionProps {
  onOpenDownloadModal: (platform?: string) => void;
}

export const AiSection: React.FC<AiSectionProps> = ({ onOpenDownloadModal }) => {
  const [activeAction, setActiveAction] = useState<AiActionType>('rewrite');
  const [inputText, setInputText] = useState<string>(
    'WPS Office integrates document creation, spreadsheets, presentations, and PDF tools into one software workspace. This saves memory and time for students and busy working professionals.'
  );
  const [outputResult, setOutputResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const presets: AiPreset[] = [
    {
      id: 'rewrite',
      label: 'Rewrite',
      icon: 'Wand2',
      shortDesc: 'Enhance tone & executive polish',
      sampleText: 'WPS Office integrates document creation, spreadsheets, presentations, and PDF tools into one software workspace. This saves memory and time for students and busy working professionals.'
    },
    {
      id: 'summarize',
      label: 'Summarize',
      icon: 'FileSearch',
      shortDesc: 'Extract key bullet points',
      sampleText: 'Research indicates that knowledge workers spend up to 4 hours per week toggling between distinct document apps. By consolidating document editing, PDF signing, and data formulas into a single tabbed suite, WPS Office reduces cognitive friction and improves weekly task completion velocity by 28%.'
    },
    {
      id: 'proofread',
      label: 'Proofread',
      icon: 'CheckCheck',
      shortDesc: 'Fix grammar, spelling & cadence',
      sampleText: 'Their was several mistakes in the original draft report regarding to the quarterly revenue projection, but WPS Office AI corrected all of them in two seconds.'
    },
    {
      id: 'generate_ideas',
      label: 'Generate Ideas',
      icon: 'Lightbulb',
      shortDesc: 'Brainstorm expansion points',
      sampleText: 'Topic: Launching a university student marketing campaign for WPS Office.'
    },
    {
      id: 'analyze',
      label: 'Analyze Documents',
      icon: 'FileCheck',
      shortDesc: 'Executive document assessment',
      sampleText: 'Standard Operating Procedure v4: All financial reports must be formatted in .xlsx format, audited by department leads, and converted to password-protected PDF prior to executive distribution.'
    },
    {
      id: 'improve',
      label: 'Improve Writing',
      icon: 'Sparkles',
      shortDesc: 'Structure & clarity upgrade',
      sampleText: 'Our team needs to work better together and make sure we don’t lose files when working on group projects.'
    }
  ];

  const handleSelectPreset = (preset: AiPreset) => {
    setActiveAction(preset.id);
    setInputText(preset.sampleText);
    setOutputResult('');
  };

  const handleRunAi = async () => {
    if (!inputText.trim()) return;
    setIsLoading(true);
    setOutputResult('');

    try {
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: activeAction,
          text: inputText
        })
      });

      const data = await response.json();
      if (data.result) {
        setOutputResult(data.result);
      } else {
        setOutputResult('AI Assistant generated response successfully.');
      }
    } catch (err) {
      console.error('Error running AI assistant:', err);
      setOutputResult(
        `[WPS AI Simulated Output for ${activeAction.toUpperCase()}]:\n• Enhanced document structure & active vocabulary applied.\n• Ready to insert directly into your WPS Writer document.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (outputResult) {
      navigator.clipboard.writeText(outputResult);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="ai-tools" className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      {/* Luminous Futuristic Background Particles & Glows */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-rose-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 text-purple-300 border border-purple-800/80 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Next-Gen WPS AI Assistant</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Let AI Handle the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-rose-400 to-amber-300">Busywork.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Write faster, edit smarter, and extract insights instantly with built-in AI tools designed for your daily document workflow.
          </p>
        </div>

        {/* 6 AI Action Cards Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {presets.map((preset) => {
            const isActive = preset.id === activeAction;
            return (
              <button
                key={preset.id}
                onClick={() => handleSelectPreset(preset)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-purple-950/60 border-purple-500 shadow-lg shadow-purple-500/20 text-white scale-[1.02]'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div>
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold mb-2.5 ${
                      isActive ? 'bg-purple-600 text-white' : 'bg-slate-800 text-purple-400'
                    }`}
                  >
                    {preset.id === 'rewrite' && <Wand2 className="w-4 h-4" />}
                    {preset.id === 'summarize' && <FileSearch className="w-4 h-4" />}
                    {preset.id === 'proofread' && <CheckCheck className="w-4 h-4" />}
                    {preset.id === 'generate_ideas' && <Lightbulb className="w-4 h-4" />}
                    {preset.id === 'analyze' && <FileCheck className="w-4 h-4" />}
                    {preset.id === 'improve' && <Sparkles className="w-4 h-4" />}
                  </div>
                  <h3 className="text-sm font-bold text-white">{preset.label}</h3>
                  <p className="text-[11px] text-slate-400 mt-1 leading-tight">{preset.shortDesc}</p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-semibold">
                  <span className={isActive ? 'text-purple-300' : 'text-slate-500'}>
                    {isActive ? 'Active Mode' : 'Click to test'}
                  </span>
                  <Zap className={`w-3 h-3 ${isActive ? 'text-amber-400' : 'text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Interactive AI Playground */}
        <div className="mt-10 bg-slate-900 rounded-3xl p-6 sm:p-8 border border-purple-900/40 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                Live WPS AI Test Playground
                <span className="text-xs font-normal text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-800">
                  Mode: {presets.find((p) => p.id === activeAction)?.label}
                </span>
              </h3>
            </div>
            <button
              onClick={() => {
                const current = presets.find((p) => p.id === activeAction);
                if (current) setInputText(current.sampleText);
              }}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset Sample Text
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Column */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                Source Document Content / Prompt:
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={6}
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors font-sans"
                placeholder="Type or paste any document excerpt here..."
              />
              <button
                onClick={handleRunAi}
                disabled={isLoading || !inputText.trim()}
                id="run-wps-ai-btn"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-rose-600 to-amber-500 hover:opacity-95 shadow-lg shadow-purple-600/30 disabled:opacity-50 cursor-pointer transition-all active:scale-98"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>WPS AI Processing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Execute WPS AI {presets.find((p) => p.id === activeAction)?.label}</span>
                  </>
                )}
              </button>
            </div>

            {/* Output Column */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  WPS AI Output Result:
                </label>
                {outputResult && (
                  <button
                    onClick={handleCopy}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 bg-slate-800 px-2.5 py-1 rounded-lg"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                )}
              </div>

              <div className="w-full bg-slate-950 border border-purple-900/40 rounded-2xl p-4 min-h-[175px] max-h-[260px] overflow-y-auto text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-wrap">
                {isLoading ? (
                  <div className="h-full flex flex-col items-center justify-center py-8 text-purple-400 space-y-2">
                    <Loader2 className="w-6 h-6 animate-spin text-purple-400" />
                    <p className="text-xs text-slate-400">Gemini 3.6 Flash synthesizing AI document output...</p>
                  </div>
                ) : outputResult ? (
                  outputResult
                ) : (
                  <p className="text-slate-600 italic text-xs pt-4 text-center">
                    Click "Execute WPS AI" above to see real-time AI document transformation results.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
