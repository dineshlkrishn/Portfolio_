import React from 'react';
import { motion } from 'motion/react';
import { DATA } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="mono-label">// Projects</span>
          <h2 className="section-title">Selected <span className="text-emerald-400">Works</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA.projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900"
            >
              {/* Project Image/Logo Placeholder Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center p-12">
                <div className="w-24 h-24 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center p-4 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src={project.logo} 
                    alt={project.title} 
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex flex-col justify-end p-8 translate-y-24 group-hover:translate-y-0 transition-transform duration-500">
                <div className="mb-4">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-[0.2em] mb-2 block">{project.subtitle}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-400 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                    {project.description}
                  </p>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-md text-[10px] font-mono border border-emerald-500/20">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-slate-800 text-slate-400 rounded-md text-[10px] font-mono">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    {project.url && (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 bg-emerald-500 text-slate-950 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors"
                      >
                        View Project <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
