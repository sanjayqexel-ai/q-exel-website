import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  Users, Shield, CheckCircle2, ArrowRight, Linkedin, Mail,
  Target, Award, Microscope, Cpu, GraduationCap, Building2,
  Star, TrendingUp, Globe, Zap, Search, FileCheck,
} from 'lucide-react';

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

const talentServices = [
  {
    icon: Shield,
    color: 'bg-blue-50 text-blue-700',
    title: 'Quality',
    desc: 'QA Managers, Quality Directors, Qualified Persons (QP), QMS leads, and compliance officers across sterile and non-sterile environments.',
  },
  {
    icon: FileCheck,
    color: 'bg-emerald-50 text-emerald-700',
    title: 'Regulatory',
    desc: 'Regulatory Affairs Managers, RA Specialists, submission experts, and global dossier professionals across FDA, EMA, MHRA, and WHO markets.',
  },
  {
    icon: Cpu,
    color: 'bg-sky-50 text-sky-700',
    title: 'Validation',
    desc: 'CSV engineers, validation specialists, process and cleaning validation experts, and GAMP 5 practitioners for computerised and physical systems.',
  },
  {
    icon: Building2,
    color: 'bg-orange-50 text-orange-700',
    title: 'Engineering',
    desc: 'Pharmaceutical engineers, facility and utility qualification specialists, and technical professionals for GMP manufacturing environments.',
  },
  {
    icon: GraduationCap,
    color: 'bg-pink-50 text-pink-700',
    title: 'Consulting',
    desc: 'Senior GxP consultants for embedded or project-based engagements — audit readiness, remediation, CAPA management, and quality culture transformation.',
  },
];

const gxpTrainingAreas = [
  'Good Manufacturing Practice (GMP)',
  'Good Laboratory Practice (GLP)',
  'Good Documentation Practice (GDP)',
  'Data Integrity & ALCOA+',
  'Quality Systems & ICH Q10',
  'Validation & Qualification',
  'Regulatory Compliance',
  'Contamination Control',
];

const globalStandards = ['EMA', 'FDA', 'MHRA', 'PIC/S', 'WHO'];

const whyPartner = [
  {
    icon: Microscope,
    title: 'Deep GxP Industry Experience',
    desc: 'Our team has direct industry experience at companies like Pfizer, Hospira, Wockhardt, and Lupin — not just recruitment theory.',
  },
  {
    icon: Target,
    title: 'Technical Evaluation Expertise',
    desc: 'We evaluate functional knowledge, practical GxP exposure, and role-specific competencies — going far beyond CV screening.',
  },
  {
    icon: Users,
    title: 'Right Talent for the Right Role',
    desc: 'Candidates are assessed against the skills and compliance expectations of the specific position and your operating environment.',
  },
  {
    icon: Shield,
    title: 'Compliance-Focused Hiring',
    desc: 'Every candidate is technically aligned with applicable GxP requirements and your quality, regulatory, and operational environment.',
  },
  {
    icon: TrendingUp,
    title: 'Faster Hiring. Better Retention.',
    desc: 'Our rigorous pre-vetting reduces time-to-hire and improves long-term placement success across permanent and interim roles.',
  },
  {
    icon: Globe,
    title: 'Global Standards Alignment',
    desc: 'Supported by knowledge of EMA, FDA, MHRA, PIC/S, and WHO requirements for placement in regulated markets worldwide.',
  },
];

const placementTypes = [
  { label: 'Permanent Placement', desc: 'Full-time hires for long-term GxP roles across quality, regulatory, validation, and engineering functions.' },
  { label: 'Contract / Interim', desc: 'Short to medium-term specialists placed quickly for project delivery, inspection readiness, or cover requirements.' },
  { label: 'Executive Search', desc: 'Confidential search and selection for senior quality and regulatory leadership positions.' },
  { label: 'GxP Training Programmes', desc: 'Structured training and capability development for new hires and existing teams across all GxP disciplines.' },
];

export default function TalentSolutions() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs font-semibold tracking-wide">Q-Exel GxP Talent Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
                Specialized Talent Acquisition for{' '}
                <span className="text-emerald-400">Pharma, Biopharma &amp; Life Sciences</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-4 italic">
                "Connecting the Right GxP Talent with the Right Opportunity. Every Time."
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Under the Q-Exel GxP professional services platform, we provide specialized recruitment
                and talent acquisition for Pharma, Biopharma, and Life Sciences organizations — backed by
                30+ years of hands-on industry experience.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/booking?service=interim"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
                >
                  Hire GxP Talent <ArrowRight size={16} />
                </Link>
                <Link
                  to="/placements"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 bg-white/5 hover:bg-white/10"
                >
                  Explore Placements <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center bg-slate-100 rounded-2xl p-4 overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img
                src="/images/Q-Exel_GxP_Talent_Solutions_Services.jpeg"
                alt="Q-Exel GxP Talent Solutions - Specialized Recruitment for Pharma and Biopharma"
                className="rounded-2xl w-full max-h-[520px] object-contain shadow-2xl border border-white/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Standards bar */}
      <section className="bg-slate-50 border-y border-slate-200 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-4">Supported by Global GxP Standards</span>
            {globalStandards.map((std) => (
              <span key={std} className="px-5 py-2 bg-white rounded-xl border border-slate-200 text-navy-800 font-bold text-sm shadow-sm">
                {std}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Three pillars: Who we are, Talent Advantage, Training */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-2">Our Approach</p>
            <h2 className="section-heading">Industry Experience. Technical Insight. Better Hiring Outcomes.</h2>
            <p className="section-subheading mx-auto">
              We go beyond CV screening — evaluating practical GxP exposure, functional knowledge,
              and role-specific technical competencies on your behalf.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Who We Are */}
            <FadeIn delay={0}>
              <div className="card p-8 h-full border-t-4 border-t-navy-700 hover:border-emerald-400 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-navy-800 text-white flex items-center justify-center font-black text-base">01</div>
                  <h3 className="font-bold text-navy-800 text-lg">Who We Are</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-5">
                  Q-Exel Talent Solutions, under the Q-Exel GxP professional services platform, provides specialized
                  recruitment and talent acquisition services for Pharma, Biopharma, and Life Sciences organizations.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Our GxP industry experience enables us to go beyond CV screening. We evaluate functional knowledge,
                  practical GxP exposure, and role-specific technical competencies to present candidates who are
                  professionally suitable and technically aligned with your quality, regulatory, and operational environment.
                </p>
                <div className="bg-navy-50 border border-navy-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <Star size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-navy-800 font-semibold text-sm leading-snug">
                      Industry Experience. Technical Insight. Better Hiring Outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* GxP Talent Advantage */}
            <FadeIn delay={0.1}>
              <div className="card p-8 h-full border-t-4 border-t-emerald-500 hover:border-emerald-400 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-base">02</div>
                  <h3 className="font-bold text-navy-800 text-lg">Our GxP Talent Advantage</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Backed by seasoned Life Sciences professionals with experience across leading organizations including Pfizer, Hospira, Wockhardt, and Lupin.',
                    'We evaluate functional knowledge, practical GxP exposure, and role-specific technical competencies.',
                    'Candidates are assessed against skills and compliance expectations of the position.',
                    'We present candidates who are not only professionally suitable, but technically aligned with applicable GxP requirements and the Client\'s quality, regulatory, and operational environment.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* GxP Training */}
            <FadeIn delay={0.2}>
              <div className="card p-8 h-full border-t-4 border-t-sky-500 hover:border-emerald-400 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-black text-base">03</div>
                  <h3 className="font-bold text-navy-800 text-lg">GxP Training &amp; Capability Development</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-5">
                  We provide structured GxP training and capability-development programs covering:
                </p>
                <ul className="space-y-2 mb-5">
                  {gxpTrainingAreas.map((area) => (
                    <li key={area} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-700 text-sm font-medium">{area}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                  <p className="text-emerald-800 text-xs leading-relaxed">
                    Programs are designed at different competency levels — from foundation and awareness to
                    practitioner, advanced, and leadership — based on each participant's role, responsibility,
                    experience, and required GxP competency.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Roles We Place */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-2">Specialist Functions</p>
            <h2 className="section-heading">GxP Roles We Recruit For</h2>
            <p className="section-subheading mx-auto">
              From quality assurance to regulatory affairs — we source, assess, and place
              professionals across every critical GxP discipline.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {talentServices.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 0.08}>
                <div className="card p-6 text-center hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${svc.color}`}>
                    <svc.icon size={24} />
                  </div>
                  <h3 className="font-bold text-navy-800 text-base mb-3">{svc.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{svc.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Types */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-2">How We Work</p>
            <h2 className="section-heading">Placement &amp; Training Services</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {placementTypes.map((pt, i) => (
              <FadeIn key={pt.label} delay={i * 0.1}>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                    <Zap size={18} className="text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-navy-800 text-sm mb-2">{pt.label}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{pt.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-2">Why Partner With Us?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">The Q-Exel Talent Difference</h2>
            <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
              We bring genuine GxP industry knowledge to every search — matching talent to your
              specific compliance environment, not just job titles.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPartner.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="bg-navy-800 rounded-2xl p-7 border border-navy-700 hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                    <item.icon size={20} className="text-emerald-400" />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership — SK Dhumal */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-2">Leadership</p>
              <h2 className="text-3xl font-bold text-navy-800 mb-2">Sanjay K.D</h2>
              <p className="text-slate-500 text-sm mb-5">
                Founder &amp; Principal — Q-Exel GxP Consulting
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                With over 30 years of experience in the biopharmaceutical and pharmaceutical industries,
                Sanjay K.D leads the Q-Exel GxP platform with deep expertise in quality systems, regulatory
                compliance, and GxP training. His career spans leadership roles at Pfizer, Hospira, Lupin,
                and Wockhardt Biotech.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                This consulting background ensures every talent search is grounded in real-world GxP
                knowledge — candidates are evaluated with the same rigour expected on the shop floor
                of a regulated manufacturing site.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/sk-dhumal-qexel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#0077b5] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#005885] transition-colors"
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
                <a
                  href="mailto:shitald@qexelgxp.in"
                  className="flex items-center gap-2 border border-slate-200 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors"
                >
                  <Mail size={15} /> shitald@qexelgxp.in
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { num: '30+', label: 'Years GxP Experience', sub: 'Across the Q-Exel platform', color: 'bg-navy-50 border-navy-100' },
                  { num: '5', label: 'Specialist Functions', sub: 'Quality, Reg, Val, Eng, Consulting', color: 'bg-emerald-50 border-emerald-100' },
                  { num: '5', label: 'Global Standards', sub: 'EMA, FDA, MHRA, PIC/S, WHO', color: 'bg-sky-50 border-sky-100' },
                  { num: '100%', label: 'GxP Focused', sub: 'Life sciences exclusively', color: 'bg-orange-50 border-orange-100' },
                ].map((stat) => (
                  <div key={stat.label} className={`${stat.color} rounded-2xl border p-6 text-center`}>
                    <p className="text-3xl font-black text-navy-800 mb-1">{stat.num}</p>
                    <p className="text-sm font-bold text-navy-700">{stat.label}</p>
                    <p className="text-xs text-slate-500 mt-1">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Talent Solutions Lead — Shital Dhumal */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-emerald-200 shadow-sm p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Users size={26} className="text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-emerald-600 font-semibold text-xs uppercase tracking-wider">Talent Solutions Lead</p>
                    <p className="text-slate-400 text-xs">Recruitment &amp; Placement</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-2">Shital Dhumal</h3>
                <p className="text-slate-500 text-sm mb-4">Founder — Q-Exel GxP Talent Solutions</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Shital leads the talent acquisition arm of Q-Exel GxP, specializing in recruitment
                  for Pharma, Biopharma, and Life Sciences organizations. Her focus is on connecting
                  the right GxP talent with the right opportunity — evaluating practical GxP exposure
                  and role-specific competencies, not just CVs.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Under the Q-Exel GxP professional services platform, she brings a deep understanding
                  of quality, regulatory, and operational environments to every search — ensuring
                  candidates are technically aligned with your compliance needs.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/sk-dhumal-qexel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#0077b5] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#005885] transition-colors"
                  >
                    <Linkedin size={15} /> LinkedIn
                  </a>
                  <a
                    href="mailto:shitald@qexelgxp.in"
                    className="flex items-center gap-2 border border-slate-200 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors"
                  >
                    <Mail size={15} /> shitald@qexelgxp.in
                  </a>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-2">Recruitment Enquiries</p>
              <h2 className="text-3xl font-bold text-navy-800 mb-4">
                Connect with our Talent Solutions team
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                For hiring requirements, candidate registration, or GxP training programmes, reach
                out to Shital Dhumal directly. Whether you're filling a single specialist role or
                building an entire quality team, we'll help you find professionals who are technically
                ready from day one.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-white rounded-xl border border-slate-200 p-4">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Recruitment Email</p>
                    <a href="mailto:shitald@qexelgxp.in" className="text-navy-800 font-semibold text-sm hover:text-emerald-600 transition-colors">
                      shitald@qexelgxp.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-xl border border-slate-200 p-4">
                  <div className="w-9 h-9 rounded-lg bg-[#0077b5]/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin size={16} className="text-[#0077b5]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/sk-dhumal-qexel" target="_blank" rel="noopener noreferrer" className="text-navy-800 font-semibold text-sm hover:text-emerald-600 transition-colors">
                      Shital Dhumal — LinkedIn Profile
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-xl border border-slate-200 p-4">
                  <div className="w-9 h-9 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                    <Search size={16} className="text-navy-700" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">What We Handle</p>
                    <p className="text-navy-800 font-semibold text-sm">Permanent, Contract, Executive Search &amp; GxP Training</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-2">Our Process</p>
            <h2 className="section-heading">How We Fill Your GxP Role</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Brief', desc: 'Share your requirement — role, GxP function, regulatory environment, location, and timeline. A short call is all we need.' },
              { step: '02', title: 'Search & Assess', desc: 'We search our network and screen candidates on functional GxP knowledge, compliance competency, and role fit.' },
              { step: '03', title: 'Shortlist', desc: 'You receive a curated shortlist of technically aligned, pre-vetted GxP professionals — no time wasted on unsuitable CVs.' },
              { step: '04', title: 'Place & Support', desc: 'Interview, select, and onboard. We remain available for ongoing support throughout the engagement lifecycle.' },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div className="card p-7 text-center hover:-translate-y-1 transition-all duration-300 relative">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 font-black text-lg flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-navy-800 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to find your next GxP hire?
            </h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're hiring a Quality Director or building a validation team, Q-Exel GxP
              Talent Solutions connects you with professionals who are technically ready from day one.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/booking?service=interim"
                className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Discuss a Requirement <ArrowRight size={16} />
              </Link>
              <a
                href="mailto:shitald@qexelgxp.in"
                className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <Mail size={16} /> shitald@qexelgxp.in
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
