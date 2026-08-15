import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  BookOpen, FileText, Download, Search, Filter, X, CheckCircle2,
  Star, ArrowRight, Tag, FileCheck, Shield, FlaskConical, GraduationCap,
  ChevronDown, Sparkles, Globe, IndianRupee,
} from 'lucide-react';
import { supabase, type Document, type PurchaseRequest } from '../lib/supabase';

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

const categoryIcons: Record<string, React.ElementType> = {
  'SOPs': FileCheck,
  'Validation Protocols': FlaskConical,
  'Audit Checklists': Shield,
  'Training Materials': GraduationCap,
  'Templates & Forms': FileText,
};

const categoryColors: Record<string, string> = {
  'SOPs': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Validation Protocols': 'bg-sky-50 text-sky-700 border-sky-200',
  'Audit Checklists': 'bg-blue-50 text-blue-700 border-blue-200',
  'Training Materials': 'bg-pink-50 text-pink-700 border-pink-200',
  'Templates & Forms': 'bg-amber-50 text-amber-700 border-amber-200',
};

// ── Purchase Modal ─────────────────────────────────────────────────────────────
type PurchaseFormData = {
  full_name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  currency: 'inr' | 'usd';
};

function PurchaseModal({ doc, onClose }: { doc: Document; onClose: () => void }) {
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<PurchaseFormData>({
    defaultValues: { currency: 'inr' },
  });

  const onSubmit = async (data: PurchaseFormData) => {
    setSubmitError('');
    const payload: PurchaseRequest = {
      document_id: doc.id,
      full_name: data.full_name,
      email: data.email,
      company: data.company || null,
      phone: data.phone || null,
      message: data.message
        ? `[Currency preference: ${data.currency.toUpperCase()}] ${data.message}`
        : `[Currency preference: ${data.currency.toUpperCase()}]`,
    };
    const { error } = await supabase.from('purchase_requests').insert(payload);
    if (error) {
      setSubmitError('Something went wrong. Please try again or email us directly.');
      return;
    }
    setSuccess(true);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {!success ? (
          <>
            <div className="p-6 border-b border-slate-100">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${categoryColors[doc.category] || 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                      {doc.category}
                    </span>
                    {doc.is_featured && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                        Featured
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg font-bold text-navy-800 leading-snug mt-1">{doc.title}</h2>
                  {doc.pages && (
                    <p className="text-xs text-slate-400 mt-1">{doc.pages} pages &middot; {doc.file_type}</p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3 bg-navy-50 rounded-xl">
                  <p className="text-xs text-slate-400">Price (INR)</p>
                  <p className="font-bold text-navy-800 text-lg">₹{doc.price_inr.toLocaleString('en-IN')}</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <p className="text-xs text-slate-400">Price (USD)</p>
                  <p className="font-bold text-navy-800 text-lg">${doc.price_usd}</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm text-slate-600 leading-relaxed mb-5">{doc.description}</p>
              {doc.tags && doc.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {doc.tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-500 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="border-t border-slate-100 pt-5">
                <h3 className="font-bold text-navy-800 text-sm mb-4">Complete your purchase enquiry</h3>
                <p className="text-xs text-slate-500 mb-5">
                  Fill in your details below. Our team will send you a payment link and the document
                  within 1 business day.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy-800 mb-1">Full Name *</label>
                      <input
                        {...register('full_name', { required: 'Required' })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                        placeholder="Your name"
                      />
                      {errors.full_name && <p className="text-red-500 text-xs mt-1">{errors.full_name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy-800 mb-1">Email *</label>
                      <input
                        {...register('email', {
                          required: 'Required',
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                        })}
                        type="email"
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                        placeholder="you@company.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy-800 mb-1">Company</label>
                      <input
                        {...register('company')}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                        placeholder="Organisation name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy-800 mb-1">Phone</label>
                      <input
                        {...register('phone')}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                        placeholder="+91 / +44..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy-800 mb-1">Preferred Currency</label>
                    <div className="flex gap-3">
                      {[
                        { value: 'inr', label: `₹${doc.price_inr.toLocaleString('en-IN')} INR`, icon: IndianRupee },
                        { value: 'usd', label: `$${doc.price_usd} USD`, icon: Globe },
                      ].map(({ value, label, icon: Icon }) => (
                        <label key={value} className="flex-1 cursor-pointer">
                          <input type="radio" value={value} {...register('currency')} className="sr-only" />
                          <div className={`flex items-center gap-2 p-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                            value === 'inr' ? 'border-navy-200 bg-navy-50 text-navy-700' : 'border-slate-200 bg-slate-50 text-slate-600'
                          }`}>
                            <Icon size={14} />
                            {label}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy-800 mb-1">Message (optional)</label>
                    <textarea
                      {...register('message')}
                      rows={2}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition resize-none"
                      placeholder="Any customisation requests or questions..."
                    />
                  </div>

                  {submitError && (
                    <p className="text-red-500 text-xs bg-red-50 px-3 py-2 rounded-lg">{submitError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary justify-center py-3 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>Request to Purchase <ArrowRight size={14} /></>
                    )}
                  </button>
                  <p className="text-xs text-slate-400 text-center">
                    We'll respond within 1 business day with a payment link and delivery details.
                  </p>
                </form>
              </div>
            </div>
          </>
        ) : (
          <div className="p-10 text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} className="text-emerald-600" />
              </div>
            </motion.div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles size={14} className="text-amber-500" />
              <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">Purchase Request Sent</span>
              <Sparkles size={14} className="text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-navy-800 mb-2">Thank you!</h3>
            <p className="text-slate-500 text-sm max-w-xs mx-auto mb-6">
              We've received your request for <span className="font-semibold text-navy-700">"{doc.title}"</span>.
              Our team will send you a payment link within 1 business day.
            </p>
            <button
              onClick={onClose}
              className="btn-outline"
            >
              Continue Browsing
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

// ── Document Card ─────────────────────────────────────────────────────────────
function DocumentCard({ doc, onPurchase }: { doc: Document; onPurchase: (d: Document) => void }) {
  const CatIcon = categoryIcons[doc.category] || FileText;

  return (
    <div className="card flex flex-col hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 group">
      {/* Card top */}
      <div className="p-6 flex-1">
        {/* Header badges */}
        <div className="flex items-center justify-between mb-4">
          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${categoryColors[doc.category] || 'bg-slate-50 text-slate-600 border-slate-200'}`}>
            {doc.category}
          </span>
          {doc.is_featured && (
            <span className="flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
              <Star size={10} className="fill-amber-500 text-amber-500" /> Featured
            </span>
          )}
        </div>

        {/* Icon + Title */}
        <div className="flex items-start gap-3 mb-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${categoryColors[doc.category]?.split(' ').slice(0, 2).join(' ') || 'bg-slate-50 text-slate-600'}`}>
            <CatIcon size={18} />
          </div>
          <h3 className="font-bold text-navy-800 text-sm leading-snug group-hover:text-emerald-700 transition-colors">
            {doc.title}
          </h3>
        </div>

        <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-3">
          {doc.description}
        </p>

        {/* Tags */}
        {doc.tags && doc.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {doc.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="text-[10px] px-2 py-0.5 bg-slate-50 text-slate-400 rounded-md border border-slate-100">
                {tag}
              </span>
            ))}
            {doc.tags.length > 4 && (
              <span className="text-[10px] px-2 py-0.5 bg-slate-50 text-slate-400 rounded-md border border-slate-100">
                +{doc.tags.length - 4} more
              </span>
            )}
          </div>
        )}

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-slate-400">
          {doc.pages && <span className="flex items-center gap-1"><FileText size={11} />{doc.pages} pages</span>}
          <span className="flex items-center gap-1"><Download size={11} />{doc.file_type}</span>
        </div>
      </div>

      {/* Card footer */}
      <div className="border-t border-slate-100 p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-lg font-bold text-navy-800">₹{doc.price_inr.toLocaleString('en-IN')}</p>
            <p className="text-xs text-slate-400">${doc.price_usd} USD</p>
          </div>
          <button
            onClick={() => onPurchase(doc)}
            className="flex items-center gap-1.5 bg-navy-800 hover:bg-navy-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 hover:shadow-md group-hover:bg-emerald-600"
          >
            Purchase <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Documentation() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchDocuments() {
      const { data, error: fetchError } = await supabase
        .from('documents')
        .select('*')
        .order('is_featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (fetchError) {
        setError('Failed to load documents. Please refresh.');
      } else {
        setDocuments(data || []);
      }
      setLoading(false);
    }
    fetchDocuments();
  }, []);

  const categories = ['All', ...Array.from(new Set(documents.map((d) => d.category)))];

  const filtered = documents.filter((doc) => {
    const matchCat = activeCategory === 'All' || doc.category === activeCategory;
    const matchSearch =
      !search ||
      doc.title.toLowerCase().includes(search.toLowerCase()) ||
      doc.description.toLowerCase().includes(search.toLowerCase()) ||
      (doc.tags || []).some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  const featured = documents.filter((d) => d.is_featured);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-5">
              <BookOpen size={14} className="text-emerald-400" />
              <span className="text-emerald-400 text-xs font-semibold tracking-wide">GxP Document Library</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Professional GxP<br className="hidden sm:block" />
              <span className="text-emerald-400"> Document Templates</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
              Professionally authored SOPs, validation protocols, audit checklists, and training materials —
              aligned with FDA, EMA, WHO, and ICH standards. Ready to customise for your organisation.
            </p>
            <div className="flex flex-wrap justify-center gap-5 text-sm text-slate-400">
              {[
                { icon: CheckCircle2, label: 'Regulatory-aligned templates' },
                { icon: CheckCircle2, label: 'Immediate delivery after payment' },
                { icon: CheckCircle2, label: 'Authored by 30+ year GxP experts' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <Icon size={14} className="text-emerald-400" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      {featured.length > 0 && !loading && (
        <section className="py-14 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="flex items-center gap-3 mb-8">
              <Star size={18} className="text-amber-500 fill-amber-500" />
              <h2 className="text-xl font-bold text-navy-800">Featured Documents</h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {featured.slice(0, 4).map((doc, i) => (
                <FadeIn key={doc.id} delay={i * 0.07}>
                  <DocumentCard doc={doc} onPurchase={setSelectedDoc} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full library */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters + Search */}
          <FadeIn className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-sm">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search documents, tags..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <X size={14} />
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-navy-800 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Loading state */}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="card p-6 animate-pulse">
                  <div className="h-4 bg-slate-100 rounded w-24 mb-4" />
                  <div className="h-5 bg-slate-100 rounded w-full mb-2" />
                  <div className="h-5 bg-slate-100 rounded w-3/4 mb-4" />
                  <div className="h-3 bg-slate-100 rounded w-full mb-2" />
                  <div className="h-3 bg-slate-100 rounded w-5/6 mb-2" />
                  <div className="h-3 bg-slate-100 rounded w-4/6" />
                </div>
              ))}
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="text-center py-12 text-red-500">{error}</div>
          )}

          {/* Empty state */}
          {!loading && !error && filtered.length === 0 && (
            <div className="text-center py-16 text-slate-400">
              <BookOpen size={40} className="mx-auto mb-3 opacity-30" />
              <p className="font-medium">No documents match your search.</p>
              <button onClick={() => { setSearch(''); setActiveCategory('All'); }} className="mt-3 text-emerald-600 text-sm font-semibold hover:underline">
                Clear filters
              </button>
            </div>
          )}

          {/* Documents grid */}
          {!loading && !error && filtered.length > 0 && (
            <AnimatePresence mode="popLayout">
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((doc, i) => (
                  <motion.div
                    key={doc.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                  >
                    <DocumentCard doc={doc} onPurchase={setSelectedDoc} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* Custom document CTA */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-10 text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                <Sparkles size={22} className="text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Need a Custom Document?
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto mb-6">
                Can't find what you're looking for? Our team can author bespoke SOPs, protocols,
                checklists, and training materials tailored specifically to your organisation's processes,
                product type, and regulatory requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:shitald@qexelgxp.in"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
                >
                  Request Custom Document <ArrowRight size={14} />
                </a>
                <a
                  href="/booking"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:bg-white/5"
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Purchase Modal */}
      <AnimatePresence>
        {selectedDoc && (
          <PurchaseModal doc={selectedDoc} onClose={() => setSelectedDoc(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}
