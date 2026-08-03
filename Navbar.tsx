import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Placements', href: '/placements' },
  { label: 'Talent Solutions', href: '/talent-solutions', icon: Users },
  { label: 'Document Library', href: '/documentation', icon: BookOpen },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-white shadow-md border-b border-slate-100'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src="/LOGO.png" alt="Q-Exel GxP" className="h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  isActive(link.href)
                    ? 'text-navy-800 bg-navy-50 font-semibold'
                    : 'text-slate-600 hover:text-navy-800 hover:bg-slate-50'
                } ${link.href === '/documentation' ? 'text-emerald-700 hover:bg-emerald-50' : ''}`}
              >
                {link.icon && <link.icon size={13} className={isActive(link.href) ? 'text-navy-700' : link.href === '/talent-solutions' ? 'text-emerald-600' : link.href === '/documentation' ? 'text-emerald-600' : 'text-emerald-600'} />}
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link to="/booking" className="btn-primary text-sm">
              Book a Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-navy-800 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-slate-100 bg-white overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-navy-800 bg-navy-50 font-semibold'
                      : 'text-slate-600 hover:text-navy-800 hover:bg-slate-50'
                  }`}
                >
                  {link.icon && <link.icon size={14} className={isActive(link.href) ? 'text-emerald-600' : 'text-emerald-600'} />}
                  {link.label}
                </Link>
              ))}
              <Link
                to="/booking"
                className="block w-full text-center btn-primary mt-3"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
