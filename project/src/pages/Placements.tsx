import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight, Users, Shield, Zap, GraduationCap,
} from 'lucide-react';

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── For Companies Panel ───────────────────────────────────────────────────────
function ForCompanies() {
  return (
    <div>
      <FadeIn className="text-center mb-14">
        <h2 className="section-heading">Hire Pre-Vetted GxP Specialists</h2>
        <p className="section-subheading mx-auto">
          Access our network of senior QA, RA, QC, and QP professionals available for
          interim, contract, and permanent roles across pharma and bio-pharma organisations.
        </p>
      </FadeIn>

      {/* How it works */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { step: '01', title: 'Share Your Brief', desc: 'Tell us the role, required expertise, timeline, and location. A short call is all we need to understand your requirements.' },
          { step: '02', title: 'Receive Shortlist', desc: 'We present a curated shortlist of pre-vetted, qualified candidates matched to your exact GxP needs.' },
          { step: '03', title: 'Start Work', desc: 'Interview, select, and onboard your consultant. We handle ongoing support throughout the engagement.' },
        ].map((item, i) => (
          <FadeIn key={item.step} delay={i * 0.1}>
            <div className="card p-7 text-center hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 font-black text-lg flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-bold text-navy-800 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Benefits */}
      <FadeIn className="bg-navy-50 rounded-2xl p-8 mb-12 border border-navy-100">
        <h3 className="font-bold text-navy-800 text-lg mb-6 text-center">Why source GxP talent through Q-Exel GxP</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { icon: Shield, title: 'Fully Vetted Candidates', desc: 'Every candidate undergoes qualification verification, reference checking, and GxP competency assessment before being presented.' },
            { icon: Zap, title: 'Specialist Network', desc: 'Direct access to GxP professionals with backgrounds in QA, RA, QC, QP, and CSV — across pharma, bio-pharma, and CDMO organisations.' },
            { icon: Users, title: 'Experienced Placing Authority', desc: 'We understand the technical requirements of GxP roles because our consultants come from the industry.' },
            { icon: GraduationCap, title: 'Domain Expertise', desc: 'Our knowledge of regulatory frameworks means we can accurately match candidates to your specific compliance environment.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                <Icon size={16} className="text-navy-700" />
              </div>
              <div>
                <p className="font-semibold text-navy-800 text-sm">{title}</p>
                <p className="text-slate-500 text-sm mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="text-center">
        <Link to="/booking?service=interim" className="btn-primary text-base px-8 py-4">
          Discuss a Requirement <ArrowRight size={16} />
        </Link>
      </FadeIn>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Placements() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">GxP Placements</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Connecting <span className="text-emerald-400">Pharma Talent</span>{' '}
              <br className="hidden sm:block" />
              with Leading Organisations
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Access our network of pre-vetted GxP specialists available for interim, contract,
              and permanent roles across pharma and bio-pharma organisations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ForCompanies />
        </div>
      </section>
    </main>
  );
}
