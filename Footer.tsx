import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, ArrowRight, BookOpen } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Auditing & Inspection Readiness', href: '/services' },
    { label: 'QMS & Digital Transformation', href: '/services' },
    { label: 'Qualification & Validation', href: '/services' },
    { label: 'Failure Investigation & CAPA', href: '/services' },
    { label: 'Technical Training', href: '/services' },
    { label: 'Data Integrity Assessments', href: '/services' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Talent Solutions', href: '/talent-solutions' },
    { label: 'Placements', href: '/placements' },
    { label: 'Document Library', href: '/documentation' },
    { label: 'Book a Consultation', href: '/booking' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-navy-700">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/LOGO.png" alt="Q-Exel GxP" className="h-12 w-auto brightness-0 invert mb-4" />
            <p className="text-sm leading-relaxed text-slate-400 mb-4">
              Accelerating Compliance Culture Across the Bio-Pharma and Pharma Industry. Trusted globally since 1996.
            </p>
            <p className="text-xs text-slate-500 italic mb-5">"Your Trust is Our Endowment!"</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/sk-dhumal-qexel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-700 hover:bg-emerald-600 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <Link
                to="/documentation"
                className="w-9 h-9 rounded-lg bg-navy-700 hover:bg-emerald-600 flex items-center justify-center transition-colors"
                aria-label="Document Library"
              >
                <BookOpen size={15} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.Services.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="text-sm text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.Company.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="text-sm text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-400">India &amp; Global Operations</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-emerald-500 flex-shrink-0" />
                <a
                  href="mailto:sanjay.qexel@gmail.com"
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  sanjay.qexel@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-emerald-500 flex-shrink-0" />
                <a
                  href="tel:+91866851267"
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  +91 866851267
                </a>
              </li>
            </ul>

            <div className="mt-6 p-3 rounded-xl bg-navy-800 border border-navy-700">
              <p className="text-xs text-slate-400 mb-2">Quick consultation</p>
              <Link
                to="/booking"
                className="w-full block text-center text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg py-2.5 transition-colors"
              >
                Book a Session
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Q-Exel GxP. All rights reserved. Accelerating Compliance Culture Across the Life Sciences Industry.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
