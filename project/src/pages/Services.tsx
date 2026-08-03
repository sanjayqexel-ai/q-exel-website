import { useState, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Shield, FileCheck, Globe, Cpu, FlaskConical, GraduationCap,
  Users, ChevronDown, ChevronUp, ArrowRight, CheckCircle2,
  Microscope, Search, BarChart3, AlertTriangle, Layers, TrendingUp,
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

type Service = {
  id: string;
  category: string;
  icon: React.ElementType;
  iconBg: string;
  title: string;
  summary: string;
  details: string[];
  deliverables: string[];
  duration: string;
  engagement: string;
};

const services: Service[] = [
  {
    id: 'auditing',
    category: 'Audits',
    icon: Shield,
    iconBg: 'bg-blue-50 text-blue-700',
    title: 'Auditing & Inspection Readiness',
    summary: 'Comprehensive auditing services including gap assessments, vendor and third-party audits, and inspection readiness across sterile and non-sterile formulations, APIs, intermediates, excipients, packaging materials, and GDP — aligned with global cGxP standards.',
    details: [
      'GMP gap assessments against FDA 21 CFR, EU GMP, WHO, and PIC/S standards',
      'Vendor and third-party supplier qualification audits',
      'Pre-inspection readiness audits (FDA PAI, EMA GMP, MHRA)',
      'GDP audits for distributors and cold chain operators',
      'Packaging material and analytical service provider audits',
      'API, excipients, and key starting material audits',
      'CAPA follow-up and effectiveness verification',
    ],
    deliverables: ['Audit Report', 'Gap Analysis Matrix', 'CAPA Action Plan', 'Readiness Certificate'],
    duration: '2–8 weeks',
    engagement: 'Project-based or Retainer',
  },
  {
    id: 'validation',
    category: 'Validation',
    icon: FlaskConical,
    iconBg: 'bg-sky-50 text-sky-700',
    title: 'Qualification, Validation & Technology Transfer',
    summary: 'End-to-end qualification services — analytical method validation, process, cleaning, computer system, facility, and equipment qualification. Seamless dosage-form technology transfers ensuring regulatory alignment and business continuity.',
    details: [
      'Analytical method validation and transfer (USP/ICH Q2)',
      'Process validation — Stage 1, 2, and 3 lifecycle approach',
      'Cleaning validation with scientifically justified acceptance criteria',
      'Equipment, utility, and facility qualification (IQ/OQ/PQ)',
      'Computer system validation (GAMP 5 lifecycle)',
      'Technology transfer for oral, sterile, topical, and biological dosage forms',
      'Continued process verification (Stage 3) programmes',
    ],
    deliverables: ['Validation Plan', 'Protocols (IQ/OQ/PQ)', 'Validation Summary Report', 'Tech Transfer Dossier'],
    duration: '4–24 weeks',
    engagement: 'Project-based',
  },
  {
    id: 'remediation',
    category: 'Compliance',
    icon: AlertTriangle,
    iconBg: 'bg-orange-50 text-orange-700',
    title: 'Remediation & Culture Building',
    summary: 'Robust compliance remediation programmes for enforcement actions issued by USFDA, MHRA, and WHO. Structured change management to build a compliance-focused culture across manufacturing and corporate levels.',
    details: [
      'Remediation planning and execution for FDA Warning Letters and Import Alerts',
      'Response writing and regulatory liaison for enforcement actions',
      'Root cause analysis for systemic compliance failures',
      'Quality culture assessment and improvement programmes',
      'Change management and leadership coaching on quality mindset',
      'Post-remediation audit readiness and re-inspection support',
      'Long-term compliance sustainability frameworks',
    ],
    deliverables: ['Remediation Plan', 'Regulatory Response Drafts', 'Culture Assessment Report', 'Programme Roadmap'],
    duration: '3–18 months',
    engagement: 'Project-based or Embedded',
  },
  {
    id: 'glp',
    category: 'Laboratory',
    icon: Microscope,
    iconBg: 'bg-teal-50 text-teal-700',
    title: 'Laboratory Controls Assessment (GLP)',
    summary: 'Thorough evaluations of analytical procedures and laboratory data in compliance with Good Laboratory Practice standards — covering both routine QC labs and GLP-regulated non-clinical study facilities.',
    details: [
      'Review of analytical procedures against current pharmacopoeial standards',
      'Evaluation of laboratory data for completeness and integrity',
      'GLP compliance assessment for non-clinical study facilities',
      'Out-of-specification (OOS) and out-of-trend (OOT) investigation review',
      'Laboratory management systems and documentation review',
      'LIMS / eLAB system functionality and data integrity assessment',
      'Laboratory training and competency evaluation',
    ],
    deliverables: ['GLP Assessment Report', 'Analytical Procedure Review', 'Data Integrity Report', 'Improvement Plan'],
    duration: '1–4 weeks',
    engagement: 'Project-based',
  },
  {
    id: 'capa',
    category: 'Quality Systems',
    icon: Search,
    iconBg: 'bg-violet-50 text-violet-700',
    title: 'Failure Investigation & CAPA',
    summary: 'Expert guidance through root cause investigations using proven methodologies, with end-to-end CAPA design, implementation, tracking, and effectiveness verification to ensure sustainable compliance.',
    details: [
      'Root cause analysis using 5-Why, Ishikawa/fishbone, and fault tree analysis (FTA)',
      'Customised investigation methodologies for complex deviations',
      'CAPA initiation, implementation planning, and task assignment',
      'CAPA effectiveness monitoring and verification criteria',
      'Deviation classification and risk prioritisation matrices',
      'Recurring deviation trend analysis and systemic CAPA',
      'Training on investigation quality and CAPA best practices',
    ],
    deliverables: ['Investigation Report', 'CAPA Plan', 'Effectiveness Criteria', 'Trend Analysis'],
    duration: '2–8 weeks',
    engagement: 'Project-based',
  },
  {
    id: 'qms',
    category: 'Quality Systems',
    icon: FileCheck,
    iconBg: 'bg-emerald-50 text-emerald-700',
    title: 'QMS Establishment & Digital Transformation',
    summary: 'Complete Quality Management System design and implementation aligned with ICH Q10, including eQMS, LIMS, eBMR, and DMS integration for a fully compliant digital quality infrastructure.',
    details: [
      'QMS design, build, and implementation from ground up or gap-based rebuild',
      'eQMS, eDMS, and LMS evaluation, selection, and implementation',
      'LIMS and electronic batch manufacturing record (eBMR) setup',
      'Digital quality infrastructure aligned with 21 CFR Part 11 and Annex 11',
      'Data integrity architecture and governance framework',
      'SAP QM module configuration and validation support',
      'SOP authoring, harmonisation, and document lifecycle management',
    ],
    deliverables: ['QMS Framework', 'Digital Transformation Roadmap', 'SOP Library', 'Validation Summary'],
    duration: '8–36 weeks',
    engagement: 'Project-based or Embedded',
  },
  {
    id: 'training',
    category: 'Training',
    icon: GraduationCap,
    iconBg: 'bg-pink-50 text-pink-700',
    title: 'Technical Training & Capability Building',
    summary: 'Customised training programmes and modules covering global regulations and current GxP practices — designed to support continuous quality improvement and All-Time Readiness (ATR) for regulatory inspections.',
    details: [
      'Global GxP and regulatory expectation training (FDA, EMA, WHO, MHRA)',
      'Data integrity and good documentation practice (GDP) training',
      'Risk management and audit awareness programmes',
      'Sterile manufacturing and contamination control training',
      'Role-specific competency frameworks and assessments',
      'E-learning module development for LMS integration',
      'All-Time Readiness (ATR) inspection simulation programmes',
    ],
    deliverables: ['Training Programme', 'Slide Decks & Materials', 'Competency Framework', 'Training Records'],
    duration: '1–12 weeks',
    engagement: 'Project-based',
  },
  {
    id: 'data-integrity',
    category: 'Compliance',
    icon: Cpu,
    iconBg: 'bg-indigo-50 text-indigo-700',
    title: 'Data Integrity Assessments',
    summary: 'Thorough review of laboratory software, electronic records, and paper-based documentation systems for compliance with global data integrity regulatory guidelines across the product lifecycle.',
    details: [
      'ALCOA+ data integrity assessment for electronic systems',
      'Laboratory software and LIMS audit trail review',
      'Paper-based documentation system data integrity evaluation',
      'Hybrid system (paper + electronic) risk assessment',
      'Data integrity gap analysis against FDA, MHRA, and WHO guidance',
      'Remediation plan development for data integrity findings',
      'Data governance policy and procedure development',
    ],
    deliverables: ['Data Integrity Assessment Report', 'Gap Analysis', 'Remediation Plan', 'Policy Templates'],
    duration: '2–6 weeks',
    engagement: 'Project-based',
  },
  {
    id: 'process',
    category: 'Quality Systems',
    icon: TrendingUp,
    iconBg: 'bg-amber-50 text-amber-700',
    title: 'Process Simplification within cGxP',
    summary: 'Strategic consulting to streamline manufacturing and quality operations — reducing procedural complexity and workflow inefficiency while ensuring full cGxP regulatory compliance and cost-effective sustainability.',
    details: [
      'Process mapping and complexity analysis across quality operations',
      'SOP rationalisation and workflow optimisation',
      'Lean quality principles applied within GxP constraints',
      'Batch record simplification and critical step identification',
      'Cost-effective compliance strategy development',
      'Change control management for process improvements',
      'Post-simplification compliance verification and monitoring',
    ],
    deliverables: ['Process Analysis Report', 'Simplified SOPs', 'Implementation Plan', 'Compliance Verification'],
    duration: '4–16 weeks',
    engagement: 'Project-based',
  },
  {
    id: 'enforcement',
    category: 'Compliance',
    icon: Globe,
    iconBg: 'bg-red-50 text-red-700',
    title: 'Support for Regulatory Enforcement Actions',
    summary: 'Full lifecycle support for handling regulatory enforcement actions — from drafting technical responses to Warning Letters and Import Alerts, to regulatory liaison and long-term compliance strategy.',
    details: [
      'Technical response drafting for FDA Warning Letters, 483 observations, and Import Alerts',
      'MHRA and EMA GMP non-compliance response preparation',
      'WHO GMP and PIC/S enforcement action support',
      'Regulatory agency meeting preparation and representation',
      'Systemic CAPA development for enforcement-related issues',
      'Long-term compliance restoration strategy and roadmap',
      'Ongoing monitoring and re-inspection readiness after remediation',
    ],
    deliverables: ['Regulatory Response Document', 'CAPA Programme', 'Compliance Roadmap', 'Inspection Readiness Plan'],
    duration: '6–24 months',
    engagement: 'Embedded or Retainer',
  },
];

const categories = ['All', 'Audits', 'Validation', 'Quality Systems', 'Compliance', 'Laboratory', 'Training'];

const engagementModels = [
  {
    icon: BarChart3,
    title: 'Project Fee',
    desc: 'Fixed scope, agreed price, clear milestones, and defined deliverables. Cost certainty for defined programmes.',
    colour: 'border-emerald-200 bg-emerald-50/50',
    iconColour: 'text-emerald-600',
  },
  {
    icon: Layers,
    title: 'Retainer',
    desc: 'Monthly retained services for ongoing advisory, inspection readiness, or embedded quality support.',
    colour: 'border-navy-200 bg-navy-50/50',
    iconColour: 'text-navy-700',
  },
  {
    icon: Users,
    title: 'Embedded Resource',
    desc: 'Senior consultants placed full-time at your site as an extension of your internal quality team.',
    colour: 'border-violet-200 bg-violet-50/50',
    iconColour: 'text-violet-600',
  },
  {
    icon: TrendingUp,
    title: 'Day Rate',
    desc: 'Flexible daily billing with no minimum commitment — ideal for specific deliverables and expert reviews.',
    colour: 'border-blue-200 bg-blue-50/50',
    iconColour: 'text-blue-600',
  },
];

function ServiceCard({ svc, defaultOpen = false }: { svc: Service; defaultOpen?: boolean }) {
  const [expanded, setExpanded] = useState(defaultOpen);
  const Icon = svc.icon;
  return (
    <div className={`card overflow-hidden transition-all duration-300 ${expanded ? 'border-emerald-200 shadow-md' : ''}`}>
      <button className="w-full text-left p-6 flex items-start gap-4" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
        <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0 mt-0.5 ${svc.iconBg}`}>
          <Icon size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2 inline-block ${svc.iconBg}`}>
                {svc.category}
              </span>
              <h3 className="font-bold text-navy-800 text-base leading-snug">{svc.title}</h3>
              <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">{svc.summary}</p>
            </div>
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              expanded ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
            }`}>
              {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className="text-xs font-bold text-navy-700 uppercase tracking-wider mb-3">What's Included</p>
                  <ul className="space-y-2">
                    {svc.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold text-navy-700 uppercase tracking-wider mb-2">Deliverables</p>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.deliverables.map((d) => (
                        <span key={d} className="px-2.5 py-1 bg-navy-50 text-navy-700 text-[11px] font-semibold rounded-lg">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy-700 uppercase tracking-wider mb-1">Typical Duration</p>
                    <p className="text-sm text-slate-600 font-medium">{svc.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy-700 uppercase tracking-wider mb-1">Engagement Model</p>
                    <p className="text-sm text-slate-600 font-medium">{svc.engagement}</p>
                  </div>
                  <Link
                    to={`/booking?service=${svc.id}`}
                    className="flex items-center justify-center gap-2 w-full bg-navy-800 hover:bg-navy-700 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors"
                  >
                    Enquire Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Services() {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Comprehensive GxP <span className="text-emerald-400">Consulting Services</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              From audit readiness through digital transformation to regulatory enforcement support —
              expert guidance across every dimension of pharmaceutical quality and compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <p className="text-slate-600 leading-relaxed">
              We collaborate closely with clients to identify compliance gaps, optimise processes, and implement
              sustainable, regulatory-compliant solutions aligned with global standards. With a deep understanding
              of regulatory frameworks, industry trends, and best practices, our team brings decades of collective
              experience to help pharma and biotech companies navigate the complex GxP landscape.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter + Cards */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-navy-800 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className={`ml-1.5 text-xs ${activeCategory === cat ? 'text-emerald-400' : 'text-slate-400'}`}>
                    ({services.filter((s) => s.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </FadeIn>

          <AnimatePresence mode="popLayout">
            <div className="space-y-4">
              {filtered.map((svc, i) => (
                <motion.div
                  key={svc.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <ServiceCard svc={svc} defaultOpen={searchParams.get('service') === svc.id} />
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* Digital Transformation callout */}
      <section className="py-14 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100">
            <FadeIn className="text-center mb-8">
              <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-2">Digital Transformation</p>
              <h2 className="text-2xl font-bold text-navy-800">Specialised in Digital Quality Systems</h2>
              <p className="text-slate-500 mt-2 max-w-xl mx-auto text-sm">
                We implement and validate the digital quality infrastructure modern pharma organisations need.
              </p>
            </FadeIn>
            <FadeIn>
              <div className="flex flex-wrap justify-center gap-3">
                {['eQMS', 'eDMS', 'eLMS', 'eBMR', 'LIMS', 'SAP QM', '21 CFR Part 11', 'Annex 11', 'GAMP 5'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white border border-navy-200 text-navy-700 font-bold text-sm rounded-lg shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-2">How We Work</p>
            <h2 className="section-heading">Flexible Engagement Models</h2>
            <p className="section-subheading mx-auto">
              Choose the model that best fits your organisation's structure, timeline, and budget.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementModels.map((model, i) => (
              <FadeIn key={model.title} delay={i * 0.1}>
                <div className={`card p-6 border-2 ${model.colour} hover:-translate-y-1 transition-all duration-300`}>
                  <model.icon size={24} className={`mb-4 ${model.iconColour}`} />
                  <h3 className="font-bold text-navy-800 text-base mb-2">{model.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{model.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">Not sure which service you need?</h2>
            <p className="text-slate-400 mb-7 max-w-xl mx-auto">
              Book a complimentary discovery call with SK Dhumal. We'll assess your compliance priorities
              and recommend the right approach for your organisation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/booking" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5">
                Book Free Discovery Call <ArrowRight size={16} />
              </Link>
              <Link to="/placements" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:bg-white/5">
                GxP Staffing Solutions <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
