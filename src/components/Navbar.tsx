import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sparkles, Layout, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenDownloadModal: (platform?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownloadModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'Why WPS', href: '#why-wps' },
    { name: 'For Students', href: '#students' },
    { name: 'For Professionals', href: '#professionals' },
    { name: 'AI Tools', href: '#ai-tools' },
    { name: 'Comparison', href: '#comparison' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3'
          : 'bg-slate-900/40 backdrop-blur-sm border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group"
            id="brand-logo-link"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 via-rose-600 to-amber-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform">
              W
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight tracking-tight flex items-center gap-1.5">
                WPS Office
                <span className="text-[10px] font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30 px-1.5 py-0.5 rounded-full">
                  Suite
                </span>
              </span>
              <span className="text-slate-400 text-[11px] hidden sm:inline">Work Smarter, Create Faster</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-300 hover:text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors hover:bg-slate-800/60"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenDownloadModal()}
              id="nav-try-wps-btn"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 shadow-md shadow-rose-600/30 hover:shadow-lg hover:shadow-rose-600/40 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Try WPS Office</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenDownloadModal()}
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Try</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slideout */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
            id="mobile-nav-menu"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between text-slate-300 hover:text-white px-3 py-2.5 rounded-xl text-base font-medium hover:bg-slate-800/80 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDownloadModal();
                  }}
                  id="mobile-menu-try-btn"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-rose-600 to-amber-500 hover:opacity-95 shadow-md shadow-rose-600/30 text-center"
                >
                  <Download className="w-5 h-5" />
                  <span>Try WPS Office Free</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
