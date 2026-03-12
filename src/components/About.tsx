import React from 'react';
import { motion } from 'motion/react';
import { DATA } from '../constants';
import { GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Moving Background Image */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
      >
        <img 
          src="/assets/casual_pic.jpg" 
          alt="Background" 
          className="w-full h-full object-cover blur-sm"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="mono-label">// About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Bridging the gap between <span className="text-emerald-400">design</span> and <span className="text-emerald-400">code</span>.
            </h2>
            
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                I'm a Software Developer with <span className="text-white font-medium">2+ years</span> of experience in the MERN stack. My journey is fueled by a passion for creating seamless, user-centric applications that solve real-world problems.
              </p>
              <p>
                I thrive in Agile environments, constantly pushing the boundaries of what's possible with modern web technologies. From optimizing backend performance to crafting pixel-perfect interfaces, I take pride in every line of code I write.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {DATA.languages.map(lang => (
                <span key={lang} className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium">
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            {/* Education Modern Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-8 rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 group-hover:border-emerald-500/30 transition-all duration-500">
                <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <GraduationCap size={80} />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{DATA.education.degree}</h3>
                  <p className="text-slate-400 mb-4">{DATA.education.school}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                    <span className="text-sm font-mono text-slate-500">{DATA.education.period}</span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold">CGPA: {DATA.education.cgpa}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certifications Modern Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="relative p-8 rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 group-hover:border-emerald-500/30 transition-all duration-500">
                <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Award size={80} />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                    <Award size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Certifications</h3>
                  <ul className="space-y-3">
                    {DATA.certifications.map((cert, i) => (
                      <li key={i} className="text-sm text-slate-400 flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
