import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight, Shield, FileCheck, FlaskConical, Cpu, GraduationCap,
  ChevronRight, CheckCircle2, Award, Globe, Search, BookOpen, TrendingUp,
  Clock, Users,
} from 'lucide-react';

function Counter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const services = [
  {
    icon: Shield,
    title: 'Auditing & Inspection Readiness',
    desc: 'Gap assessments, vendor audits, and inspection readiness across sterile/non-sterile Bio-Pharma and Pharma — aligned with FDA, EMA, MHRA, and WHO.',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: Cpu,
    title: 'QMS & Digital Transformation',
    desc: 'QMS design, eQMS/eDMS/LIMS/eBMR implementation, and digital quality infrastructure aligned with 21 CFR Part 11 and Annex 11.',
    color: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: FlaskConical,
    title: 'Qualification, Validation & Tech Transfer',
    desc: 'End-to-end qualification services — analytical, process, cleaning, computer systems, facilities, and equipment — plus dosage-form technology transfers.',
    color: 'bg-sky-50 text-sky-700',
  },
  {
    icon: FileCheck,
    title: 'Remediation & Culture Building',
    desc: 'Compliance remediation for FDA, MHRA, and WHO enforcement actions. Structured change management to instil a quality culture across manufacturing.',
    color: 'bg-orange-50 text-orange-700',
  },
  {
    icon: Search,
    title: 'Failure Investigations & CAPA',
    desc: 'Root cause analysis using 5-Why, Ishikawa, and FTA methodologies. End-to-end CAPA initiation, implementation, tracking, and effectiveness verification.',
    color: 'bg-violet-50 text-violet-700',
  },
  {
    icon: GraduationCap,
    title: 'Technical Training & Capability Building',
    desc: 'Customised training modules on global GxP regulations, data integrity, risk management, and audit readiness for continuous compliance.',
    color: 'bg-pink-50 text-pink-700',
  },
];

const trustNames = [
  'FDA GMP', 'EU GMP Annex 1', 'ICH Q10', 'WHO-GMP', 'MHRA Aligned',
  '21 CFR Part 211', 'PIC/S', 'ISO 9001', 'Annex 11', 'ICH Q9', 'GAMP 5',
];

export default function Home() {
  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className="relative min-h-[88vh] flex items-center bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-transparent to-transparent" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs font-semibold tracking-wide">
              Trusted GxP Consulting Partner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] text-balance mb-6"
          >
            Accelerating{' '}
            <span className="text-emerald-400">Compliance Culture</span>{' '}
            Across Life Sciences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Q-Exel GxP is a trusted consulting partner to the biopharmaceutical and pharmaceutical
            industries — delivering strategic expertise in quality systems, regulatory compliance,
            and operational excellence. Led by over 30 years of hands-on GxP experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
            >
              Book a Consultation <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 bg-white/5 hover:bg-white/10"
            >
              Our Services <ChevronRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-6"
          >
            {[
              { icon: CheckCircle2, label: 'FDA / EMA / WHO Aligned' },
              { icon: Award, label: 'ISO Lead Auditor Certified' },
              { icon: Globe, label: 'Global Consulting Reach' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-slate-400 text-sm">
                <Icon size={14} className="text-emerald-400" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <section className="bg-slate-50 border-y border-slate-200 py-5 overflow-hidden">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
          Compliance Frameworks &amp; Standards We Work With
        </p>
        <div className="flex">
          <div className="flex items-center gap-10 animate-marquee whitespace-nowrap">
            {[...trustNames, ...trustNames].map((name, i) => (
              <span key={i} className="text-navy-700 font-semibold text-sm px-2">
                <span className="text-emerald-500 mr-1.5">&#10003;</span>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Confirmed Stats ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-2">Our Experience</p>
            <h2 className="section-heading">Decades of hands-on GxP impact</h2>
            <p className="section-subheading mx-auto">
              Led by Sanjay K.D — with deep experience in bio-pharma and pharmaceutical quality,
              compliance, and regulatory affairs across global markets.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { end: 30, suffix: '+', label: 'Years of GxP Experience', icon: Clock, color: 'text-navy-700', sub: 'Spanning bio-pharma & pharmaceutical sectors' },
              { end: 100, suffix: '+', label: 'Audits Conducted Globally', icon: Shield, color: 'text-emerald-600', sub: 'Across sterile, non-sterile, and biotech facilities' },
            ].map(({ end, suffix, label, icon: Icon, color, sub }, i) => (
              <FadeIn key={label} delay={i * 0.1}>
                <div className="text-center p-10 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-all duration-300 group">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm mb-5 group-hover:shadow-md transition-shadow">
                    <Icon size={26} className={color} />
                  </div>
                  <p className={`text-5xl font-bold ${color} tabular-nums`}>
                    <Counter end={end} suffix={suffix} />
                  </p>
                  <p className="text-slate-700 text-base font-semibold mt-2">{label}</p>
                  <p className="text-slate-400 text-xs mt-1">{sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-2">What We Do</p>
            <h2 className="section-heading">Comprehensive GxP Consulting Services</h2>
            <p className="section-subheading mx-auto">
              End-to-end quality and compliance solutions for pharmaceutical and bio-pharmaceutical
              organisations — from facility setup through commercial operations.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 0.07}>
                <Link
                  to="/services"
                  className="group block card p-7 hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 ${svc.color}`}>
                    <svc.icon size={20} />
                  </div>
                  <h3 className="font-bold text-navy-800 text-base mb-2 group-hover:text-emerald-700 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
                  <div className="flex items-center gap-1 mt-4 text-emerald-600 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={12} />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-10">
            <Link to="/services" className="btn-outline">
              View All Services <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Why Q-Exel ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">Why Q-Exel GxP</p>
              <h2 className="section-heading mb-5">Your trusted partner for GxP compliance &amp; quality culture</h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                We collaborate closely with clients to identify compliance gaps, optimise processes, and
                implement sustainable, regulatory-compliant solutions aligned with global standards.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8 italic border-l-4 border-emerald-400 pl-4">
                "We assess your business risks and address them to your complete satisfaction, aligned with
                evolving regulatory expectations. Our decisions always prioritise patient safety, and our
                identity is grounded in ethics and business integrity."
              </p>
              <div className="space-y-4">
                {[
                  { icon: Shield, title: 'Proven GxP Track Record', desc: '100+ audits and gap assessments globally. Deep expertise in sterile and biotech operations.' },
                  { icon: Cpu, title: 'Digital Transformation Support', desc: 'eQMS, eDMS, eLMS, eBMR, LIMS, SAP — full digital quality infrastructure implementation and validation.' },
                  { icon: TrendingUp, title: 'All-Time Readiness (ATR)', desc: 'Customised training and readiness programmes that keep your organisation inspection-ready at all times.' },
                  { icon: Users, title: 'End-to-End Support', desc: 'From development through commercialisation — gap assessments, remediation, qualification, and continuous improvement.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-800 text-sm">{title}</p>
                      <p className="text-slate-500 text-sm mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <img
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pharmaceutical laboratory quality compliance"
                className="rounded-2xl w-full object-cover h-[480px] shadow-xl"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Previous Companies ── */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-8">
            <p className="text-slate-500 text-sm font-medium">
              Our Founder's leadership experience from multinational bio pharma and pharma at:
            </p>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-4">
              {['Pfizer', 'Hospira', 'Lupin', 'Wockhardt Biotech'].map((co) => (
                <div
                  key={co}
                  className="px-6 py-3 bg-white rounded-xl border border-slate-200 text-navy-700 font-bold text-sm shadow-sm hover:border-emerald-300 transition-colors"
                >
                  {co}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Document Library CTA ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                  <BookOpen size={20} className="text-white" />
                </div>
                <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Document Library</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                GxP Document Templates &amp; SOPs
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Access our library of professionally authored GxP document templates — SOP packs,
                validation protocols, audit checklists, and training materials — ready to customise
                for your organisation.
              </p>
            </FadeIn>
            <FadeIn delay={0.15} className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:items-start xl:items-center">
              <div className="space-y-2 flex-1">
                {['Validation Protocol Templates', 'Audit Checklists (GMP/GDP)', 'SOP Template Packs', 'GxP Training Materials'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                to="/documentation"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 flex-shrink-0"
              >
                Browse Library <ArrowRight size={16} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Talent Solutions CTA ── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <FadeIn className="p-10 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center">
                  <Users size={20} className="text-white" />
                </div>
                <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Talent Solutions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 mb-3">
                Specialized GxP Recruitment for Pharma &amp; Biopharma
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                We connect the right GxP talent with the right opportunity. Backed by 30+ years of
                hands-on industry experience, we evaluate functional knowledge and practical GxP
                exposure — not just CVs. Led by Sanjay K.D.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/talent-solutions"
                  className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
                >
                  Explore Talent Solutions <ArrowRight size={16} />
                </Link>

              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="relative min-h-[280px] bg-slate-100 flex items-center justify-center p-4">
              <img
                src="/images/Q-Exel_GxP_Talent_Solutions_Services.jpeg"
                alt="Q-Exel GxP Talent Solutions"
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to achieve compliance excellence?
            </h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-xl mx-auto">
              Book a consultation with Sanjay K.D and the Q-Exel GxP team. We assess your business
              risks and address them to your complete satisfaction.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Book a Consultation <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                Browse Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
