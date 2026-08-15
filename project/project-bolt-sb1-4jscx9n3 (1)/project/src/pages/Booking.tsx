import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  Video, Phone, MapPin, Shield, FileCheck, Globe, Cpu, FlaskConical,
  GraduationCap, Users, CheckCircle2, ChevronLeft, ChevronRight,
  Calendar, Clock, ArrowRight, Sparkles, Search, TrendingUp, AlertTriangle, Microscope,
} from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────────
type MeetingType = 'video' | 'phone' | 'in-person';
type StepOneData = { service: string; meetingType: MeetingType };
type StepTwoData = { date: string; time: string };
type ContactData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  message: string;
};

// ── Constants ─────────────────────────────────────────────────────────────────
const serviceOptions = [
  { id: 'auditing', icon: Shield, label: 'Auditing & Inspection Readiness', color: 'text-blue-600', bg: 'bg-blue-50' },
  { id: 'validation', icon: FlaskConical, label: 'Qualification, Validation & Tech Transfer', color: 'text-sky-600', bg: 'bg-sky-50' },
  { id: 'remediation', icon: AlertTriangle, label: 'Remediation & Culture Building', color: 'text-orange-600', bg: 'bg-orange-50' },
  { id: 'glp', icon: Microscope, label: 'Laboratory Controls Assessment (GLP)', color: 'text-teal-600', bg: 'bg-teal-50' },
  { id: 'capa', icon: Search, label: 'Failure Investigation & CAPA', color: 'text-violet-600', bg: 'bg-violet-50' },
  { id: 'qms', icon: FileCheck, label: 'QMS & Digital Transformation', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { id: 'training', icon: GraduationCap, label: 'Technical Training & Capability Building', color: 'text-pink-600', bg: 'bg-pink-50' },
  { id: 'data-integrity', icon: Cpu, label: 'Data Integrity Assessments', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { id: 'process', icon: TrendingUp, label: 'Process Simplification within cGxP', color: 'text-amber-600', bg: 'bg-amber-50' },
  { id: 'enforcement', icon: Globe, label: 'Regulatory Enforcement Action Support', color: 'text-red-600', bg: 'bg-red-50' },
  { id: 'interim', icon: Users, label: 'GxP Staffing & Placements', color: 'text-slate-600', bg: 'bg-slate-50' },
  { id: 'general', icon: CheckCircle2, label: 'General / Not Sure', color: 'text-slate-600', bg: 'bg-slate-50' },
];

const meetingTypes: { id: MeetingType; icon: React.ElementType; label: string; desc: string }[] = [
  { id: 'video', icon: Video, label: 'Video Call', desc: 'Zoom / Teams meeting' },
  { id: 'phone', icon: Phone, label: 'Phone Call', desc: 'International call available' },
  { id: 'in-person', icon: MapPin, label: 'In-Person', desc: 'India office available' },
];

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00',
];

// ── Step indicator ─────────────────────────────────────────────────────────────
function StepIndicator({ current }: { current: number }) {
  const steps = ['Service', 'Schedule', 'Details'];
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((label, i) => {
        const step = i + 1;
        const done = step < current;
        const active = step === current;
        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  done ? 'bg-emerald-500 text-white' :
                  active ? 'bg-navy-800 text-white ring-4 ring-navy-200' :
                  'bg-slate-100 text-slate-400'
                }`}
              >
                {done ? <CheckCircle2 size={18} /> : step}
              </div>
              <span className={`text-xs mt-1.5 font-medium ${active ? 'text-navy-800' : 'text-slate-400'}`}>
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`w-16 sm:w-24 h-0.5 mx-2 mb-4 transition-colors duration-300 ${
                done ? 'bg-emerald-400' : 'bg-slate-200'
              }`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Step 1: Service + Meeting Type ─────────────────────────────────────────────
function Step1({ initial, onNext }: { initial: StepOneData; onNext: (d: StepOneData) => void }) {
  const [service, setService] = useState(initial.service);
  const [meetingType, setMeetingType] = useState<MeetingType>(initial.meetingType);
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!service) { setError('Please select a service area to continue.'); return; }
    setError('');
    onNext({ service, meetingType });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-navy-800 mb-1">What can we help with?</h2>
      <p className="text-slate-500 text-sm mb-7">Select the primary area you'd like to discuss.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {serviceOptions.map((svc) => {
          const Icon = svc.icon;
          const selected = service === svc.id;
          return (
            <button
              key={svc.id}
              onClick={() => { setService(svc.id); setError(''); }}
              className={`text-left p-4 rounded-xl border-2 transition-all duration-150 ${
                selected
                  ? 'border-navy-700 bg-navy-50 shadow-sm'
                  : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg ${svc.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={16} className={svc.color} />
                </div>
                <span className={`text-sm font-semibold ${selected ? 'text-navy-800' : 'text-slate-700'}`}>
                  {svc.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-navy-800 text-sm mb-4">Preferred meeting format</h3>
        <div className="grid grid-cols-3 gap-3">
          {meetingTypes.map((mt) => {
            const Icon = mt.icon;
            const selected = meetingType === mt.id;
            return (
              <button
                key={mt.id}
                onClick={() => setMeetingType(mt.id)}
                className={`p-4 rounded-xl border-2 text-center transition-all duration-150 ${
                  selected
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <Icon size={20} className={`mx-auto mb-2 ${selected ? 'text-emerald-600' : 'text-slate-500'}`} />
                <p className={`text-xs font-bold ${selected ? 'text-emerald-700' : 'text-slate-700'}`}>{mt.label}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{mt.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <button onClick={handleNext} className="btn-primary w-full justify-center py-3.5 text-base">
        Continue <ChevronRight size={16} />
      </button>
    </div>
  );
}

// ── Step 2: Calendar + Time ────────────────────────────────────────────────────
function Step2({ initial, onBack, onNext }: { initial: StepTwoData; onBack: () => void; onNext: (d: StepTwoData) => void }) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(initial.date);
  const [selectedTime, setSelectedTime] = useState(initial.time);
  const [error, setError] = useState('');

  const monthName = new Date(viewYear, viewMonth, 1).toLocaleString('default', { month: 'long', year: 'numeric' });
  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const isDisabled = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    const dow = d.getDay();
    const past = d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return dow === 0 || dow === 6 || past;
  };

  const formatDate = (day: number) => {
    return `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const displayDate = (dateStr: string) => {
    if (!dateStr) return '';
    const [y, m, d] = dateStr.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  };

  const handleNext = () => {
    if (!selectedDate) { setError('Please select a date.'); return; }
    if (!selectedTime) { setError('Please select a time slot.'); return; }
    setError('');
    onNext({ date: selectedDate, time: selectedTime });
  };

  const prevMonth = () => {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-navy-800 mb-1">Choose a date &amp; time</h2>
      <p className="text-slate-500 text-sm mb-7">All times shown in IST (India Standard Time). Select a weekday.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Calendar */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <button onClick={prevMonth} className="w-8 h-8 rounded-lg hover:bg-slate-200 flex items-center justify-center transition-colors">
              <ChevronLeft size={16} className="text-slate-600" />
            </button>
            <span className="font-bold text-navy-800 text-sm">{monthName}</span>
            <button onClick={nextMonth} className="w-8 h-8 rounded-lg hover:bg-slate-200 flex items-center justify-center transition-colors">
              <ChevronRight size={16} className="text-slate-600" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
              <div key={d} className="text-center text-[11px] font-bold text-slate-400 py-1">{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: (firstDay === 0 ? 6 : firstDay - 1) }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dateStr = formatDate(day);
              const disabled = isDisabled(day);
              const selected = selectedDate === dateStr;
              return (
                <button
                  key={day}
                  disabled={disabled}
                  onClick={() => setSelectedDate(dateStr)}
                  className={`h-9 w-full rounded-lg text-xs font-semibold transition-all duration-150 ${
                    selected ? 'bg-navy-800 text-white shadow-sm' :
                    disabled ? 'text-slate-300 cursor-not-allowed' :
                    'text-slate-700 hover:bg-emerald-100 hover:text-emerald-800'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Time slots */}
        <div>
          <p className="text-sm font-semibold text-navy-800 mb-3 flex items-center gap-2">
            <Clock size={14} className="text-emerald-600" /> Available Time Slots
          </p>
          {selectedDate ? (
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={`py-2 rounded-lg text-xs font-semibold border transition-all duration-150 ${
                    selectedTime === slot
                      ? 'bg-navy-800 text-white border-navy-800'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-emerald-400 hover:text-emerald-700'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-48 text-slate-400 text-sm bg-slate-50 rounded-xl border border-dashed border-slate-200">
              <Calendar size={28} className="mb-2 opacity-40" />
              Select a date to see available slots
            </div>
          )}
        </div>
      </div>

      {selectedDate && selectedTime && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6 flex items-center gap-3"
        >
          <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
          <div>
            <p className="text-sm font-bold text-navy-800">Appointment selected</p>
            <p className="text-xs text-slate-600">{displayDate(selectedDate)} at {selectedTime} IST</p>
          </div>
        </motion.div>
      )}

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <div className="flex gap-3">
        <button onClick={onBack} className="btn-outline flex-1 justify-center">
          <ChevronLeft size={16} /> Back
        </button>
        <button onClick={handleNext} className="btn-primary flex-1 justify-center">
          Continue <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

// ── Step 3: Contact Details ─────────────────────────────────────────────────────
function Step3({ step1, step2, onBack, onSubmit }: {
  step1: StepOneData;
  step2: StepTwoData;
  onBack: () => void;
  onSubmit: (d: ContactData) => void;
}) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactData>();

  const displayDate = (dateStr: string) => {
    if (!dateStr) return '';
    const [y, m, d] = dateStr.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
  };

  const serviceName = serviceOptions.find((s) => s.id === step1.service)?.label ?? step1.service;
  const meetingName = meetingTypes.find((m) => m.id === step1.meetingType)?.label ?? step1.meetingType;

  return (
    <div>
      <h2 className="text-2xl font-bold text-navy-800 mb-1">Your details</h2>
      <p className="text-slate-500 text-sm mb-6">Almost done — just a few details so we can confirm your booking.</p>

      {/* Summary */}
      <div className="bg-navy-50 rounded-xl p-4 mb-7 border border-navy-100">
        <p className="text-xs font-bold text-navy-600 uppercase tracking-wider mb-3">Booking Summary</p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
          <div>
            <span className="text-slate-400 text-xs">Service</span>
            <p className="font-semibold text-navy-800 text-xs mt-0.5">{serviceName}</p>
          </div>
          <div>
            <span className="text-slate-400 text-xs">Meeting Type</span>
            <p className="font-semibold text-navy-800 text-xs mt-0.5">{meetingName}</p>
          </div>
          <div>
            <span className="text-slate-400 text-xs">Date</span>
            <p className="font-semibold text-navy-800 text-xs mt-0.5">{displayDate(step2.date)}</p>
          </div>
          <div>
            <span className="text-slate-400 text-xs">Time (IST)</span>
            <p className="font-semibold text-navy-800 text-xs mt-0.5">{step2.time}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-navy-800 mb-1.5">Full Name *</label>
            <input
              {...register('fullName', { required: 'Required' })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
              placeholder="Dr. Jane Smith"
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy-800 mb-1.5">Email Address *</label>
            <input
              {...register('email', {
                required: 'Required',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
              })}
              type="email"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
              placeholder="jane@company.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy-800 mb-1.5">Phone Number</label>
            <input
              {...register('phone')}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
              placeholder="+44 7700 900000"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy-800 mb-1.5">Company / Organisation *</label>
            <input
              {...register('company', { required: 'Required' })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
              placeholder="Pharma Co. Ltd."
            />
            {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy-800 mb-1.5">Job Title / Role</label>
          <input
            {...register('jobTitle')}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
            placeholder="e.g. Head of Quality Assurance"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy-800 mb-1.5">What would you like to discuss?</label>
          <textarea
            {...register('message')}
            rows={4}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition resize-none"
            placeholder="Briefly describe your compliance challenge or what you'd like to get from this consultation..."
          />
        </div>

        <div className="flex gap-3">
          <button type="button" onClick={onBack} className="btn-outline flex-1 justify-center">
            <ChevronLeft size={16} /> Back
          </button>
          <button type="submit" disabled={isSubmitting} className="btn-primary flex-1 justify-center py-3.5 disabled:opacity-70">
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Confirming Booking...
              </>
            ) : (
              <>Confirm Booking <ArrowRight size={16} /></>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

// ── Success Screen ─────────────────────────────────────────────────────────────
function SuccessScreen({ data }: { data: { step1: StepOneData; step2: StepTwoData; contact: ContactData } }) {
  const displayDate = (dateStr: string) => {
    if (!dateStr) return '';
    const [y, m, d] = dateStr.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="text-center py-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 20 }}
        className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6"
      >
        <CheckCircle2 size={40} className="text-emerald-600" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
        <div className="flex items-center justify-center gap-2 mb-1">
          <Sparkles size={16} className="text-amber-500" />
          <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">Booking Confirmed</span>
          <Sparkles size={16} className="text-amber-500" />
        </div>
        <h2 className="text-3xl font-bold text-navy-800 mt-2 mb-3">
          We'll speak soon, {data.contact.fullName.split(' ')[0]}!
        </h2>
        <p className="text-slate-500 max-w-md mx-auto">
          Your consultation has been booked. A confirmation email is on its way to{' '}
          <span className="font-semibold text-navy-700">{data.contact.email}</span>.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 bg-slate-50 rounded-2xl p-6 max-w-sm mx-auto border border-slate-200 text-left"
      >
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Booking Summary</p>
        <div className="space-y-3">
          {[
            { label: 'Service', value: serviceOptions.find((s) => s.id === data.step1.service)?.label },
            { label: 'Format', value: meetingTypes.find((m) => m.id === data.step1.meetingType)?.label },
            { label: 'Date', value: displayDate(data.step2.date) },
            { label: 'Time (IST)', value: `${data.step2.time} IST` },
            { label: 'Company', value: data.contact.company },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between gap-4 text-sm">
              <span className="text-slate-400 flex-shrink-0">{label}</span>
              <span className="font-semibold text-navy-800 text-right">{value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
      >
        <a
          href="/"
          className="btn-outline"
        >
          Back to Home
        </a>
        <a
          href="/services"
          className="btn-primary"
        >
          Browse Our Services <ArrowRight size={14} />
        </a>
      </motion.div>
    </motion.div>
  );
}

// ── Main Booking Page ─────────────────────────────────────────────────────────
export default function Booking() {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [step1Data, setStep1Data] = useState<StepOneData>({
    service: searchParams.get('service') ?? '',
    meetingType: 'video',
  });
  const [step2Data, setStep2Data] = useState<StepTwoData>({ date: '', time: '' });
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [done, setDone] = useState(false);

  const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? 40 : -40, opacity: 0 }),
  };

  const [direction, setDirection] = useState(1);

  const goNext = () => { setDirection(1); setStep((s) => s + 1); };
  const goBack = () => { setDirection(-1); setStep((s) => s - 1); };

  return (
    <main className="pt-20 min-h-screen bg-slate-50">
      {/* Hero strip */}
      <div className="bg-gradient-to-r from-navy-900 to-navy-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-2">Expert Consultation</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Book a GxP Consultation</h1>
            <p className="text-slate-300 mt-3 max-w-xl mx-auto text-sm">
              Speak directly with a senior Q-Exel GxP consultant. No sales calls — just expert guidance for your compliance challenges.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Form card */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!done ? (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-10">
            <StepIndicator current={step} />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {step === 1 && (
                  <Step1
                    initial={step1Data}
                    onNext={(d) => { setStep1Data(d); goNext(); }}
                  />
                )}
                {step === 2 && (
                  <Step2
                    initial={step2Data}
                    onBack={goBack}
                    onNext={(d) => { setStep2Data(d); goNext(); }}
                  />
                )}
                {step === 3 && (
                  <Step3
                    step1={step1Data}
                    step2={step2Data}
                    onBack={goBack}
                    onSubmit={async (d) => {
                      await new Promise((r) => setTimeout(r, 1500));
                      setContactData(d);
                      setDone(true);
                    }}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-10">
            <SuccessScreen data={{ step1: step1Data, step2: step2Data, contact: contactData! }} />
          </div>
        )}

        {/* Trust signals */}
        {!done && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400"
          >
            {[
              { icon: CheckCircle2, label: 'Free 30-minute consultation' },
              { icon: CheckCircle2, label: 'No obligation' },
              { icon: CheckCircle2, label: 'Senior consultant assigned' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5">
                <Icon size={13} className="text-emerald-500" />
                {label}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </main>
  );
}
