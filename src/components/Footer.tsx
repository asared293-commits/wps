import React from 'react';
import { APP_CONFIG } from '../config';
import { Download, ShieldAlert, Heart, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenDownloadModal: (platform?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownloadModal }) => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-500 via-rose-600 to-amber-500 flex items-center justify-center text-white font-black text-sm shadow-md">
                W
              </div>
              <span className="text-white font-bold text-base tracking-tight">WPS Office</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm text-xs">
              Everything you need to work smarter, in one place. Discover Writer, Spreadsheet, Presentation, PDF Tools, and WPS AI productivity copilot.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenDownloadModal()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 transition-colors shadow-md shadow-rose-600/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Try WPS Office</span>
              </button>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Product Suite</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" onClick={(e) => handleScrollTo(e, '#features')} className="hover:text-white transition-colors">
                  Writer (Docs)
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleScrollTo(e, '#features')} className="hover:text-white transition-colors">
                  Spreadsheet (Sheets)
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleScrollTo(e, '#features')} className="hover:text-white transition-colors">
                  Presentation (Slides)
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleScrollTo(e, '#features')} className="hover:text-white transition-colors">
                  PDF Tools
                </a>
              </li>
              <li>
                <a href="#ai-tools" onClick={(e) => handleScrollTo(e, '#ai-tools')} className="hover:text-white transition-colors">
                  WPS AI Assistant
                </a>
              </li>
            </ul>
          </div>

          {/* Target Audiences */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <a href="#students" onClick={(e) => handleScrollTo(e, '#students')} className="hover:text-white transition-colors">
                  For Students
                </a>
              </li>
              <li>
                <a href="#students" onClick={(e) => handleScrollTo(e, '#students')} className="hover:text-white transition-colors">
                  For Universities
                </a>
              </li>
              <li>
                <a href="#professionals" onClick={(e) => handleScrollTo(e, '#professionals')} className="hover:text-white transition-colors">
                  For Freelancers
                </a>
              </li>
              <li>
                <a href="#professionals" onClick={(e) => handleScrollTo(e, '#professionals')} className="hover:text-white transition-colors">
                  For Business Teams
                </a>
              </li>
              <li>
                <a href="#comparison" onClick={(e) => handleScrollTo(e, '#comparison')} className="hover:text-white transition-colors">
                  Office Comparison
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Resources */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Resources & Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#faq" onClick={(e) => handleScrollTo(e, '#faq')} className="hover:text-white transition-colors">
                  FAQ & Support
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Mandatory Legal Disclaimer Banner */}
        <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 text-slate-400 space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-amber-400 text-xs">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>Trademark & Promotional Disclaimer</span>
          </div>
          <p className="text-[11px] leading-relaxed">
            {APP_CONFIG.legalDisclaimer}
          </p>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Promotional Landing Page for WPS Office. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted for productivity & high conversion</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
