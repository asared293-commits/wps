import React from 'react';
import { motion } from 'motion/react';
import { Star, GraduationCap, Briefcase, UserCheck, Quote, Info } from 'lucide-react';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 'student-1',
      name: 'Sarah K.',
      role: 'Computer Science Undergrad',
      category: 'Student',
      avatarBg: 'from-blue-500 to-indigo-600',
      initials: 'SK',
      quote: 'Having Writer, Spreadsheet, and PDF annotation in one app is a game changer for university coursework. WPS AI helps me proofread research paper drafts in seconds before submitting.',
      highlight: 'Saved 4+ hours per week on research assignments',
      metrics: '3.9 GPA Student'
    },
    {
      id: 'freelancer-1',
      name: 'Marcus T.',
      role: 'Content Strategist & Freelancer',
      category: 'Freelancer',
      avatarBg: 'from-rose-500 to-amber-600',
      initials: 'MT',
      quote: 'I manage client proposals in Writer, track invoices in Spreadsheet, and sign client contracts directly in PDF Tools. The cross-device cloud sync keeps my work seamless between my laptop and iPad.',
      highlight: 'Streamlined entire client billing & proposal stack',
      metrics: 'Full-Time Freelancer'
    },
    {
      id: 'pro-1',
      name: 'Elena R.',
      role: 'Operations Director',
      category: 'Business Professional',
      avatarBg: 'from-emerald-500 to-teal-700',
      initials: 'ER',
      quote: 'Our team needed a lightweight, cost-effective office suite with flawless Microsoft Office file compatibility. WPS Office delivered instant startup speeds and built-in PDF tools without expensive licensing.',
      highlight: 'Seamless .docx/.xlsx/PDF compatibility across team',
      metrics: 'Operations Lead'
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-amber-400 border border-slate-700 text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-4 h-4 text-amber-400" />
            <span>Workflow Satisfaction</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Loved by Students & <span className="text-rose-500">Professionals.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            See how everyday users, academics, and creators use WPS Office to simplify their daily document routines.
          </p>

          {/* Illustrative Disclaimer Notice */}
          <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-800">
            <Info className="w-3.5 h-3.5 text-amber-400" />
            <span>Illustrative user feedback stories reflecting core workflow use cases</span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-950 rounded-3xl p-7 border border-slate-800 hover:border-slate-700 shadow-xl flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Stars + Category */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                    {item.category}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-sm leading-relaxed italic relative">
                  <Quote className="w-6 h-6 text-slate-800 absolute -top-3 -left-2 -z-10 opacity-50" />
                  "{item.quote}"
                </p>

                {/* Highlight Badge */}
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-rose-400 font-semibold">
                  ✓ {item.highlight}
                </div>
              </div>

              {/* User Info */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center gap-3">
                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${item.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-md`}>
                  {item.initials}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{item.name}</h3>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
