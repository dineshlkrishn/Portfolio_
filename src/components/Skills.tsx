import React from 'react';
import { motion } from 'motion/react';
import { DATA } from '../constants';

const Skills = () => {
  const skillCategories = [
    { title: 'Frontend', skills: DATA.skills.frontend, color: 'emerald' },
    { title: 'Backend', skills: DATA.skills.backend, color: 'teal' },
    { title: 'Databases', skills: DATA.skills.databases, color: 'emerald' },
    { title: 'DevOps & Cloud', skills: DATA.skills.devops, color: 'teal' },
    { title: 'Languages', skills: DATA.skills.languages, color: 'emerald' },
    { title: 'Tools', skills: DATA.skills.tools, color: 'teal' },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="mono-label">// Skills</span>
          <h2 className="section-title">10+ <span className="text-emerald-400">Tech stack</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:border-emerald-500/50 transition-colors group"
            >
              <h3 className="text-emerald-400 font-mono font-bold mb-6 flex items-center gap-2">
                <span className="text-slate-700 group-hover:text-emerald-500 transition-colors">{"{"}</span>
                {cat.title}
                <span className="text-slate-700 group-hover:text-emerald-500 transition-colors">{"}"}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
