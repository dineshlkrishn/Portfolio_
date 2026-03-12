import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, ChevronDown, Download } from 'lucide-react';
import { DATA } from '../constants';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-12 overflow-hidden bg-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Animated Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new projects
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tighter text-white leading-[1.1] md:leading-[0.9]">
            {DATA.name.split(' ')[0]} <br />
            <span className="text-emerald-400">{DATA.name.split(' ')[1]}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-xl leading-relaxed">
            {DATA.role} specializing in <span className="text-white font-medium">{DATA.specialization}</span>. 
            Crafting high-performance digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <a 
              href="#projects" 
              className="bg-emerald-500 text-slate-950 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 group"
            >
              View Projects
              <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <button 
              onClick={() => window.print()}
              className="bg-slate-900/50 backdrop-blur-sm text-white border border-slate-800 px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              <Download size={20} />
              Resume
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-slate-900 pt-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">2+</span>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Years Exp</span>
            </div>
            <div className="w-px h-8 bg-slate-800"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">5+</span>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Projects</span>
            </div>
            <div className="w-px h-8 bg-slate-800"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">10+</span>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Tech Stack</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          <div className="relative z-10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl aspect-[4/5] group w-[70%] lg:w-[80%]">
            <img 
              src="assets/professional_pic.jpg"
              alt={DATA.name}
              className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 glass-card p-5 rounded-2xl z-20 border-emerald-500/30"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/40">
                <ChevronDown size={20} className="rotate-180" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest leading-none mb-1">Based in</p>
                <p className="font-bold text-white text-sm">Tamil Nadu, IN</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
