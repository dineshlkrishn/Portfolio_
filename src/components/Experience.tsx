import React from 'react';
import { motion } from 'motion/react';
import { DATA } from '../constants';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="mono-label">// Experience</span>
          <h2 className="section-title">Professional <span className="text-emerald-400">Journey</span></h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16">
            {DATA.experience.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-4 h-4 bg-emerald-500 rounded-full md:-translate-x-1/2 md:-translate-y-1/2 z-20 shadow-[0_0_15px_rgba(16,185,129,0.5)] hidden md:block"></div>

                {/* Content Card */}
                <div className="w-full md:w-[45%] group">
                  <div className="relative glass-card p-6 md:p-8 rounded-3xl border-slate-800 hover:border-emerald-500/30 transition-all overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-white border border-slate-800 flex items-center justify-center p-2 overflow-hidden shrink-0 shadow-lg">
                        <img 
                          src={exp.logo} 
                          alt={exp.company} 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{exp.company}</h3>
                        <p className="text-emerald-500 text-xs font-mono">{exp.role}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-emerald-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-emerald-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-sm text-slate-400 leading-relaxed flex items-start gap-3">
                          <span className="text-emerald-500 mt-1.5 shrink-0">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-emerald-400 mt-6 transition-colors">
                      Visit Website <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* Spacer for Desktop */}
                <div className="hidden md:block md:w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
