import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesSection } from './components/FeaturesSection';
import { WhyWPSSection } from './components/WhyWPSSection';
import { StudentSection } from './components/StudentSection';
import { ProfessionalSection } from './components/ProfessionalSection';
import { AiSection } from './components/AiSection';
import { ComparisonSection } from './components/ComparisonSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string>('windows');

  const handleOpenDownloadModal = (platform?: string) => {
    if (platform) {
      setSelectedPlatform(platform);
    }
    setDownloadModalOpen(true);
  };

  const handleCloseDownloadModal = () => {
    setDownloadModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-rose-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenDownloadModal={handleOpenDownloadModal} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenDownloadModal={handleOpenDownloadModal} />

        {/* Features Section */}
        <FeaturesSection onOpenDownloadModal={handleOpenDownloadModal} />

        {/* Why WPS Office Section */}
        <WhyWPSSection onOpenDownloadModal={handleOpenDownloadModal} />

        {/* Student / Education Section */}
        <StudentSection onOpenDownloadModal={handleOpenDownloadModal} />

        {/* Professional Workflow Pipeline Section */}
        <ProfessionalSection onOpenDownloadModal={handleOpenDownloadModal} />

        {/* AI Productivity Section with Live Gemini Playground */}
        <AiSection onOpenDownloadModal={handleOpenDownloadModal} />

        {/* Comparison Table Matrix Section */}
        <ComparisonSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Accordion Section */}
        <FaqSection />

        {/* Final CTA Conversion Section */}
        <FinalCta onOpenDownloadModal={handleOpenDownloadModal} />
      </main>

      {/* Footer */}
      <Footer onOpenDownloadModal={handleOpenDownloadModal} />

      {/* Download / Try WPS Office Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={handleCloseDownloadModal}
        initialPlatform={selectedPlatform}
      />
    </div>
  );
}
