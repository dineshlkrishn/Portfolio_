import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { DATA } from '../constants';

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm font-medium">
          Designed & built by <span className="text-emerald-400">{DATA.name}</span> © {new Date().getFullYear()}
        </p>
        <div className="flex gap-6">
          <a href={DATA.linkedin} className="flex items-center gap-2 text-slate-500 hover:text-emerald-400 transition-colors text-sm font-mono">
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a href={`mailto:${DATA.email}`} className="flex items-center gap-2 text-slate-500 hover:text-emerald-400 transition-colors text-sm font-mono">
            <Mail size={16} />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
