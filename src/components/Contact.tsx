import React from 'react';
import { motion } from 'motion/react';
import { DATA } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl mx-auto"
        >
          <span className="mono-label">// Contact</span>
          <h2 className="section-title">Let's <span className="text-emerald-400">connect</span></h2>
          <p className="text-slate-400 text-lg">
            I'm open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <Mail />, label: 'Email', value: DATA.email, href: `mailto:${DATA.email}` },
            { icon: <Phone />, label: 'Phone', value: DATA.phone, href: `tel:${DATA.phone}` },
            { icon: <MapPin />, label: 'Location', value: DATA.location, href: '#' },
            { icon: <Linkedin />, label: 'LinkedIn', value: 'Connect with me', href: DATA.linkedin },
          ].map((item, idx) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:border-emerald-500/30 transition-all group"
            >
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
              <p className="font-bold text-white truncate w-full">{item.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <a 
            href={`mailto:${DATA.email}`}
            className="inline-flex items-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/20 group"
          >
            <Mail size={24} />
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
