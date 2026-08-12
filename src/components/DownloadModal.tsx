import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Download,
  Monitor,
  Apple,
  Smartphone,
  Globe,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { APP_CONFIG } from '../config';
import { PlatformOs } from '../types';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlatform?: string;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  initialPlatform = 'windows'
}) => {
  const [selectedOs, setSelectedOs] = useState<PlatformOs>(
    (initialPlatform as PlatformOs) || 'windows'
  );
  const [downloadStarted, setDownloadStarted] = useState(false);

  if (!isOpen) return null;

  const osList = [
    {
      id: 'windows',
      name: 'Windows',
      icon: Monitor,
      spec: 'Windows 11 / 10 / 8.1 / 7 (64-bit & 32-bit)',
      url: APP_CONFIG.platforms.windows,
      size: '185 MB',
      ver: 'v16.4.2 Latest'
    },
    {
      id: 'mac',
      name: 'macOS',
      icon: Apple,
      spec: 'macOS 11.0 or later (Apple Silicon & Intel)',
      url: APP_CONFIG.platforms.mac,
      size: '210 MB',
      ver: 'v16.4.2 Universal'
    },
    {
      id: 'ios',
      name: 'iOS / iPadOS',
      icon: Smartphone,
      spec: 'iOS 14.0 or later for iPhone & iPad',
      url: APP_CONFIG.platforms.ios,
      size: 'App Store',
      ver: 'Mobile Suite'
    },
    {
      id: 'android',
      name: 'Android',
      icon: Smartphone,
      spec: 'Android 7.0 or higher',
      url: APP_CONFIG.platforms.android,
      size: 'Google Play / APK',
      ver: 'Mobile Suite'
    },
    {
      id: 'linux',
      name: 'Linux',
      icon: Monitor,
      spec: 'Ubuntu, Fedora, Debian, Mint (.deb / .rpm)',
      url: APP_CONFIG.platforms.linux,
      size: '195 MB',
      ver: 'v16.4.2 Linux'
    },
    {
      id: 'web',
      name: 'Web Browser',
      icon: Globe,
      spec: 'No installation required — open in Chrome/Edge/Safari',
      url: APP_CONFIG.platforms.web,
      size: 'Instant Web',
      ver: 'WPS Cloud Web'
    }
  ];

  const currentOs = osList.find((o) => o.id === selectedOs) || osList[0];

  const handleDownloadClick = () => {
    setDownloadStarted(true);
    // Uses the central configuration variable or specific OS link
    window.open(currentOs.url || APP_CONFIG.DOWNLOAD_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-slate-700/80 shadow-2xl relative text-white space-y-6"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase">
              <Download className="w-3.5 h-3.5" />
              <span>Get WPS Office Suite</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Choose Your Platform</h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Select your operating system to proceed with the WPS Office download.
            </p>
          </div>

          {/* OS Platform Selector Tabs */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
            {osList.map((os) => {
              const Icon = os.icon;
              const isSelected = os.id === selectedOs;
              return (
                <button
                  key={os.id}
                  onClick={() => {
                    setSelectedOs(os.id as PlatformOs);
                    setDownloadStarted(false);
                  }}
                  className={`flex flex-col items-center justify-center p-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4 mb-1" />
                  <span>{os.name}</span>
                </button>
              );
            })}
          </div>

          {/* Selected OS Details Box */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                {currentOs.name} Platform Package
              </span>
              <span className="text-slate-400 font-mono">{currentOs.ver}</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">{currentOs.spec}</p>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-900">
              <span>Estimated Package Size: <strong>{currentOs.size}</strong></span>
              <span className="text-emerald-400">Verified & Safe</span>
            </div>
          </div>

          {/* Download Action Trigger */}
          <div className="space-y-3">
            <button
              onClick={handleDownloadClick}
              id="modal-direct-download-btn"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 shadow-xl shadow-rose-600/30 transition-all cursor-pointer active:scale-98"
            >
              <Download className="w-5 h-5" />
              <span>Download WPS Office for {currentOs.name}</span>
              <ExternalLink className="w-4 h-4" />
            </button>

            {downloadStarted && (
              <div className="p-3 bg-emerald-950/60 border border-emerald-800/50 rounded-xl text-xs text-emerald-300 text-center flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Redirecting to WPS Office download source...</span>
              </div>
            )}
          </div>

          {/* Quick Notice */}
          <div className="text-[11px] text-slate-500 text-center">
            By downloading, you agree to standard software end-user licensing terms.
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
