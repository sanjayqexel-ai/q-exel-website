import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  Globe, Users, Shield, CheckCircle2, ArrowRight,
  Linkedin, Mail, TrendingUp, Zap, Heart, Target, Lightbulb,
  Microscope, Cpu, BookOpen, FlaskConical,
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

const careerHighlights = [
  '250+ audits and gap assessments conducted globally across sterile and non-sterile facilities',
  'Pioneered cGxP quality standards and compliance culture initiatives across regulated organisations',
  'Led post-regulatory enforcement remediation programs for FDA, MHRA, and WHO actions',
  'Implemented digital quality systems including eQMS, LIMS, eLAB, and SAP at scale',
  'Worked across sterile and non-sterile dosage forms — biologics, injectables, oral solids, topicals',
  'Delivered high-impact GxP auditing and technical training to hundreds of quality professionals',
  'Managed global compliance projects across regulated markets in USA, EU, India, and Asia-Pacific',
  'Developed quality strategies with a focus on patient safety and regulatory alignment',
];

const previousRoles = [
  'Pfizer', 'Hospira', 'Lupin', 'Strides', 'Wockhardt Biotech', 'Shilpa Biologicals',
];

const values = [
  { icon: Shield, title: 'Regulatory Compliance', desc: 'Absolute adherence to global regulatory frameworks — FDA, EMA, MHRA, WHO — in every engagement.' },
  { icon: Zap, title: 'Operational Efficiency', desc: 'Streamlining quality systems and processes without compromising compliance or patient safety.' },
  { icon: Heart, title: 'Ethical Integrity', desc: '"Your Trust is Our Endowment." Ethics and business integrity are the foundation of everything we do.' },
  { icon: Target, title: 'Customised Solutions', desc: 'No one-size-fits-all approaches. Every engagement is tailored to the client\'s specific context and goals.' },
  { icon: Lightbulb, title: 'Long-Term Partnerships', desc: 'We invest in lasting relationships — supporting clients from development through to commercial lifecycle.' },
];

const expertNetwork = [
  { icon: Shield, label: 'QMS Setup & Optimisation' },
  { icon: Cpu, label: 'Computer System Validation' },
  { icon: FlaskConical, label: 'Sterility Assurance & Microbiology' },
  { icon: Microscope, label: 'Quality Control & Data Integrity' },
  { icon: TrendingUp, label: 'Engineering & Facility Compliance' },
  { icon: BookOpen, label: 'GxP Training & Capability Building' },
];

const expertiseBadges = [
  'GMP Auditing', 'GDP Compliance', 'Regulatory Affairs', 'Sterile Manufacturing', 'QMS Design',
  '21 CFR Part 11', 'Annex 11', 'GAMP 5', 'ICH Q10', 'ICH Q9', 'CAPA Management',
  'Risk Management', 'PIC/S', 'FDA Inspection Readiness', 'EMA GMP', 'MHRA Inspections',
  'Contamination Control', 'Change Control', 'Data Integrity', 'ALCOA+ Principles',
  'Bio-Pharma QA', 'Biologics QA', 'Technology Transfer', 'Process Validation',
  'Cleaning Validation', 'eQMS / eDMS', 'LIMS / eBMR', 'SAP QM Module',
];

export default function About() {
  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">About Q-Exel GxP</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Empowering Life Science<br className="hidden sm:block" />
              <span className="text-emerald-400"> Organisations Through Quality</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Q-Exel GxP is a specialised pharmaceutical consulting firm with a strong foundation in auditing,
              gap assessments, remediation, digital transformation, training, and capability building —
              empowering clients globally to achieve regulatory success and operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn>
              <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100 h-full">
                <div className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center mb-4">
                  <Target size={18} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy-800 mb-3">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To accelerate compliance and quality culture across the life sciences industry — enabling
                  organisations to consistently produce high-quality medicines that safeguard patient health.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 h-full">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center mb-4">
                  <Globe size={18} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy-800 mb-3">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  To become a trusted global partner in pharmaceutical consulting, empowering clients to
                  achieve regulatory success and operational excellence at every stage of the product lifecycle.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Leadership Team ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-2">Our Team</p>
            <h2 className="section-heading">Leaders in Quality. Champions of Compliance.</h2>
          </FadeIn>

          {/* SK Dhumal Profile */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Pharmaceutical quality compliance laboratory"
                  className="rounded-2xl w-full object-cover h-[340px] shadow-xl"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-navy-50 border border-navy-100 rounded-xl p-5 text-center">
                    <p className="text-3xl font-bold text-navy-800">30+</p>
                    <p className="text-xs text-slate-500 mt-1 font-medium">Years of GxP Experience</p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 text-center">
                    <p className="text-3xl font-bold text-emerald-700">250+</p>
                    <p className="text-xs text-slate-500 mt-1 font-medium">Audits Conducted Globally</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  Founder &amp; Principal Consultant
                </p>
                <h2 className="text-3xl font-bold text-navy-800 mb-1">SK Dhumal</h2>
                <p className="text-slate-500 text-sm mb-5">
                  Certified ISO Lead Auditor &nbsp;&middot;&nbsp; Qualified GMP Trainer &nbsp;&middot;&nbsp;
                  PG in Microbiology &nbsp;&middot;&nbsp; Diplomas in Pharmacy &amp; Regulatory Affairs
                </p>

                <p className="text-slate-600 leading-relaxed mb-4">
                  With over 30 years of experience in the biopharmaceutical and pharmaceutical industries,
                  SK Dhumal is a recognised expert in GxP quality systems, regulatory compliance, audits,
                  and training. He has led global efforts to help companies produce high-quality medicines
                  and secure regulatory approvals.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  His career spans leadership quality roles at Pfizer, Hospira, Lupin, Strides, Wockhardt Biotech,
                  and Shilpa Biologicals — giving him unparalleled practical insight into the challenges facing
                  both multinational and mid-size pharma organisations.
                </p>

                {/* Previous companies */}
                <div className="mb-6">
                  <p className="text-xs font-bold text-navy-600 uppercase tracking-wider mb-3">Previous Leadership Roles At</p>
                  <div className="flex flex-wrap gap-2">
                    {previousRoles.map((co) => (
                      <span key={co} className="px-3 py-1.5 bg-white border border-slate-200 text-navy-700 text-xs font-bold rounded-lg shadow-sm">
                        {co}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="mb-6 p-4 bg-navy-50 rounded-xl border border-navy-100">
                  <p className="text-xs font-bold text-navy-600 uppercase tracking-wider mb-2">Education &amp; Certifications</p>
                  <ul className="space-y-1">
                    {[
                      'Postgraduate in Microbiology',
                      'Diploma in Pharmacy',
                      'Diploma in Regulatory Affairs',
                      'Certified ISO Lead Auditor',
                      'Qualified GMP Trainer',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 size={12} className="text-emerald-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/sk-dhumal-qexel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#0077b5] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#005885] transition-colors"
                  >
                    <Linkedin size={15} /> LinkedIn
                  </a>
                  <a
                    href="mailto:sanjay.qexel@gmail.com"
                    className="flex items-center gap-2 border border-slate-200 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors"
                  >
                    <Mail size={15} /> Get in Touch
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Career highlights */}
          <FadeIn delay={0.1} className="mt-16">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <h3 className="font-bold text-navy-800 text-lg mb-6">Career Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {careerHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Business Development Head ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  Business Development Head
                </p>
                <h2 className="text-3xl font-bold text-navy-800 mb-4">Shreya Dhumal</h2>
                <p className="text-slate-500 text-sm mb-5">
                  Strategic Growth &amp; Client Partnerships
                </p>

                <p className="text-slate-600 leading-relaxed mb-4">
                  Shreya Dhumal leads business development at Q-Exel GxP, driving strategic growth
                  and building lasting client partnerships across the pharmaceutical and life sciences
                  industry. She focuses on understanding client needs and connecting organisations
                  with the right consulting solutions.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  With a keen understanding of the GxP landscape and deep commitment to client success,
                  Shreya works closely with quality and compliance leaders to identify opportunities
                  for improvement, ensuring Q-Exel GxP's services align with each client's unique
                  regulatory and operational goals.
                </p>

                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 mb-6">
                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">Focus Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Client Relations', 'Strategic Partnerships', 'Market Expansion',
                      'GxP Solutions', 'Consulting Engagement',
                    ].map((item) => (
                      <span key={item} className="px-3 py-1 bg-white border border-emerald-200 text-emerald-700 text-xs font-semibold rounded-lg">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="mailto:sanjay.qexel@gmail.com"
                    className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    <Mail size={15} /> Get in Touch
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sk-dhumal-qexel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-slate-200 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors"
                  >
                    <Linkedin size={15} /> LinkedIn
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Business development professional"
                  className="rounded-2xl w-full object-cover h-[400px] shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-navy-800 rounded-xl p-5 shadow-lg">
                  <p className="text-white font-bold text-sm">Driving Growth</p>
                  <p className="text-slate-300 text-xs">&amp; Client Success</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Expert Network ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-2">Our Expert Network</p>
            <h2 className="section-heading">Seasoned Professionals. Deep Domain Knowledge.</h2>
            <p className="section-subheading mx-auto">
              Our consulting team includes seasoned professionals with backgrounds in top-tier regulated pharma
              and biopharma companies — offering a unique combination of industry and consulting expertise.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {expertNetwork.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.08}>
                <div className="card p-6 flex items-center gap-4 hover:border-emerald-200 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-emerald-600" />
                  </div>
                  <p className="font-semibold text-navy-800 text-sm">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="bg-navy-50 rounded-2xl p-8 border border-navy-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { title: 'Ethics & Integrity', desc: 'All personnel uphold the highest standards of ethics and integrity in every client interaction.' },
                { title: 'Technical Excellence', desc: 'Trainers with excellent technical, communication, and demonstration skills across GxP domains.' },
                { title: 'Industry Background', desc: 'Consultants with real-world experience in regulated pharma environments — not just theory.' },
              ].map(({ title, desc }) => (
                <div key={title}>
                  <h4 className="font-bold text-navy-800 mb-2">{title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-2">Core Values</p>
            <h2 className="section-heading">Principles that guide everything we do</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto italic text-sm">
              "We assess your business risks and address them to your complete satisfaction, aligned with
              evolving regulatory expectations. Our decisions always prioritise patient safety, and our
              identity is grounded in ethics and business integrity."
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="card p-6 text-center hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-navy-50 mb-4">
                    <v.icon size={22} className="text-navy-700" />
                  </div>
                  <h3 className="font-bold text-navy-800 text-sm mb-2">{v.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expertise Badges ── */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-2">Areas of Expertise</p>
            <h2 className="text-3xl font-bold text-white">Deep, Multi-Domain GxP Knowledge</h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">
              Our consultants hold recognised qualifications across the full spectrum of pharmaceutical
              quality, compliance, and digital transformation disciplines.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-3">
              {expertiseBadges.map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="px-4 py-2 bg-navy-800 border border-navy-700 text-slate-300 text-sm font-medium rounded-full hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <h2 className="section-heading">Why Q-Exel GxP?</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Proven record in GxP consulting and compliance management',
              'Digital transformation support — eQMS, eDMS, eLMS, eBMR, LIMS, SAP',
              'Expert-led audits, training, and remediation strategies',
              'Customised training and All-Time Readiness (ATR) for global audits',
              'Specialised in sterile and biotech operations',
              'End-to-end support from development through commercialisation',
            ].map((item) => (
              <FadeIn key={item}>
                <div className="flex items-start gap-3 p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-emerald-200 transition-colors">
                  <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700 text-sm font-medium">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">
              Work with GxP experts who deliver results
            </h2>
            <p className="text-emerald-100 mb-7">
              Let's discuss how Q-Exel GxP can support your quality and compliance objectives.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
            >
              Book a Consultation <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
